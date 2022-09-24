import { HomeNavbar } from './Navbar'
export function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-[url(/art/star.svg)] bg-no-repeat">
      <HomeNavbar />
      <div className="px-10 lg:px-40 flex-1 grid">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-full grid items-center">
            <div className="max-w-4xl">
              <h1 className="font-ikaros text-5xl">
                Monitor your <span className="font-intro font-black"> C</span>,{' '}
                <br />
                <span className="font-intro font-black">GO GREEN</span>
              </h1>
              <div className="h-3"></div>
              <h2 className="text-xs uppercase text-gray-800 font-medium">
                A Fully Featured Compliance Monitoring Platform
                <br />
                <span className="font-bold">
                  For your Carbon Emission Activities
                </span>
              </h2>
              <div className="h-10"></div>
              <button className="button">Grow with Us</button>
            </div>
          </div>
          <div className="items-center justify-end hidden md:grid">
            <img
              src="/art/pattern.svg"
              alt="pattern"
              width="325"
              height="325"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
