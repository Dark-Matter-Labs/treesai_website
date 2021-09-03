import { Component } from "react";
import { XIcon } from "@heroicons/react/outline";

import NavBar from "./NavBar";

export default class Vision extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        {this.state.show && (
          <div className="relative bg-primary fix-position">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="pr-16 sm:text-center sm:px-16">
                <p className="font-medium text-white">
                  <span className="md:hidden">
                    TreesAI is a proud recipient of Google.org’s Impact
                    Challenge on Climate
                  </span>
                  <span className="hidden md:inline">
                    TreesAI is a proud recipient of Google.org’s Impact
                    Challenge on Climate
                  </span>
                  <span className="block sm:ml-2 sm:inline-block">
                    <a
                      href="https://blog.google/outreach-initiatives/sustainability/these-11-organizations-are-building-greener-europe/"
                      className="text-white font-bold underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {" "}
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </p>
              </div>
              <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                <button
                  onClick={() => {
                    this.setState({ show: !this.state.show });
                  }}
                  type="button"
                  href="#hide"
                  id="close"
                  className="flex p-2 rounded-md hover:bg-green2 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="pt-10 bg-gray-900 lg:pt-8 lg:pb-14 md:p-20 pb-10 lg:overflow-hidden vimeo-container heightFull">
          <NavBar />
          <iframe
            title="banner video"
            src="https://player.vimeo.com/video/590882809?h=2d4c9e1a57?api=1&background=1&autoplay=1&loop=1&dnt=1&muted=1"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          <div className="mx-auto max-w-7xl lg:px-8 video-overlay">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="font-grotesk mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    <span className="block">
                      A platform to value and invest in nature beyond carbon
                    </span>
                  </h1>
                  <p className="text-base text-white sm:text-lg lg:text-lg xl:text-xl pt-5">
                    Trees As Infrastructure establishes nature as a critical
                    part of urban infrastructure, alongside bridges, roads and
                    rail, enabling investment, profitability and sustainability.
                  </p>
                  <div className="mt-10 sm:mt-12 sm:mb-12">
                    <a
                      href="http://eepurl.com/hFsY1n"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green2"
                    >
                      Get notified when we launch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pt-40 lg:pt-40 sm:pl-4">
              <p className="text-sm text-gray2">
                A pair of ~200 year old Oaks, scanned by the UCL Geography TLS
                group (M. Disney, P. Wilkes, A. Burt, W. Yang).
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
