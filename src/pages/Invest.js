import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

export default function Invest() {
  const [pageState, setPageState] = useState(0);
  const [openTab, setOpenTab] = useState(1);
  const [carbonSelect, setCarbonSelect] = useState("Budget");
  const [carbonInputVal, setCarbonInputVal] = useState("");
  const [waterSelect, setWaterSelect] = useState("Budget");
  const [waterInputVal, setWaterInputVal] = useState("");
  const [plantInputVal, setPlantInputVal] = useState("");
  const [preserveInputVal, setPreserveInputVal] = useState("");
  const [maintainInputVal, setMaintainInputVal] = useState("");
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (type) => {
    if (type === "carbon") {
      setCart((oldArray) => [
        ...oldArray,
        `Carbon sequestration ${carbonSelect}:${carbonInputVal}`,
      ]);
    } else if (type === "water") {
      setCart((oldArray) => [
        ...oldArray,
        `Stormwater retention ${waterSelect}:${waterInputVal}`,
      ]);
    } else if (type === "plant") {
      setCart((oldArray) => [...oldArray, `Planting: ${plantInputVal} trees`]);
    } else if (type === "preserve") {
      setCart((oldArray) => [
        ...oldArray,
        `Preserving: ${preserveInputVal} trees`,
      ]);
    } else {
      setCart((oldArray) => [
        ...oldArray,
        `Maintaining: ${maintainInputVal} trees`,
      ]);
    }

    setShow(true);
  };

  const back = (e) => {
    e.preventDefault();
    setShow(false);
    setPageState(pageState - 1);
  };

  const next = (e) => {
    e.preventDefault();
    setShow(false);
    setPageState(pageState + 1);
  };

  return (
    <>
      <NavBarGlasgow />
      {(() => {
        switch (pageState) {
          case 0:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-1">
                <div className="py-16 sm:py-24 lg:py-20 px-16 ">
                  <div className="mb-5">
                    <Link
                      to="/invest-in-nature/glasgow"
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </Link>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    What are your desired outcomes?
                  </h3>
                  <p>
                    Include environmental services or specific activities in
                    your portfolio to reduce your carbon footprint and mitigate
                    your climate-related risks
                  </p>
                  <div className="flex flex-wrap space-x-4" aria-label="Tabs">
                    <div className="w-full">
                      <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row border-b border-gray3 mx-auto mt-4 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
                        role="tablist"
                      >
                        <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0">
                          <a
                            className={
                              "px-3 py-2 font-medium text-sm rounded-md block" +
                              (openTab === 1
                                ? "text-gray4 bg-gray3"
                                : "text-gray5 hover:text-gray4")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            Environmental Services
                          </a>
                        </li>
                        <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0">
                          <a
                            className={
                              "px-3 py-2 font-medium text-sm rounded-md block" +
                              (openTab === 2
                                ? "text-gray4 bg-gray3"
                                : "text-gray5 hover:text-gray4")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            Activities
                          </a>
                        </li>
                      </ul>
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                  <dt>
                                    <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                      Carbon sequestration
                                    </p>
                                    <p className="ml-2 mt-1 text-sm">
                                      By reducing energy demand and absorbing
                                      carbon dioxide, trees and vegetation
                                      decrease the production and negative
                                      effects of air pollution and greenhouse
                                      gas emissions.
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <div className="sm:col-span-4">
                                      <div className="mt-1 flex rounded-md shadow-sm">
                                        <select
                                          id="invest-type"
                                          className="mt-1 flex rounded-md shadow-sm"
                                          onChange={(e) => {
                                            setCarbonSelect(e.target.value);
                                          }}
                                          value={carbonSelect}
                                        >
                                          <option value="Budget">Budget</option>
                                          <option value="Flows">Flows</option>
                                          <option value="Percentage">
                                            Percentage
                                          </option>
                                        </select>
                                        {carbonSelect === "Budget" && (
                                          <>
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              £
                                            </span>
                                            <input
                                              type="number"
                                              name="cost"
                                              onChange={(e) => {
                                                setCarbonInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              id="cost"
                                              min="0.01"
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                          </>
                                        )}
                                        {carbonSelect === "Flows" && (
                                          <>
                                            <input
                                              type="number"
                                              name="cost"
                                              id="cost"
                                              min="0.01"
                                              onChange={(e) => {
                                                setCarbonInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              tCO2e
                                            </span>
                                          </>
                                        )}
                                        {carbonSelect === "Percentage" && (
                                          <>
                                            <input
                                              type="number"
                                              name="cost"
                                              id="cost"
                                              min="0.01"
                                              onChange={(e) => {
                                                setCarbonInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              % available
                                            </span>
                                          </>
                                        )}

                                        <button
                                          type="button"
                                          onClick={() => addToCart("carbon")}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </dd>
                                </div>
                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                  <dt>
                                    <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                      Stormwater retention
                                    </p>
                                    <p className="ml-2 mt-1 text-sm">
                                      Urban trees may replace the need for flood
                                      water mitigation infrastructure and reduce
                                      stress on drainage systems reducing need
                                      for maintenance and upgrade.
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <div className="sm:col-span-4">
                                      <div className="mt-1 flex rounded-md shadow-sm">
                                        <select
                                          id="invest-type"
                                          className="mt-1 flex rounded-md shadow-sm"
                                          onChange={(e) => {
                                            setWaterSelect(e.target.value);
                                          }}
                                          value={waterSelect}
                                        >
                                          <option value="Budget">Budget</option>
                                          <option value="Flows">Flows</option>
                                          <option value="Percentage">
                                            Percentage
                                          </option>
                                        </select>
                                        {waterSelect === "Budget" && (
                                          <>
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              £
                                            </span>
                                            <input
                                              type="number"
                                              name="cost"
                                              onChange={(e) => {
                                                setWaterInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              id="cost"
                                              min="0.01"
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                          </>
                                        )}
                                        {waterSelect === "Flows" && (
                                          <>
                                            <input
                                              type="number"
                                              name="cost"
                                              id="cost"
                                              min="0.01"
                                              onChange={(e) => {
                                                setWaterInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              m³
                                            </span>
                                          </>
                                        )}
                                        {waterSelect === "Percentage" && (
                                          <>
                                            <input
                                              type="number"
                                              name="cost"
                                              id="cost"
                                              min="0.01"
                                              onChange={(e) => {
                                                setWaterInputVal(
                                                  e.target.value
                                                );
                                              }}
                                              step="0.01"
                                              data-number-to-fixed="2"
                                              data-number-stepfactor="100"
                                              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                            />
                                            <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                              % available
                                            </span>
                                          </>
                                        )}

                                        <button
                                          type="button"
                                          onClick={() => addToCart("water")}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
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
                            </div>
                            <div
                              className={openTab === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                  <dt>
                                    <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                      Planting
                                    </p>
                                    <p className="ml-2 mt-1 text-sm">
                                      By reducing energy demand and absorbing
                                      carbon dioxide, trees and vegetation
                                      decrease the production and negative
                                      effects of air pollution and greenhouse
                                      gas emissions.
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <div className="sm:col-span-4">
                                      <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                          type="number"
                                          name="cost"
                                          id="cost"
                                          min="0.01"
                                          onChange={(e) => {
                                            setPlantInputVal(e.target.value);
                                          }}
                                          step="0.01"
                                          data-number-to-fixed="2"
                                          data-number-stepfactor="100"
                                          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                        />
                                        <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                          trees
                                        </span>

                                        <button
                                          type="button"
                                          onClick={() => addToCart("plant")}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </dd>
                                </div>

                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                  <dt>
                                    <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                      Preservation
                                    </p>
                                    <p className="ml-2 mt-1 text-sm">
                                      Invest in a series of projects that
                                      legally demonstrate the preservation of
                                      trees either via a Tree Preservation Order
                                      or by changing land use.
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <div className="sm:col-span-4">
                                      <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                          type="number"
                                          name="cost"
                                          id="cost"
                                          min="0.01"
                                          onChange={(e) => {
                                            setPreserveInputVal(e.target.value);
                                          }}
                                          step="0.01"
                                          data-number-to-fixed="2"
                                          data-number-stepfactor="100"
                                          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                        />
                                        <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                          trees
                                        </span>

                                        <button
                                          type="button"
                                          onClick={() => addToCart("preserve")}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </dd>
                                </div>

                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                  <dt>
                                    <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                      Maintenance
                                    </p>
                                    <p className="ml-2 mt-1 text-sm">
                                      Invest in a series of projects that are
                                      focused on the intensive care and
                                      maintenance of existing trees, centred on
                                      strategic inspection, pruning, and
                                      managing pests and diseases.
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <div className="sm:col-span-4">
                                      <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                          type="number"
                                          name="cost"
                                          id="cost"
                                          min="0.01"
                                          onChange={(e) => {
                                            setMaintainInputVal(e.target.value);
                                          }}
                                          step="0.01"
                                          data-number-to-fixed="2"
                                          data-number-stepfactor="100"
                                          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none  sm:text-sm border-gray-300"
                                        />
                                        <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                          trees
                                        </span>

                                        <button
                                          type="button"
                                          onClick={() => addToCart("maintain")}
                                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </dd>
                                </div>

                                <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                                  <dt>
                                    <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                                      Restoration
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
                                      Seedling
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
                                      Upcycling
                                    </p>
                                  </dt>
                                  <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                                      Coming soon
                                    </span>
                                  </dd>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-5">
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => next(e)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray3 py-16 sm:py-24 lg:py-20 px-16 ">
                  <div className="flex-shrink-0 pt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Environmental Services Available
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Carbon sequestration
                    </h4>

                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Physical flows
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
                            Indicative valuation
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            £628,253
                          </p>
                          <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                            per year
                          </p>
                        </dd>
                      </div>
                    </div>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2 pt-5">
                      Stormwater retention
                    </h4>

                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Physical flows
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
                            Indicative valuation
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-blue2">
                            £1,242,360
                          </p>
                          <p className="text-gray-900 ml-2 flex items-baseline text-sm font-semibold">
                            per year
                          </p>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 1:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-1">
                <div className="py-16 sm:py-24 lg:py-20 px-16 ">
                  <div className="mb-5">
                    <button
                      to="/invest-in-nature/glasgow"
                      onClick={back}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Submit your interest
                  </h3>
                  <h4 className="text-lg mt-5 leading-6 font-sm text-gray-900">
                    Purchase summary
                  </h4>
                  <p>{cart}</p>
                  <div className="mt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Ecosystem service outcomes will be available to purchase
                      soon.
                    </h3>
                    <h4 className="text-lg mt-5 leading-6 font-sm text-gray-900">
                      Enter your email and our team will process your request.
                    </h4>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      onChange={(e) => {
                        setCarbonInputVal(e.target.value);
                      }}
                      id="email"
                      className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded sm:text-sm border-gray-300"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => next(e)}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit your interest
                      </button>
                    </div>
                  </div>
                </div>

                <div className="outcomes-panel"></div>
              </div>
            );
          case 2:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-1">
                <div className="py-16 sm:py-24 lg:py-20 px-16 ">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Thanks for submitting your interest in supporting ecosystem
                    service outcomes in Glasgow!
                  </h3>
                  <p>
                    A confirmation has been sent to your email and our team will
                    contact you for next steps.
                  </p>
                  <div className="pt-5">
                    <div className="flex justify-start">
                      <Link
                        to="/invest-in-nature/glasgow/invest/portfolio"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        View sample portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="pt-40">
                    <div className="flex justify-start">
                      <button className="ml-3 inline-flex justify-center py-2 px-4 border border-black shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Frequently asked questions
                      </button>
                      <Link
                        to="/invest-in-nature/glasgow"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Return home
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="outcomes-panel"></div>
              </div>
            );
          default:
            return "Hi!"; //TODO: update this
        }
      })()}

      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Added to cart
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {cart[cart.length - 1]}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
