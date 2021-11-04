import { Link } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { Link as AnchorLink } from "react-scroll";
import NavBar from "../components/demo/NavBar";
import InvestBanner from "../images/InvestBanner.png";
import banner3 from "../images/banner3.png";
import letsInvest from "../images//letsinvest.jpeg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const activities = [
  {
    id: 3,
    name: "Planting",
    imageSrc: "assets/Planting.png",
    imageAlt: "Planting picture",
    detail: "Planting the right tree at the right place.",
    progress: "",
  },
  {
    id: 2,
    name: "Maintenance",
    imageSrc: "assets/Maintenance.png",
    imageAlt: "Maintenance picture",
    detail: "Intensive long-term care.",
    progress: "",
  },
  {
    id: 1,
    name: "Preservation",
    imageSrc: "assets/Preservation.png",
    imageAlt: "Preservation picture",
    detail: "Legally prevent unnecessary felling.",
    progress: "",
  },
  {
    id: 4,
    name: "Restoration",
    imageSrc: "assets/Restoration.png",
    imageAlt: "Restoration picture",
    detail: "Targeted habitat nurturing(coming soon).",
    progress: "Coming soon",
  },
  {
    id: 5,
    name: "Seedling",
    imageSrc: "assets/Seedling.png",
    imageAlt: "Seedling picture",
    detail: "Grow healthy seedlings locally(coming soon).",
    progress: "Coming soon",
  },
  {
    id: 6,
    name: "Upcycling",
    imageSrc: "assets/Upcycling.png",
    imageAlt: "Upcycling picture",
    detail: "Sustainably manage trees' end of life(coming soon).",
    progress: "Coming soon",
  },
];

const faqs = [
  {
    id: 1,
    question: "What do we mean by stewardship and nature steward?",
    answer:
      "By stewardship, we mean the responsible use and protection of the natural environment through innovative and sustainable practices, such as preservation, maintenance, restoration, disease management and others. Nature stewards are the ‘doers’, the ones that go out and execute on sustainable practices, through direct action and management.",
  },
  {
    id: 2,
    question: "What is TreesAI's relationship to nature stewards?",
    answer:
      "TreesAI delivers monitoring and forecasting capabilities of urban forest health and evolution to help inform nature stewards' decisions to optimise for natural regeneration. Both parties are part of a non-binding protocol of stewardship practices that details optimal arboricultural techniques to be followed by nature stewards, thus making them eligible for BCB financing.",
  },
];

export default function StewardMain() {
  return (
    <>
      <NavBar current="steward" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-black y-16 sm:py-24 lg:py-20 px-16">
          <div className="mt-20">
            <h2 className="font-grotesk lg:text-5xl md:text-4xl sm:text-4xl text-white">
              Join the stewardship revolution
            </h2>
            <p className="mt-3 text-lg font-regular text-white">
              Upload your urban forest project to a city portfolio and discover
              funding opportunities.
            </p>
            <p className="mt-10 text-lg font-semibold leading-6 text-white">
              Select your city
            </p>
            <div className="flex">
              <div>
                <select className="mt-1 flex rounded-md shadow-sm">
                  <option value="Glasgow">Glasgow</option>
                </select>
              </div>
              <div className="mt-2">
                <Link
                  to="/become-a-steward/glasgow/steward"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Upload a project
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lets-invest"></div>
      </div>
      <div className="mt-5 y-16 sm:py-24 lg:py-20 lg:px-16 md:px-16 sm:px-8">
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
                We are currently defining stewardship activities. Give us
                feedback and learn more about our{" "}
                <AnchorLink to="faq" smooth={true}>
                  <u className="pointer-cursor">methodology</u>
                </AnchorLink>
                .
              </h3>
            </div>
          </div>
        </div>
        <h3 className="text-l text-gray-900 sm:text-xl py-5">
          Eligible stewardship activities
        </h3>
        <div className="grid gap-y-8 gap-x0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden lg:aspect-none ">
                <img
                  src={activity.imageSrc}
                  alt={activity.imageAlt}
                  className={classNames(
                    activity.progress === "Coming soon" ? "" : "",
                    ""
                  )}
                />
              </div>
              <div className="mt-0 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {activity.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray2">{activity.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-8xl py-16 px-2 sm:px-4 lg:px-0">
          <div className="bg-green4 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Become a nature steward</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Upload your urban forest project and discover funding
                  opportunities.
                </p>
                <Link
                  to="/become-a-steward/glasgow/steward"
                  className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-green4 hover:bg-indigo-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={letsInvest}
                alt="Nature stewards"
              />
            </div>
          </div>
        </div>
        <div className="max-w-8xl py-10 px-4 sm:px-4 lg:px-0">
          <div className="bg-blue4 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Invest in nature</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Support urban forest projects to reach climate &
                  sustainability goals.
                </p>
                <Link
                  to="/invest-in-nature"
                  className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue4 hover:bg-indigo-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={InvestBanner}
                alt="Nature stewards"
              />
            </div>
          </div>
        </div>
        <div className="max-w-8xl py-10 px-2 sm:px-4 lg:px-0">
          <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Gift to future!</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  Be part of a growing movement and learn how to take care of
                  healthy trees.
                </p>
                <Link
                  to="/gift"
                  className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={banner3}
                alt="Nature stewards"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray" id="faq">
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
