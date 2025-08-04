import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import TypebotWidget from '@/components/ui/typebot'

export const metadata: Metadata = {
  title: 'Obscuro',
  description: 'Estúdio de Tatuagens Personalizadas',
  generator: 'v1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}
        <TypebotWidget />
      </body>
    </html>
  )
}
