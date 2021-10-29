import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Bar } from "react-chartjs-2";

import NavBar from "../components/demo/NavBarGlasgow";

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

const carbon_data = {
  labels: [
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ],
  datasets: [
    {
      data: [9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42],
      backgroundColor: ["#10B981"],
      borderColor: ["#10B981"],
      borderWidth: 1,
    },
  ],
};

const carbon_options = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
      },
      title: {
        display: true,
        text: "Carbon stored (tCO2e)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Year",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const stormwater_data = {
  labels: [
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ],
  datasets: [
    {
      data: [9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42],
      backgroundColor: ["#3B82F6"],
      borderColor: ["#3B82F6"],
      borderWidth: 1,
    },
  ],
};

const stormwater_options = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
      },
      title: {
        display: true,
        text: "Stormwater retained (m³)",
      },
    },
    x: {
      title: {
        display: true,
        text: "Years",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const faqs = [
  {
    id: 1,
    question: "Have more questions?",
    answer: "",
  },
  {
    id: 2,
    question: "Want to know more about the service?",
    answer: "",
  },
];

export default function Portfolio() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4.2518);
  const [lat] = useState(55.8642);
  const [zoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker({ color: "green" })
      .setLngLat([-4.2568, 55.8508])
      .addTo(map.current); //Laurieston
    new mapboxgl.Marker({ color: "green" })
      .setLngLat([-4.2405, 55.87])
      .addTo(map.current); //Slighthill
    new mapboxgl.Marker({ color: "green" })
      .setLngLat([-4.1412, 55.8922])
      .addTo(map.current); //North Toryglen

    map.current.scrollZoom.disable();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gray py-16 sm:py-24 lg:py-20 px-16">
        <div className="mt-10">
          <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
            Natasha’s Nature Portfolio
          </h2>
          <p className="mt-3 text-lg font-regular text-gray-500">
            This is a sample portfolio to track your investments in time
          </p>
          <h3 className="text-l text-gray-900 sm:text-xl py-5">
            Outcomes by 2030
          </h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
            <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
              <dt>
                <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                  Carbon
                </p>
              </dt>
              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-green-600 ">
                  800 tCO2e
                </p>
                <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                  per year
                </p>
              </dd>
            </div>
            <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
              <dt>
                <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                  Water
                </p>
              </dt>
              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-blue2 ">27,300m³</p>
                <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                  per year
                </p>
              </dd>
            </div>
          </div>
        </div>
        <h3 className="text-l text-gray-900 sm:text-xl py-5">
          Activities in portfolio
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="h-full w-full">
            <div ref={mapContainer} className="map-container" />
          </div>
          <div className="mt-5">
            <div className="grid gap-y-10 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
                        <span aria-hidden="true" className="absolute inset-0" />
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
          </div>
        </div>
      </div>
      <div className="bg-gray py-16 sm:py-24 lg:py-20 px-16">
        <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
          Your portfolio performance
        </h2>
        <p className="mt-3 text-lg font-regular text-gray-500">
          Carbon stored over time
        </p>
        <div className="chart-size">
          <Bar data={carbon_data} options={carbon_options} />
        </div>
        <p className="mt-3 text-lg font-regular text-gray-500">
        Water retained over time
        </p>
        <div className="chart-size">
          <Bar data={stormwater_data} options={stormwater_options} />
        </div>
        <div className="pt-10">
          <div className="flex justify-end">
            <Link
              to="/invest-in-nature/glasgow"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return home
            </Link>
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
