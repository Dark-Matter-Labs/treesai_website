/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Bar, Line } from "react-chartjs-2";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid";

import map from "../images/map.png";

export default function ImpactPlanner() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newTreesOpen, setNewTreesOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [numberOfTrees, setNumberOfTrees] = useState(0);
  const [dbh, setDBH] = useState(0);
  const [newNumberOfTrees, setNewNumberOfTrees] = useState(0);
  const [newDBH, setNewDBH] = useState(0);
  const [seq, setSeq] = useState(0);

  const maintenance_forcaset_line1 = [
    {
      id: 1,
      name: "Current costs",
      stat: "£4k",
      change: "per year",
    },
    {
      id: 2,
      name: "Savings estimate",
      stat: "£400–800",
      change: "per year",
    },
  ];

  const maintenance_forcaset_line2 = [
    {
      id: 1,
      stat: "£200k",
      change: "over 50 years",
    },
    {
      id: 2,
      stat: "£20–40k",
      change: "over 50 years",
    },
  ];

  const co2data = {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        data: [0, 2, 4, 8, 16, 24, 28, 30, 35, 40],
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
      yAxes: {
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return value + "m3";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const maintenance_forcaset_options = {
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
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  const maintenance_forcaset_data = {
    labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        label: "Unfilled",
        fill: false,
        backgroundColor: "#10B981",
        borderColor: "#10B981",
        data: [2, 4, 8, 10, 12, 16, 22, 26, 30, 34, 36],
      },
      {
        label: "Dashed",
        fill: false,
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        borderDash: [5, 5],
        data: [1, 2, 4, 8, 10, 12, 16, 20, 24, 30, 32],
      },
      {
        label: "Filled",
        backgroundColor: "#6B7280",
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
    return diameter_t0 + (-0.5425 + 0.3189 * Math.log(diameter_t0));
  };

  const get_yearly_seq = (diameter_t0) => {
    // This function estimates the sequestration over one year given an initial tree diameter
    return get_stock(get_t1(diameter_t0)) - get_stock(diameter_t0);
  };

  const calc_seq_years = (diameter_t0, years = 50) => {
    // This function calculates the total sequestration over several years and produces an array with the cumulative sum over the given number of years
    let d0 = diameter_t0;
    var seq_array = [];

    for (let i; i < years; i++) {
      seq_array.push(get_yearly_seq(d0));
      d0 = year_growth(d0);
    }

    return seq_array;
  };

  const calculate_button_click = (e) => {
    e.preventDefault();

    if (!newTreesOpen) {
      const sequestrationValue = get_yearly_seq(dbh) * numberOfTrees;

      setSeq((sequestrationValue / 1000).toFixed(2).replace(/\./g, ",")); //converting kg to Tn,  use comma instead of decimal point
    } else {
      const sequestrationValue =
        get_yearly_seq(dbh) * numberOfTrees +
        get_yearly_seq(newDBH) * newNumberOfTrees;

      setSeq(
        Math.round(sequestrationValue / 1000)
          .toFixed(2)
          .replace(/\./g, ",")
      ); //converting kg to Tn, use comma instead of decimal point
    }
    setResultsOpen(true);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="assets/TreesAI_logo_black.svg"
                    alt="Workflow"
                  />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1"></div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      Whitney Francis
                    </p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="flex flex-shrink-0">
        <div className="flex flex-col panel-w">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="assets/TreesAI_logo_black.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200">
                      <div>
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Impact calculator
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
                        <div className="mt-6">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-900">
                              Species
                            </legend>
                            <div className="mt-4 space-y-4">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-700"
                                  >
                                    Pine
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-700"
                                  >
                                    Alder
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-700"
                                  >
                                    Oak
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-700"
                                  >
                                    Ash
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="candidates"
                                    className="font-medium text-gray-700"
                                  >
                                    Hazel
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offers"
                                    className="font-medium text-gray-700"
                                  >
                                    Willow
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="username"
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

                      {newTreesOpen && (
                        <div>
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
                            <div className="mt-6">
                              <fieldset>
                                <legend className="text-base font-medium text-gray-900">
                                  Species
                                </legend>
                                <div className="mt-4 space-y-4">
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                      >
                                        Pine
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                      >
                                        Alder
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                      >
                                        Oak
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                      >
                                        Ash
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="candidates"
                                        className="font-medium text-gray-700"
                                      >
                                        Hazel
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="offers"
                                        className="font-medium text-gray-700"
                                      >
                                        Willow
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>

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
                        </div>
                      )}
                    </div>
                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setResultsOpen(false)}
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={(e) => calculate_button_click(e)}
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </nav>

              {resultsOpen && (
                <div>
                  <div className="flex-shrink-0 ">
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
                        <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                          Air quality
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
                          Noise reduction
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
                    <Bar data={stormwater_data} options={stormwater_options} />
                  </div>

                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Maintenance forecast estimate
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      You may be able to reduce your £4,000 annual costs by
                      10–20%, or £400–800 per year by selling ecosystem
                      services. This may save you
                    </p>
                  </div>

                  <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg">
                    <dt>
                      <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                        Cost reduction estimate
                      </p>
                    </dt>
                    <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-green-600">
                        10–20%
                      </p>
                      <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                        Based on our methodology
                      </p>
                    </dd>
                  </div>

                  <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {maintenance_forcaset_line1.map((item) => (
                      <div
                        key={item.id}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                      >
                        <dt>
                          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                            {item.name}
                          </p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-gray-900">
                            {item.stat}
                          </p>
                          <p className="text-green-600 ml-2 flex items-baseline text-sm font-semibold">
                            <span className="sr-only">by</span>
                            {item.change}
                          </p>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {maintenance_forcaset_line2.map((item) => (
                      <div
                        key={item.id}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                      >
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600">
                            {item.stat}
                          </p>
                          <p className="text-green-600 ml-2 flex items-baseline text-sm font-semibold">
                            <span className="sr-only">by</span>
                            {item.change}
                          </p>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Line
                    data={maintenance_forcaset_data}
                    options={maintenance_forcaset_options}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img
                className="h-8 w-auto"
                src="assets/TreesAI_logo_black.svg"
                alt="Workflow"
              />
            </div>
            <div>
              <button
                type="button"
                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Start main area*/}
            <div className="absolute inset-0">
              <div className="h-full w-full rounded-lg">
                <img src={map} alt="map" />
              </div>
            </div>
            {/* End main area */}
          </main>
        </div>
      </div>
    </div>
  );
}
