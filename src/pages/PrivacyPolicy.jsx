import SectionHeading from '../components/ui/SectionHeading'

export default function PrivacyPolicy() {
  return (
    <main className="page-shell legal-page">
      <SectionHeading title="Privacy Policy" subtitle="Last Updated: 03/04/2026" />
      <div className="content-card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p><strong>Information Collection</strong></p>
        <p>We collect basic information necessary for transactions including name, email, and transaction details. All data collection complies with relevant financial regulations and data protection laws.</p>

        <p><strong>How We Use Your Data</strong></p>
        <ul>
          <li>Process transactions and maintain accounts</li>
          <li>Verify identity and prevent fraud</li>
          <li>Send service updates and notifications</li>
          <li>Improve our services and user experience</li>
        </ul>

        <p><strong>Security</strong></p>
        <p>We employ industry-standard encryption and security measures to protect your data. This includes regular security audits and 24/7 monitoring systems.</p>

        <p><strong>Your Rights</strong></p>
        <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights or for any privacy-related concerns.</p>

        <p><strong>Contact</strong></p>
        <p>Contact us at: support@pay.crypto</p>
      </div>
    </main>
  )
}