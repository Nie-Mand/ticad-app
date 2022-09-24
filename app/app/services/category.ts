import { useEffect, useState } from 'react'
import { getClient } from '~/axios'
import { useNavigate, useParams } from '@remix-run/react'
import toast from 'react-hot-toast'

export function useCreateCategory() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const goto = useNavigate()

  async function create(data: any) {
    try {
      setLoading(true)
      await getClient().post('/category', data)
      toast.success('Category added Successfully')
      setLoading(false)
      goto('/d/category')
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
      toast.error(error.response.data)
    }
  }

  return {
    loading,
    error,
    create,
  }
}

export function useGetCategories() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | any[]>(null)

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get('/category')
      setData(response.data?.categories)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  useEffect(() => {
    get()
  }, [])

  return {
    loading,
    error,
    data,
  }
}

export function useGetCategory() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | any>(null)
  const { id } = useParams()

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get(`/category/${id}`)
      setData(response.data?.category)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  useEffect(() => {
    get()
  }, [])

  return {
    loading,
    error,
    data,
  }
}
