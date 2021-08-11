import { MailIcon } from "@heroicons/react/outline";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./SignUpForm";

const url =
  "https://treesasinfrastructure.us5.list-manage.com/subscribe/post?u=79b921b3858895873082cb61b&amp;id=5861f9779c";

export default function GetInTouch() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Are you a municipality? <br />
              TreesAI can help solve your urban infrastructure issues.
              <br />
              <br />
              Do you have talent or resources to help us?
              <br />
              Become a partner of TreesAI.
              <br />
              <br />
              Are you a beneficiary of green infrastructure?
              <br />
              We are currently developing the tools to help you invest in trees
              as assets and can answer your questions.
              <br />
              <br />
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">treesai@darkmatterlabs.org</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Get notified when we launch
          </h2>
          <div className="max-w-lg mx-auto lg:max-w-none">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
