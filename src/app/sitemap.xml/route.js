import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zyricx.app';

    // Static pages
    const staticPages = [
      '',
      '/products',
      '/about',
      '/contact',
      '/faq',
      '/shipping',
      '/returns',
      '/blog',
      '/privacy-policy',
      '/terms',
    ];

    let urls = staticPages.map((route) => ({
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString(),
      changefreq: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? '1.0' : '0.8',
    }));

    // Fetch products dynamically from DB
    try {
      await connectDB();
      const products = await Product.find({ isActive: { $ne: false } }).select('_id slug updatedAt').lean();
      
      const productUrls = products.map((prod) => ({
        loc: `${baseUrl}/product/${prod._id}`,
        lastmod: prod.updatedAt ? new Date(prod.updatedAt).toISOString() : new Date().toISOString(),
        changefreq: 'daily',
        priority: '0.9',
      }));

      urls = [...urls, ...productUrls];
    } catch (dbError) {
      console.error('Error fetching products for sitemap:', dbError);
    }

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return new NextResponse(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
      },
    });
  } catch (err) {
    console.error('Failed to generate sitemap:', err);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
