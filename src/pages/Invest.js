import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

export default function Invest() {
  const [pageState, setPageState] = useState(0);
  const [carbonSelect, setCarbonSelect] = useState("Budget");
  const [carbonInputVal, setCarbonInputVal] = useState("");
  const [stormwaterCheck, setStormwaterCheck] = useState(false);
  const [waterQualityCheck, setWaterQualityCheck] = useState(false);
  const [floodCheck, setFloodCheck] = useState(false);
  const [physicalHealthCheck, setPhysicalHealthCheck] = useState(false);
  const [mentalHealthCheck, setMentalHealthCheck] = useState(false);
  const [noiseCheck, setNoiseCheck] = useState(false);
  const [airQualityCheck, setAirQualityCheck] = useState(false);
  const [heatIslandCheck, setHeatIslandCheck] = useState(false);
  const [coolingCheck, setCoolingCheck] = useState(false);
  const [windCheck, setWindCheck] = useState(false);
  const [speciesCheck, setSpeciesCheck] = useState(false);
  const [greenJobsCheck, setGreenJobsCheck] = useState(false);
  const [footballCheck, setFootballCheck] = useState(false);
  const [otherCheck, setOtherCheck] = useState(false);
  const [plantingCheck, setPlantingCheck] = useState(false);
  const [preservationCheck, setPreservationCheck] = useState(false);
  const [maintenanceCheck, setMaintenanceCheck] = useState(false);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (type) => {
    if (type === "carbon") {
      setCart((oldArray) => [
        ...oldArray,
        `Carbon sequestration ${carbonSelect}:${carbonInputVal}`,
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
                    What are your desired carbon outcomes?
                  </h3>
                  <p>
                    Invest in nature to offset your residual carbon emissions
                  </p>
                  <div className="flex flex-wrap space-x-4" aria-label="Tabs">
                    <div className="w-full">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
                              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                <dt>
                                  <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                    Carbon sequestration
                                  </p>
                                  <p className="ml-2 mt-1 text-sm">
                                    By reducing energy demand and absorbing
                                    carbon dioxide, trees and vegetation
                                    decrease the production and negative effects
                                    of air pollution and greenhouse gas
                                    emissions.
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
                                              setCarbonInputVal(e.target.value);
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
                                              setCarbonInputVal(e.target.value);
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
                                              setCarbonInputVal(e.target.value);
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
                      Available Environmental Services
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Physical Flows
                    </h4>

                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Carbon sequestration
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
                      <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                        Indicative valuation
                      </h4>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Carbon sequestration
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
                            This is an estimate. Learn about our{" "}
                            <u>methodology</u>
                          </h3>
                        </div>
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
                      onClick={back}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    What other outcomes are you looking to achieve?
                  </h3>
                  <p>
                    Include environmental services or specific activities in
                    your portfolio to reduce your carbon footprint and mitigate
                    your climate-related risks
                  </p>
                  <div className="flex flex-wrap space-x-4" aria-label="Tabs">
                    <div className="w-full">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
                              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                <fieldset className="space-y-5">
                                  <legend className="sr-only">Outcomes</legend>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="stormwater"
                                        aria-describedby="stormwater"
                                        name="stormwater"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={stormwaterCheck}
                                        onChange={() =>
                                          setStormwaterCheck(!stormwaterCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="stormwater"
                                        className="font-medium text-gray-700"
                                      >
                                        🌧 Stormwater Retention
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="waterquality"
                                        aria-describedby="waterquality"
                                        name="waterquality"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        onChange={() =>
                                          setWaterQualityCheck(
                                            !waterQualityCheck
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="waterquality"
                                        className="font-medium text-gray-700"
                                      >
                                        🚰 Water Quality
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="flood"
                                        aria-describedby="flood"
                                        name="flood"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={floodCheck}
                                        onChange={() =>
                                          setFloodCheck(!floodCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="flood"
                                        className="font-medium text-gray-700"
                                      >
                                        🌊 Flood control
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="physical-health"
                                        aria-describedby="physical-health"
                                        name="physical-health"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={physicalHealthCheck}
                                        onChange={() =>
                                          setPhysicalHealthCheck(
                                            !physicalHealthCheck
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="physical-health"
                                        className="font-medium text-gray-700"
                                      >
                                        🤕 Physical health
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="mental-health"
                                        aria-describedby="mental-health"
                                        name="mental-health"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={mentalHealthCheck}
                                        onChange={() =>
                                          setMentalHealthCheck(
                                            !mentalHealthCheck
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="mental-health"
                                        className="font-medium text-gray-700"
                                      >
                                        🤔 Mental health
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="noise"
                                        aria-describedby="noise"
                                        name="noise"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={noiseCheck}
                                        onChange={() =>
                                          setNoiseCheck(!noiseCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="noise"
                                        className="font-medium text-gray-700"
                                      >
                                        🔕 Noise reduction
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="air"
                                        aria-describedby="air"
                                        name="air"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={airQualityCheck}
                                        onChange={() =>
                                          setAirQualityCheck(!airQualityCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="air"
                                        className="font-medium text-gray-700"
                                      >
                                        ☁ Air quality improvement
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="heat"
                                        aria-describedby="heat"
                                        name="heat"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={heatIslandCheck}
                                        onChange={() =>
                                          setHeatIslandCheck(!heatIslandCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="heat"
                                        className="font-medium text-gray-700"
                                      >
                                        🥵 Heat island effect reduction
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="cool"
                                        aria-describedby="cool"
                                        name="cool"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={coolingCheck}
                                        onChange={() =>
                                          setCoolingCheck(!coolingCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="cool"
                                        className="font-medium text-gray-700"
                                      >
                                        🌶 Cooling effect
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="wind"
                                        aria-describedby="wind"
                                        name="wind"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={windCheck}
                                        onChange={() =>
                                          setWindCheck(!windCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="wind"
                                        className="font-medium text-gray-700"
                                      >
                                        💨 Wind protection
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="species"
                                        aria-describedby="species"
                                        name="species"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={speciesCheck}
                                        onChange={() =>
                                          setSpeciesCheck(!speciesCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="species"
                                        className="font-medium text-gray-700"
                                      >
                                        🐝 Increased species richness
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="jobs"
                                        aria-describedby="jobs"
                                        name="jobs"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={greenJobsCheck}
                                        onChange={() =>
                                          setGreenJobsCheck(!greenJobsCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="jobs"
                                        className="font-medium text-gray-700"
                                      >
                                        👩‍🌾Green jobs creation
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="football"
                                        aria-describedby="football"
                                        name="football"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={footballCheck}
                                        onChange={() =>
                                          setFootballCheck(!footballCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="football"
                                        className="font-medium text-gray-700"
                                      >
                                        🚶‍♀️Increased high street footfall
                                      </label>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="other"
                                        aria-describedby="other"
                                        name="other"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={otherCheck}
                                        onChange={() =>
                                          setOtherCheck(!otherCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="other"
                                        className="font-medium text-gray-700"
                                      >
                                        🤽‍♀️ Other social outcomes
                                      </label>
                                    </div>
                                  </div>
                                </fieldset>
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
                      Available Environmental Services
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
                            This is an estimate. Learn about our{" "}
                            <u>methodology</u>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 2:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-1">
                <div className="py-16 sm:py-24 lg:py-20 px-16 ">
                  <div className="mb-5">
                    <button
                      onClick={back}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Are you interested in investing in specific types of
                    activities?
                  </h3>
                  <p>
                    Include specific activities in your portfolio to reduce your
                    carbon footprint and mitigate your climate-related risks
                  </p>
                  <div className="flex flex-wrap space-x-4" aria-label="Tabs">
                    <div className="w-full">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2">
                              <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg ">
                                <fieldset className="space-y-5">
                                  <legend className="sr-only">
                                    Activities
                                  </legend>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="planting"
                                        aria-describedby="planting"
                                        name="planting"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={plantingCheck}
                                        onChange={() =>
                                          setPlantingCheck(!plantingCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="planting"
                                        className="font-medium text-gray-700"
                                      >
                                        🌱 Planting
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        By reducing energy demand and absorbing
                                        carbon dioxide, trees and vegetation
                                        decrease the production and negative
                                        effects of air pollution and greenhouse
                                        gas emissions.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="preservation"
                                        aria-describedby="preservation"
                                        name="preservation"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={preservationCheck}
                                        onChange={() =>
                                          setPreservationCheck(
                                            !preservationCheck
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="preservation"
                                        className="font-medium text-gray-700"
                                      >
                                        🐛 Preservation
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        Invest in a series of projects that
                                        legally demonstrate the preservation of
                                        trees either via a Tree Preservation
                                        Order or by changing land use
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="maintenance"
                                        aria-describedby="maintenance"
                                        name="maintenance"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        defaultChecked={maintenanceCheck}
                                        onChange={() =>
                                          setMaintenanceCheck(!maintenanceCheck)
                                        }
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="maintenance"
                                        className="font-medium text-gray-700"
                                      >
                                        🪓 Maintenance
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        Invest in a series of projects that are
                                        focused on the intensive care and
                                        maintenance of existing trees, centred
                                        on strategic inspection, pruning, and
                                        managing pests and diseases.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="restore"
                                        disabled
                                        aria-describedby="restore"
                                        name="restore"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="restore"
                                        className="font-medium text-gray2"
                                      >
                                        Restoration
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        Coming soon
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="seed"
                                        disabled
                                        aria-describedby="seed"
                                        name="seed"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="seed"
                                        className="font-medium text-gray2"
                                      >
                                        Seedling
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        Coming soon
                                      </p>
                                    </div>
                                  </div>
                                  <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="upcycle"
                                        disabled
                                        aria-describedby="upcycle"
                                        name="upcycle"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="upcycle"
                                        className="font-medium text-gray2"
                                      >
                                        Upcycling
                                      </label>
                                      <p
                                        id="offers-description"
                                        className="text-gray2"
                                      >
                                        Coming soon
                                      </p>
                                    </div>
                                  </div>
                                </fieldset>
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
                      Available Activities 2021-2025
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Number of trees
                    </h4>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Planting
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            367,500
                          </p>
                        </dd>
                      </div>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Maintenance
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-blue2 ">
                            470,400
                          </p>
                        </dd>
                      </div>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Preservation
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            176,400
                          </p>
                        </dd>
                      </div>
                    </div>
                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Indicative valuation
                    </h4>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Planting
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            £tbc
                          </p>
                        </dd>
                      </div>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Maintenance
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-blue2 ">
                            £tbc
                          </p>
                        </dd>
                      </div>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Preservation
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            £tbc
                          </p>
                        </dd>
                      </div>
                    </div>
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
                            This is an estimate. Learn about our{" "}
                            <u>methodology</u>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case 3:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-1">
                <div className="py-16 sm:py-24 lg:py-20 px-16 ">
                  <div className="mb-5">
                    <button
                      onClick={(e) => back(e)}
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
                  {stormwaterCheck && <p>✅ 🌧Stormwater Retention</p>}
                  {waterQualityCheck && <p>✅ 🚰Water Quality</p>}
                  {floodCheck && <p>✅ 🌊Flood control</p>}
                  {physicalHealthCheck && <p>✅ 🤕Physical health</p>}
                  {mentalHealthCheck && <p>✅ 🤔Mental health</p>}
                  {noiseCheck && <p>✅ 🔕Noise reduction</p>}
                  {airQualityCheck && <p>✅ ☁Air quality improvement</p>}
                  {heatIslandCheck && <p>✅ 🥵Heat island effect reduction</p>}
                  {coolingCheck && <p>✅ 🌶Cooling effect</p>}
                  {windCheck && <p>✅ 💨Wind protection</p>}
                  {speciesCheck && <p>✅ 🐝Increased species richness</p>}
                  {greenJobsCheck && <p>✅ 👩‍🌾Green jobs creation</p>}
                  {footballCheck && <p>✅ 🚶‍♀️Increased high street footfall</p>}
                  {otherCheck && <p>✅ 🤽‍♀️Other social outcomes</p>}
                  {plantingCheck && <p>✅ 🌱Planting</p>}
                  {preservationCheck && <p>✅ 🐛Preservation </p>}
                  {maintenanceCheck && <p>✅ 🪓Maintenance</p>}
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
          case 4:
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
                      <Link
                        to="/faq"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-black shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Frequently asked questions
                      </Link>
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
