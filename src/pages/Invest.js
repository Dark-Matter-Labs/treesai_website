import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link as AnchorLink } from "react-scroll";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

const faqs = [
  {
    id: 1,
    question: "How are environmental services calculated in TreesAI?",
    answer:
      "Each environmental service requires different data points to be assessed, even when accounting for them partially. Stormwater retention, for example, requires the amount of rain and its intensity on an hourly level whereas pollutant removal does not. Therefore we can estimate different environmental services depending on the information we have gathered at each site, our capacity, and confidence in modelling it. The basis of each estimation of environmental service is peer-reviewed academic literature.",
  },
  {
    id: 2,
    question: "How do we price environmental services in TreesAI?",
    answer:
      "We derive the economic value of environmental service through a direct non-use valuation method. Where we measure the value of regulating environmental services trees provide (such as carbon sequestration) rather than actual direct use of trees (such as timber). As we want to preserve and repurpose urban trees as civic assets, we estimate the avoided costs enjoyed by stakeholders from the delivery of environmental services. In Phase I pricing, we see tree value as the summation of avoided damage-cost to local stakeholders. In the next phases, we will socialize pricing benchmarks and move towards a willingness-to-pay method informed by local liability holders.",
  },
];

const faqs2 = [
  {
    id: 1,
    question:
      "What is the difference between ​​Ecosystem services and Environmental services?",
    answer:
      "There is currently a debate among practitioners as to whether to use the term ecosystem or environmental services. The term ecosystem service is used to refer to benefits that are mainly provided by ecosystems, whereas environmental services require key human intervention like, for example, infrastructure or labour.",
  },
  {
    id: 2,
    question: "How are environmental services calculated in TreesAI?",
    answer:
      "Each environmental service requires different data points to be assessed, even when accounting for them partially. Stormwater retention, for example, requires the amount of rain and its intensity on an hourly level whereas pollutant removal does not. Therefore we can estimate different environmental services depending on the information we have gathered at each site, our capacity, and confidence in modelling it. The basis of each estimation of environmental service is peer-reviewed academic literature.",
  },
];

const faqs3 = [
  {
    id: 1,
    question: "What do we mean by stewardship and nature stewards?",
    answer:
      "By stewardship, we mean the responsible use and protection of the natural environment through innovative and sustainable practices, such as preservation, maintenance, restoration, disease management and others. Nature stewards are the ‘doers’, the ones that go out and execute on sustainable practices, through direct action and management.",
  },
  {
    id: 2,
    question: "How do we calculate a city’s stewardship activities?",
    answer:
      "The amount of trees in each stewardship activity indicated in the demo are highly indicative and aimed at showing potential portfolio scenarios. These do not indicate an accurate representation of Glasgow’s urban forest. The are assumptions extracted by a variety of different sources, from the city open space map, to the cities 2015 itree report. 470,000 trees in the planting activity assumes that 70% of all all available space for planting is used, which has been estimated to be about 32% of Glasgow, and that 170,000 of that would be replenished of dead ash trees; 370,000 trees in the maintenance activity assumes that all established trees in public ownership receive advanced maintenance care (maure is defined by > 20cm dbh). 180,000 trees in the preservation activity assumes that all trees in vacant and derelict land in Council ownership are protected;",
  },
];

export default function Invest() {
  const [pageState, setPageState] = useState(0);
  const [carbonSelect, setCarbonSelect] = useState("Budget");
  const [carbonInputVal, setCarbonInputVal] = useState("");
  const [stormwaterCheck, setStormwaterCheck] = useState(false);
  const [waterQualityCheck, setWaterQualityCheck] = useState(false);
  const [floodCheck, setFloodCheck] = useState(false);
  const [noiseCheck, setNoiseCheck] = useState(false);
  const [airQualityCheck, setAirQualityCheck] = useState(false);
  const [heatIslandCheck, setHeatIslandCheck] = useState(false);
  const [windCheck, setWindCheck] = useState(false);
  const [speciesCheck, setSpeciesCheck] = useState(false);
  const [greenJobsCheck, setGreenJobsCheck] = useState(false);
  const [footballCheck, setFootballCheck] = useState(false);
  const [otherCheck, setOtherCheck] = useState(false);
  const [plantingCheck, setPlantingCheck] = useState(false);
  const [preservationCheck, setPreservationCheck] = useState(false);
  const [maintenanceCheck, setMaintenanceCheck] = useState(false);

  const back = (e) => {
    e.preventDefault();
    setPageState(pageState - 1);
  };

  const next = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setPageState(pageState + 1);
  };

  return (
    <>
      {(() => {
        switch (pageState) {
          case 0:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                <div>
                  <NavBarGlasgow />
                  <div className="flex items-center mt-20 lg:ml-16 md:ml-16 sm:ml-10">
                    <ChevronLeftIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      to="/invest-in-nature/glasgow"
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </Link>
                  </div>
                  <div className="py-16 sm:py-16 lg:py-16 md:px-16 lg:px-16 sm:px-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Invest in carbon sequestration
                    </h3>
                    <p>
                      Invest in nature to offset your residual carbon emissions.
                    </p>

                    <div className="w-full">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="">
                          <div className="">
                            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                              <div className="relative bg-white pt-5 px-2 pb-5 sm:pt-6 sm:px-2 shadow rounded-lg ">
                                <dt>
                                  <p className="ml-2 text-md font-medium text-gray-500 truncate">
                                    Carbon sequestration
                                  </p>
                                  <p className="ml-2 mt-1 text-sm">
                                    Trees absorb and long-term store carbon
                                    dioxide from the air.
                                  </p>
                                </dt>
                                <dd className="ml-2 pb-6 sm:pb-7">
                                  <div className="sm:col-span-4">
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                      <select
                                        id="invest-type"
                                        className="mt-1 flex rounded-md shadow-sm mr-5"
                                        onChange={(e) => {
                                          setCarbonSelect(e.target.value);
                                        }}
                                        value={carbonSelect}
                                      >
                                        <option value="Budget">Budget</option>
                                        <option value="Flows">
                                          Physical Flows
                                        </option>
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
                                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none sm:text-sm border-gray-300"
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
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="bg-white faq">
                          <div className="bg-white">
                            <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                              <div className="mt-6 pt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                                  {faqs.map((faq) => (
                                    <div
                                      key={faq.id}
                                      className="bg-gray p-5 rounded-md"
                                    >
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
                    </div>
                  </div>
                </div>
                <div className="bg-gray3 py-16 sm:py-24 lg:py-20 px-16 right">
                  <div className="flex-shrink-0 pt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Glasgow’s Carbon Sequestration capacity
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Physical Flow
                    </h4>

                    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                            Carbon sequestration
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            8,140 tCO2e
                          </p>
                          <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                            per year
                          </p>
                        </dd>
                      </div>
                      <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                        Indicative valuation
                      </h4>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                            Carbon sequestration
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-green-600 ">
                            £628,253
                          </p>
                          <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
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
                            <AnchorLink to="faq" smooth={true}>
                              {" "}
                              <u className="pointer-cursor">methodology</u>.
                            </AnchorLink>
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
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                <div>
                  <NavBarGlasgow />
                  <div className="flex items-center mt-20 lg:ml-16 md:ml-16 sm:ml-10">
                    <ChevronLeftIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <button
                      onClick={back}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <div className="py-10 sm:py-24 lg:py-10 md:px-16 lg:px-16 sm:px-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Are you interested in other environmental services?
                    </h3>
                    <p>
                      Environmental services can help reduce your climate risks,
                      and achieve your climate & sustainability goals.
                    </p>

                    <div className="w-full">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={stormwaterCheck}
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={floodCheck}
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
                                        id="air"
                                        aria-describedby="air"
                                        name="air"
                                        type="checkbox"
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={airQualityCheck}
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={heatIslandCheck}
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
                                        id="noise"
                                        aria-describedby="noise"
                                        name="noise"
                                        type="checkbox"
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={noiseCheck}
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
                                        id="wind"
                                        aria-describedby="wind"
                                        name="wind"
                                        type="checkbox"
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={windCheck}
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-blue4 rounded"
                                        checked={speciesCheck}
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
                                        🐝 Biodiversity
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={greenJobsCheck}
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
                                        👩‍🌾 Green jobs creation
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={footballCheck}
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={otherCheck}
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
                                        🤽‍♀️ Other social outcomes (e.g. mental
                                        health, walkability)
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
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="bg-white faq2">
                          <div className="bg-white">
                            <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                              <div className="mt-6 pt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                                  {faqs2.map((faq) => (
                                    <div
                                      key={faq.id}
                                      className="bg-gray p-5 rounded-md"
                                    >
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
                    </div>
                  </div>
                </div>
                <div className="bg-gray3 py-16 sm:py-24 lg:py-20 px-16 right">
                  <div className="flex-shrink-0 pt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Glasgow’s Environmental Services Capacity
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Physical Flows
                    </h4>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-regular text-gray-500 truncate">
                            Stormwater retention
                          </p>
                        </dt>
                        <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                          <p className="text-2xl font-semibold text-blue2 ">
                            812,000m³
                          </p>
                          <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
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
                          <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                            per year
                          </p>
                        </dd>
                      </div>
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-regualr text-gray-500 truncate">
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
                          <p className="ml-2 text-sm font-regualr text-gray-500 truncate">
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
                            <AnchorLink to="faq2" smooth={true}>
                              <u className="pointer-cursor">methodology</u>.
                            </AnchorLink>
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
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                <div>
                  <NavBarGlasgow />
                  <div className="flex items-center mt-20 md:ml-16 ml:mt-16 sm:ml-10">
                    <ChevronLeftIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <button
                      onClick={back}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <div className="py-10 md:px-16 lg:px-16 sm:px-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Do you want to invest in stewardship activities?
                    </h3>
                    <p>
                      Diversified greening efforts for planting more trees and
                      maintaining larger trees, to maximize environmental
                      services.
                    </p>
                    <div className="w-full">
                      <div className="relative flex flex-col  w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-2">
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={plantingCheck}
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
                                        Invest in projects focused on planting
                                        the right tree at the right place.
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={preservationCheck}
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
                                        Invest in projects legally preventing
                                        unnecessary felling.
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
                                        className="focus:ring-blue4 h-4 w-4 text-blue4 border-gray-300 rounded"
                                        checked={maintenanceCheck}
                                        onChange={() => {
                                          console.log("yo");
                                          setMaintenanceCheck(
                                            !maintenanceCheck
                                          );
                                        }}
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
                                        Invest in projects focused on intensive
                                        long-term care.
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
                                        Invest in projects targeting habitat
                                        restoration. (Coming soon)
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
                                        Invest in projects growing seedlings
                                        locally. (Coming soon)
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
                                        Invest in projects sustainably managing
                                        trees' end of life. (Coming soon)
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
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="bg-white faq3">
                          <div className="bg-white">
                            <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                              <div className="mt-6 pt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                                  {faqs3.map((faq) => (
                                    <div
                                      key={faq.id}
                                      className="bg-gray p-5 rounded-md"
                                    >
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
                    </div>
                  </div>
                </div>

                <div className="bg-gray3 py-16 sm:py-24 lg:py-20 px-16 right">
                  <div className="flex-shrink-0 pt-10">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Glasgow’s Stewardship Activities 2021-2025
                    </h3>

                    <h4 className="text-md leading-6 font-medium text-gray-900 m-2">
                      Number of trees
                    </h4>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
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
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                      <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                          <p className="ml-2 text-sm font-medium text-gray-500 truncate">
                            Planting
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
                            Maintenance
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
                            Preservation
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
                            <AnchorLink to="faq3" smooth={true}>
                              {" "}
                              <u className="pointer-cursor">methodology</u>.
                            </AnchorLink>
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
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                <div>
                  <NavBarGlasgow />
                  <div className="flex items-center mt-20 md:ml-16 lg:ml-16 sm:ml-10">
                    <ChevronLeftIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <button
                      onClick={back}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Back
                    </button>
                  </div>
                  <div className="py-10 md:px-16 lg:px-16 sm:px-8">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Submit your interest
                    </h3>
                    <h4 className="text-lg mt-5 leading-6 font-sm text-gray-900">
                      Interest summary
                    </h4>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-8 sm:grid-cols-1">
                      {carbonSelect === "Budget" && (
                        <div className="carbon-card rounded-md">
                          <p className="text-white ml-4 mt-4 text-lg">
                            Carbon Budget
                          </p>
                          <p className="text-white ml-4 mt-2 mb-20 text-2xl font-semibold leading-6 text-gray-700">
                            £{carbonInputVal}
                          </p>
                        </div>
                      )}
                      {carbonSelect === "Flows" && (
                        <div className="carbon-card rounded-md">
                          <p className="text-white ml-4 mt-4 text-lg">
                            Carbon Physical Flows
                          </p>
                          <p className="text-white ml-4 mt-2 mb-20 text-2xl font-semibold leading-6 text-gray-700">
                            {carbonInputVal}tCO2e
                          </p>
                        </div>
                      )}
                      {carbonSelect === "Percentage" && (
                        <div className="carbon-card rounded-md">
                          <p className="text-white ml-4 mt-4 text-lg">
                            Carbon Percentage
                          </p>
                          <p className="text-white ml-4 mt-2 mb-20 text-2xl font-semibold leading-6 text-gray-700">
                            {carbonInputVal}% available
                          </p>
                        </div>
                      )}
                      <div className="rounded-md">
                        {stormwaterCheck && <p>🌧 Stormwater Retention</p>}
                        {waterQualityCheck && <p>🚰 Water Quality</p>}
                        {floodCheck && <p>🌊 Flood control</p>}
                        {airQualityCheck && <p>☁ Air quality improvement</p>}
                        {heatIslandCheck && (
                          <p>🥵 Heat island effect reduction</p>
                        )}
                        {noiseCheck && <p>🔕 Noise reduction</p>}
                        {windCheck && <p>💨 Wind protection</p>}
                        {speciesCheck && <p>🐝 Biodiversity</p>}
                        {greenJobsCheck && <p>👩‍🌾 Green jobs creation</p>}
                        {footballCheck && (
                          <p>🚶‍♀️ Increased high street footfall</p>
                        )}
                        {otherCheck && <p>🤽‍♀️ Other social outcomes</p>}
                        {plantingCheck && <p>🌱 Planting</p>}
                        {preservationCheck && <p>🐛 Preservation </p>}
                        {maintenanceCheck && <p>🪓 Maintenance</p>}
                      </div>
                    </div>
                    <div className="mt-10">
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
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="outcomes-panel right"></div>
              </div>
            );
          case 4:
            return (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                <div>
                  <NavBarGlasgow />
                  <div className="py-16 sm:py-24 lg:py-20 md:px-16 lg:px-16 sm:px-8">
                    <h3 className="font-grotesk text-3xl text-gray-900 sm:text-4xl pb-5">
                      Thanks for submitting your interest in supporting
                      Glasgow’s Urban Forest Portfolio!
                    </h3>
                    <p>
                      A confirmation has been sent to your email and our team
                      will contact you for next steps.
                    </p>
                    <div className="pt-5">
                      <div className="flex justify-end">
                        <Link
                          to="/invest-in-nature/glasgow/invest/portfolio"
                          className="ml-3 inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue4 hover:bg-blue3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          View sample portfolio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="outcomes-panel right"></div>
              </div>
            );
          default:
            return "Hi!"; //TODO: update this
        }
      })()}
    </>
  );
}
