import { SiLeaflet as LeafIcon } from 'react-icons/si'
import { BsFillDropletFill as DropIcon } from 'react-icons/bs'
import { RiTempHotLine as TemperatureIcon } from 'react-icons/ri'
import { GiPlantRoots as PlantIcon } from 'react-icons/gi'
import { MdWindow as WindowIcon } from 'react-icons/md'

export function Intro() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <DataCard
          className="text-white bg-[#d5ff69]"
          title="Soil Moisture"
          value={87.5}
          icon={<PlantIcon className="text-4xl" />}
        />
        <DataCard
          className="text-white bg-[#ff3939]"
          title="Temperature"
          value={87.5}
          icon={<TemperatureIcon className="text-4xl" />}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DataCard
          className="text-white bg-[#9669ff]"
          title="Humidity"
          icon={<DropIcon className="text-4xl" />}
          value={87.5}
        />
        <DataCard
          className="text-white bg-[#FFBA69]"
          title="pH Level"
          value={87.5}
          icon={<WindowIcon className="text-4xl" />}
        />
      </div>
    </>
  )
}

interface DataCardProps {
  title: string
  value?: number | null
  className: string
  icon: JSX.Element
}

function DataCard(props: DataCardProps) {
  const disabled = !props.value
  const [x, y] = (props.value ? props.value.toFixed(2) : 'XX.xx').split('.')
  return (
    <div
      className={`p-4 rounded-md flex items-center duration-200 ${
        disabled ? 'text-white bg-gray-300' : props.className
      }`}
    >
      <div className="flex-1">
        <h2 className="text-3xl font-black">
          {x}.<span className="text-lg">{y}%</span>
        </h2>
        <h3 className="text-sm font-bold">{props.title}</h3>
      </div>
      <div>{props.icon}</div>
    </div>
  )
}
