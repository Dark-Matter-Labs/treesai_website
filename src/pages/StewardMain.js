import { Link } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/solid";
import NavBar from "../components/demo/NavBar";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

const activities = [
  {
    id: 1,
    name: "Preservation",
    imageSrc: "assets/Preservation.png",
    imageAlt: "Preservation picture",
    detail: "Legally prevent felling in the long term",
    progress: "",
  },
  {
    id: 2,
    name: "Maintenance",
    imageSrc: "assets/Maintenance.png",
    imageAlt: "Maintenance picture",
    detail: "Intensive long term care",
    progress: "",
  },
  {
    id: 3,
    name: "Planting",
    imageSrc: "assets/Planting.png",
    imageAlt: "Planting picture",
    detail: "Planting the right tree at the right place",
    progress: "",
  },
  {
    id: 4,
    name: "Restoration",
    imageSrc: "assets/Restoration.png",
    imageAlt: "Restoration picture",
    detail: "Targeted habitat nurturing",
    progress: "Coming soon",
  },
  {
    id: 5,
    name: "Seedling",
    imageSrc: "assets/Seedling.png",
    imageAlt: "Seedling picture",
    detail: "Grow healthy seedlings locally",
    progress: "Coming soon",
  },
  {
    id: 6,
    name: "Upcycling",
    imageSrc: "assets/Upcycling.png",
    imageAlt: "Upcycling picture",
    detail: "Sustainably manage trees' end of life",
    progress: "Coming soon",
  },
];

const faqs = [
  {
    id: 1,
    question: "What do we mean by stewardship and nature steward?",
    answer:
      "By stewardship we mean the responsible use and protection of the natural environment through innovative and sustainable practices. This is a multi-layered concept, aimed at combining environmental improvement with community building, and uses actions to achieve outcomes. ",
  },
];

export default function StewardMain() {
  return (
    <>
      <NavBar />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-black y-16 sm:py-24 lg:py-20 px-16">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <Link
                    to="/become-a-steward"
                    className="ml-4 text-sm font-medium text-white hover:text-gray-700"
                  >
                    Steward
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <div className="mt-40">
            <h2 className="font-grotesk mt-2 text-3xl text-white sm:text-4xl">
              Join the stewardship revolution
            </h2>
            <p className="mt-3 text-lg font-regular text-white">
              Cover up to 10% of your maintenance costs by preserving street
              trees, rewilding your local park or replenishing the urban forest.
            </p>
            <p className="mt-3 text-lg font-semibold leading-6 text-white">
              Pick your city
            </p>
            <select className="mt-1 flex rounded-md shadow-sm">
              <option value="Glasgow">Glasgow</option>
            </select>
            <div className="flex justify-end">
              <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="lets-invest"></div>
      </div>
      <div className="mt-5 y-16 sm:py-24 lg:py-20 px-16">
        <div className="rounded-md bg-green-50 p-4 mt-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                Activities are in progress. Give us feedback and learn about our{" "}
                <u>methodology</u>
              </h3>
            </div>
          </div>
        </div>
        <h3 className="text-l text-gray-900 sm:text-xl py-5">
          What are the elegible activities?
        </h3>
        <div className="grid gap-y-10 gap-x-8 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
          {activities.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="">
                <img
                  src={activity.imageSrc}
                  alt={activity.imageAlt}
                  className=""
                />
              </div>
              <div className="mt-0 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {activity.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray2">{activity.detail}</p>
                  <p className="mt-1 text-sm text-gray2">{activity.progress}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">
                    Interested in investing in nature?
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green1">
                  Discover portfolios of projects or individual actions that can
                  reduce your carbon footprint and climate-related liabilities.
                </p>
                <Link
                  to="/invest-in-nature/glasgow/invest"
                  className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="-mt-6">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={banner2}
                alt="Nature stewards"
              />
            </div>
          </div>
        </div>
        <div className="max-w-8xl mx-auto py-16 px-2 sm:px-6 lg:px-2">
          <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">
                    Why not donate your trees’ ecosystem services to future
                    generations?
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  You are the lucky owner of a wild backgarden, yard or field
                  and plan to continue caring for in in the coming 5 years. Why
                  not donating the ecosysmte services that your tree generate to
                  future Glaswegians?
                </p>
                <a
                  href="/"
                  className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="-mt-6">
              <img
                className="transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={banner3}
                alt="Nature stewards"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  <Link
                    type="button"
                    to="/faq"
                    className="inline-flex items-center px-4 py-2 mt-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Learn more
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}