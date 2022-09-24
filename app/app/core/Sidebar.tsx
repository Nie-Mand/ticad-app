import { NavLink } from '@remix-run/react'
import { RiDashboardLine as DashIcon } from 'react-icons/ri'
import { MdCategory as AddCategoryIcon } from 'react-icons/md'
import { GiBrain as BrainIcon } from 'react-icons/gi'
import { CarbonFootprint } from '~/core'

export function Sidebar() {
  return (
    <div className="grid gap-4 uppercase text-sm">
      <NavLink
        to="/d"
        className={({ isActive }) =>
          `${
            isActive ? '' : ''
          } flex items-center space-x-2 hover:bg-[#262626] duration-300 p-2 rounded-md`
        }
      >
        <DashIcon className="text-2xl" />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/d/category"
        className={({ isActive }) =>
          `${
            isActive ? '' : ''
          } flex items-center space-x-2 hover:bg-[#262626] duration-300 p-2 rounded-md`
        }
      >
        <AddCategoryIcon className="text-2xl" />
        <span>categories</span>
      </NavLink>

      <CarbonFootprint />
    </div>
  )
}
