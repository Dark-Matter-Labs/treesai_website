import {
  ShieldCheckIcon,
  CashIcon,
  ChartPieIcon,
  GlobeIcon,
  ChartBarIcon,
  LibraryIcon,
  SparklesIcon,
  GlobeAltIcon
} from "@heroicons/react/outline";

const features = [
  {
    name: "Attract stable, long-term finance",
    description:
      "",
    icon: CashIcon,
  },
  {
    name: "Manage your natural assets",
    description:
      "",
    icon: ChartPieIcon,
  },
  {
    name: "Reduce operational costs",
    description:
      "",
    icon: GlobeIcon,
  },
  {
    name: "Plan and forecast climate targets",
    description:
      "",
    icon: ChartBarIcon,
  },
];
const features2 = [
  {
    name: "Voluntary carbon credits backed by governments",
    description:
      "",
    icon: LibraryIcon,
  },
  {
    name: "Transparent and verifiable",
    description:
      "",
    icon: SparklesIcon,
  },
  {
    name: "Support multiple benefits including health outcomes, water filtration and flood mitigation",
    description:
      "",
    icon: ShieldCheckIcon,
  },
  {
    name: "Make a local impact",
    description:
      "",
    icon: GlobeAltIcon,
  },
];

export default function Features() {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              FOR COUNCILS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Reach the climate targets for your city
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
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

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              FOR INVESTORS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Buy local government-backed carbon credits that go beyond carbon
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features2.map((feature) => (
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
    </>
  );
}
