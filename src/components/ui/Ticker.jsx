export default function Ticker() {
  const items = [
    'Avg 45s Settlement', 'Lowest Fees in India', 'No Bank Freeze', '24 × 7 Available',
    'High INR Liquidity', 'USDT & USDC Only', 'Buy & Sell USDT Direct', 'Institutional OTC',
    'Zero Chargebacks', 'Instant Settlements',
  ]

  return (
    <div className="ticker" aria-label="Highlights">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            <span className="ticker-star">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  )
}