import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/component/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HomePage',
  description: 'Welcome to our BlogSite',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
      <ThemeProvider>
        <AuthProvider >
      <div className='container'>
       <Navbar />
        {children}
       <Footer />
      
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
      
    </html>
  )
}
