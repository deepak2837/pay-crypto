export default function FeatureCard({ title, description }) {
  return (
    <article className="service-card">
      <span className="card-star">✦</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}