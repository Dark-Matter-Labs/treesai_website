import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import NavBar from "../components/demo/NavBar";
import letsInvestImage from "../images/letsinvest.jpeg";

const cities = [
  {
    id: 1,
    name: "Glasgow",
    href: "/invest-in-nature/glasgow",
    imageSrc: "assets/Glasgow.png",
    imageAlt: "Glasgow city",
  },
  {
    id: 2,
    name: "Dublin",
    imageSrc: "assets/Dublin.png",
    imageAlt: "Dublin city",
    progressText: "coming soon",
  },
  {
    id: 3,
    name: "London",
    imageSrc: "assets/London.png",
    imageAlt: "London city",
    progressText: "coming soon",
  },
  {
    id: 4,
    name: "Paris",
    imageSrc: "assets/Paris.png",
    imageAlt: "Paris city",
    progressText: "coming soon",
  },
  {
    id: 5,
    name: "Milan",
    imageSrc: "assets/Milan.png",
    imageAlt: "Milan city",
    progressText: "coming soon",
  },
  {
    id: 6,
    name: "Berlin",
    imageSrc: "assets/Berlin.png",
    imageAlt: "Berlin city",
    progressText: "coming soon",
  },
];

const faqs = [
  {
    id: 1,
    question: "What are climate-related liabilities?",
    answer:
      "We live in an increasingly fragile world where climate change and biodiversity loss are having a detrimental impact on all, from individuals to businesses. By pooling our resources to invest in nature, restoring and growing strong ecosystems and habitats we can reverse this cycle and support thriving and resilient communities.",
  },
  {
    id: 2,
    question: "What do we mean by nature?",
    answer:
      "We use nature as a shorthand for Nature-based Solutions. While TreesAI aims to fund most Nature-based Solutions, we are currently focusing on Urban Forests. ",
  },
  {
    id: 3,
    question: "What do we mean by invest?",
    answer: "tbc",
  },
];

export default function Cities() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(1.4196);
  const [lat] = useState(50.0489);
  const [zoom] = useState(3);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat([-4.2568, 55.8508]).addTo(map.current); //Glasgow
    new mapboxgl.Marker({ color: "black" })
      .setLngLat([-0.1276, 51.5072])
      .addTo(map.current); //London
    new mapboxgl.Marker({ color: "black" })
      .setLngLat([-6.2603, 53.3498])
      .addTo(map.current); //Dublin
    new mapboxgl.Marker({ color: "black" })
      .setLngLat([2.3522, 48.8566])
      .addTo(map.current); //Paris
    new mapboxgl.Marker({ color: "black" })
      .setLngLat([9.19, 45.4642])
      .addTo(map.current); //Milan
    new mapboxgl.Marker({ color: "black" })
      .setLngLat([13.405, 52.52])
      .addTo(map.current); //Berlin

    map.current.scrollZoom.disable();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
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
          </ol>
        </nav>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="mt-10">
            <h2 className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
              Find places to invest in nature
            </h2>
            <p className="mt-3 text-lg font-regular text-gray-500">
              Discover portfolios of projects or individual actions that can
              reduce your carbon footprint and climate-related liabilities.
            </p>
            <p className="mt-3 text-lg font-semibold leading-6 text-gray-500">
              Select a city of interest to find our more
            </p>
            <div className="mt-5">
              <h3 className="text-l text-gray-900 sm:text-xl py-5">Cities</h3>
              <div className="grid gap-y-10 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {cities.map((city) => (
                  <div key={city.id} className="group relative">
                    <div className="">
                      <img
                        src={city.imageSrc}
                        alt={city.imageAlt}
                        className=""
                      />
                    </div>
                    <div className="mt-0 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link to={city.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {city.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray2">
                          {city.progressText}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div ref={mapContainer} className="map-container" />
          </div>
        </div>
        <div className="bg-gray">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Try becoming a nature steward</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Cover up to 10% of your maintenance costs by preserving
                    street trees, rewilding your local park or replenishing the
                    urban forest.
                  </p>
                  <a
                    href="/nature-steward"
                    className="mt-8 bg-gray border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src={letsInvestImage}
                  alt="Nature stewards"
                />
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
    </>
  );
}