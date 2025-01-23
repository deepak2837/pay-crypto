import SectionHeading from '../components/ui/SectionHeading'

export default function CookiesPolicy() {
  return (
    <main className="page-shell legal-page">
      <SectionHeading title="Cookies Policy" subtitle="Last updated: June 2026" />
      <div className="content-card" style={{ textAlign:'left', display:'flex', flexDirection:'column', gap:'16px' }}>
        <p><strong>✦ What Are Cookies:</strong> Cookies are small data files stored on your device when you visit our website. They help us improve your browsing experience.</p>
        <p><strong>✦ Types We Use:</strong> We use essential cookies for site functionality, analytics cookies to understand traffic patterns, and preference cookies to remember your settings.</p>
        <p><strong>✦ Managing Cookies:</strong> You can disable cookies through your browser settings. Note that disabling essential cookies may affect site functionality.</p>
        <p><strong>✦ Third-Party Cookies:</strong> We use CoinGecko API for rate data. Third-party services may set their own cookies subject to their privacy policies.</p>
      </div>
    </main>
  )
}