import { useEffect, useMemo, useState } from 'react'
import { Lock } from 'lucide-react'
import { saveSubmission } from '../utils/storage'

const queryMap = {
  'payment-gateway': 'Payment Gateway Integration Query',
  gateway: 'Payment Gateway Integration Query',
  'buy-sell-usdt': 'Buy / Sell USDT Trading Query',
  otc: 'OTC Trading Query',
  general: '',
}

export default function ContactForm({ prefilledService = 'general' }) {
  const [form, setForm] = useState({
    fullName: '',
    personalEmail: '',
    businessEmail: '',
    phone: '',
    company: '',
    queryType: queryMap[prefilledService] || '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const readOnlyQuery = prefilledService !== 'general'
  const canSubmit = useMemo(() => form.message.trim().length >= 20, [form.message])

  useEffect(() => {
    const marker = 'you already applied to this job'

    const hideInjectedToast = () => {
      const nodes = document.querySelectorAll('body *')
      nodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        const text = (node.innerText || '').toLowerCase()
        if (!text.includes(marker)) return

        const style = window.getComputedStyle(node)
        if (style.position === 'fixed') {
          node.style.display = 'none'
        }
      })
    }

    hideInjectedToast()
    const observer = new MutationObserver(hideInjectedToast)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  function validate() {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required'
    if (!form.personalEmail.trim()) nextErrors.personalEmail = 'Personal email is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required'
    if (form.message.trim().length < 20) nextErrors.message = 'Please add at least 20 characters'
    if (prefilledService === 'general' && !form.queryType.trim()) nextErrors.queryType = 'Query type is required'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return

    const queryType = form.queryType || queryMap[prefilledService] || ''
    saveSubmission({
      id: `pc_${Date.now()}`,
      serviceType: prefilledService,
      queryType,
      name: form.fullName,
      personalEmail: form.personalEmail,
      businessEmail: form.businessEmail || null,
      phone: form.phone,
      company: form.company || null,
      message: form.message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-card content-card">
        <div className="not-found-star">✦</div>
        <h2>Message Received</h2>
        <p>We'll get back to you within 24 hours.</p>
        <button className="secondary-btn" type="button" onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    )
  }

  return (
    <form className="contact-form form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full Name
          <input className="input-field" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} />
          {errors.fullName ? <span className="field-error">{errors.fullName}</span> : null}
        </label>
        <label>
          Personal Email
          <input className="input-field" type="email" value={form.personalEmail} onChange={(event) => setForm({ ...form, personalEmail: event.target.value })} />
          {errors.personalEmail ? <span className="field-error">{errors.personalEmail}</span> : null}
        </label>
        <label>
          Business Email ID
          <input className="input-field" type="email" value={form.businessEmail} onChange={(event) => setForm({ ...form, businessEmail: event.target.value })} />
        </label>
        <label>
          Phone Number
          <input className="input-field" type="tel" placeholder="+91..." value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
        </label>
        <label>
          Company / Business Name
          <input className="input-field" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
        </label>
        <label>
          Query Type
          <div className="input-lock-wrap">
            <input
              className="input-field"
              value={form.queryType}
              readOnly={readOnlyQuery}
              onChange={(event) => setForm({ ...form, queryType: event.target.value })}
            />
            {readOnlyQuery ? <Lock size={14} className="lock-icon" /> : null}
          </div>
          {readOnlyQuery ? <span className="field-hint">locked for {prefilledService}</span> : null}
          {errors.queryType ? <span className="field-error">{errors.queryType}</span> : null}
        </label>
      </div>

      <label>
        Message / Notes
        <textarea className="input-field" rows="6" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
        {errors.message ? <span className="field-error">{errors.message}</span> : null}
      </label>

      <button className="primary-btn" type="submit">Send Message</button>
    </form>
  )
}