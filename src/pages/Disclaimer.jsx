import SectionHeading from '../components/ui/SectionHeading'

export default function Disclaimer() {
  return (
    <main className="page-shell legal-page">
      <SectionHeading title="Disclaimer" subtitle="Last updated: June 2026" />
      <div className="content-card" style={{ textAlign:'left', display:'flex', flexDirection:'column', gap:'16px' }}>
        <p><strong>✦ No Financial Advice:</strong> Pay.Crypto does not provide financial, investment, or legal advice. All crypto transactions carry inherent risk and users must conduct their own due diligence.</p>
        <p><strong>✦ Crypto Risk Disclosure:</strong> Cryptocurrency values are highly volatile. Past performance is not indicative of future results. Users may lose part or all of their capital.</p>
        <p><strong>✦ India Regulatory Note:</strong> Pay.Crypto is an FIU Registered Entity. Cryptocurrency is not legal tender in India. The regulatory landscape under RBI and SEBI is evolving. Users are responsible for compliance with applicable laws including FEMA and PMLA provisions.</p>
        <p><strong>✦ Third-Party Links:</strong> We may link to external services. Pay.Crypto is not responsible for the content or practices of third-party sites.</p>
      </div>
    </main>
  )
}