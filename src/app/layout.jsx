import Footer from './componentes/Footer'
import Header from './componentes/Header'
import './globals.css'

export const metadata = {
  title: 'Nine | Filmes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="mx-auto">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>

  )
}
