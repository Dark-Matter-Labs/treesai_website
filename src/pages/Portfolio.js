import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Bar } from "react-chartjs-2";
import { XIcon } from "@heroicons/react/outline";

import NavBar from "../components/demo/NavBarGlasgow";

const mock_seq_arr = [
  11.30873456069503, 11.821495350815411, 12.35200886155292, 12.900619162733761,
  13.46766826884179, 14.053496013188948, 14.658439930993453, 15.282835151096904,
  15.927014296039076, 16.59130739019575, 17.276041775677683, 17.98154203568467,
  18.708129925002307, 19.456124307331436, 20.225841099137796,
  21.017593219713884, 21.831690547147815, 22.66843987989867, 23.528144903686098,
  24.411106163402962, 25.317621039775133, 26.247983730495292,
  27.202485235567735, 28.181413346608537, 29.18505263986074, 30.213684472683273,
  31.267586983292006, 32.34703509353443, 33.45230051449016, 34.58365175470226,
  35.74135413084781, 36.925669780668784, 38.13685767799598, 39.37517364969739,
  40.64087039440528, 41.93419750286898, 43.25540147980524, 44.60472576709907,
  45.9824107682598, 47.38869387398506, 48.82380948875107, 50.287989058308256,
  51.781461097994566, 53.30445122177889, 54.8571821719388, 56.43987384930426,
  58.05274334398689, 59.69600496653004, 61.36987027940768, 63.0745481288194,
];
const mock_water_arr = [
  310.03485139283066, 312.1493821239187, 314.25394721807925, 316.3481427154397,
  318.43159496390564, 320.50395941911376, 322.56491944185285,
  324.61418509947237, 326.6514919770009, 328.67660000296416, 330.68929229420104,
  332.6893740233478, 334.6766713120741, 336.65103015262656, 338.61231535975384,
  340.56040955465096, 342.49521218217114, 344.4166385622061, 346.3246189758235,
  348.2190977864824, 350.10003259640393, 351.96739343796924, 353.82116199983886,
  355.6613308873303, 357.4879029164643, 359.30089044098077, 361.1003147115341,
  362.88620526620815, 364.6585993514307, 366.4175413723263, 368.16308237151065,
  369.89527953531393, 371.6141957263997, 373.3198990417512, 375.0124623949902,
  376.6919631220055, 378.35848260888383, 380.01210594114593, 381.6529215733167,
  383.281021017881, 384.89649855269744, 386.49945094597655, 388.0899771979537,
  389.6681782984151, 391.23415699927307, 392.78801760140834, 394.3298657550321,
  395.8598082728519, 397.37795295535346, 398.88440842754113,
];

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
      data: mock_seq_arr.slice(0, 10),
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
      data: mock_water_arr.slice(0, 10),
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
  //Map related variables
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4.2518);
  const [lat] = useState(55.8642);
  const [zoom] = useState(11);

  // ES related variables
  // uncomment those spooky lines to get the yearly average
  //console.log(mock_seq_arr.slice(0, 10).reduce((a, b) => a + b, 0)/10);
  //console.log(mock_water_arr.slice(0, 10).reduce((a, b) => a + b, 0)/10);

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
      <NavBar current="invest" />
      <div className="relative bg-blue4">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            <p className="font-medium text-white">
              <span className="md:inline">
                Congratulations! You are supporting 10% of Glasgow’s carbon
                capacity production.
              </span>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
            <button
              type="button"
              className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray py-16 sm:py-24 lg:py-20 px-16">
        <div className="mt-10">
          <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
            Tesla’s Nature Portfolio
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
                  13.83 tCO2e
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
                <p className="text-2xl font-semibold text-blue2 ">319.4m³</p>
                <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                  per year
                </p>
              </dd>
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
        <div className="pt-10">
          <div className="flex justify-center">
            <button
              disabled={true}
              className="disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              🔽 Download Report(Coming Soon)
            </button>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-center">
            <button
              disabled
              className="disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4  hover:bg-blue4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to portfolio(Coming Soon)
            </button>
            <button
              disabled
              className="disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4  hover:bg-blue4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Renew Contract(Coming Soon)
            </button>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-end">
            <Link
              to="/invest-in-nature/glasgow"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4  hover:bg-blue4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
