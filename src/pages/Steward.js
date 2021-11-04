import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  InformationCircleIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import { Bar, Line } from "react-chartjs-2";
import { Link as AnchorLink } from "react-scroll";

import NavBarGlasgow from "../components/demo/NavBarGlasgow";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    id: 1,
    question: "Can I just run projects that fit the listed activities?",
    answer:
      "In order for projects to receive financial capital for the environmental services they produce, we have to certify that specific actions have been achieved to the highest standards. Thus we are building a series of protocols that will help nature stewards guide their project development and build investible NbS sites.",
  },
  {
    id: 2,
    question: "What do we mean by stewardship and nature stewards?",
    answer:
      "By stewardship, we mean the responsible use and protection of the natural environment through innovative and sustainable practices, such as preservation, maintenance, restoration, disease management and others. Nature stewards are the ‘doers’, the ones that go out and execute on sustainable practices, through direct action and management.",
  },
  {
    id: 3,
    question: "What is TreesAI's relationship to nature stewards?",
    answer:
      "TreesAI delivers monitoring and forecasting capabilities of urban forest health and evolution to help inform nature stewards' decisions to optimise for natural regeneration. Both parties are part of a non-binding protocol of stewardship practices that details optimal arboricultural techniques to be followed by nature stewards, thus making them eligible for BCB financing.",
  },
  {
    id: 4,
    question: "What do we mean by pervious and impervious surface?",
    answer:
      "A pervious surface allows water to percolate through to the area underneath rather than becoming runoff. Impervious surfaces are solid surfaces that prevent aeration, infiltration, and water penetration, resulting in a number of harmful side effects. Pervious surfaces have multiple benefits from the point of view of stormwater management.",
  },
];

const faqs2 = [
  {
    id: 1,
    question: "What are environmental services?",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
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
    question: "How do we calculate maintenance funding potential?",
    answer:
      "We do not calculate the maintenance cost of project developers. We rely on the project uploader to input an estimate of annual maintenance costs (optional field). In the demo, we are using indicative numbers based on two initial studied sites (annual maintenance cost of £1,000 for 50 years, £50-100 revenue from environmental services; therefore, 5-10% maintenance cost coverage). For the pilot phase, project developers will have the option to input annual maintenance costs then the platform will compute environmental services value, Maintenance cost coverage (%) = Potential Revenue from Sale of Environmental Services / Annual Maintenance Cost of Site",
  },
  {
    id: 2,
    question: "How do we price environmental services in TreesAI?",
    answer:
      "We derive the economic value of environmental service through a direct non-use valuation method. Where we measure the value of regulating environmental services trees provide (such as carbon sequestration) rather than actual direct use of trees (such as timber). As we want to preserve and repurpose urban trees as civic assets, we estimate the avoided costs enjoyed by stakeholders from the delivery of environmental services. In Phase I pricing, we see tree value as the summation of avoided damage-cost to local stakeholders. In the next phases, we will socialize pricing benchmarks and move towards a willingness-to-pay method informed by local liability holders.",
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
      stacked: true,
      title: {
        display: true,
        text: "Costs over 50 years, assuming maintenance costs remain the same, at 0% inflation.",
      },
    },
    y: {
      display: true,
      stacked: true,
      title: {
        display: true,
        text: "Cost/Benefit estimate",
      },
    },
  },
};

const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
});

const steps = [
  {
    name: "Calculate your impact",
    description: "Upload your project details for an estimation.",
    status: "complete",
  },
  {
    name: "Review and sign protocol",
    description: "Agree to follow specific design and delivery terms.",
    status: "current",
  },
  {
    name: "ADD TO GLASGOW’S PORTFOLIO",
    description: "Input additional info and upload your project.",
    status: "upcoming",
  },
  {
    name: "FUNDING COMMITMENT RECEIVED",
    description: "Beneficiaries invest in your environmental services.",
    status: "upcoming",
  },
  {
    name: "Year 0: Project begins",
    description: "Set a project baseline and monitor.",
    status: "upcoming",
  },
  {
    name: "Year 1: First payment",
    description: "Receive funds covering operational costs.",
    status: "upcoming",
  },
];

export default function Steward() {
  const [pageState, setPageState] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [numberOfTrees, setNumberOfTrees] = useState(6000);
  const [dbh, setDBH] = useState(13);
  const [newNumberOfTrees, setNewNumberOfTrees] = useState(0);
  const [evergreenPercent, setEvergreenPercent] = useState(50);
  const [decidiousPercent, setDecidiousPercent] = useState(50);
  const [seq, setSeq] = useState(0);
  const [maintenanceCost, setMaintenanceCost] = useState(10000);
  const [maintenanceCostArray, setMaintenanceCostArray] = useState([]);
  const [savingsEstimate, setSavingsEstimate] = useState(10);
  const [seqArr, setArrSeq] = useState([]);
  const [imperviousPercent, setImperviousPercent] = useState(50);
  const [stormwater, setStormwater] = useState(0);
  const [stormwaterArray, setStormwaterArray] = useState([]);
  const [stormwaterCostArray, setStormwaterCostArray] = useState([]);
  const [seqCostArray, setSeqCostArray] = useState([]);
  const [savingsPercentage, setSavingsPercentage] = useState("5-10");

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

  const maintenance_forecast_data = {
    labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        label: "Current maintenance costs",
        fill: true,
        backgroundColor: "#10B981",
        borderColor: "#10B981",
        data: maintenanceCostArray,
        stack: "Stack 0",
      },
      {
        label: "Stormwater retention",
        fill: true,
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        data: stormwaterCostArray,
        stack: "Stack 1",
      },
      {
        label: "Carbon sequestration",
        fill: true,
        backgroundColor: "#03AAAAAA",
        borderColor: "#3B82F6",
        data: seqCostArray,
        stack: "Stack 1",
      },
      {
        label: "Other ecosystem services(coming soon)",
        backgroundColor: "#6B7280",
        borderColor: "#6B7280",
        data: [100, 200, 300, 400, 600, 800, 1000, 1200, 1400, 1600, 2000],
        fill: true,
        stack: "Stack 1",
      },
    ],
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
    setSeq(sequestrationValue.toFixed(2));

    let sequestration_arr_for_graph = reduce_arr(joined_seq);
    setArrSeq(sequestration_arr_for_graph);

    let carbonPrice = 77; //price per ton // to be changed for evolutive price
    let seq_benefit = sequestration_arr_for_graph.map((x) => x * carbonPrice);
    setSeqCostArray(seq_benefit);

    // // Calculate and update water retention chart

    // Variables to be used later
    // flood control m3 average £12.70
    // £312,000 = heat island effect reduction -> total Glasgow
    // Heat island effect - 1.56£ per tree per year

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

    // Water Cost
    let cost_per_m2_of_water = 1.53; // £ per sq. meter

    let water_benefit_arr_for_graph = water_arr_for_graph.map(
      (x) => x * cost_per_m2_of_water
    );
    setStormwaterCostArray(water_benefit_arr_for_graph);

    // savings
    let savings =
      Number(sum_arr(sequestration_arr_for_graph) / 49) +
      Number(sum_arr(water_benefit_arr_for_graph) / 49);

    setSavingsEstimate(savings.toFixed(1));

    setSavingsPercentage((maintenanceCost / savings).toFixed());
  }

  function update_cost() {
    // Update the cost chart of page 3
    let cost = Array(10).fill(maintenanceCost * 5);
    setMaintenanceCostArray(cost);
  }

  const calculate_button_click = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    update_seq();
    update_cost();

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
      <div className="bg-white">
        {(() => {
          switch (pageState) {
            case 0:
              return (
                <>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                    <div>
                      <NavBarGlasgow />
                      <div className="flex items-center mt-20 md:ml-20 lg:ml-20 sm:ml-10">
                        <ChevronLeftIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <Link
                          to="/become-a-steward"
                          className="text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          Back
                        </Link>
                      </div>

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
                                  Short description
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
                                      placeholder="5 Mansewood Rd, Glasgow G43 1TW"
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
                                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Trees
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
                                    What are your stewardship activities?
                                  </h3>
                                </div>
                                <div className="rounded-md bg-green-50 p-4">
                                  <div className="flex">
                                    <div className="flex-shrink-0">
                                      <InformationCircleIcon
                                        className="h-5 w-5 text-green-400"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <h3 className="text-sm font-medium text-green-800">
                                        We are currently defining stewardship
                                        activities. Give us feedback and learn
                                        more about our{" "}
                                        <AnchorLink to="faq" smooth={true}>
                                          <u className="pointer-cursor">
                                            methodology
                                          </u>
                                          .
                                        </AnchorLink>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <fieldset className="space-y-5">
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
                                      🌱 Planting
                                    </label>
                                    <p
                                      id="offers-description"
                                      className="text-gray2"
                                    >
                                      Your project is focused on planting the
                                      right tree at the right place.
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
                                      🐛 Preservation
                                    </label>
                                    <p
                                      id="offers-description"
                                      className="text-gray2"
                                    >
                                      Your project is legally preventing
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
                                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
                                      Your project is focused on intensive long
                                      term care.
                                    </p>
                                  </div>
                                </div>
                              </fieldset>
                              <div className="pt-5 pb-20">
                                <div className="flex justify-end">
                                  <button
                                    onClick={(e) => calculate_button_click(e)}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="bg-white faq">
                        <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                          <div className="mt-6 pt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                              {faqs.map((faq) => (
                                <div key={faq.id} className="bg-gray p-5 rounded-md">
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
                    <div className="steward right"></div>
                  </div>
                </>
              );
            case 1:
              return (
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                  <div>
                    <NavBarGlasgow />
                    <div className="flex items-center mt-20 md:ml-20 lg:ml-20 sm:ml-10">
                      <ChevronLeftIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <button
                        onClick={(e) => back(e)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Back
                      </button>
                    </div>

                    <div className="input-section">
                      <div className="flex-shrink-0 input-inside">
                        <h3 className="text-2xl leading-6 font-medium text-gray-900 mt-5">
                          {projectName} Your project impact
                        </h3>
                        <div className="rounded-md bg-green-50 p-4 mt-4">
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
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                          Environmental services
                        </h3>

                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                          <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dt>
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
                                CO₂ sequestration
                              </p>
                            </dt>
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-green-600 ">
                                {seq} tCO2e
                              </p>
                              <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                                over 50 years
                              </p>
                            </dd>
                          </div>

                          <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dt>
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
                                Avoided runoff
                              </p>
                            </dt>
                            <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                              <p className="text-2xl font-semibold text-blue2 ">
                                {stormwater} m3
                              </p>
                              <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                                over 50 years
                              </p>
                            </dd>
                          </div>

                          <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                            <dt>
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
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
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
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
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
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
                              <p className="ml-2 text-sm font-small text-gray-500 truncate">
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
                          <h4 className="text-2xl leading-6 font-large text-gray-900 pb-2 pt-2">
                            Carbon sequestration
                          </h4>
                          <Line data={co2data} options={co2options} />

                          <h4 className="text-2xl leading-6 font-large text-gray-900 pb-2 pt-2">
                            Stormwater retention
                          </h4>
                          <Bar
                            data={stormwater_data}
                            options={stormwater_options}
                          />
                        </div>
                        <div className="pt-5">
                          <div className="flex justify-end pb-20">
                            <button
                              onClick={(e) => next(e)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="bg-white faq2">
                          <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                            <div className="mt-6 pt-10">
                              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                                {faqs2.map((faq) => (
                                  <div key={faq.id} className="bg-gray p-5 rounded-md">
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

                  <div className="steward right"></div>
                </div>
              );
            case 2:
              return (
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                  <div>
                    <NavBarGlasgow />
                    <div className="flex items-center mt-20 lg:ml-20 md:ml-20 sm:ml-10">
                      <ChevronLeftIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <button
                        onClick={(e) => back(e)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Back
                      </button>
                    </div>
                    <div className="input-section">
                      <div className="flex-shrink-0 input-inside mt-5">
                        <div className="mb-5">
                          <h3 className="text-2xl leading-6 font-medium text-gray-900">
                            {projectName} Maintenance funding potential
                          </h3>
                        </div>
                        <div className="rounded-md bg-green-50 p-4 mt-4">
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
                                  <u className="pointer-cursor">methodology</u>.
                                </AnchorLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg">
                          <dt>
                            <p className="ml-2 text-sm font-small text-gray-500 truncate">
                              Potential funding coverage
                            </p>
                          </dt>
                          <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-2xl font-semibold text-green-600">
                              {savingsPercentage}%
                            </p>
                            <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                              Based on our methodology
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dl className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-2">
                            <div className="relative bg-white pt-2 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                              <dt>
                                <p className="ml-2 text-sm font-small text-gray-500 truncate">
                                  Current costs
                                </p>
                              </dt>
                              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                <p className="text-2xl font-semibold text-gray-900">
                                  {formatter.format(maintenanceCost)}
                                </p>
                                <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                                  <span className="sr-only">by</span>
                                  per year
                                </p>
                              </dd>
                            </div>
                            <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                              <dt>
                                <p className="ml-2 text-sm font-small text-gray-500 truncate">
                                  Savings estimate
                                </p>
                              </dt>
                              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                <p className="text-2xl font-semibold text-gray-900">
                                  {formatter.format(savingsEstimate)}
                                </p>
                                <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                                  <span className="sr-only">by</span>
                                  per year
                                </p>
                              </dd>
                            </div>
                          </dl>

                          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
                            <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                <p className="text-2xl font-semibold text-green-600">
                                  {formatter.format(maintenanceCost * 50)}
                                </p>
                                <p className="ml-1 text-gray-5 flex items-baseline text-sm font-regular">
                                  <span className="sr-only">by</span>
                                  over 50 years
                                </p>
                              </dd>
                            </div>
                            <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                              <dd className="ml-2 pb-6 flex items-baseline sm:pb-7">
                                <p className="text-2xl font-semibold text-green-600">
                                  {formatter.format(savingsEstimate * 50)}
                                </p>
                                <p className="text-gray5 ml-2 flex items-baseline text-sm font-regular">
                                  <span className="sr-only">by</span>
                                  over 50 years
                                </p>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <h3 className="mt-10 text-lg leading-6 font-medium text-gray-900 mt-4">
                          Funding potential over 50 years
                        </h3>

                        <div className="sm:w-full">
                          <Bar
                            data={maintenance_forecast_data}
                            options={maintenance_forecast_options}
                          />
                        </div>

                        <div className="pt-5 pb-20">
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => next(e)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="bg-white faq3">
                          <div className="max-w-7xl mx-auto py-8 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
                            <div className="mt-6 pt-10">
                              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12">
                                {faqs3.map((faq) => (
                                  <div key={faq.id} className="bg-gray p-5 rounded-md">
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
                  <div className="steward right"></div>
                </div>
              );
            case 3:
              return (
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                  <div>
                    <NavBarGlasgow />
                    <div className="flex items-center mt-20 lg:ml-20 md:ml-20 sm:ml-10">
                      <ChevronLeftIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <button
                        onClick={(e) => back(e)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Back
                      </button>
                    </div>
                    <div className="bg-white">
                      <div className="lg:ml-20 md:ml-20 mt-5 sm:ml-8">
                        <h2 className="text-base text-green4 font-semibold tracking-wide uppercase">
                          Work with TREESAI
                        </h2>
                        <h2 className="font-medium text-2xl text-gray-900">
                          Fund your environmental services to support your
                          project
                        </h2>
                        <div className="pt-2 pb-2">
                          <p className="text-lg leading-6 text-dark">
                            Upload your project to Glasgow’s Urban Forest
                            Portfolio.
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
                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-green4"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <a
                                      href={step.href}
                                      className="relative flex items-start group"
                                    >
                                      <span className="h-9 flex items-center">
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green4 rounded-full group-hover:bg-indigo-800">
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
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green4 rounded-full">
                                          <span className="h-2.5 w-2.5 bg-green4 rounded-full" />
                                        </span>
                                      </span>
                                      <span className="ml-4 min-w-0 flex flex-col">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-green4">
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
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray2 rounded-full group-hover:border-gray-400">
                                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                                        </span>
                                      </span>
                                      <span className="ml-4 min-w-0 flex flex-col">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-gray2">
                                          {step.name}
                                        </span>
                                        <span className="text-sm text-gray2">
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
                        <div className="pt-5 pr-10">
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => next(e)}
                              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="add-to-market right"></div>
                </div>
              );
            case 4:
              return (
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-0 sm:grid-cols-1">
                  <div>
                    <NavBarGlasgow />
                    <div className="bg-gray-50 py-16 lg:ml-20 md:ml-20 sm:ml-10">
                      <div className="">
                        <h2 className="font-grotesk text-3xl text-gray-900 sm:text-4xl">
                          Thank you for submitting your project!
                        </h2>
                        <div className="pt-2 pb-2 pr-5">
                          <p className="text-lg leading-6 text-dark pt-4">
                            We are currently looking for innovative urban forest
                            projects in Glasgow. If you are interested in
                            TreesAI, please send us an email.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-20 pr-10">
                      <div className="flex justify-end">
                        <Link
                          to="/invest-in-nature/glasgow"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green4 hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          View Glasgow’s Portfolio
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="add-to-market right"></div>
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
