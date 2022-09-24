import { Outlet } from '@remix-run/react'
import { Navbar } from '~/core/Navbar'
import { Sidebar } from '~/core'

export default function Dashboard() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="h-full w-[300px] py-10 px-6 bg-[#121212] text-white">
          <Sidebar />
        </div>
        <div className="flex-1 h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 flex h-[90vh]">
            <div className="flex-1 py-10">
              <div className="h-full overflow-y-scroll px-10">
                <Outlet />
              </div>
            </div>
            <div className="w-[400px] p-10 rounded">
              <div className="grid gap-2">
                {`Objectives of a PCE study
                  Scope of a PCE study
                  Functional or declared unit
                  System boundaries
                  Data and data quality
                  Data time limit`
                  .split('\n')
                  .map(v => (
                    <a
                      key={v}
                      className="text-blue-400 flex items-center space-x-2"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    >
                      <input type="checkbox" defaultChecked />
                      <span>{v}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="flex flex-col h-[95vh]">
    //   <Navbar />
    //   <div className="flex-1 flex h-[90vh]">
    //     <div className="h-full w-[300px] p-10">
    //       <Sidebar />
    //     </div>
    //     <div className="flex-1 py-10">
    //       <div className="h-full overflow-y-scroll px-10">
    //         <Outlet />
    //       </div>
    //     </div>
    //     <div className="w-[300px] p-10">
    //       <h3 className="text text-sm">Advertisement</h3>
    //       <div className="my-2 h-0 border-b"></div>
    //       <img src="/ad.jpg" alt="ads" className="h-80" />
    //     </div>
    //   </div>
    // </div>
  )
}
