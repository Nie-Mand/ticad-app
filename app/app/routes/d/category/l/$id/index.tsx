import { Link } from '@remix-run/react'
import { useGetCategory, useGetMetrics } from '~/services'

export default function AddCattegory() {
  const category = useGetCategory()

  const metrics = useGetMetrics()

  if (category.error || metrics.error) {
    return <div>Error</div>
  }

  if (category.loading || metrics.loading) {
    return <div>Loading</div>
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 flex items-center space-x-2">
        <div className="mr-auto">
          <h1 className="font-extrabold text-xl uppercase">
            {category.data && category.data.label}
          </h1>
          <p className="font-light">
            {category.data && category.data.description}
          </p>
        </div>

        <Link className="button" to="add">
          Register a Metric
        </Link>
        <Link className="button bg-blue-600 hover:bg-blue-700" to="/404">
          Update
        </Link>
        <Link className="button bg-red-500 hover:bg-red-600" to="/404">
          Delete
        </Link>
      </div>
      <div className="col-span-2">
        <Table data={metrics.data} />
      </div>
    </div>
  )
}

function Table({ data }: any) {
  return (
    <table className="w-full">
      <thead className="bg-slate-400 text-white">
        <tr className="">
          <th className="px-4 py-2 rounded-tl-md text-left">Metric</th>
          <th className="px-4 py-2 rounded-tr-md text-left">Metric Code</th>
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {data?.map((item: any) => (
          <tr className="border-b" key={item.id}>
            <td className="px-4 py-2 text-blue-600">
              <Link to={`${item.id}`}>{item.label}</Link>
            </td>
            <td className="px-4 py-2">{item.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
