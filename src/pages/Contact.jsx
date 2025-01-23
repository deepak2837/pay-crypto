import { Mail, Phone, Clock3 } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import WhatsAppButton from '../components/WhatsAppButton'
import SectionHeading from '../components/ui/SectionHeading'
import { CONTACT } from '../constants/contact'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
}

export default function Contact() {
  return (
    <main className="page-shell contact-page">
      <SectionHeading title="Get in Touch ✦" subtitle="Our team responds within 24 hours. Ready to help you get started." />
      <div className="contact-grid prompt-contact-grid">
        <div className="contact-details">
          {[
            [<Mail size={18} />, 'Email', CONTACT.email, `mailto:${CONTACT.email}`],
            [<Phone size={18} />, 'WhatsApp', CONTACT.whatsappDisplay, `https://wa.me/${CONTACT.whatsapp}`],
            [<InstagramIcon width={18} height={18} />, 'Instagram', CONTACT.instagramHandle, CONTACT.instagram],
            [<Clock3 size={18} />, 'Hours', 'Available 24 × 7, 365 days', null],
          ].map(([icon, label, value, href]) => (
            <div className="content-card contact-info-card" key={label}>
              <div className="card-icon">{icon}</div>
              <strong>{label}</strong>
              {href ? <a href={href} target="_blank" rel="noreferrer">{value}</a> : <span>{value}</span>}
            </div>
          ))}
        </div>

        <ContactForm serviceType="general" />
      </div>
      <WhatsAppButton />
    </main>
  )
}
