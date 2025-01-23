import { motion } from 'framer-motion'
import { LockKeyhole, Scale, UserRoundCog, ShieldCheck, Rocket, Building2, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/ContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function OTC() {
  const benefits = [
    ['No Slippage Focus', <Scale size={20} />, 'Large blocks executed with minimized market impact.'],
    ['Dedicated Deal Desk', <UserRoundCog size={20} />, 'Personalized quotes and assisted execution.'],
    ['Private Settlement', <LockKeyhole size={20} />, 'Confidential handling for sensitive transactions.'],
    ['FIU Registered Desk', <ShieldCheck size={20} />, 'Structured checks aligned to FIU regulatory compliance.'],
    ['Flexible Timelines', <Rocket size={20} />, 'Settlement windows aligned with your treasury cycle.'],
    ['Institutional Workflow', <Building2 size={20} />, 'Built for high-volume and multi-party operations.'],
  ]

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-grid-floor" />
        </div>

        <motion.div className="hero-copy" {...fadeUp}>
          <p className="eyebrow"><Sparkles size={16} /> Institutional Desk</p>
          <h1>OTC Operations</h1>
          <p className="lede">High-volume USDT/USDC execution with private handling, structured risk controls, and zero slippage on large block trades.</p>
        </motion.div>

        <div className="hero-visual" style={{ minHeight: '400px' }}>
          <div className="otc-image-scene">
            <motion.img
              src="/otc_base_image.png"
              alt="OTC Operations"
              className="otc-hero-img"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </section>

      <SectionHeading title="Why OTC with Pay.Crypto" subtitle="Built for institutional treasuries and funds." />
      <div className="service-grid" style={{ marginBottom: 80 }}>
        {benefits.map(([title, icon, text]) => (
          <motion.article key={title} className="service-card" {...fadeUp}>
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </motion.article>
        ))}
      </div>

      <SectionHeading title="Contact OTC Desk" subtitle="Request a private consultation for block trades." />
      <ContactForm prefilledService="otc" />
    </main>
  )
}
