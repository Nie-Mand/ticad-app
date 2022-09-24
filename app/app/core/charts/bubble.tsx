import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bubble } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Yield Production per Acre',
    },
  },
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export const data = {
  datasets: [
    {
      label: 'Wheat',
      data: Array.from({ length: 50 }, () => ({
        x: random(-100, 100),
        y: random(-100, 100),
        r: random(5, 20),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Orange',
      data: Array.from({ length: 50 }, () => ({
        x: random(-100, 100),
        y: random(-100, 100),
        r: random(5, 20),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export function Bubbles() {
  return <Bubble options={options} data={data} />
}
