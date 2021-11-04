import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

export default function NavBarGlasgow(props) {
  return (
    <Disclosure as="nav" className="bg-gcc shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center ml-10">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="assets/TreesAI_logo_Glasgow.png"
                    alt="TreesAI logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="assets/TreesAI_logo_Glasgow.png"
                    alt="TreesAI logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
