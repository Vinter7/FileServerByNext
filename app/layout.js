export const metadata = {
  title: 'File Server',
  description: 'Powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="https://www.310018.xyz/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
