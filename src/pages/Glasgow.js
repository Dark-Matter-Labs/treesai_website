import { useState, useEffect, useRef } from "react";
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Bar, Pie } from "react-chartjs-2";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

const pages = [{ name: "Glasgow", href: "#", current: true }];

const pieChartData = {
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

const barChartData = {
  labels: [
    "Planting",
    "Maintenance",
    "Preservation",
    "Restoration",
    "Seedling",
    "Upcycling",
  ],
  datasets: [
    {
      label: "Active trees",
      data: [367500, 470400, 176400, 20000, 20000, 20000],
      backgroundColor: [
        "#47B881",
        "#47B881",
        "#47B881",
        "#C4C4C4",
        "#C4C4C4",
        "#C4C4C4",
      ],
    },
  ],
};

const barChartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const projects = [
  {
    id: 1,
    name: "Camlachie Tiny Forest",
    imageSrc: "assets/project1.png",
    imageAlt: "Project picture",
    activity: "Preservation",
    progress: "In progress",
  },
  {
    id: 2,
    name: "River Clyde Bank ",
    imageSrc: "assets/project2.png",
    imageAlt: "Project picture",
    activity: "Reforestation",
    progress: "In progress",
  },
  {
    id: 3,
    name: "Port Dundas Tiny Project",
    imageSrc: "assets/project3.png",
    imageAlt: "Project picture",
    activity: "Restoration",
    progress: "Completed",
  },
  {
    id: 4,
    name: "Camlachie Tiny Forest",
    imageSrc: "assets/project1.png",
    imageAlt: "Project picture",
    activity: "Restoration",
    progress: "Completed",
  },
  {
    id: 5,
    name: "River Clyde Bank Reforestation",
    imageSrc: "assets/project2.png",
    imageAlt: "Project picture",
    activity: "Maintenance",
    progress: "In progress",
  },
  {
    id: 6,
    name: "Port Dundas Tiny Project",
    imageSrc: "assets/project3.png",
    imageAlt: "Project picture",
    activity: "Planting",
    progress: "Completed",
  },
];

const faqs = [
  {
    id: 1,
    question: "What are Environmental Services?",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
  },
];

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
              <div className="mt-5 flex flex-wrap content-around bg-white flex-space">
                <div>
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    Indicative valuation
                  </h4>
                </div>
                <div className="pie">
                  <Pie data={pieChartData} />
                </div>
                <div className="">
                  <p>£7.1m</p>
                </div>
              </div>

              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-10">
                Highlights
              </h3>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Trees
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-green-600 ">
                      2,100,000
                    </p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Canopy Cover
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-blue2 ">15%</p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Forest Density
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-green-600 ">
                      112
                    </p>
                    <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                      per hectares
                    </p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Located in parks
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-green-600 ">
                      55%
                    </p>
                    <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                      of all trees
                    </p>
                  </dd>
                </div>
                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Most Common Species
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                      ash, hawthorn and alder
                    </span>
                  </dd>
                </div>

                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                  <dt>
                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                      Tree Story of the month
                    </p>
                  </dt>
                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                    <p className="text-2xl font-semibold text-gray-500">
                      “And I watered it in fears. Night and morning with my
                      tears: And I sunned it with smiles. And with soft
                      deceitful wiles.”
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-5 bg-white">
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
                        Activities in progrees. Give us feedabck and learn about
                        our <u>methodology</u>
                      </h3>
                    </div>
                  </div>
                </div>
                <Bar data={barChartData} options={barChartOptions} />
              </div>
              <div className="mt-5">
                <h3 className="text-l text-gray-900 sm:text-xl py-5">
                  Projects
                </h3>
                <div className="grid gap-y-10 gap-x-8 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                  {projects.map((project) => (
                    <div key={project.id} className="group relative">
                      <div className="">
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className=""
                        />
                      </div>
                      <div className="mt-0 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {project.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray2">
                            {project.activity}
                          </p>
                          <p className="mt-1 text-sm text-gray2">
                            {project.progress}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                          <span className="block">
                            Get rewarded to care for Glasgow’s Nature
                          </span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                          - Find out all about Glasgow’s Nature.
                          <br />
                          - Forecast the performance of trees. <br />
                          - List a new projects on a city’s atlas.
                          <br />
                          - Access to finance.
                          <br />
                          - Cover your maintenance costs.
                          <br />
                          - Share the value of your environmental services.
                          <br />
                        </p>
                        <a
                          href="/nature-steward"
                          className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                    <div className="-mt-6">
                      <img
                        className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                        src={banner1}
                        alt="Nature stewards"
                      />
                    </div>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                  <div className="bg-green3 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                          <span className="block">
                            Invest in Glasgow’s environmental services
                          </span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-green1">
                          - Offset your emissions and meet your 2030 net zero
                          targets.
                          <br />
                          - Mitigate your strategic and climate related risks.
                          <br />
                          - Restore your historical emissions and impact.
                          <br />
                          - Customisable and trusted impact reports.
                          <br />
                          - Landscape scale NbS portfolio management.
                          <br />
                          - Secure municipality backed investment. <br />
                        </p>
                        <a
                          href="/nature-steward"
                          className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                          Get started
                        </a>
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
                  <div className="bg-blue rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                      <div className="lg:self-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                          <span className="block">
                            Be the first one to gift your garden’s environmental
                            services to future generations!
                          </span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                          - Scan your trees.
                          <br />
                          - Understand the environmental services of the trees
                          in your property.
                          <br />
                          - Share the environmental services with future
                          Glaswegians.
                          <br />
                        </p>
                        <a
                          href="/nature-steward"
                          className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                          Get started
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
                      <dd className="mt-2 text-base text-gray-500">
                        {faq.answer}
                      </dd>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 mt-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Learn more
                      </button>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
