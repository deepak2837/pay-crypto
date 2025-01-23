import { motion } from 'framer-motion'
import { Zap, ShieldCheck, DollarSign, Smartphone, Code2, Clock3, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/ContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function PaymentGateway() {
  const features = [
    ['Instant Settlement', <Zap size={20} />, 'Funds reflected quickly with streamlined settlement flow.'],
    ['No Chargebacks', <ShieldCheck size={20} />, 'Stablecoin transfers are final and reduce reversal risk.'],
    ['Transparent Fees', <DollarSign size={20} />, 'Simple and predictable pricing for every transaction.'],
    ['Multi-Platform', <Smartphone size={20} />, 'Works across web, mobile, and custom checkout surfaces.'],
    ['Developer-First API', <Code2 size={20} />, 'Clean integration docs, secure auth, and sandbox support.'],
    ['24/7 Reliability', <Clock3 size={20} />, 'Continuous monitoring and operational support coverage.'],
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
          <p className="eyebrow"><Sparkles size={16} /> Enterprise Grade API</p>
          <h1>Crypto Payment Gateway</h1>
          <p className="lede">Accept USDT & USDC globally with our developer-friendly checkout flow. No chargebacks, instant settlement, and bank-grade security.</p>
        </motion.div>

        <div className="hero-visual" style={{ minHeight: '400px' }}>
          <div className="gateway-scene">
            <motion.div 
              className="checkout-panel"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="checkout-header">
                <span className="dot bg-red" />
                <span className="dot bg-yellow" />
                <span className="dot bg-green" />
              </div>
              <div className="checkout-body">
                <div className="checkout-merchant">Pay.Crypto API ✦</div>
                <div className="checkout-amount mono-font">$ 1,250.00</div>
                <motion.div 
                  className="checkout-btn"
                  animate={{ background: ['rgba(201,168,76,0.2)', 'rgba(201,168,76,0.6)', 'rgba(201,168,76,0.2)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Confirm Payment
                </motion.div>
                
                {/* Floating success toast */}
                <motion.div
                  className="checkout-toast"
                  animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                >
                  <ShieldCheck size={14} color="#22c55e" />
                  Payment Settled
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting data blocks */}
            <div className="orbit orbit-2" style={{ inset: '5%', borderStyle: 'dashed' }}>
              <span className="orbit-dot" />
            </div>
          </div>
        </div>
      </section>

      <SectionHeading title="Gateway Features" subtitle="Engineered to improve conversion and simplify operations." />
      <div className="service-grid" style={{ marginBottom: 80 }}>
        {features.map(([title, icon, text]) => (
          <motion.article key={title} className="service-card" {...fadeUp}>
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </motion.article>
        ))}
      </div>

      <SectionHeading title="Get Started" subtitle="Talk to our integration team today." />
      <ContactForm prefilledService="gateway" />
    </main>
  )
}
