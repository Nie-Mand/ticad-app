export function Faza() {
  return (
    <div className="my-10 font-intro bg-[#111]">
      <div className="grid grid-cols-3">
        <div className="bg-[url(/art/coren.png)]">
          <div className="backdrop-blur-xl grid place-content-center h-full">
            <h1 className="max-w-[320px] font-black text-5xl py-10">
              <span className="bg-white/70 backdrop-blur-xl bg-clip-text text-transparent">
                WE GROW FARMS AND BUSINESSES, THANKS TO DEEP LEARNING
              </span>
            </h1>
          </div>
        </div>
        <img
          src="/art/farme.png"
          alt="art"
          className="object-cover h-full backdrop-blur-xl"
        />
        <img
          src="/art/another.png"
          alt="art"
          className="object-cover h-full backdrop-blur-xl"
        />
      </div>
    </div>
  )
}
