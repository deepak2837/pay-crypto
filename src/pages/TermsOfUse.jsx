import SectionHeading from '../components/ui/SectionHeading'

export default function TermsOfUse() {
  return (
    <main className="page-shell legal-page">
      <SectionHeading title="Terms of Service" subtitle="Last updated: June 2026" />
      <div className="content-card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p><strong>Terms of Service</strong></p>
        <p>These Terms of Service ("Terms") govern access to and use of the Pay.Crypto platform ("Pay.Crypto", "Platform", "we", "us", or "our"). By accessing or using Pay.Crypto, you ("User", "you") agree to be bound by these Terms. If you do not agree, do not access or use the Platform.</p>

        <p><strong>1. Nature of the Platform</strong></p>
        <p>Pay.Crypto is a unified payment aggregation platform that enables businesses to connect with multiple payment providers through a single API integration.</p>
        <ul>
          <li>Acts as an FIU Registered payment aggregator and facilitator</li>
          <li>Does not hold or process customer funds directly</li>
          <li>Provides access to 30+ payment providers through unified APIs</li>
          <li>Enables businesses to accept payments through multiple channels</li>
        </ul>
        <p>All payment processing is handled by regulated third-party payment providers.</p>

        <p><strong>2. Eligibility</strong></p>
        <p>To use Pay.Crypto, you must: be at least 18 years old, have legal capacity, operate a legitimate business, not be prohibited from using payment services under applicable laws, and comply with all applicable financial regulations. We reserve the right to deny access at our sole discretion.</p>

        <p><strong>3. Account Registration and Verification</strong></p>
        <p><strong>3.1 Mandatory Verification</strong> — All users are required to complete business verification and compliance checks as determined by Pay.Crypto (an FIU Registered Entity) or its compliance partners. This may include business registration documents, proof of business address, director/owner identification, bank account verification, business licenses or permits, and transaction volume disclosures.</p>
        <p><strong>3.2 Accuracy of Information</strong> — You represent that all information provided is accurate, complete, and up to date. Providing false information may lead to suspension or termination.</p>

        <p><strong>4. Data Sharing and Privacy</strong></p>
        <p><strong>4.1 Consent to Share Information</strong> — By using Pay.Crypto, you consent to sharing business information with regulated payment providers, banking partners, compliance vendors, regulatory authorities when required, and anti-fraud/AML screening services.</p>
        <p><strong>4.2 Payment Provider Integration</strong> — Transaction data may be shared with integrated payment providers for payment processing, risk assessment, compliance monitoring, and dispute resolution.</p>

        <p><strong>5. Payment Processing</strong></p>
        <p><strong>5.1 Third-Party Providers</strong> — All payment processing is conducted by regulated third-party payment providers. Pay.Crypto does not process payments directly and is not responsible for payment failures or delays.</p>
        <p><strong>5.2 Transaction Risks</strong> — You accept risks including provider failures, outages, transaction delays or reversals, currency conversion fluctuations, and regulatory changes.</p>

        <p><strong>6. Fees and Pricing</strong></p>
        <p><strong>6.1 Service Fees</strong> — Pay.Crypto charges fees which may include transaction fees, monthly subscriptions, setup/integration fees, and premium feature fees.</p>
        <p><strong>6.2 Payment Provider Fees</strong> — Payment providers may charge separate fees beyond Pay.Crypto's control; details are in our pricing documentation.</p>

        <p><strong>7. Account Suspension and Termination</strong></p>
        <p>Pay.Crypto may suspend or terminate accounts, restrict processing, or disable API access if we reasonably believe you violated these Terms, engaged in fraud, pose compliance risk, failed to provide required information, or if payment providers report issues.</p>

        <p><strong>8. Prohibited Activities</strong></p>
        <p>You may not use Pay.Crypto to process illegal goods/services, engage in money laundering/fraud, circumvent provider restrictions, misrepresent your business, use the platform for unauthorized high-risk activities, or attempt to bypass security or compliance systems. Violations may result in termination and reporting to authorities.</p>

        <p><strong>9. Intellectual Property</strong></p>
        <p>All platform content, software, APIs, documentation, and materials are owned by Pay.Crypto or its licensors. You may not copy, modify, distribute, reverse engineer, use trademarks without permission, or create derivative works.</p>

        <p><strong>10. API Usage and Integration</strong></p>
        <p><strong>10.1 API Access</strong> — API access is subject to rate limits, authentication, security requirements, and compliance with documentation.</p>
        <p><strong>10.2 Integration Support</strong> — We provide technical support, documentation, troubleshooting assistance, and best practices for integrations.</p>

        <p><strong>11. Limitation of Liability</strong></p>
        <p>To the maximum extent permitted by law, Pay.Crypto shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed fees paid in the preceding 12 months. We are not liable for third-party provider failures; some jurisdictions may not allow certain limitations.</p>

        <p><strong>12. Indemnification</strong></p>
        <p>You agree to indemnify and hold harmless Pay.Crypto, its directors, officers, employees, and partners from claims arising from your use of the Platform, violation of these Terms, payment disputes or chargebacks, non-compliance with laws, or third-party claims related to your business.</p>

        <p><strong>13. Service Availability</strong></p>
        <p><strong>13.1 Uptime</strong> — We strive for high availability but do not guarantee 100% uptime or real-time processing for all transactions.</p>
        <p><strong>13.2 Maintenance</strong> — We may schedule maintenance that temporarily affects platform availability, API access, or payment processing and will provide reasonable notice for planned maintenance.</p>

        <p><strong>14. Governing Law and Dispute Resolution</strong></p>
        <p>These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts located in Mumbai, India. We encourage informal resolution first.</p>

        <p><strong>15. Amendments</strong></p>
        <p>Pay.Crypto may modify these Terms at any time and will provide reasonable notice for material changes. Updated terms will be posted on our website and significant changes may be notified by email. Continued use constitutes acceptance of updated Terms.</p>

        <p><strong>16. Contact Information</strong></p>
        <p>For questions, support, or legal inquiries:</p>
        <ul>
          <li>Email: support@pay.crypto</li>
          <li>Website: www.pay.crypto</li>
        </ul>
        <p>For compliance-related matters: Email: compliance@pay.crypto</p>
      </div>
    </main>
  )
}