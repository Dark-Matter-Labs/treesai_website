import { Fragment, Component } from "react";
import { Link } from "react-scroll";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "products" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Team", href: "team" },
  { name: "Reports", href: "reports" },
  { name: "Get in touch", href: "contact" },
];

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <Popover as="header" className="relative">
        {({ close }) => (
          <>
            {this.state.show && (
              <div className="relative bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                  <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-white">
                      <span className="md:hidden">
                        TreesAI is a proud recipient of Google.org’s Impact
                        Challenge on Climate
                      </span>
                      <span className="hidden md:inline">
                        TreesAI is a proud recipient of Google.org’s Impact
                        Challenge on Climate
                      </span>
                      <span className="block sm:ml-2 sm:inline-block">
                        <a
                          href="https://blog.google/outreach-initiatives/sustainability/these-11-organizations-are-building-greener-europe/"
                          className="text-white font-bold underline"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {" "}
                          Learn more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                    <button
                      onClick={() => {
                        this.setState({ show: !this.state.show });
                      }}
                      type="button"
                      href="#hide"
                      id="close"
                      className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Dismiss</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-black pt-6">
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="https://treesai.netlify.app/">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                        alt=""
                      />
                    </a>
                    <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                      TreesAI
                    </h2>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:flex md:ml-10">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        smooth={true}
                        key={item.name}
                        className="text-base font-medium text-white hover:text-gray-300 pointer-cursor"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  <a
                    href="http://eepurl.com/hFsY1n"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                  >
                    Sign up
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              show={close}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }
}
