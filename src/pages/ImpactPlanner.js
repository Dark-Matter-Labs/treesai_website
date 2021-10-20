/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect, useRef } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  PlusSmIcon as PlusSmIconSolid,
  MinusSmIcon as MinusSmIconSolid,
} from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function ImpactPlanner() {
  const [newTreesOpen, setNewTreesOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(true);
  const [numberOfTrees, setNumberOfTrees] = useState(104);
  const [dbh, setDBH] = useState(13);
  const [newNumberOfTrees, setNewNumberOfTrees] = useState(0);
  const [newDBH, setNewDBH] = useState(0);
  const [seq, setSeq] = useState(0);
  const [maintenanceCost, setMaintenanceCost] = useState(1000);
  const [seqArr, setArrSeq] = useState([]);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  var formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-4.2568);
  const [lat] = useState(55.8508);
  const [zoom] = useState(14);

  useEffect(() => {
    calculate_initial();

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

  const co2data = {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        data: seqArr,
        fill: false,
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
    ],
  };

  const co2options = {
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return value + "t";
          },
        },
        title: {
          display: true,
          text: "Carbon removed (tCO₂e)",
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

  const stormwater_data = {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        data: [2, 4, 8, 10, 12, 16, 22, 26, 30, 34, 36],
        backgroundColor: ["#DBEAFE"],
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
          callback: function (value, index, values) {
            return value + "m3";
          },
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

  const maintenance_forecast_options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Costs over 25 years, assuming maintenance costs remain the same, at 0% inflation.",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Maintenance cost reduction estimate",
        },
      },
    },
  };

  const maintenance_forecast_data = {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        label: "Current maintenance costs",
        fill: true,
        backgroundColor: "#0010B981",
        borderColor: "#10B981",
        data: [2, 4, 8, 10, 12, 16, 22, 26, 30, 34, 36],
      },
      {
        label: "Stormwater retention",
        fill: true,
        backgroundColor: "#033B82F6",
        borderColor: "#3B82F6",
        data: [1, 2, 4, 8, 10, 12, 16, 20, 24, 30, 32],
      },
      {
        label: "Other ecosystem  services(coming soon)",
        backgroundColor: "#FF00000",
        borderColor: "#6B7280",
        data: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20],
        fill: true,
      },
    ],
  };

  const get_stock = (cm, senescence = "evergreen") => {
    if (!senescence || !cm) {
      return 0;
    }
    if (senescence === "evergreen") {
      //perennifolio
      return 0.16155 * Math.pow(cm, 2.310647) * 0.5 * 3.67;
    }
    if (senescence === "deciduous") {
      //caducifolio
      return 0.035702 * Math.pow(cm, 2.580671) * 0.5 * 3.67;
    }
  };

  const get_t1 = (diameter_t0) => {
    // This function estimates the growth in diameter of one tree
    if (!diameter_t0) {
      return 0;
    }
    let out =
      parseFloat(diameter_t0) +
      parseFloat(-0.5425 + 0.3189 * Math.log(diameter_t0));
    return out;
  };

  const get_yearly_seq = (diameter_t0) => {
    // This function estimates the sequestration over one year given an initial tree diameter
    return get_stock(get_t1(diameter_t0)) - get_stock(diameter_t0);
  };

  const calc_seq_years = (diameter_t0, years = 50) => {
    if (diameter_t0 < 6) {
      diameter_t0 = 6;
    }

    // This function calculates the total sequestration over several years and produces an array with the cumulative sum over the given number of years
    let d0 = diameter_t0;
    var seq_array = [];

    for (let i = 0; i < years; i++) {
      seq_array.push(get_yearly_seq(d0));
      d0 = get_t1(d0);
    }

    return seq_array;
  };

  function sum_arr(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  const calculate_initial = () => {
    let sequestration_arr = calc_seq_years(dbh, 50);

    // multiplying each array value by number of trees and converting to Tn
    let sequestration_arr_for_graph = sequestration_arr.map(
      (x) => (x * numberOfTrees) / 1000
    );

    setArrSeq(sequestration_arr_for_graph);

    const sequestrationValue = numberOfTrees * sum_arr(sequestration_arr);

    setSeq((sequestrationValue / 1000).toFixed(2)); //converting kg to Tn,  use comma instead of decimal point
  };

  const calculate_button_click = (e) => {
    e.preventDefault();

    const sequestrationValue =
      parseFloat(numberOfTrees * sum_arr(calc_seq_years(dbh, 50))) +
      parseFloat(newNumberOfTrees * sum_arr(calc_seq_years(newDBH, 50)));

    // multiplying each array value by number of trees and converting to Tn
    let sequestration_arr_for_graph = calc_seq_years(dbh, 50).concat(
      calc_seq_years(newDBH, 50)
    );
    sequestration_arr_for_graph = sequestration_arr_for_graph.map(
      (x) => (x * (numberOfTrees + newNumberOfTrees)) / 1000
    );
    setArrSeq(sequestration_arr_for_graph);

    setSeq((sequestrationValue / 1000).toFixed(2)); //converting kg to Tn, use comma instead of decimal point
    setResultsOpen(true);
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
                    <a
                      href="#impact-planner"
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Impact Planner
                    </a>
                    <a
                      href="#impact-planner"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="#impact-planner"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#impact-planner"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Team
                </a>
                <a
                  href="#impact-planner"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#impact-planner"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Calendar
                </a>
              </div>
            </Disclosure.Panel>
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
                    <form className="space-y-8 divide-y divide-gray-200">
                      <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Impact Planner
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Get started by filling in the information below to
                              calculate ecosystem services.
                            </p>
                          </div>

                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Location
                              </label>
                              <div className="mt-1">
                                <select
                                  id="country"
                                  name="country"
                                  autoComplete="country"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                >
                                  <option>Laurieston, Glasgow</option>
                                </select>
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Existing trees
                              </h3>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="tree-number"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Number of trees
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    setNumberOfTrees(e.target.value)
                                  }
                                  name="tree-number"
                                  id="tree-number"
                                  value="104"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="DBH"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Average diameter at breast height (DBH)
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="number"
                                  onChange={(e) => setDBH(e.target.value)}
                                  name="DBH"
                                  id="DBH"
                                  value="13"
                                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                                />
                                <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  cm
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-8">
                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Maintenance costs(optional)
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  £
                                </span>
                                <input
                                  type="number"
                                  name="cost"
                                  defaultValue="1000"
                                  onChange={(e) =>
                                    setMaintenanceCost(e.target.value)
                                  }
                                  id="cost"
                                  min="0.01"
                                  step="0.01"
                                  data-number-to-fixed="2"
                                  data-number-stepfactor="100"
                                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                />
                                <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  per year
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {!newTreesOpen && (
                          <div className="sm:col-span-4">
                            <h3 className="pt-5 text-lg leading-6 font-medium text-gray-900">
                              New trees
                            </h3>
                            <div className="pt-5 flex justify-end">
                              <button
                                type="button"
                                onClick={() => setNewTreesOpen(true)}
                                className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Add
                                <PlusSmIconSolid
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        )}

                        {newTreesOpen && (
                          <div>
                            <div className="sm:col-span-4">
                              <h3 className="pt-5 text-lg leading-6 font-medium text-gray-900">
                                New trees
                              </h3>
                              <div className="pt-5 flex justify-end">
                                <button
                                  type="button"
                                  onClick={() => setNewTreesOpen(false)}
                                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Close
                                  <MinusSmIconSolid
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="tree-number"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Number of trees
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    setNewNumberOfTrees(e.target.value)
                                  }
                                  name="tree-number"
                                  id="tree-number"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="DBH"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Average diameter at breast height (DBH)
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="number"
                                  name="DBH"
                                  onChange={(e) => setNewDBH(e.target.value)}
                                  id="DBH"
                                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                                />
                                <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  cm
                                </span>
                              </div>
                            </div>

                            <div className="pt-8">
                              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="cost"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Planting costs
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                    <input
                                      type="number"
                                      name="cost"
                                      id="cost"
                                      min="0.01"
                                      step="0.01"
                                      data-number-to-fixed="2"
                                      data-number-stepfactor="100"
                                      className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="cost"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Maintenance costs
                                  </label>
                                  <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                      £
                                    </span>
                                    <input
                                      type="number"
                                      name="cost"
                                      id="cost"
                                      min="0.01"
                                      step="0.01"
                                      data-number-to-fixed="2"
                                      data-number-stepfactor="100"
                                      className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                    />
                                    <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                      per year
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-5">
                              <div className="flex justify-end">
                                <button
                                  onClick={(e) => calculate_button_click(e)}
                                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Recalculate
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </nav>

                {resultsOpen && (
                  <div>
                    <div className="flex-shrink-0 pt-10">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Impact result
                      </h3>

                      <h4 className="text-md leading-6 font-medium text-gray-900">
                        Ecosystem service outcomes
                      </h4>

                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            CO2 removal
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            {seq} tCO2e
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

                      <h4 className="text-md leading-6 font-medium text-gray-900">
                        CO2 Removal
                      </h4>
                      <Line data={co2data} options={co2options} />

                      <h4 className="text-md leading-6 font-medium text-gray-900">
                        Stormwater retention
                      </h4>
                      <Bar
                        data={stormwater_data}
                        options={stormwater_options}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Maintenance forecast estimate
                      </h3>
                    </div>

                    <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg">
                      <dt>
                        <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                          Maintenance coverage by TreesAI platform
                        </p>
                      </dt>
                      <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-green-600">
                          5–10%
                        </p>
                        <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                          Based on our methodology
                        </p>
                      </dd>
                    </div>

                    {maintenanceCost !== 0 && (
                      <div>
                        <dl className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                          <div className="relative bg-white pt-2 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dt>
                              <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                                Current costs
                              </p>
                            </dt>
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-gray-900">
                                {formatter.format(maintenanceCost)}
                              </p>
                              <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                                <span className="sr-only">by</span>
                                per year
                              </p>
                            </dd>
                          </div>
                          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dt>
                              <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                                Savings estimate
                              </p>
                            </dt>
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-gray-900">
                                {formatter.format(maintenanceCost * 0.08)}
                              </p>
                              <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                                <span className="sr-only">by</span>
                                per year
                              </p>
                            </dd>
                          </div>
                        </dl>

                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-green-600">
                                {formatter.format(maintenanceCost * 50)}
                              </p>
                              <p className="ml-1 text-gray-900ml-2 flex items-baseline text-sm font-semibold">
                                <span className="sr-only">by</span>
                                over 50 years
                              </p>
                            </dd>
                          </div>
                          <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-green-600">
                                {formatter.format(maintenanceCost * 0.08 * 50)}
                              </p>
                              <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                                <span className="sr-only">by</span>
                                over 50 years
                              </p>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    )}
                    <Line
                      data={maintenance_forecast_data}
                      options={maintenance_forecast_options}
                    />

                    <div className="flex justify-end">
                      <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Next
                      </button>
                    </div>
                  </div>
                )}
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
