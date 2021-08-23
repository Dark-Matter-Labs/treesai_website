import { MailIcon } from "@heroicons/react/outline";

export default function GetInTouch() {
  return (
    <div className="relative bg-gray" id="contact">
      <div className="relative max-w-7xl mx-auto md:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in touch
            </h2>
            <div className="pt-2 pb-2">
              <p className="mt-3 text-lg font-semibold leading-6 text-gray-500">
                Are you a municipality?
              </p>
              <p className="text-lg leading-6 text-dark">
                TreesAI can help solve your urban infrastructure issues.
              </p>
            </div>
            <div className="pt-2 pb-2">
              <p className="mt-3 text-lg font-semibold leading-6 text-gray-500">
                Do you have talent or resources to help us?
              </p>
              <p className="text-lg leading-6 text-dark">
                Become a partner of TreesAI.
              </p>
            </div>

            <div className="pt-2 pb-2">
              <p className="mt-3 text-lg font-semibold leading-6 text-gray-500">
                Are you a beneficiary of green infrastructure?
              </p>
              <p className="text-lg leading-6 text-dark">
                We are currently developing the tools to help you invest in
                trees as assets and can answer your questions.
              </p>
            </div>

            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-dark"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-dark font-semibold">
                    <a href="mailto:treesai@darkmatterlabs.org">
                      treesai@darkmatterlabs.org
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="lets-invest"></div>
        <p className="text-sm text-black"></p>
        <p className="text-sm text-black pt-2">
          Image from{" "}
          <a
            href="https://www.facebook.com/likenprojekt/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LIKEN project
          </a>
        </p>
      </div>
    </div>
  );
}
