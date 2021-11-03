import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar(props) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="assets/TreesAI_logo_black.svg"
                    alt="TreesAI logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="assets/TreesAI_logo_black.svg"
                    alt="TreesAI logo"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <Link
                    to="/become-a-steward"
                    className={classNames(
                      props.current === "steward"
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500",
                      "over:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    Become a steward
                  </Link>
                  <Link
                    to="/invest-in-nature"
                    className={classNames(
                      props.current === "invest"
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500",
                      "over:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    Invest in nature
                  </Link>
                  <Link
                    to="/gift"
                    className={classNames(
                      props.current === "gift"
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500",
                      "over:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    Gift to Future
                  </Link>
                  <Link
                    to="/faq"
                    className={classNames(
                      props.current === "faq"
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500",
                      "over:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    href="mailto:treesai@darkmatterlabs.org"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Become a steward
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Invest in nature
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Gift to Future
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                FAQ
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
