import { MailIcon } from "@heroicons/react/outline";

export default function GetInTouch() {
  return (
    <div className="relative bg-white" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg font-semibold leading-6 text-gray-500 font-body">
              Are you a municipality?
            </p>
            <p className="text-lg leading-6 text-gray-500 font-body">
              TreesAI can help solve your urban infrastructure issues.
            </p>
            <p className="mt-3 text-lg font-semibold leading-6 text-gray-500 font-body">
              Do you have talent or resources to help us?
            </p>
            <p className="text-lg leading-6 text-gray-500 font-body">
              Become a partner of TreesAI.
            </p>

            <p className="mt-3 text-lg font-semibold leading-6 text-gray-500 font-body">
              Are you a beneficiary of green infrastructure?
            </p>
            <p className="text-lg leading-6 text-gray-500 font-body">
              We are currently developing the tools to help you invest in trees
              as assets and can answer your questions.
            </p>

            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-green"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-green font-bold">
                    <a href="mailto:treesai@darkmatterlabs.org">
                      treesai@darkmatterlabs.org
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
            <dl className="mt-8 text-base">
              <a
                href="http://eepurl.com/hFsY1n"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green hover:bg-gray-700"
              >
                Get notified when we launch
              </a>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
