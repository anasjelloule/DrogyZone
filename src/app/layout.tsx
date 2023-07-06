'use client'
import { Provider } from 'react-redux'
import Header from '@/app/components/Header'
import './globals.css'
 
import store from '@/app/state/store'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
 
 

export const metadata = {
  title: 'Droy Zone',
  description: 'Web Aplication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 
  return (
    <html lang="en"  >
      <body  className=" bg-[#f4f7fd] dark:bg-[#20212c]  ">
        <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
           <div >
            <Header />
            {children}
          </div>
          </DndProvider>
        </Provider>
      </body>
    </html>
  )
}
