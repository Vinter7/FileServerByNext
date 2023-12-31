export const metadata = {
  title: 'File Server',
  description: 'Powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
