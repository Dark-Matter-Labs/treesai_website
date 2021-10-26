import { useState, useEffect, useRef } from "react";
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Pie } from "react-chartjs-2";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

const pages = [{ name: "Glasgow", href: "#", current: true }];

const data = {
  labels: [
    "Carbon sequestration",
    "Stormwater retention",
    "Flood control",
    "Air quality improvement",
  ],
  datasets: [
    {
      data: [54, 30, 3, 5],
      backgroundColor: ["#10B981", "#00000", "#ACB9FF", "#065F46"],
      borderColor: ["#10B981", "#00000", "#ACB9FF", "#065F46"],
      borderWidth: 1,
    },
  ],
};

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
          <div className="px-40 center">
            <div className="rounded-md bg-green-50 p-4 mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    This is an estimate. Learn about our <u>methodology</u>
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 pt-10">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Environmental Services
              </h3>

              <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                Physical Flows
              </h4>

              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      CO2 removal
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-green-600 ">
                      8,140 tCO2e
                    </p>
                    <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                      per year
                    </p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Avoided runoff
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-blue2 ">
                      812,000m³
                    </p>
                    <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                      per year
                    </p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Air quality improvement
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-green-600 ">
                      44.38(PM2.5)
                    </p>
                    <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                      per year
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
                      Heat island effect reduction
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                      Coming soon
                    </span>
                  </dd>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap content-center bg-white">
                <div>
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    Portfolio
                  </h4>
                </div>
                <div>
                  <p>£5m</p>
                </div>

                <div>
                  <Pie data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
