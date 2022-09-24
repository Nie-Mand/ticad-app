import { useState } from 'react'
import { getClient } from '~/axios'
import { useNavigate } from '@remix-run/react'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const goto = useNavigate()

  async function login(email: string, password: string) {
    try {
      setLoading(true)
      const { data } = await getClient().post('/authentify/login', {
        email,
        password,
      })
      localStorage.setItem('token', data.token)
      setLoading(false)
      goto('/d')
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  return {
    loading,
    error,
    login,
  }
}
