import { Link } from '@remix-run/react'
import { useGetMetric, usePrediction } from '~/services'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Evolution of the consumption',
    },
  },
}

function last8(a: any[]) {
  if (!a) return []
  let last = []
  for (let i = a.length - 1; i >= 0; i--) {
    last.push(a[i])
  }
  return last
}

export default function AddCattegory() {
  const metric = useGetMetric()

  const prediction = usePrediction(last8(metric._data))

  if (metric.error) {
    return <div>Error</div>
  }

  if (!metric.data || metric.loading) {
    return <div>Loading</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 flex items-center space-x-2">
        <div className="mr-auto">
          <h1 className="font-extrabold text-xl uppercase">
            {metric.data.label}
          </h1>
        </div>

        {metric.data.entryMethod === 'MANUAL' ? (
          <Link className="button" to="add">
            Insert Data
          </Link>
        ) : null}
        <Link className="button bg-blue-600 hover:bg-blue-700" to="/404">
          Update
        </Link>
        <Link className="button bg-red-500 hover:bg-red-600" to="/404">
          Delete
        </Link>
      </div>
      <div className="col-span-2">
        <div className="p-4 rounded-md bg-white shadow">
          <Line
            options={options}
            data={{
              labels: new Array(
                (metric._data?.length || 0) + (prediction?.length || 0)
              ).fill(''),
              datasets: [
                {
                  label: 'Current Consumption',
                  data: [
                    ...(metric._data
                      ? metric._data.map((item: any) => item.value)
                      : []),
                    ...prediction?.map(() => null),
                  ],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                  label: 'Prediction of the future consumption',
                  data: [
                    ...(metric._data
                      ? metric._data.map((item: any) => item.value)
                      : []),
                    ...prediction.map((v: any) => v - 120),
                  ],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  )
}
