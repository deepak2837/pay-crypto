import { motion } from 'framer-motion'
import { ArrowRightLeft, BarChart3, BadgeCheck, ShieldCheck, Users, IndianRupee, Zap } from 'lucide-react'
import Ticker from '../components/ui/Ticker'
import SectionHeading from '../components/ui/SectionHeading'
import GoldButton from '../components/ui/GoldButton'
import CryptoCalculator from '../components/CryptoCalculator'

const services = [
  { title: 'Payment Gateway', description: 'Accept USDT & USDC on your platform instantly. Built for Indian businesses.' },
  { title: 'Buy / Sell USDT', description: 'Buy and sell stablecoins directly with us. Fast, secure, and zero middlemen.' },
  { title: 'OTC Trading', description: 'High-volume private settlements with deep liquidity. Built for institutions.' },
]

const stats = [
  { value: 'Avg 45s', label: 'Settlement Time' },
  { value: '0.5%', label: 'Platform Fees' },
  { value: '24 / 7', label: 'Always Online' },
  { value: '₹0', label: 'Bank Freeze Risk' },
  { value: '1,00,000+', label: 'Trusted Users' },
  { value: '1000+', label: 'Companies' },
]

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

export default function Home() {
  return (
    <main>
      <section className="hero hero-home" id="home">
        <div className="hero-bg hero-stars" aria-hidden="true">
          {/* Animated perspective grid floor */}
          <div className="hero-grid-floor" />
          {Array.from({ length: 28 }).map((_, index) => (
            <span key={index} className="scatter-star" style={{ left: `${(index * 7) % 100}%`, top: `${(index * 13) % 78}%`, fontSize: `${8 + (index % 4) * 4}px` }}>✦</span>
          ))}
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
        </div>

        <motion.div className="hero-copy" {...fadeUp}>
          
          <h1 className="hero-trust-number">
            <span className="text-gold-gradient">1,00,000+</span>
          </h1>
          <h2 className="hero-trust-heading">
            USERS <br />TRUST US
          </h2>
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="badge-laurel">🏆</span>
              <div className="badge-content">
                <strong className="text-gold-gradient">1000+</strong>
                <span>Companies</span>
              </div>
            </div>
            <div className="hero-badge">
              <span className="badge-laurel">🏆</span>
              <div className="badge-content">
                <strong className="text-gold-gradient">India&apos;s #1</strong>
                <span>USDT &amp; USDC solution</span>
              </div>
            </div>
          </div>     <p className="lede">
            
          </p>
          <p className="eyebrow">The lowest fees. Average 45-second settlements. No bank freezes.</p>
     
          <div className="hero-actions">
            <GoldButton href="/contact">Get Started →</GoldButton>
            <a className="secondary-btn" href="#how-it-works">How It Works</a>
          </div>
        </motion.div>

        <div className="hero-visual">
          <div className="coin-scene">
            {/* Outer pulsing glow */}
            <div className="coin-glow-pulse" />
            {/* Orbital ring 1 — slow, large */}
            <div className="orbit orbit-1">
              <span className="orbit-dot" />
              <span className="orbit-dot dot-opposite" />
            </div>
            {/* Orbital ring 2 — medium, tilted */}
            <div className="orbit orbit-2">
              <span className="orbit-dot" />
              <span className="orbit-dot dot-opposite" />
            </div>
            {/* Orbital ring 3 — fast, small */}
            <div className="orbit orbit-3">
              <span className="orbit-dot" />
              <span className="orbit-dot dot-opposite" />
            </div>
            {/* Inner halo glow */}
            <div className="coin-halo-inner" />
            {/* The coin itself — floats and rotates */}
            <motion.div
              className="coin-float-wrap"
              animate={{ y: [0, -18, 0], rotateY: [0, 360] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotateY: { duration: 12, repeat: Infinity, ease: 'linear' },
              }}
              style={{ perspective: 800 }}
            >
              <img src="/crypto-coin.png" alt="Pay.Crypto Coin" className="coin-hero-img" />
            </motion.div>
            {/* Sparkle particles */}
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="sparkle-particle"
                style={{
                  '--angle': `${i * 45}deg`,
                  '--delay': `${i * 0.4}s`,
                  '--dist': `${42 + (i % 3) * 6}%`,
                }}
              />
            ))}

            {/* Floating Transaction Cards */}
            <motion.div
              className="floating-tx-card tx-left"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="tx-icon-circle usdt">₮</div>
              <div className="tx-info">
                <span className="tx-label">Received</span>
                <span className="tx-val">+50,000 USDT</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-tx-card tx-right"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="tx-icon-circle usdc">₵</div>
              <div className="tx-info">
                <span className="tx-label">Settled</span>
                <span className="tx-val">+25,000 USDC</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="services section-py" id="services">
        <motion.div {...fadeUp}>
          <SectionHeading title="What We Offer" subtitle="Three services. One seamless experience." />
        </motion.div>
        <div className="service-grid prompt-grid">
          {[
            { icon: <Zap size={24} />, ...services[0], link: '/payment-gateway' },
            { icon: <ArrowRightLeft size={24} />, ...services[1], link: '/buy-sell-usdt' },
            { icon: <BarChart3 size={24} />, ...services[2], link: '/otc' },
          ].map((service) => (
            <motion.article key={service.title} className="service-card prompt-card" {...fadeUp} whileHover={{ scale: 1.015, y: -3 }}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="ghost-link" href={service.link}>Explore →</a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-py">
        <SectionHeading title="Why Pay.Crypto ✦" subtitle="Built for trust, speed, and stablecoin simplicity." />
        <div className="stats-grid">
          {stats.map((item) => (
            <motion.div key={item.label} className="content-card stat-box" {...fadeUp} whileHover={{ scale: 1.01 }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-py calculator-section">
        <SectionHeading title="USDT ↔ USDC Converter" subtitle="Real-time rates. Zero commitment." />
        <CryptoCalculator />
      </section>

      <section className="section-py" id="how-it-works">
        <SectionHeading title="From Zero to Crypto-Ready" subtitle="A simple three-step setup path." />
        <div className="steps-grid">
          {[
            { step: '1', title: 'Choose Your Service', text: 'Pick from Gateway, Buy/Sell USDT, or OTC based on your needs' },
            { step: '2', title: 'We Set You Up', text: 'Our team onboards you within 24 business hours' },
            { step: '3', title: 'Deal Done', text: 'Transactions completed in as little as 15 seconds' },
          ].map((step) => (
            <motion.div key={step.step} className="content-card step-card" {...fadeUp}>
              <div className="step-number mono-text">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-py">
        <SectionHeading title="Built For Everyone" subtitle="Created for the people powering India&apos;s crypto economy." />
        <div className="who-grid">
          {[
            { title: 'Businesses & E-commerce', icon: <ShieldCheck size={20} /> },
            { title: 'Individual Traders', icon: <Users size={20} /> },
            { title: 'Importers / Exporters', icon: <IndianRupee size={20} /> },
            { title: 'Institutions & HNIs', icon: <BadgeCheck size={20} /> },
          ].map((item) => (
            <motion.div key={item.title} className="content-card who-card" {...fadeUp}>
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-py cta-banner">
        <div>
          <h2>Start in Minutes. Scale Forever.</h2>
          <p>No setup fees. No hidden charges. Just crypto, done right.</p>
        </div>
        <GoldButton as="a" href="/contact" className="cta-dark">Contact Us →</GoldButton>
      </section>
    </main>
  )
}
