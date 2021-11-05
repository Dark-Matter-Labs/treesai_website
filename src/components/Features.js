import GlobalMarketIcon from "./icons/GlobalMarketsIcon";
import SatelliteIcon from "./icons/SatelliteIcon";
import CashFlowIcon from "./icons/CashFlowIcon";
import GoalsIcon from "./icons/GoalsIcon";
import CarbonCreditsIcon from "./icons/CarbonCreditsIcon";
import AdvocateIcon from "./icons/AdvocateIcon";
import FarmIcon from "./icons/FarmIcon";
import SecurityIcon from "./icons/SecurityIcon";

const councilFeatures = [
  {
    name: "Attract stable, long-term finance",
    plus: false,
    description:
      "Digital inventories provide information on the performance and state of urban trees. ",
    icon: GlobalMarketIcon,
  },
  {
    name: "Manage your natural assets",
    plus: false,
    description:
      "Outcomes-based financial instruments based on environmental performance, generate revenue and support long-term ecological maintenance.",
    icon: SatelliteIcon,
  },
  {
    name: "Reduce operational costs",
    plus: false,
    description:
      "AI-backed modelling enables near real-time environmental impact assessments.",
    icon: CashFlowIcon,
  },
  {
    name: "Plan and forecast climate targets",
    plus: false,
    description:
      "Digital contracting mechanisms reduce cumbersome bureaucratic processes.",
    icon: GoalsIcon,
  },
];
const investorFeatures = [
  {
    name: "Support Nature-based Solutions projects",
    plus: true,
    description:
      "are verified credits, linked to local projects and validated by city authorities.",
    icon: CarbonCreditsIcon,
  },
  {
    name: "Invest in natural hedging strategies",
    plus: false,
    description:
      "Your investments achieve visibility by supporting local initiatives and communities.",
    icon: AdvocateIcon,
  },
  {
    name: "Meet your ESG and CSR targets",
    plus: true,
    description:
      "accounts for carbon-related benefits and estimates additional environmental impacts such as air quality improvements, water management, and human health benefits.",
    icon: FarmIcon,
  },
  {
    name: "Transparent and verifiable impact certification",
    plus: false,
    description:
      "Trusted satellite and ground data map, monitor and account for urban tree outcomes.",
    icon: SecurityIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="lg:m-20 md:m-20 lg:px-16 sm:m-5 grid grid-cols-1 gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        <div className="py-12 bg-white" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                FOR STEWARDS
              </h2>
              <p className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
                Fund your Nature-based Solutions projects
              </p>
            </div>

            <div className="mt-10">
              <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                {councilFeatures.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className="flex items-center justify-center">
                        <feature.icon
                          className="h-20 w-20"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex items-center justify-center text-center">
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                          {feature.name}
                        </p>
                      </div>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="py-12-edit bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold tracking-wide uppercase text-blue">
                FOR BENEFICIARIES
              </h2>
              <p className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
                Invest in Nature to reduce your climate risks
              </p>
            </div>

            <div className="mt-10">
              <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                {investorFeatures.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className="flex items-center justify-center">
                        <feature.icon
                          className="h-20 w-20"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex items-center justify-center text-center">
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                          {feature.name}
                        </p>
                      </div>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="tree-services"></div>
    </>
  );
}
