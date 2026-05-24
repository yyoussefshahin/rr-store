import './globals.css'
import SnipcartSetup from '../components/SnipcartSetup'

export const metadata = {
  title: 'RR — Summer Editorial 2025',
  description: 'Premium oversized silhouettes with signature camo detailing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SnipcartSetup />
        {children}
      </body>
    </html>
  )
}