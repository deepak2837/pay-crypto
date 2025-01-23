export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="section-divider">✦ — — — ✦</div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}