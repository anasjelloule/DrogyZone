
import Header from '@/app/components/Header'
import './globals.css'

import store from '@/app/state/store'
import { Providers } from '@/app/state/provider' 
import dynamic from 'next/dynamic'



export const metadata = {
  title: 'Droy Zone',
  description: 'Web Aplication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Dragndrop = dynamic(
    () => import('@/app/components/Dragndrop'),
    { ssr: false }
  )

  return (
    <html lang="en"  >
      <body className=" bg-[#f4f7fd] dark:bg-[#20212c]  ">
        <Providers>
          <Dragndrop>
            <div >
              <Header />
              {children}
            </div>
          </Dragndrop>
        </Providers>
      </body>
    </html>
  )
}
