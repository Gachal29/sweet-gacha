import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'おやつガチャ',
  description: 'おやつガチャです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={ `${inter.className} m-4` }>{children}</body>
    </html>
  )
}
