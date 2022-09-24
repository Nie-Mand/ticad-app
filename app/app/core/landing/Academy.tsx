import { Link } from '@remix-run/react'

export function Academy() {
  return (
    <div className="py-4 px-4 md:px-32 font-intro h-screen">
      <h1 className="font-black text-xl py-10">THE FARMING ACADEMY</h1>
      <div className="grid grid-cols-3 gap-10 h-80">
        <div className="relative group h-full">
          <img
            src="/art/img.png"
            alt="art"
            className="object-cover w-full h-80"
          />
          <div className="absolute top-0 z-20 duration-200 ">
            <div className="flex flex-col py-20 px-10 bg-black/25 backdrop-blur-xl text-white w-full h-80 duration-200">
              <h1 className="text-white text-xl pb-3 font-black ">
                TOP WORKSHOPS IN AGRICULTURE
              </h1>
              <p className="text-white text-sm font-light mb-auto">
                Learn in the academy of Farming and Agriculture where you can
                learn about the latest technologies and techniques in the field
                of agriculture and farming
              </p>
              <div className="flex justify-end">
                <Link className="button" to="/academy">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://i.ytimg.com/vi/BDliEq_0qeQ/maxresdefault.jpg"
          alt="art"
          className="object-cover h-80 object-left"
        />
        <img
          src="https://i.ytimg.com/vi/KyXK2y_q1os/maxresdefault.jpg"
          alt="art"
          className="object-cover object-left h-80"
        />
      </div>
    </div>
  )
}
