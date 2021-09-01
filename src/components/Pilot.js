import glasgowImage from "../images/glasgow.jpg";

export default function Pilot() {
  return (
    <div className="relative py-16 bg-gray" id="pilot">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-green4 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center shadow-2xl"
                  src={glasgowImage}
                  alt="Glasgow city landscape"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-green4 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:grid lg:grid-cols-10 lg:items-center">
            <div className="relative max-w-md mx-auto py-8 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="font-grotesk text-3xl font-extrabold text-gray"
                id="join-heading"
              >
                TreesAI Pilot with <br />
                Glasgow City Council
              </h2>
              <p className="text-lg text-green1">
                TreesAI is partnering with Glasgow City Council to launch its
                first pilot, helping to meet the city’s climate targets.
              </p>
              <a
                className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-primary hover:text-green2 sm:inline-block sm:w-auto"
                href="assets/01.07.21_TreesAI in Glasgow Synopsis.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
