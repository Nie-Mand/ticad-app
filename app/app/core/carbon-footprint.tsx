import { DataCard } from '~/core'
import { GiElectric as ElectricIcon } from 'react-icons/gi'
import { useGetStatistics } from '~/services'
function getColor(v: number, threshold: number) {
  if (v > threshold) {
    return 'bg-[#f44336]'
  }
  return 'bg-[#39ff3f]'
}

export function CarbonFootprint() {
  const carbon = useGetStatistics()

  return (
    <DataCard
      title={`Carbon Footprint ${
        carbon?.threshold ? '(threshold =' + carbon.threshold + 'kg)' : ''
      }`}
      icon={<ElectricIcon className="w-8 h-8" />}
      value={carbon?.carbon}
      className={`${getColor(carbon?.carbon, carbon?.threshold)} `}
      unit="kg"
    />
  )
}
