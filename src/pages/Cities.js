import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import NavBar from "../components/demo/NavBar";

const cities = [
  {
    id: 1,
    name: "Glasgow",
    href: "#",
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
                  className="text-gray-400 hover:text-gray-500"
                >
                  Invest
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
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
              <div class="grid gap-y-10 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
                          <a href={city.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {city.name}
                          </a>
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
      </div>
    </>
  );
}
