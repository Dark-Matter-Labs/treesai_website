import { useState, useRef, useCallback } from "react";
import { ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { Bar, Pie } from "react-chartjs-2";
import { Link as AnchorLink } from "react-scroll";

import { unclusteredPointLayer } from "./layers";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";
import trees from "../data/trees.json";

const pieChartData = {
  labels: [
    "%Carbon sequestration",
    "%Stormwater retention",
    "%Flood control",
    "%Air quality improvement",
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

const pieChartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
    },
  },
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
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

const projects = [
  {
    id: 1,
    name: "Green space & active travel",
    location: "North Toryglen (TRA)",
    imageSrc: "assets/northtoryglen.jpg",
    imageAlt: "Project picture",
    activity: "Planting & Restoration",
    progress: "Completed",
  },
  {
    id: 2,
    name: "SuDS basin",
    location: "Early Braes Park",
    imageSrc: "assets/Early_Braes_basin.jpg",
    imageAlt: "Project picture",
    activity: "Reforestation",
    progress: "Completed",
  },
  {
    id: 3,
    name: "Glasgow Children's Woodland",
    location: "Castlemilk and Carmunnock",
    imageSrc: "assets/woodland.jpg",
    imageAlt: "Project picture",
    activity: "Planting",
    progress: "Completed",
  },
  {
    id: 4,
    name: "Community regeneration of Stalled Spaces",
    location: "across Glasgow",
    imageSrc: "assets/Stalled Spaces1.jpg",
    imageAlt: "Project picture",
    activity: "Maintenance",
    progress: "Completed",
  },
  {
    id: 5,
    name: "Weeforest",
    location: "Govan Road",
    imageSrc: "assets/wee_forest.jpg",
    imageAlt: "Project picture",
    activity: "Planting",
    progress: "In progress",
  },
  {
    id: 6,
    name: "Greenspace improvement & planting in NHS Eastwood Health and Care Centre",
    location: "East Renfrewshire",
    imageSrc: "assets/NHS.jpg",
    imageAlt: "Project picture",
    activity: "Planting & Restoration",
    progress: "In progress",
  },
  {
    id: 7,
    name: "Upcoming projects from Clyde Climate Forest",
    imageSrc: "assets/NHS.jpg",
    imageAlt: "Project picture",
    activity: "Planting",
    progress: "In progress",
  },
  {
    id: 8,
    name: "Upcoming projects from Metropolitan Glasgow Strategic Drainage Partnership",
    imageSrc: "assets/NHS.jpg",
    imageAlt: "Project picture",
    activity: "Planting",
    progress: "In progress",
  },
];

const faqs = [
  {
    id: 1,
    question: "What are environmental services?",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
  },
  {
    id: 2,
    question: "What environmental services do urban trees provide?",
    answer:
      "Urban trees provide a multitude of benefits, mostly best understood as regulating and provisioning services, such as: carbon sequestration, air pollutant absorption, stormwater retention, flood control, heat island effect reduction, cooling effect, biodiversity enhancement, noise reduction, water filtration. Other secondary benefits that we also observe are: mental health improvement, crime reduction, improved walkability, decreased crime rates, local economy enhancement.",
  },
  {
    id: 3,
    question: "How do we price environmental services in TreesAI?",
    answer:
      "We derive the economic value of environmental service through a direct non-use valuation method. Where we measure the value of regulating environmental services trees provide (such as carbon sequestration) rather than actual direct use of trees (such as timber). As we want to preserve and repurpose urban trees as civic assets, we estimate the avoided costs enjoyed by stakeholders from the delivery of environmental services. In Phase I pricing, we see tree value as the summation of avoided damage-cost to local stakeholders. In the next phases, we will socialize pricing benchmarks and move towards a willingness-to-pay method informed by local liability holders.",
  },
  {
    id: 4,
    question: "How do we calculate a city’s stewardship activities?",
    answer:
      "The amount of trees in each stewardship activity indicated in the demo are highly indicative and aimed at showing potential portfolio scenarios. These do not indicate an accurate representation of Glasgow’s urban forest. The are assumptions extracted by a variety of different sources, from the city open space map, to the cities 2015 itree report. 470,000 trees in the planting activity assumes that 70% of all all available space for planting is used, which has been estimated to be about 32% of Glasgow, and that 170,000 of that would be replenished of dead ash trees; 370,000 trees in the maintenance activity assumes that all established trees in public ownership receive advanced maintenance care (maure is defined by > 20cm dbh). \\n\\n 180,000 trees in the preservation activity assumes that all trees in vacant and derelict land in Council ownership are protected;",
  },
];

export default function Glasgow() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [viewport, setViewport] = useState({
    latitude: 55.8642,
    longitude: -4.2518,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
  });
  const [hoverInfo, setHoverInfo] = useState(null);
  const mapRef = useRef(null);

  const onClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getMap().getSource("trees");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }
      setViewport({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500,
      });
    });
  };

  const onHover = useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;
    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY,
          }
        : null
    );
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
        <div>
          <NavBarGlasgow />
          <div className="flex items-center mt-20 lg:ml-20 md:ml-20 sm:ml-10">
            <ChevronLeftIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <Link
              to="/invest-in-nature"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Back
            </Link>
          </div>
          <div className="mt-10 lg:ml-20 md:ml-20 sm:ml-10 mr-10">
            <div>
              <div>
                <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
                  Glasgow’s Urban Forest Portfolio
                </h2>
              </div>
            </div>
            <p className="mt-2">
              <i>TreesAI</i>{" "}
              <b>
                in Glasgow helps the city grow and maintain healthy urban
                forests, delivering multiple environmental services.
              </b>
            </p>
            <div className="bg-blue4 shadow sm:rounded-lg mt-10">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Invest in nature
                </h3>
                <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                  <div className="max-w-xl text-sm text-white">
                    <p>
                      Support urban forest projects to reach climate &
                      sustainability goals.
                    </p>
                  </div>
                  <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                    <Link
                      to="/invest-in-nature/glasgow/invest"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-blue4 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Start investing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-green-50 p-4 mt-5">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    This is an estimate. Learn about our{" "}
                    <AnchorLink to="faq" smooth={true}>
                      <u className="pointer-cursor"> methodology</u>.
                    </AnchorLink>
                  </h3>
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900 pb-5">
              Environmental services
            </h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                    CO₂ sequestration
                  </p>
                </dt>
                <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-green-600 ">
                    8,140 tCO2e
                  </p>
                  <p className="text-gray4 ml-2 flex items-baseline text-sm font-regular">
                    per year
                  </p>
                </dd>
              </div>
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                    Avoided runoff
                  </p>
                </dt>
                <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-blue2 ">
                    812,000m³
                  </p>
                  <p className="text-gray4 ml-2 flex items-baseline text-sm font-regular">
                    per year
                  </p>
                </dd>
              </div>
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                    Air quality improvement
                  </p>
                </dt>
                <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-green-600 ">
                    44.38(PM2.5)
                  </p>
                  <p className="text-gray4 ml-2 flex items-baseline text-sm font-regular">
                    per year
                  </p>
                </dd>
              </div>
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                    Biodiversity
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
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
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
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
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
            <div className="mt-10 flex flex-wrap content-around bg-white flex-space">
              <div>
                <h4 className="text-md leading-6 font-medium text-gray-900 mr-20">
                  Indicative valuation
                </h4>
              </div>
              <div>
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
              <div className="ml-20">
                <p>£7.1m</p>
              </div>
            </div>
            <div className="">
              <h3 className="pb-5 text-lg leading-6 font-medium text-gray-900 mt-10">
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
                    <p className="text-2xl font-semibold text-blue2 ">16.6%</p>
                  </dd>
                </div>
              </div>
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden mt-2">
                <dt>
                  <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                    Tree Story of the month
                  </p>
                </dt>
                <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-500">
                    “And I watered it in fears. Night and morning with my tears:
                    And I sunned it with smiles. And with soft deceitful wiles.”
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-5 bg-white mt-10">
              <h3 className="pb-5 text-lg leading-6 font-medium text-gray-900 mt-10">
                Stewardship activities
              </h3>
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      We are currently defining stewardship activities. Give us
                      feedback and learn more about our{" "}
                      <Link to="/faq">
                        <u>methodology</u>.
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <Bar data={barChartData} options={barChartOptions} />
            </div>
            <div className="bg-white py-16 sm:py-24 lg:py-20">
              <h3 className="text-l text-gray-900 sm:text-xl py-5">
                Portfolio projects
              </h3>
              <div className="grid gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                  <div key={project.id} className="group relative">
                    <div className="w-full h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
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
                          {project.location}
                        </p>
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
            <div className="bg-blue4 shadow sm:rounded-lg mt-10">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">
                  Invest in nature
                </h3>
                <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                  <div className="max-w-xl text-sm text-white">
                    <p>
                      Support urban forest projects to reach climate &
                      sustainability goals.
                    </p>
                  </div>
                  <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                    <Link
                      to="/invest-in-nature/glasgow/invest"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-blue4 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Start investing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white faq">
            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                <div className="mt-6 pt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="bg-gray p-5">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {faq.answer}
                        </dd>
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
          </div>
        </div>
        <div className="h-full w-full right">
          <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v10"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onClick={onClick}
            ref={mapRef}
            onHover={onHover}
            interactiveLayerIds={["trees"]}
          >
            <Source id="trees" type="geojson" data={trees} cluster={false}>
              <Layer {...unclusteredPointLayer} />
            </Source>
            {hoverInfo && (
              <div
                className="tooltip bg-white pl-10 pt-5 pb-5"
                style={{ left: hoverInfo.x, top: hoverInfo.y }}
              >
                <div>🌳</div>
                <div>
                  <b>Tree ID</b>: {hoverInfo.feature.properties.Tree_Id}
                </div>
                <div>
                  <b>Species</b>: {hoverInfo.feature.properties.Species}
                </div>
                <div>
                  <b>Height</b>: {hoverInfo.feature.properties.Height}
                </div>
                <div>
                  <b>DBH</b>: {hoverInfo.feature.properties.Spread}
                </div>
                <div>
                  <b>Location</b>: {hoverInfo.feature.properties.Location}
                </div>
                <div>
                  <b>Visit type</b>: {hoverInfo.feature.properties.Visit_Type}
                </div>
                <div>
                  <b>Visit date</b>: {hoverInfo.feature.properties.Visited}
                </div>
              </div>
            )}
          </ReactMapGL>
        </div>
      </div>
    </>
  );
}
