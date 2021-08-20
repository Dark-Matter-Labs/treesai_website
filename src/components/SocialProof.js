import googleLogo from "../images/google.org_logo.png";
import glasgowLogo from "../images/glasgowlogo.jpg";

export default function SocialProof() {
  return (
    <section className="bg-green2" id="testimonials">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl heading-padd">
        <p className="mt-2 text-3xl font-bold text-gray tracking-tight sm:text-4xl">
          Testimonials
        </p>
      </div>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow google-text">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-green3"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <a
                href="https://www.google.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p className="relative text-gray">
                  Among the many applications for our Google.org Impact
                  Challenge on Climate, Dark Matter Labs stood out. With their
                  ambitious open-source 'Trees As Infrastructure' initiative,
                  they aim to address the critical problem of facilitating and
                  financing urban tree restoration at scale, helping to address
                  the gap between urban tree-planting targets, their sustainable
                  delivery and long-term maintenance of urban forests.
                </p>
              </a>
            </div>
            <div className="md:flex-shrink-0">
              <a
                href="https://www.google.org/"
                className="text-white font-bold underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="h-10" src={googleLogo} alt="Google.org logo" />
              </a>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div>
                  <div className="text-base font-medium text-white">
                    Google.org
                  </div>
                  <div className="text-base font-medium text-green1">
                    Impact Challenge on Climate
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 sm:px-6 md:py-16 md:pr-0 md:pl-10 lg:pl-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-green3"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <a
                href="https://www.glasgow.gov.uk/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p className="relative">
                  So many of the challenges surrounding the climate emergency
                  will be addressed by our cities and Nature-based Solutions are
                  absolutely critical within that. Urban forests deliver
                  significant ecological, environmental and social gains,
                  creating safer, more resilient and more liveable places.
                </p>
              </a>
            </div>
            <footer className="mt-8">
              <div className="md:flex-shrink-0">
                <a
                  href="https://www.glasgow.gov.uk/"
                  target="_blank"
                  className="text-white font-bold underline"
                  rel="noreferrer noopener"
                >
                  <img
                    className="h-28"
                    src={glasgowLogo}
                    alt="City of Glasgow logo"
                  />
                </a>
              </div>
              <div className="flex items-start">
                <div className="pt-8">
                  <div className="text-base font-medium text-white">
                    Susan Aitken
                  </div>
                  <div className="text-base font-medium text-green1">
                    CEO of Glasgow City Council
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
