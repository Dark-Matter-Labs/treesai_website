import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  InformationCircleIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { Bar, Line } from "react-chartjs-2";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

const pages = [
  { name: "Glasgow", href: "/invest-in-nature/glasgow/", current: false },
  { name: "Steward", href: "/invest-in-nature/glasgow/steward", current: true },
  {
    name: "Project details",
    href: "/invest-in-nature/glasgow/steward",
    current: true,
  },
];

const settings = [
  {
    name: "Preservation",
    description: "Legally prevent felling in the long term",
  },
  {
    name: "Planting",
    description: "Planting the right tree at the right place",
  },
  { name: "Maintenance", description: "Intensive long term care" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    id: 1,
    question: "What do we mean by pervious and impervious surface?",
    answer:
      "A pervious surface allows water to percolate through to the area underneath rather than becoming runoff. Impervious surfaces are solid surfaces that prevent aeration, infiltration, and water penetration, resulting in a number of harmful side effects. Perviouse surfaces have multiple benefits from a point of view of stormwater management. Find here more information about these benefits. https://www.susdrain.org/delivering-suds/using-suds/suds-components/source-control/pervious-surfaces/benefits-of-pervious-surfaces.html ",
  },
  {
    id: 2,
    question: "Can i just run projects that fit the listed activities?",
    answer:
      "In order for projects to receive financial rewards for the environmental services they produce, we have to certify that specific actions have been achieved to the highest standards, thus we are building a series of protocols that will help nature stewards guide their project development.",
  },
];

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

const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
});

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

const steps = [
  {
    name: "Calculate your impact",
    description: "Input your project details for an estimation.",
    status: "complete",
  },
  {
    name: "Review and sign protocol",
    description: "Stewardship, Growing and CarbonPlus.",
    status: "current",
  },
  {
    name: "Add to project marketplace",
    description: "Input additional info and upload your project.",
    status: "upcoming",
  },
  {
    name: "Ecosystem services SOLD",
    description: "Outcomes-buyers purchase your services.",
    status: "upcoming",
  },
  {
    name: "Year 0: Project begins",
    description: "Monitor and set a project baseline.",
    status: "upcoming",
  },
  {
    name: "Year 1: First payment",
    description: "Receive 10% of funding",
    status: "upcoming",
  },
];

export default function Steward() {
  const [pageState, setPageState] = useState(0);
  const [numberOfTrees, setNumberOfTrees] = useState(100);
  const [dbh, setDBH] = useState(13);
  const [newNumberOfTrees, setNewNumberOfTrees] = useState(0);
  const [evergreenPercent, setEvergreenPercent] = useState(50);
  const [decidiousPercent, setDecidiousPercent] = useState(50);
  const [seq, setSeq] = useState(0);
  const [maintenanceCost, setMaintenanceCost] = useState(1000);
  const [seqArr, setArrSeq] = useState([]);
  const [selected, setSelected] = useState(settings[0]);
  const [imperviousPercent, setImperviousPercent] = useState(50);
  const [perviousPercent, setPerviousPercent] = useState(0);
  const [stormwater, setStormwater] = useState(0);
  const [stormwaterArray, setStormwaterArray] = useState([]);

  const co2data = {
    labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
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
    labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        data: stormwaterArray,
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

  const get_stock = (cm, senescence) => {
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

  const get_yearly_seq = (diameter_t0, senescence) => {
    // This function estimates the sequestration over one year given an initial tree diameter
    return (
      get_stock(get_t1(diameter_t0), senescence) -
      get_stock(diameter_t0, senescence)
    );
  };

  const calc_seq_years = (diameter_t0, years = 50, senescence) => {
    if (diameter_t0 < 6) {
      diameter_t0 = 6;
    }

    // This function calculates the total sequestration over several years and produces an array with the cumulative sum over the given number of years
    let d0 = diameter_t0;
    var seq_array = [];

    for (let i = 0; i < years; i++) {
      seq_array.push(get_yearly_seq(d0, senescence));
      d0 = get_t1(d0);
    }

    return seq_array;
  };

  function sum_arr(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  function reduce_arr(arr) {
    // function that sums elements of an array 5 by 5

    // Create a new array
    const out = [];

    // While there are elements remaining
    while (arr.length > 0) {
      // `splice` off 5 elements from the array
      const next = arr.splice(0, 5);

      const sum = sum_arr(next);

      // Push the stringified sum to the output array.
      out.push(sum);
    }

    return out;
  }

  function get_n_trees() {
    // Added a dedicated function to avoid concatenation errors
    return Number(numberOfTrees) + Number(newNumberOfTrees);
  }

  function update_seq() {
    // Calculate and update CO2 seq retention chart
    let n_trees = get_n_trees();

    // multiplying each array value by number of trees and converting to Tn
    let seq_arr_evergreen = calc_seq_years(dbh, 50, "evergreen").map(
      (x) => (x * n_trees * evergreenPercent) / 100 / 1000
    );
    let seq_arr_deciduous = calc_seq_years(dbh, 50, "deciduous").map(
      (x) => (x * n_trees * decidiousPercent) / 100 / 1000
    );

    // Add both arrays elemntwise
    let joined_seq = seq_arr_evergreen.map(function (num, idx) {
      return num + seq_arr_deciduous[idx];
    });

    const sequestrationValue = sum_arr(joined_seq);

    let sequestration_arr_for_graph = reduce_arr(joined_seq);
    setArrSeq(sequestration_arr_for_graph);

    setSeq(sequestrationValue.toFixed(2));
  }

  function get_yearly_water(n_trees, diameter) {
    let tree_area_base = 5;
    let yearly_avg_precipitation = 1079; // mm/year = liter per m2 per year said Google
    let tree_efficiency = 0.125;
    let tree_area = (tree_area_base * Math.log(diameter)) / Math.log(dbh * 1.3);

    let estimate =
      (n_trees *
        tree_area *
        yearly_avg_precipitation *
        tree_efficiency *
        (imperviousPercent / 100)) /
      1000;

    return estimate;
  }

  function update_water() {
    // // Calculate and update water retention chart

    // Variables to be used later
    // let cost_per_m2_of_water = 1.3464; // £ per sq. meter
    // let ret_per_tree = 0.406; //m2 per tree
    // let money_per_tree = 0.55; //£ per tree
    // let tree_area = 13.3; // Roni back of the envelope estimation https://darkmatterlabs.slack.com/archives/C02ET8M2UTG/p1635337783037800?thread_ts=1635155720.033900&cid=C02ET8M2UTG
    // iTREE - 403 L per Tree per Year
    // // -------------------------------
    // // Equations crafter by Marko
    //
    // let runoff_tree =
    //   precipitation - canopy_storage - imper_cover_storage - evaporation;
    // let runoff_ground = precipitation - imper_cover_storage - evaporation;
    // let avoided_runoff =
    //   (imperviousPercent / 100) * tree_area * (runoff_ground - runoff_tree);

    let n_trees = get_n_trees();

    let years = 50;
    let d0 = dbh;
    var water_array = [];

    for (let i = 0; i < years; i++) {
      water_array.push(get_yearly_water(n_trees, d0));
      d0 = get_t1(d0);
    }

    const waterRetentionValue = sum_arr(water_array);

    let water_arr_for_graph = reduce_arr(water_array);

    setStormwaterArray(water_arr_for_graph);

    setStormwater(waterRetentionValue.toFixed(2));
  }

  const calculate_button_click = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    update_seq();
    update_water();

    setPageState(1);
  };

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
      <NavBarGlasgow />
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
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Link
                    to={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? "page" : undefined}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {(() => {
          switch (pageState) {
            case 0:
              return (
                <>
                  <div className="px-2 space-y-1 mt-10 input-section">
                    <form className="space-y-8 divide-y divide-gray-200 input-inside">
                      <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Enter project details
                            </h3>
                          </div>

                          <div className="sm:col-span-3">
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
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3 mt-4">
                            <label
                              htmlFor="project-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Project short description
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
                            <div className="sm:col-span-4">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Site information
                              </h3>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="project-location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Location
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="project-location"
                                  id="project-location"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="i-cover"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Percentage of impervious surface
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="number"
                                  name="i-cover"
                                  id="i-cover"
                                  defaultValue={imperviousPercent}
                                  onChange={(e) => {
                                    setImperviousPercent(e.target.value);
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
                                htmlFor="p-cover"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Percentage of pervious surface
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                  type="number"
                                  name="p-cover"
                                  id="p-cover"
                                  defaultValue={perviousPercent}
                                  onChange={(e) => {
                                    setPerviousPercent(e.target.value);
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
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Tree information
                              </h3>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="tree-number"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Number of existing trees
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  onChange={(e) => {
                                    setNumberOfTrees(e.target.value);
                                  }}
                                  name="tree-number"
                                  defaultValue={numberOfTrees}
                                  id="tree-number"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="tree-number"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Number of new trees
                              </label>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    setNewNumberOfTrees(e.target.value)
                                  }
                                  name="tree-number"
                                  id="tree-number"
                                  defaultValue={newNumberOfTrees}
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
                                  onChange={(e) => {
                                    setDBH(e.target.value);
                                  }}
                                  name="DBH"
                                  id="DBH"
                                  defaultValue={dbh}
                                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300"
                                />
                                <span className="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  cm
                                </span>
                              </div>
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
                                Percentage of decidious trees
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

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Existing Maintenance costs
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  £
                                </span>
                                <input
                                  type="number"
                                  name="cost"
                                  defaultValue={maintenanceCost}
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

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                              >
                                New Maintenance costs
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                  £
                                </span>
                                <input
                                  type="number"
                                  name="cost"
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

                            <div className="sm:col-span-4">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                What activities do you have planned?
                              </h3>
                            </div>
                            <div className="rounded-md bg-green-50 p-4 mt-2">
                              <div className="flex">
                                <div className="flex-shrink-0">
                                  <InformationCircleIcon
                                    className="h-5 w-5 text-green-400"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-sm font-medium text-green-800">
                                    Activities are in progress. Give us feedback
                                    and learn about our <u>methodology</u>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <RadioGroup value={selected} onChange={setSelected}>
                            <RadioGroup.Label className="sr-only">
                              Privacy setting
                            </RadioGroup.Label>
                            <div className="bg-white rounded-md -space-y-px">
                              {settings.map((setting, settingIdx) => (
                                <RadioGroup.Option
                                  key={setting.name}
                                  value={setting}
                                  className={({ checked }) =>
                                    classNames(
                                      settingIdx === 0
                                        ? "rounded-tl-md rounded-tr-md"
                                        : "",
                                      settingIdx === settings.length - 1
                                        ? "rounded-bl-md rounded-br-md"
                                        : "",
                                      checked
                                        ? "bg-indigo-50 border-indigo-200 z-10"
                                        : "border-gray-200",
                                      "relative border p-4 flex cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          checked
                                            ? "bg-indigo-600 border-transparent"
                                            : "bg-white border-gray-300",
                                          active
                                            ? "ring-2 ring-offset-2 ring-indigo-500"
                                            : "",
                                          "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                                      </span>
                                      <div className="ml-3 flex flex-col">
                                        <RadioGroup.Label
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-indigo-900"
                                              : "text-gray-900",
                                            "block text-sm font-medium"
                                          )}
                                        >
                                          {setting.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-indigo-700"
                                              : "text-gray-500",
                                            "block text-sm"
                                          )}
                                        >
                                          {setting.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                          <div className="pt-5">
                            <div className="flex justify-end">
                              <button
                                onClick={(e) => calculate_button_click(e)}
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Calculate Impact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
                </>
              );
            case 1:
              return (
                <div className="input-section">
                  <div className="flex-shrink-0 pt-10 input-inside">
                    <div className="pt-5">
                      <div className="flex justify-start">
                        <button
                          onClick={(e) => back(e)}
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Back to project details
                        </button>
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
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Environmental service
                    </h3>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
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
                            {stormwater} m3
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
                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          onClick={(e) => next(e)}
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Review your benefits
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className="input-section">
                  <div className="flex-shrink-0 pt-10 input-inside">
                    <div className="pt-5">
                      <div className="flex justify-start">
                        <button
                          onClick={(e) => back(e)}
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Back to impact review
                        </button>
                      </div>
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

                    <div>
                      <dl className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
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

                      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
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

                    <Line
                      data={maintenance_forecast_data}
                      options={maintenance_forecast_options}
                    />
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
              );
            case 3:
              return (
                <div>
                  <div className="pt-5">
                    <div className="flex justify-start">
                      <button
                        onClick={(e) => back(e)}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Back to maintenance review
                      </button>
                    </div>
                  </div>
                  <div className="relative max-w-7xl mx-auto md:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="add-to-market"></div>
                    <div className="bg-gray-50 py-16 px-4">
                      <div className="max-w-lg mx-auto">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                          Work with TREESAI
                        </h2>
                        <h2 className="font-grotesk text-3xl text-gray-900 sm:text-4xl">
                          Share your environmental services to support your
                          project
                        </h2>
                        <div className="pt-2 pb-2">
                          <p className="text-lg leading-6 text-dark">
                            Add your project to Glasgow’s Nature Atlas to share
                            its ecosystem services.
                          </p>
                        </div>
                        <nav aria-label="Progress">
                          <ol className="overflow-hidden">
                            {steps.map((step, stepIdx) => (
                              <li
                                key={step.name}
                                className={classNames(
                                  stepIdx !== steps.length - 1 ? "pb-10" : "",
                                  "relative"
                                )}
                              >
                                {step.status === "complete" ? (
                                  <>
                                    {stepIdx !== steps.length - 1 ? (
                                      <div
                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <a
                                      href={step.href}
                                      className="relative flex items-start group"
                                    >
                                      <span className="h-9 flex items-center">
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                                          <CheckIcon
                                            className="w-5 h-5 text-white"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </span>
                                      <span className="ml-4 min-w-0 flex flex-col">
                                        <span className="text-xs font-semibold tracking-wide uppercase">
                                          {step.name}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                          {step.description}
                                        </span>
                                      </span>
                                    </a>
                                  </>
                                ) : step.status === "current" ? (
                                  <>
                                    {stepIdx !== steps.length - 1 ? (
                                      <div
                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <a
                                      href={step.href}
                                      className="relative flex items-start group"
                                      aria-current="step"
                                    >
                                      <span
                                        className="h-9 flex items-center"
                                        aria-hidden="true"
                                      >
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                                          <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                                        </span>
                                      </span>
                                      <span className="ml-4 min-w-0 flex flex-col">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
                                          {step.name}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                          {step.description}
                                        </span>
                                      </span>
                                    </a>
                                  </>
                                ) : (
                                  <>
                                    {stepIdx !== steps.length - 1 ? (
                                      <div
                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <div className="relative flex items-start group">
                                      <span
                                        className="h-9 flex items-center"
                                        aria-hidden="true"
                                      >
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                                        </span>
                                      </span>
                                      <span className="ml-4 min-w-0 flex flex-col">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                                          {step.name}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                          {step.description}
                                        </span>
                                      </span>
                                    </div>
                                  </>
                                )}
                              </li>
                            ))}
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => next(e)}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit for review
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 4:
              return (
                <div>
                  <div className="pt-5">
                    <div className="flex justify-start">
                      <button
                        onClick={(e) => back(e)}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Back to protocol review
                      </button>
                    </div>
                  </div>
                  <div className="relative max-w-7xl mx-auto md:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="add-to-market"></div>
                    <div className="bg-gray-50 py-16 px-4">
                      <div className="max-w-lg mx-auto">
                        <h2 className="font-grotesk text-3xl text-gray-900 sm:text-4xl">
                          Thank you for submitting your project!
                        </h2>
                        <div className="pt-2 pb-2">
                          <p className="text-lg leading-6 text-dark">
                            We are currently looking for innovative projects in
                            Glasgow. If you are interested in TreesAI, please
                            send us an email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            default:
              return "Hi!"; //TODO: update this
          }
        })()}
      </div>
    </>
  );
}
