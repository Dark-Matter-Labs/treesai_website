import { useState } from "react";
import { RadioGroup, Combobox } from "@headlessui/react";
import {
  CheckCircleIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";

const typologies = [
  {
    id: 1,
    title: "Woodland",
    description: "description here",
    users: "another detail",
    value: "forest",
  },
  {
    id: 2,
    title: "Street trees",
    description: "description here",
    users: "another detail",
    value: "forest",
  },
  {
    id: 3,
    title: "SuDs",
    description: "description here",
    users: "another detail",
    value: "forest",
  },
  {
    id: 4,
    title: "Trees in vacant land",
    description: "description here",
    users: "another detail",
    value: "forest",
  },
];

const time_horizons = [
  { id: 1, name: "50 Years", value: 50 },
  { id: 2, name: "25 years", value: 25 },
  { id: 3, name: "20 years", value: 20 },
  { id: 4, name: "10 years", value: 10 },
  { id: 5, name: "5 years", value: 5 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectInput() {
  const [projectName, setProjectName] = useState("");
  const [selectedTypology, setTypology] = useState(typologies[0]);
  const [areaDensity, setAreaDensity] = useState(1600);
  const [evergreenPercent, setEvergreenPercent] = useState(100);
  const [decidiousPercent, setDecidiousPercent] = useState(0);
  const [minDBH, setMinDBH] = useState(6);
  const [maxDBH, setMaxDBH] = useState(8);

  const [outputImage, setOutputImage] = useState("");

  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();

  const filteredPeople =
    query === ""
      ? time_horizons
      : time_horizons.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  function getSAFOutput() {
    let myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    let raw = JSON.stringify({
      name: projectName,
      description: "some Description",
      typology: selectedTypology.value,
      min_dbh: minDBH,
      max_dbh: maxDBH,
      maintenance_scope: 2,
      season_growth_mean: 200,
      season_growth_var: 7,
      time_horizon: selectedPerson.value,
      density_per_ha: areaDensity,
      species: ["evergreen"],
    });

    console.log(raw);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/saf/run", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // show output

        console.log(result)
        setOutputImage(result.avgCarbonReleasePlot)
        
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="bg-white">
        <h2 className="font-grotesk mt-2 lg:text-5xl md:text-4xl text-gray-900 sm:text-4xl ml-10 mt-10">
          Glasgow project input
        </h2>
        <div className="px-0 space-y-2 mt-10 input-section">
          <form className="space-y-8 divide-y divide-gray-200 input-inside">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    Enter your project details
                  </h3>
                </div>

                <div className="sm:col-span-3 mt-5">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      defaultValue={projectName}
                      onChange={(e) => {
                        setProjectName(e.target.value);
                      }}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 mt-4">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project contact email
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-1">
                  <RadioGroup value={selectedTypology} onChange={setTypology}>
                    <RadioGroup.Label className="text-base font-medium text-gray-900">
                      Select typology
                    </RadioGroup.Label>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                      {typologies.map((typology) => (
                        <RadioGroup.Option
                          key={typology.id}
                          value={typology}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active
                                ? "border-indigo-500 ring-2 ring-indigo-500"
                                : "",
                              "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <div className="flex-1 flex">
                                <div className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {typology.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-1 flex items-center text-sm text-gray-500"
                                  >
                                    {typology.description}
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-6 text-sm font-medium text-gray-900"
                                  >
                                    {typology.users}
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              <CheckCircleIcon
                                className={classNames(
                                  !checked ? "invisible" : "",
                                  "h-5 w-5 text-indigo-600"
                                )}
                                aria-hidden="true"
                              />
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-lg pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="i-cover"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Area density
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="i-cover"
                        id="i-cover"
                        defaultValue={areaDensity}
                        onChange={(e) => {
                          setAreaDensity(e.target.value);
                        }}
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        Ha
                      </span>
                    </div>
                  </div>

                  <fieldset className="space-y-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      What are your maintenance activities?
                    </h3>
                    <legend className="sr-only">Activities</legend>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="planting"
                          aria-describedby="planting"
                          name="planting"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="planting"
                          className="font-medium text-gray-700"
                        >
                          Planting
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Pruning (Early Care) formative
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="maintenance"
                          className="font-medium text-gray-700"
                        >
                          Pruning (Mature) structural
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Watering
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Pest/Risks Management
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Grass cutting, path and drain maintenance
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Removal and Disposal
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Tree Replacement
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
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
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="preservation"
                          className="font-medium text-gray-700"
                        >
                          Inspection & Monitoring
                        </label>
                        <p id="offers-description" className="text-gray2">
                          description
                        </p>
                      </div>
                    </div>
                  </fieldset>

                  <div className="sm:col-span-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Tree species composition
                    </h3>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="evergreen"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Percentage of evergreen trees
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="evergreen"
                        id="evergreen"
                        defaultValue={evergreenPercent}
                        onChange={(e) => {
                          setEvergreenPercent(e.target.value);
                        }}
                        max="100"
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="decidious"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Percentage of deciduous trees
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="decidious"
                        id="decidious"
                        max="100"
                        defaultValue={decidiousPercent}
                        onChange={(e) => {
                          setDecidiousPercent(e.target.value);
                        }}
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="tree-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Minimum DBH
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        onChange={(e) => {
                          setMinDBH(e.target.value);
                        }}
                        name="tree-number"
                        defaultValue={minDBH}
                        id="tree-number"
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        cm
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="tree-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Maximum DBH
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        onChange={(e) => setMaxDBH(e.target.value)}
                        name="tree-number"
                        id="tree-number"
                        defaultValue={maxDBH}
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        cm
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="time horizon"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time horizon
                    </label>

                    <Combobox
                      as="div"
                      value={selectedPerson}
                      onChange={setSelectedPerson}
                    >
                      <Combobox.Label className="block text-sm font-medium text-gray-700">
                        Set time horizon(in years)
                      </Combobox.Label>
                      <div className="relative mt-1">
                        <Combobox.Input
                          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(person) => person.value}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <SelectorIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        {filteredPeople.length > 0 && (
                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                  classNames(
                                    "relative cursor-default select-none py-2 pl-3 pr-9",
                                    active
                                      ? "bg-indigo-600 text-white"
                                      : "text-gray-900"
                                  )
                                }
                              >
                                {({ active, selected }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        "block truncate",
                                        selected && "font-semibold"
                                      )}
                                    >
                                      {person.value}
                                    </span>

                                    {selected && (
                                      <span
                                        className={classNames(
                                          "absolute inset-y-0 right-0 flex items-center pr-4",
                                          active
                                            ? "text-white"
                                            : "text-indigo-600"
                                        )}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    )}
                                  </>
                                )}
                              </Combobox.Option>
                            ))}
                          </Combobox.Options>
                        )}
                      </div>
                    </Combobox>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 ml-40 mb-20">
          <button
            onClick={getSAFOutput}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2"
          >
            Run scenario
          </button>
        </div>

        <img src={outputImage} />
        
      </div>
    </>
  );
}
