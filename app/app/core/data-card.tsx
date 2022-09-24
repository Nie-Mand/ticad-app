export function DataCard(props: DataCardProps) {
  const disabled = !props.value
  const [x, y] = (props.value ? props.value.toFixed(2) : 'XX.xx').split('.')
  return (
    <div
      className={`text-white p-4 rounded-md flex items-center duration-200 ${
        disabled ? 'bg-gray-300' : props.className
      }`}
    >
      <div className="flex-1">
        <h2 className="text-3xl font-black">
          {x}.
          <span className="text-lg">
            {y} <span className="text-xs">{props.unit}</span>
          </span>
        </h2>
        <h3 className="text-sm font-bold">{props.title}</h3>
      </div>
      <div>{props.icon}</div>
    </div>
  )
}

interface DataCardProps {
  title: string
  value?: number | null
  className: string
  icon: JSX.Element
  unit: string
}
