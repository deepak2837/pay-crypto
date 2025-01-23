const SUBMISSIONS_KEY = 'paycrypto-contact-submissions'
const AUTH_KEY = 'paycrypto-admin-auth'

export function readSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveSubmission(submission) {
  const submissions = readSubmissions()
  submissions.unshift(submission)
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
}

export function updateSubmission(id, patch) {
  const submissions = readSubmissions().map((submission) =>
    submission.id === id ? { ...submission, ...patch } : submission,
  )
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
}

export function deleteSubmission(id) {
  const submissions = readSubmissions().filter((submission) => submission.id !== id)
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
}

export function clearSubmissions() {
  localStorage.removeItem(SUBMISSIONS_KEY)
}
export function isAdminAuthed() {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export function setAdminAuthed(value) {
  if (value) {
    localStorage.setItem(AUTH_KEY, 'true')
  } else {
    localStorage.removeItem(AUTH_KEY)
  }
}