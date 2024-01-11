import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

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
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
