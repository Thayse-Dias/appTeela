import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teela - Gerenciamento de Ordem de Serviço",
  description: "Sistema de gerenciamento de ordens de serviço",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

