import Header from '@/components/_ui/header'
import Sidebar from '@/components/_ui/sidebar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <body className='w-screen black'>
        <Head />
        <Sidebar />
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
