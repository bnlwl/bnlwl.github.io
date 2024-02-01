import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/app/Header";
import {ReactNode} from "react";

// 网站字体设置
const inter = Inter({
  subsets: ['latin']
})

// next.js 会引用metaData 去head中渲染
export const metadata: Metadata = {
  title: '777',
  description: '777\'s app',
  applicationName: '777'
}

interface Props {
    children: ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full flex flex-col h-screen`}>
        <Header/>
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  )
}
