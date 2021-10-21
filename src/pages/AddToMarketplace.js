import { CheckIcon, ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const pages = [
  { name: "Impact Planner", href: "/impact-planner", current: false },
];

const steps = [
  {
    name: "Calculate your impact",
    description: "Input your project details for an estimation.",
    status: "complete",
  },
  {
    name: "Review and sign protocol",
    description: "Stewardship, Growing and CarbonPlus.",
    status: "current",
  },
  {
    name: "Add to project marketplace",
    description: "Input additional info and upload your project.",
    status: "upcoming",
  },
  {
    name: "Ecosystem services SOLD",
    description: "Outcomes-buyers purchase your services.",
    status: "upcoming",
  },
  {
    name: "Year 0: Project begins",
    description: "Monitor and set a project baseline.",
    status: "upcoming",
  },
  {
    name: "Year 1: First payment",
    description: "Receive 10% of funding",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddToMarketplace() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="assets/TreesAI_logo_black.svg"
                alt="TreesAI Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="assets/TreesAI_logo_black.svg"
                alt="TreesAI Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#impact-planner"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#impact-planner"
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Impact Planner
              </a>
              <a
                href="#impact-planner"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Impact Manager
              </a>
              <a
                href="#impact-planner"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray mt-5" id="contact">
        <nav className="flex m-10" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Link
                    to={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <div className="relative max-w-7xl mx-auto md:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="add-to-market"></div>
          <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="font-grotesk text-3xl text-gray-900 sm:text-4xl">
                Sell your ecosystem services to fund your project
              </h2>
              <div className="pt-2 pb-2">
                <p className="text-lg leading-6 text-dark">
                  Add your project to the marketplace to sell its ecosystem
                  services.
                </p>
              </div>
              <nav aria-label="Progress">
                <ol className="overflow-hidden">
                  {steps.map((step, stepIdx) => (
                    <li
                      key={step.name}
                      className={classNames(
                        stepIdx !== steps.length - 1 ? "pb-10" : "",
                        "relative"
                      )}
                    >
                      {step.status === "complete" ? (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                              aria-hidden="true"
                            />
                          ) : null}
                          <a
                            href={step.href}
                            className="relative flex items-start group"
                          >
                            <span className="h-9 flex items-center">
                              <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                                <CheckIcon
                                  className="w-5 h-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span className="ml-4 min-w-0 flex flex-col">
                              <span className="text-xs font-semibold tracking-wide uppercase">
                                {step.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {step.description}
                              </span>
                            </span>
                          </a>
                        </>
                      ) : step.status === "current" ? (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                              aria-hidden="true"
                            />
                          ) : null}
                          <a
                            href={step.href}
                            className="relative flex items-start group"
                            aria-current="step"
                          >
                            <span
                              className="h-9 flex items-center"
                              aria-hidden="true"
                            >
                              <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                                <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                              </span>
                            </span>
                            <span className="ml-4 min-w-0 flex flex-col">
                              <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
                                {step.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {step.description}
                              </span>
                            </span>
                          </a>
                        </>
                      ) : (
                        <>
                          {stepIdx !== steps.length - 1 ? (
                            <div
                              className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex items-start group">
                            <span
                              className="h-9 flex items-center"
                              aria-hidden="true"
                            >
                              <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                              </span>
                            </span>
                            <span className="ml-4 min-w-0 flex flex-col">
                              <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                                {step.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {step.description}
                              </span>
                            </span>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
