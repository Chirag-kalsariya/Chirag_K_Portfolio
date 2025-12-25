import { Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { Inter } from "next/font/google"
import BannerComponent from '@/components/layout/banner'
import FooterComponent from '@/components/layout/footer'
import NavbarComponent from '@/components/layout/navbar'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SearchComponent from '@/components/layout/search'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Chirag Kalsariya - Portfolio',
  description: 'Chirag kalsariya portfolio. I am full stack developer, Currently pursuing Master in Computer Science at DePaul University, Chicago. My expertise lies in creating optimized solutions for digital problems using both modern and old stable technologies.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={inter.variable}>
      <Head>
      </Head>
      <body>
        <Layout
          banner={BannerComponent()}
          navbar={NavbarComponent()}
          footer={FooterComponent()}
          search={<SearchComponent />}
          editLink={null}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          feedback={{ content: 'Sound good? Hire Me', link: 'https://www.linkedin.com/in/chirag-kalsariya/' }}
        >
          {children}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
};