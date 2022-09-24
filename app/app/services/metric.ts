import { useEffect, useState } from 'react'
import { getClient } from '~/axios'
import axios from 'axios'
import { useNavigate, useParams } from '@remix-run/react'
import { useLocation } from '@remix-run/react'
import toast from 'react-hot-toast'

export function useCreateMetric() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const goto = useNavigate()
  const { id } = useParams()

  async function create(data: any) {
    try {
      setLoading(true)
      await getClient().post('/metric', { ...data, categoryId: id })
      toast.success('Metric added Successfully')
      setLoading(false)
      goto(`/d/category/l/${id}`)
    } catch (error: any) {
      console.log(error)
      setError(error.response.data)
      toast.error(error.response.data)
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    create,
  }
}

export function useAddData() {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const goto = useNavigate()
  const { id, metric } = useParams()

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get(`/metric/${metric}`)
      setCode(response.data?.metric.code)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  async function add(value: any) {
    try {
      setLoading(true)
      await getClient().post('/metric/data', { code, value, category: id })
      toast.success('Data added Successfully')
      setLoading(false)
      goto(`/d/category/l/${id}/${metric}`)
    } catch (error: any) {
      console.log(error)

      setLoading(false)
      setError(error.response.data)
      toast.error(error.response.data)
    }
  }

  useEffect(() => {
    get()
  }, [])

  return {
    loading,
    error,
    add,
  }
}

export function useGetMetrics() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | any[]>(null)

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get(`/metric/by-category/${id}`)
      setData(response.data?.metrics)
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

export function useGetMetric() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | any>(null)
  const [_data, _setData] = useState<null | any>(null)
  const { metric } = useParams()

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get(`/metric/${metric}`)
      setData(response.data?.metric)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  async function getData() {
    try {
      setLoading(true)
      const response = await getClient().get(`/metric/data/${data.code}`)
      _setData(response.data?.data)
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

  useEffect(() => {
    if (data) {
      getData()
    }
  }, [data])

  return {
    loading,
    error,
    data,
    _data,
  }
}

export function usePrediction(arr: any[]) {
  const [data, setData] = useState<any[]>([])
  async function get() {
    try {
      console.log('arr', arr)
      if (arr?.length > 7) {
        console.log(arr)

        const response = await axios.post(
          `http://localhost:5000`,
          arr.map(i => i.value)
        )
        setData(response.data.prediction)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data.length === 0) {
      get()
    }
  }, [arr])

  return data
}

export function useGetStatistics() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<null | any>(null)
  const [carbon, setCarbon] = useState<null | any>(null)
  const [threshold, setThreshold] = useState<null | any>(null)

  async function get() {
    try {
      setLoading(true)
      const response = await getClient().get(`/metric/car/bon`)

      console.log(response.data)

      setData(response.data?.data)
      setCarbon(response.data?.carbon)
      setThreshold(response.data?.threshold)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setError(error.response.data)
    }
  }

  useEffect(() => {
    get()
  }, [location])

  return {
    loading,
    error,
    data,
    carbon,
    threshold,
  }
}
