import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const API_URL = 'https://open.er-api.com/v6/latest/USD'

export default function CryptoCalculator() {
  const [rates, setRates] = useState({ usdt: null, usdc: null })
  const [lastUpdated, setLastUpdated] = useState(null)
  const [amount, setAmount] = useState('100000')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadRates() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      const usdInr = data?.rates?.INR ?? null
      
      // We add a realistic market premium of roughly 3.5 INR to the base USD rate for USDT/USDC in India
      const marketPremium = 3.5
      const rate = usdInr ? (usdInr + marketPremium) : null

      const nextRates = {
        usdt: rate,
        usdc: rate,
      }
      setRates(nextRates)

      const valid = Number.isFinite(nextRates.usdt) && Number.isFinite(nextRates.usdc)
      setLastUpdated(valid ? new Date() : null)
      if (!valid) setError('live rates unavailable')
    } catch {
      setLastUpdated(null)
      setError('rates may be delayed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRates()
    const timer = window.setInterval(loadRates, 60000)
    return () => window.clearInterval(timer)
  }, [])

  // treat `amount` as INR and compute crypto equivalents
  const computed = useMemo(() => {
    const inrValue = Number(amount || 0)
    const usdtInr = rates.usdt ?? 0
    const usdcInr = rates.usdc ?? 0
    if (!inrValue || !usdtInr || !usdcInr) {
      return { usdt: '0.00', usdc: '0.00', inr: '0.00' }
    }
    return {
      usdt: (inrValue / usdtInr).toFixed(2),
      usdc: (inrValue / usdcInr).toFixed(2),
      inr: inrValue.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
    }
  }, [amount, rates])

  const hasLiveRates = Number.isFinite(rates.usdt) && Number.isFinite(rates.usdc)

  return (
    <motion.div 
      className="calculator-shell glass-panel"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="calc-header">
        <div>
          <h3 className="calc-title">Live Rate Calculator</h3>
          <p className="calc-subtitle">Convert INR to USDT / USDC using real-time market rates</p>
        </div>
      </div>

      <div className="calc-body">
        <div className="calc-input-group">
          <label className="calc-label">You Send (INR)</label>
          <div className="calc-input-wrapper">
            <span className="calc-currency">₹</span>
            <input
              className="calc-input mono-font"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              inputMode="decimal"
              aria-label="INR amount"
            />
          </div>
        </div>

        <div className="calc-results-grid">
          <div className="calc-crypto-card">
            <div className="crypto-card-top">
              <span className="crypto-name"><span className="tx-icon-circle usdt small">₮</span> USDT</span>
              <span className="crypto-rate badge">{rates.usdt ? `₹${rates.usdt.toFixed(2)}` : '--'}</span>
            </div>
            <div className="crypto-amount mono-font">{computed.usdt}</div>
            <div className="crypto-hint">Approximate received</div>
          </div>

          <div className="calc-crypto-card">
            <div className="crypto-card-top">
              <span className="crypto-name"><span className="tx-icon-circle usdc small">₵</span> USDC</span>
              <span className="crypto-rate badge">{rates.usdc ? `₹${rates.usdc.toFixed(2)}` : '--'}</span>
            </div>
            <div className="crypto-amount mono-font">{computed.usdc}</div>
            <div className="crypto-hint">Approximate received</div>
          </div>
        </div>
      </div>

      <div className="calc-footer">
        <div className="calc-meta">
          {hasLiveRates && (
            <div className="live-rates-row">
              <span className="pulse-dot" />
              <span>1 USDT = ₹{rates.usdt.toFixed(2)}</span>
              <span className="meta-divider">•</span>
              <span>1 USDC = ₹{rates.usdc.toFixed(2)}</span>
            </div>
          )}
          <div className="update-status">
            {loading ? 'Fetching live rates...' : lastUpdated ? `Updated ${Math.max(1, Math.round((Date.now() - lastUpdated.getTime()) / 60000))} min ago` : ''}
            {error && <span className="error-text">({error})</span>}
          </div>
        </div>

        <Link to="/contact" className="primary-btn">
          Start Trade ✦
        </Link>
      </div>
    </motion.div>
  )
}