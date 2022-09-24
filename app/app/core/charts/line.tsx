import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineOptions,
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
    legend: false,
    title: {
      display: true,
      text: 'Evolution of the Carbon Footprint',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

function random({ min, max }: { min: number; max: number }) {
  return Math.random() * (max - min) + min
}

const data = {
  labels,
  datasets: [
    {
      label: 'Orange',
      data: labels.map(() => random({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export function Lines() {
  return <Line options={options as any} data={data} />
}
