import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { checkPassword, isAdminAuthed, setAdminSession } from '../../utils/auth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  if (isAdminAuthed()) {
    return <Navigate to="/admin/dashboard" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (checkPassword(password)) {
      setAdminSession()
      navigate('/admin/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <main className="page-shell legal-page">
      <div className="content-card admin-card admin-login-card">
        <img src="/logo.png" alt="Pay.Crypto" className="admin-logo" />
        <h1>Secure Access</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button className="primary-btn" type="submit">Unlock →</button>
          {error ? <p className="error">{error}</p> : null}
        </form>
      </div>
    </main>
  )
}
