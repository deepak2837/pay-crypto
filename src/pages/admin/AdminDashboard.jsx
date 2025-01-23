import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearAdminSession, isAdminAuthed } from '../../utils/auth'
import { clearSubmissions, deleteSubmission, readSubmissions, updateSubmission } from '../../utils/storage'
import { Download, Eye, Trash2, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)
  const submissions = useMemo(() => readSubmissions(), [])

  if (!isAdminAuthed()) {
    navigate('/admin')
    return null
  }

  const filtered = submissions.filter((submission) => {
    if (filter === 'all') return true
    if (filter === 'new') return submission.status === 'new'
    return submission.serviceType === filter
  })

  const stats = {
    total: submissions.length,
    new: submissions.filter((item) => item.status === 'new').length,
    today: submissions.filter((item) => new Date(item.submittedAt).toDateString() === new Date().toDateString()).length,
    week: submissions.filter((item) => Date.now() - new Date(item.submittedAt).getTime() < 7 * 24 * 60 * 60 * 1000).length,
  }

  function logout() {
    clearAdminSession()
    navigate('/admin')
  }

  function exportCsv() {
    const headers = ['id', 'serviceType', 'queryType', 'name', 'personalEmail', 'businessEmail', 'phone', 'company', 'submittedAt', 'status']
    const rows = filtered.map((item) => headers.map((header) => JSON.stringify(item[header] ?? '')).join(','))
    const blob = new Blob([`${headers.join(',')}\n${rows.join('\n')}`], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'pay-crypto-leads.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearAll() {
    if (window.prompt('Type DELETE to confirm') === 'DELETE') {
      clearSubmissions()
      window.location.reload()
    }
  }

  return (
    <main className="page-shell admin-page legal-page">
      <div className="admin-topbar">
        <img src="/logo.png" alt="Pay.Crypto" className="admin-logo small" />
        <h1>Submissions Dashboard</h1>
        <button className="secondary-btn" type="button" onClick={logout}><LogOut size={16} /> Logout</button>
      </div>

      <div className="stats-grid">
        <div className="content-card stat-box"><span>Total Leads</span><strong>{stats.total}</strong></div>
        <div className="content-card stat-box"><span>New (Unread)</span><strong>{stats.new}</strong></div>
        <div className="content-card stat-box"><span>Today's Leads</span><strong>{stats.today}</strong></div>
        <div className="content-card stat-box"><span>This Week's Leads</span><strong>{stats.week}</strong></div>
      </div>

      <div className="dashboard-actions">
        {['all', 'payment-gateway', 'buy-sell-usdt', 'otc', 'general', 'new'].map((item) => (
          <button key={item} type="button" className={`filter-chip ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>{item}</button>
        ))}
        <button className="secondary-btn" type="button" onClick={exportCsv}><Download size={16} /> Export CSV</button>
        <button className="secondary-btn" type="button" onClick={clearAll}><Trash2 size={16} /> Clear All</button>
      </div>

      <div className="content-card admin-card">
        {filtered.length ? filtered.map((submission) => (
          <article className="submission-card" key={submission.id}>
            <button type="button" className="submission-row" onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}>
              <span>{submission.name}</span>
              <span>{submission.queryType}</span>
              <span>{submission.personalEmail}</span>
              <span className={`status-pill ${submission.status}`}>{submission.status}</span>
              <span className="submission-actions">
                <button type="button" onClick={(event) => { event.stopPropagation(); updateSubmission(submission.id, { status: 'read' }); window.location.reload() }}><Eye size={16} /></button>
                <button type="button" onClick={(event) => { event.stopPropagation(); deleteSubmission(submission.id); window.location.reload() }}><Trash2 size={16} /></button>
              </span>
            </button>
            {expandedId === submission.id ? <p className="expanded-message">{submission.message}</p> : null}
          </article>
        )) : <p>No submissions yet.</p>}
      </div>
    </main>
  )
}
