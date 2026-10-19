import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import '../index.css';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });
const loraFont = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata = {
  title: 'Zcom – Fast, Premium Online Shopping & Electronics, Fashion & Essentials',
  description: 'Shop top deals, quality essentials, and trending collections on Zcom. Fast delivery, secure payments, and unbeatable value.',
  keywords: 'e-commerce, online shopping, electronics, deals, shop online, fast delivery, Zcom',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${loraFont.variable}`}>
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
