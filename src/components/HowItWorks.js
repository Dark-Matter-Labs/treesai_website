import howItWorksDiagram from "../images/howitworks.png";

export default function HowItWorks() {
  return (
    <div className="bg-gray">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-2">
        <div className="">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
              How it works
            </p>
          </div>
          <div className="mt-12 justify-center">
            <img src={howItWorksDiagram} alt="How TreesAI works diagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
