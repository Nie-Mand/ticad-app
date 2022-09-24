import { Link } from '@remix-run/react'

export function HomeNavbar() {
  return (
    <div className="py-4 px-4 md:px-32">
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
        <div className="flex items-center ">
          <Link to="/login" className="button">
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}
