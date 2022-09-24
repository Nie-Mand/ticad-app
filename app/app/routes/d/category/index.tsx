import { BiCategory as CategoryIcon } from 'react-icons/bi'
import { AiFillPlusCircle as PlusLeafIcon } from 'react-icons/ai'
import { Link } from '@remix-run/react'
import { useGetCategories } from '~/services'

function Loading() {
  return (
    <div className="bg-slate-200 shadow duration-200 p-10 h-40 rounded animate-pulse grid place-content-center">
      Loading ...
    </div>
  )
}
export default function Dashboard() {
  const categories = useGetCategories()

  return (
    <div className="grid grid-cols-2 gap-4">
      <LinkCard
        to={`/d/category/add`}
        label="Create Category"
        icon={<PlusLeafIcon className="w-8 h-8 text-gray-900" />}
      />

      {categories.error && <div>Error</div>}
      {categories.loading && <Loading />}

      {!categories.loading &&
        categories.data &&
        categories.data.map(c => (
          <LinkCard
            key={c.id}
            to={`/d/category/l/${c.id}`}
            label={c.label}
            icon={<CategoryIcon className="w-8 h-8 text-gray-500" />}
          />
        ))}
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
