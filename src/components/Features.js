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
    description:
      "Digital inventories provide information on the performance and state of urban trees. ",
    icon: GlobeIcon,
  },
  {
    name: "Attract stable, long-term finance",
    description:
      "Outcomes-based financial instruments based on environmental performance, generate revenue and support long-term ecological maintenance.",
    icon: CashIcon,
  },
  {
    name: "Plan and forecast climate targets",
    description:
      "AI-backed modelling enables near real-time environmental impact assessments.",
    icon: ChartBarIcon,
  },
  {
    name: "Reduce operational costs",
    description:
      "Digital contracting mechanisms reduce cumbersome bureaucratic processes.",
    icon: ChartPieIcon,
  },
];
const investorFeatures = [
  {
    name: "Voluntary carbon credits backed by governments",
    description:
      "Carbon Plus are verified credits, linked to local projects and validated by city authorities.",
    icon: LibraryIcon,
  },
  {
    name: "Make a local impact",
    description:
      "Your investments achieve visibility by supporting local initiatives and communities.",
    icon: GlobeAltIcon,
  },
  {
    name: "Support multiple impacts",
    description:
      "Carbon Plus accounts for carbon-related benefits and estimates additional environmental impacts such as air quality improvements, water management, and human health benefits.",
    icon: SparklesIcon,
  },
  {
    name: "Transparent and verifiable",
    description:
      "Trusted satellite and ground data map, monitor and account for urban tree outcomes.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="py-12 bg-white" id="#products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              FOR COUNCILS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Reach the climate targets for your city
            </p>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              TreesAI helps secure private funding by capturing the
              environmental,
              <br /> social and economic benefits delivered by trees in
              metropolitan areas
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {councilFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="py-12-edit bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              FOR INVESTORS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Invest in government-backed carbon credits and support local
              impacts
            </p>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              TreesAI issues Carbon <i>Plus</i> Credits, a new crediting system
              beyond carbon,
              <br /> for delivering and sustaining urban trees.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {investorFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="tree-services"></div>
    </>
  );
}
