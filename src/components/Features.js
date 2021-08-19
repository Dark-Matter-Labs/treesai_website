import {
  ShieldCheckIcon,
  CashIcon,
  ChartPieIcon,
  GlobeIcon,
  ChartBarIcon,
  LibraryIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const councilFeatures = [
  {
    name: "Manage your natural assets",
    plus: false,
    description:
      "Digital inventories provide information on the performance and state of urban trees. ",
    icon: GlobeIcon,
  },
  {
    name: "Attract stable, long-term finance",
    plus: false,
    description:
      "Outcomes-based financial instruments based on environmental performance, generate revenue and support long-term ecological maintenance.",
    icon: CashIcon,
  },
  {
    name: "Plan and forecast climate targets",
    plus: false,
    description:
      "AI-backed modelling enables near real-time environmental impact assessments.",
    icon: ChartBarIcon,
  },
  {
    name: "Reduce operational costs",
    plus: false,
    description:
      "Digital contracting mechanisms reduce cumbersome bureaucratic processes.",
    icon: ChartPieIcon,
  },
];
const investorFeatures = [
  {
    name: "Voluntary carbon credits backed by governments",
    plus: true,
    description:
      "are verified credits, linked to local projects and validated by city authorities.",
    icon: LibraryIcon,
  },
  {
    name: "Make a local impact",
    plus: false,
    description:
      "Your investments achieve visibility by supporting local initiatives and communities.",
    icon: GlobeAltIcon,
  },
  {
    name: "Support multiple impacts",
    plus: true,
    description:
      "accounts for carbon-related benefits and estimates additional environmental impacts such as air quality improvements, water management, and human health benefits.",
    icon: SparklesIcon,
  },
  {
    name: "Transparent and verifiable",
    plus: false,
    description:
      "Trusted satellite and ground data map, monitor and account for urban tree outcomes.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="m-20 grid grid-cols-1 gap-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        <div className="py-12 bg-white" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                FOR COUNCILS
              </h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Reach the climate targets for your city<br></br>
                <br></br>
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {councilFeatures.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 lg:py-3 md:py-2 sm:py-1 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
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
                FOR INVESTORS
              </h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Invest in government-backed carbon credits and support local
                impacts
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {investorFeatures.map((feature) => {
                  if (feature.plus)
                    return (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue text-white">
                            <feature.icon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-16 lg:py-3 md:py-2 sm:py-1 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                      </div>
                    );
                  return (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue text-white">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 lg:py-3 md:py-2 sm:py-1 text-lg leading-6 font-medium text-gray-900">
                          {feature.name}
                        </p>
                      </dt>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="tree-services"></div>
    </>
  );
}
