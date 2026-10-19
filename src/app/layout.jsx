import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import '../index.css';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });
const loraFont = Lora({ subsets: ['latin'], variable: '--font-lora' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zyricx.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zyricx – Fast, Premium Online Shopping & Trending Collections',
    template: '%s | Zyricx',
  },
  description: 'Shop verified premium electronics, fashion, lifestyle, and home essentials on Zyricx. Enjoy fast nationwide doorstep delivery, authentic quality guarantee, and secure checkout.',
  keywords: [
    'Zyricx',
    'zyricx.app',
    'online shopping',
    'e-commerce',
    'electronics',
    'trending fashion',
    'home essentials',
    'best online deals',
    'fast shipping India',
    'authentic products',
    'secure checkout'
  ],
  authors: [{ name: 'Zyricx' }],
  creator: 'Zyricx',
  publisher: 'Zyricx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Zyricx – Fast, Premium Online Shopping & Trending Collections',
    description: 'Shop top deals, quality essentials, and trending collections on Zyricx. Fast nationwide delivery, secure checkout, and verified buyer reviews.',
    url: siteUrl,
    siteName: 'Zyricx',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'Zyricx Online Store',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyricx – Fast, Premium Online Shopping',
    description: 'Shop top deals, quality essentials, and trending collections on Zyricx. Fast nationwide delivery.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'theme-color': '#F59E0B',
    'apple-mobile-web-app-capable': 'yes',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F59E0B',
};

// Global Schema.org JSON-LD for Organization & WebSite Search
const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Zyricx',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      sameAs: [],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-7088202122',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Zyricx',
      description: 'Premium Online Shopping & Lifestyle Essentials',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/products?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${loraFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        {children}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
