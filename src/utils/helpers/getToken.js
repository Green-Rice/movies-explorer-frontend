import { JWT } from '../localStorage'

export const getToken = () => (
  localStorage.getItem(JWT)
)