import { useState, useRef, useCallback } from "react";
import { ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { Bar, Pie } from "react-chartjs-2";

import { unclusteredPointLayer } from "./layers";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";
import letsInvestImage from "../images/letsinvest.jpeg";
import InvestBanner from "../images/InvestBanner.png";
import banner3 from "../images/banner3.png";
import trees from "../data/trees.json";

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

const projects = [
  {
    id: 1,
    name: "Green space & active travel",
    location: "North Toryglen (TRA)",
    imageSrc: "assets/northtoryglen.jpg",
    imageAlt: "Project picture",
    activity: "Planting & Restoration",
    progress: "Complete",
  },
  {
    id: 2,
    name: "SuDS basin",
    location: "Early Braes Park",
    imageSrc: "assets/Early_Braes_basin.jpg",
    imageAlt: "Project picture",
    activity: "Reforestation",
    progress: "Complete",
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
    progress: "Ongoing",
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
    question: "What are Environmental Services?",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
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
          <div className="flex items-center mt-20 ml-20">
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
          <div className="mt-10 ml-20 mr-10">
            <div className="flex">
              <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
                Glasgow’s Nature Atlas
              </h2>
              <Link
                to="/invest-in-nature/glasgow/invest"
                className="ml-20 mt-2 mb-4 bg-blue4 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-blue2"
              >
                Invest
              </Link>
            </div>
            <p>
              <b>
                This atlas hosts a portion of a Glasgow magical natural
                ecosystem, from ancient street trees to wild meadows.
              </b>{" "}
              <br />
              Its power lies in cooling down heatwaves, retaining water, storing
              carbon and reducing polluted particulate matters ingested by our
              children.{" "}
            </p>
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
                    This is an estimate. Learn about our
                    <Link to="/faq">
                      <u>methodology</u>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
              Environmental Services
            </h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                    CO2 removal
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
            <div className="mt-5 flex flex-wrap content-around bg-white flex-space">
              <div>
                <h4 className="text-md leading-6 font-medium text-gray-900 pr-10">
                  Indicative valuation
                </h4>
              </div>
              <div>
                <Pie data={pieChartData} />
              </div>
              <div className="pl-10">
                <p>£7.1m</p>
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
                      Activities are in progrees. Give us feedabck and learn
                      about our{" "}
                      <Link to="/faq">
                        <u>methodology</u>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <Bar data={barChartData} />
            </div>
          </div>
        </div>
        <div className="h-full w-full">
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
                <p className="text-2xl font-semibold text-green-600 ">112</p>
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
                <p className="text-2xl font-semibold text-green-600 ">55%</p>
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
                  “And I watered it in fears. Night and morning with my tears:
                  And I sunned it with smiles. And with soft deceitful wiles.”
                </p>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="bg-white py-16 sm:py-24 lg:py-20 px-16">
          <h3 className="text-l text-gray-900 sm:text-xl py-5">Projects</h3>
          <div className="grid gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
        <div className="center">
          <div className="flex-shrink-0 pt-10">
            <div className="mt-5">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-green4 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div className="lg:self-center">
                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">
                          Get rewarded to care for Glasgow’s Nature
                        </span>
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-white">
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
                      <Link
                        to="/become-a-steward"
                        className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-green4 hover:bg-indigo-50"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                  <div className="-mt-6">
                    <img
                      className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                      src={letsInvestImage}
                      alt="Nature stewards"
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-blue4 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div className="lg:self-center">
                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">
                          Invest in Glasgow’s environmental services
                        </span>
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-white">
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
                      <Link
                        to="/invest-in-nature/glasgow/invest"
                        className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue4 hover:bg-indigo-50"
                      >
                        Get started
                      </Link>
                      <Link
                        to="/invest-in-nature/glasgow/invest/portfolio"
                        className="mt-8 ml-4 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue4 hover:bg-indigo-50"
                      >
                        View a sample portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="-mt-6">
                    <img
                      className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                      src={InvestBanner}
                      alt="Nature stewards"
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto py-16 px-2 sm:px-6 lg:px-2">
                <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="pt-10 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
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
                        - Understand the environmental services of the trees in
                        your property.
                        <br />
                        - Share the environmental services with future
                        Glaswegians.
                        <br />
                      </p>
                      <Link
                        to="/gift"
                        className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                      >
                        Get started
                      </Link>
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
    </>
  );
}
