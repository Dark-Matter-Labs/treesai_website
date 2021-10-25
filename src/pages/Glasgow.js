import { useState, useEffect, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

const pages = [{ name: "Glasgow", href: "#", current: true }];

export default function Glasgow() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4.2518);
  const [lat] = useState(55.8642);
  const [zoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.scrollZoom.disable();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBarGlasgow />
      <div className="bg-gray">
        <div className="max-w-4xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:px-4">
          <div className="text-center">
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-3xl">
              Welcome to Glasgow’s Trees as Infrastructure
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              TreesAI in Glasgow helps the city grow Nature-based Solutions at
              scale.
            </p>
          </div>
        </div>
        <div className="bg-gray py-16 sm:py-24 lg:py-20 px-16">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <Link
                    to="/invest-in-nature"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Invest
                  </Link>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mb-10">
            <div className="py-10">
              <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
                Glasgow’s Nature Atlas{" "}
              </h2>
              <p>
                <b>
                  This atlas hosts a portion of a Glasgow magical natural
                  ecosystem, from ancient street trees to wild meadows.
                </b>{" "}
                <br />
                Its power lies in cooling down heatwaves, retaining water,
                storing carbon and reducing polluted particulate matters
                ingested by our children.{" "}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gcc hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Invest
            </button>
          </div>
          <div className="h-full w-full">
            <div ref={mapContainer} className="map-container" />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
            <div className="bg-indigo-600">
              <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">
                    Get rewarded for caring for Glasgow’s Nature
                  </span>
                </h2>
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700"
                    >
                      Steward
                    </a>
                  </div>
                  <div className="ml-3 inline-flex">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue">
              <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">
                    Gift your garden’s environmental services to future
                    generations
                  </span>
                </h2>
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700"
                    >
                      Gift
                    </a>
                  </div>
                  <div className="ml-3 inline-flex">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green4">
              <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">
                    Invest in Glasgow’s environmental services
                  </span>
                </h2>
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700"
                    >
                      Invest
                    </a>
                  </div>
                  <div className="ml-3 inline-flex">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
