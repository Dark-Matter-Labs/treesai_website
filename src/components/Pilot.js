export default function Pilot() {
  return (
    <div className="relative py-16 sm:py-24 lg:py-18" id="pilot">
      <div className="relative">
        <div className="text-center ">
          <p className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            TreesAI Pilot
          </p>
          <div className="lets-invest">
            <p className="text-center font-semibold mt-3 text-3xl leading-8 text-white">
              TreesAI is partnering with Glasgow City Council to launch its
              first pilot, helping to meet the city’s climate targets.
            </p>
            <div className="mt-10 sm:mt-12">
              <a
                href="images/01.07.21_TreesAI in Glasgow Synopsis.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-gray-700"
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
