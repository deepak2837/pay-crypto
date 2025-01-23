import Navbar from './Navbar'
import Footer from './Footer'

export default function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}