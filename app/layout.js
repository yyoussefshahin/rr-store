import './globals.css'
import { CartProvider } from '../context/CartContext'
import CartDrawer from '../components/CartDrawer'

export const metadata = {
  title: 'SEIRRA — Contemporary Fashion',
  description: 'SEIRRA - Modern fashion for the bold.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          {children}
          <CartDrawer /> {/* <-- Added here! */}
        </CartProvider>
      </body>
    </html>
  )
}