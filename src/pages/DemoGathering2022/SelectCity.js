import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectCity() {
  const cities = [
    {
      id: 1,
      name: "Glasgow",
      href: "/project-input",
      imageSrc: "assets/Glasgow.png",
      imageAlt: "Glasgow city",
    },
    {
      id: 2,
      name: "Dublin",
      imageSrc: "assets/Dublin.png",
      href: "",
      imageAlt: "Dublin city",
      progressText: "coming soon",
    },
    {
      id: 3,
      name: "London",
      imageSrc: "assets/London.png",
      href: "",
      imageAlt: "London city",
      progressText: "coming soon",
    },
    {
      id: 4,
      name: "Paris",
      imageSrc: "assets/Paris.png",
      href: "",
      imageAlt: "Paris city",
      progressText: "coming soon",
    },
    {
      id: 5,
      name: "Milan",
      imageSrc: "assets/Milan.png",
      href: "",
      imageAlt: "Milan city",
      progressText: "coming soon",
    },
    {
      id: 6,
      name: "Berlin",
      imageSrc: "assets/Berlin.png",
      href: "",
      imageAlt: "Berlin city",
      progressText: "coming soon",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <h2 className="font-grotesk mt-2 lg:text-5xl md:text-4xl text-gray-900 sm:text-4xl ml-10 mt-10">
          Select your city
        </h2>
        <div className="mt-10 py-16 sm:py-10 lg:py-20 px-16 sm:px-8">
          <div className="mt-5">
            <div className="grid gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {cities.map((city) => (
                <div key={city.id} className="group relative">
                  <div className="w-full h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                    <img
                      src={city.imageSrc}
                      alt={city.imageAlt}
                      className={classNames(
                        city.progressText === "coming soon" ? "image-blur" : "",
                        ""
                      )}
                    />
                  </div>
                  <div className="mt-0 flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-gray-700">
                        {city.progressText !== "coming soon" ? (
                          <Link to={city.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {city.name}
                          </Link>
                        ) : (
                          <div>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {city.name}
                          </div>
                        )}
                      </h3>
                      {city.progressText === "coming soon" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray3 text-gray-800">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
