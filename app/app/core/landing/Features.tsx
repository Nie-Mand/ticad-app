import { GiNestedEclipses } from 'react-icons/gi'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import { RiAdvertisementLine } from 'react-icons/ri'
import { FaStoreAlt } from 'react-icons/fa'

export function Features() {
  return (
    <div className="py-20 px-4 md:px-32 font-intro  text-black">
      <div className="px-20">
        <div className="flex items-start justify-between">
          <div className="h-20 w-20 border-t-[6px] border-l-[6px] border-green-500 border-dotted"></div>
          <h1 className="font-black text-xl py-4 uppercase text-right pr-10">
            Get Insights on your Carbon Emission Activities
            <br />
            Have a Control on your Carbon Footprint
            <br />
            Go Green
          </h1>
        </div>
        <div className="flex items-center px-10">
          <img src="/logo-footer.png" alt="farmer" className="ml-10" />
        </div>
        <div className="ml-auto h-20 w-20 border-b-4 border-r-4 border-green-500 border-dotted"></div>
      </div>
    </div>
  )
}

interface Props {
  icon: JSX.Element
  intro: string
  text: string
}

function Feature(props: Props) {
  return (
    <div className="flex items-center space-x-3">
      {props.icon}
      <div>
        <h1 className="font-bold text-lg">{props.intro}</h1>
        <p className="text-xs">{props.text}</p>
      </div>
    </div>
  )
}
