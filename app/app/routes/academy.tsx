import { Outlet } from '@remix-run/react'
import { Navbar } from '../core/Navbar'
import { Sidebar } from '~/core'

export default function Dashboard() {
  return (
    <div className="flex flex-col h-[95vh]">
      <Navbar />
      <div className="flex-1 flex h-[90vh]">
        <div className="h-full w-[300px] p-10">
          <Sidebar />
        </div>
        <div className="flex-1 py-10">
          <div className="h-full overflow-y-scroll px-10">
            <Outlet />
          </div>
        </div>
        <div className="w-[300px] p-10">
          <h3 className="text text-sm">Advertisement</h3>
          <div className="my-2 h-0 border-b"></div>
          <img src="/ad.jpg" alt="ads" className="h-80" />
        </div>
      </div>
    </div>
  )
}
