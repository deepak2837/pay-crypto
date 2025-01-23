export const encodePassword = (pwd) => btoa(pwd)

export const checkPassword = (input) =>
  btoa(input) === import.meta.env.VITE_ADMIN_PASSWORD_HASH

export const setAdminSession = () =>
  sessionStorage.setItem('pc_admin_auth', '1')

export const clearAdminSession = () =>
  sessionStorage.removeItem('pc_admin_auth')

export const isAdminAuthed = () =>
  sessionStorage.getItem('pc_admin_auth') === '1'