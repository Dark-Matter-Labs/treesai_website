import { Link } from "react-router-dom";

export default function ImpactPlanner() {
  return (
    <>
      <div className="bg-white">
        <h2 className="font-grotesk mt-2 lg:text-5xl md:text-4xl text-gray-900 sm:text-4xl ml-10 mt-10">
          Welcome to Implact Planner demo!
        </h2>
        <div className="mt-10 ml-10">
          <Link
            to="/select-city"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2"
          >
            Start
          </Link>
        </div>
      </div>
    </>
  );
}
