import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import Home from './pages/Home'
import PaymentGateway from './pages/PaymentGateway'
import BuySellUSDT from './pages/P2P'
import OTC from './pages/OTC'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Disclaimer from './pages/Disclaimer'
import CookiesPolicy from './pages/CookiesPolicy'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import { isAdminAuthed } from './utils/auth'

function ProtectedRoute({ children }) {
  return isAdminAuthed() ? children : <Navigate to="/admin" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/buy-sell-usdt" element={<BuySellUSDT />} />
          <Route path="/otc" element={<OTC />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}