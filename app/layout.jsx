import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BackgroundAnimation from "../components/BackgroundAnimation"
import ScrollToTop from "../components/ScrollToTop"
import ParallaxBackground from "../components/ParallaxBackground"

export const metadata = {
  title: "Léomyre",
  description: "Portfolio of developer Léomyre",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen text-white">
        {/* Parallax and background animations */}
        <ParallaxBackground />
        <BackgroundAnimation />

        {/* Main content wrapper */}
        <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 pt-16 max-w-7xl">
          {/* Fixed Header */}
          <Header className="fixed top-0 left-0 w-full z-50" />

          {/* Main content, ensuring spacing below the fixed header */}
          <main className="mt-16 sm:mt-20 lg:mt-24">{children}</main>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to top button */}
        <ScrollToTop />
      </body>
    </html>
  )
}

