/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function ImpactManager() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4.2568);
  const [lat] = useState(55.8508);
  const [zoom] = useState(11);

  const products = [
    {
      id: 1,
      name: "Camlachie Tiny Forest",
      href: "#",
      imageSrc: "assets/1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "In progress",
    },
    {
      id: 2,
      name: "River Clyde Bank Reforestation",
      href: "#",
      imageSrc: "assets/2.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "In progress",
    },
    {
      id: 3,
      name: "Port Dundas Tiny Project",
      href: "#",
      imageSrc: "assets/3.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "In progress",
    },
  ];

  useEffect(() => {

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el).setLngLat([-4.2568, 55.8508]).addTo(map.current); // add the marker to the map

    // eslint-disable-next-line
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
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
                    <Link
                      to="/impact-planner"
                      className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Impact Planner
                    </Link>
                    <a
                      href="#impact-manager"
                      className="border-indigo-500  text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
                <div className="-mr-2 flex items-center sm:hidden">
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
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <div className="h-screen flex overflow-hidden bg-white ml-2">
        {/* Static sidebar for desktop */}
        <div className="flex flex-shrink-0">
          <div className="flex flex-col panel-w">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    <div className="space-y-8 divide-y divide-gray-200">
                      <div>
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Impact Manager
                          </h3>
                          <h2 className="mt-1 text-lg text-gray-500">
                            Glasgow
                          </h2>
                          <div className="flex justify-end">
                            <Link to="/add-to-marketplace">
                              <button className="ml-3 mr-4 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Buy ecosystem services
                              </button>
                            </Link>
                          </div>
                        </div>
                        <h4 className="text-md leading-6 font-medium text-gray-900">
                          Ecosystem services market
                        </h4>
                      </div>
                      <div className="flex-shrink-0 pt-10">
                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                          <dt>
                            <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                              CO2 removal
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-green-600 ">
                              8,000 tCO2e
                            </p>
                            <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                              over 50 years
                            </p>
                          </dd>
                        </div>

                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                          <dt>
                            <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                              Stormwater retention
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-blue2 ">
                              27,300 m3
                            </p>
                            <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                              over 50 years
                            </p>
                          </dd>
                        </div>

                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                          <dt>
                            <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                              Flood control
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                              Coming soon
                            </span>
                          </dd>
                        </div>

                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                          <dt>
                            <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                              Air quality improvement
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                              Coming soon
                            </span>
                          </dd>
                        </div>

                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                          <dt>
                            <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                              Heat island effect
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                              Coming soon
                            </span>
                          </dd>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Portfolio
                    </h4>
                    <p>£5m</p>
                    <Pie data={data} />

                    <div className="bg-white">
                      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h4 className="text-md leading-6 font-medium text-gray-900">
                          Projects
                        </h4>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products.map((product) => (
                            <div key={product.id} className="group relative">
                              <div className="">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className=""
                                />
                              </div>
                              <div className="mt-0 flex justify-between">
                                <div>
                                  <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                      />
                                      {product.name}
                                    </a>
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0">
                <div className="h-full w-full rounded-lg">
                  <div ref={mapContainer} className="map-container" />
                </div>
              </div>
              {/* End main area */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
