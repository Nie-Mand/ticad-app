import { FaLeaf as LeafIcon } from 'react-icons/fa'
import {
  GiPowerLightning as PowerIcon,
  GiCorn as CornIcon,
} from 'react-icons/gi'
import { RiOilFill as OilIcon } from 'react-icons/ri'
import { BsFillDropletFill as DropIcon } from 'react-icons/bs'
import { CarbonFootprint } from '~/core'

import { Intro, Doughnuts, Bubbles, Lines } from '~/core/charts'

import { Link } from '@remix-run/react'
import { DataCard } from '~/core'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <CarbonFootprint />
      </div>
      <div className="grid col-span-2 grid-cols-3 gap-4">
        <DataCard
          className="text-white bg-[#6a9301]"
          title="Energy Consumption"
          value={87.5}
          icon={<PowerIcon className="text-4xl" />}
          unit="kWh"
        />
        <DataCard
          className="text-white bg-[#9669ff]"
          title="Water Consumption"
          value={87.5}
          icon={<DropIcon className="text-4xl" />}
          unit="L"
        />
        <DataCard
          className="text-white bg-[#4dff07]"
          title="Oil Consumption"
          value={87.5}
          icon={<OilIcon className="text-4xl" />}
          unit="kWh"
        />
      </div>

      <div className="col-span-2">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="p-4 rounded-md bg-white shadow">
            <Doughnuts />
          </div>
          <div className="col-span-2 p-4 rounded-md bg-white shadow">
            <Lines />
          </div>
        </div>
      </div>
    </div>
  )
}

interface LinkCardProps {
  label: string
  icon: JSX.Element
  to: string
}

function LinkCard(props: LinkCardProps) {
  return (
    <Link to={props.to}>
      <div className="bg-white shadow hover:bg-gray-200 duration-200 p-10 h-40 rounded">
        <div className="grid place-content-center">
          <div className="grid gap-4">
            <span className="text-gray-500 font-regular uppercase">
              {props.label}
            </span>
            <div className="grid place-content-center">{props.icon}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
