import { motion } from 'framer-motion'
import { ArrowRightLeft, Shield, Timer, BadgeCheck, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/ContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function BuySellUSDT() {
  const steps = [
    ['Share Your Requirement', <BadgeCheck size={20} />, 'Tell us whether you want to buy or sell USDT and your preferred amount.'],
    ['Get a Quote', <ArrowRightLeft size={20} />, 'We provide a competitive, market-linked rate instantly.'],
    ['Lock Your Rate', <Shield size={20} />, 'Confirm the deal and lock in your agreed rate with us.'],
    ['Settle Fast', <Timer size={20} />, 'Complete the transfer and receive funds within minutes.'],
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
          <p className="eyebrow"><Sparkles size={16} /> Direct Trading</p>
          <h1>Buy / Sell USDT</h1>
          <p className="lede">Buy or sell USDT and USDC directly with us. Enjoy zero slippage, locked exchange rates, and fast settlements — all processed through our platform.</p>
        </motion.div>

        <div className="hero-visual" style={{ minHeight: '400px' }}>
          <div className="buy-sell-image-scene">
            <motion.img
              src="/buy-sell-usdt-base-image.png"
              alt="Buy and Sell USDT"
              className="buy-sell-hero-img"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </section>

      <SectionHeading title="How It Works" subtitle="Simple, direct trading process from start to finish." />
      <div className="service-grid" style={{ marginBottom: 80 }}>
        {steps.map(([title, icon, text]) => (
          <motion.article key={title} className="service-card" {...fadeUp}>
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </motion.article>
        ))}
      </div>

      <SectionHeading title="Start Trading" subtitle="Contact us directly to buy or sell USDT at the best rates." />
      <ContactForm prefilledService="buy-sell-usdt" />
    </main>
  )
}
