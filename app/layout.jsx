import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackgroundAnimation from '../components/BackgroundAnimation'
import ScrollToTop from '../components/ScrollToTop'
import ParallaxBackground from '../components/ParallaxBackground'

export const metadata = {
  title: 'Léomyre',
  description: 'Portfolio of developer Léomyre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen text-white">
        <ParallaxBackground />
        <BackgroundAnimation />
        <div className="flex-grow container mx-auto px-4 py-8 relative z-10 pt-16">
          {/* Fixed Header */}
          <Header className="fixed top-0 left-0 w-full z-50" />
          <main className="mt-24">
            {children}
          </main>
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
