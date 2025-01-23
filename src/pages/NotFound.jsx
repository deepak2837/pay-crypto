import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page-shell legal-page not-found-page">
      <div className="content-card not-found-card">
        <div className="not-found-star">✦</div>
        <h1>404 — Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link className="primary-btn" to="/">Back to Home</Link>
      </div>
    </main>
  )
}