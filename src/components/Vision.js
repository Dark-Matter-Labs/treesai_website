export default function Vision() {
  return (
    <>
      <div
        className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
        id="Container"
      >
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="images/poster.png"
          id="background-video"
        >
          <source src="images/short.mp4" type="video/mp4" />
        </video>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">
                    A platform to value, and invest in nature, beyond carbon
                  </span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                    ship web apps
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  TreesAI establishes nature as a critical part of urban
                  infrastructure, alongside bridges, roads and rail, enabling
                  investment, profitability and sustainability.
                </p>
                <div className="mt-10 sm:mt-12">
                  <a
                    href="http://eepurl.com/hFsY1n"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                  >
                    Get notified when we launch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
