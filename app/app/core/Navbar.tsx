import { Link } from '@remix-run/react'
import { Avatar } from '../ui'

export function Navbar() {
  return (
    <div className="bg-white py-4 px-4 md:px-10 border-b w-full">
      <nav className="flex items-center space-x-3">
        <Link to="/" className="font-intro font-black text-xl">
          Kane
        </Link>
        <Link to="/about" className="text-sm font-light">
          About
        </Link>
        <Link to="/contact" className="text-sm font-light">
          Contact Us
        </Link>
        <div className="flex-1"></div>
        <Avatar
          src={`https://learn.zoner.com/wp-content/uploads/2015/06/040mm.jpg?fidl=2019-06-mag-en`}
          alt="Avatar"
        />
      </nav>
    </div>
  )
}
