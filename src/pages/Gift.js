import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/solid";

import NavBar from "../components/demo/NavBar";

const steps = [
  {
    name: "Share some images and info about your project",
    description: "Input your trees details",
    status: "complete",
  },
  {
    name: "Submit your data For review",
    description: "Get your tree data reviewed",
    status: "current",
  },
  {
    name: "Review and sign an agreement",
    description: "Agree to gift your environmental services",
    status: "upcoming",
  },
  {
    name: "Do the same process year on year",
    description: "Show your trees are growing and healthy",
    status: "upcoming",
  },
  {
    name: "Year 1: Receive a gift to future certificate",
    description: "Share your actions with family and friends!",
    status: "upcoming",
  },
  {
    name: "Start a new gift",
    description: "...",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gift() {
  return (
    <div>
      <NavBar current="gift" />
      <div className="md:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="gift"></div>
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              HELP YOUR URBAN FOREST
            </h2>
            <h2 className="font-grotesk text-3xl text-gray-900 sm:text-4xl">
              Gift your environmental services to support Glasgow’s urban
              forest.
            </h2>
            <div className="pt-2 pb-2">
              <p className="text-lg leading-6 text-dark">
                Add your trees to Glasgow’s Nature Portfolio to gift the
                environmental services to fund the long term maintenance of the
                forest so that your kids and the kids of your kids can live in a
                cleaner and greener Glasgow!
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
      <div className="pt-5 pr-20">
        <div className="flex justify-end">
          <Link
            to="/"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
