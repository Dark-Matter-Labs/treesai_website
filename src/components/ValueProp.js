export default function ValueProp() {
  const logos = [
    { name: "EIT Climate-KIC", url: "assets/partner_logos/eit-climatekic.svg" },
    { name: "NatureScot", url: "assets/partner_logos/NatureScot.svg" },
    { name: "Morgan Stanley", url: "assets/partner_logos/Morgan_Stanley.svg" },
    {
      name: "World Economic Forum",
      url: "assets/partner_logos/world_economic_forum.svg",
    },
    { name: "Google.org", url: "assets/partner_logos/google.org_logo.svg" },
  ];

  return (
    <div className="bg-gray">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-2">
        <div className="">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="font-grotesk mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
              Supported by
            </p>
          </div>
          <div className="mt-12 lg:grid md:grid gap-12 md:grid-cols-3 lg:mt-0 lg:grid-cols-5 justify-center grid-center">
            {logos.map((logo) => {
              if (logo.name === "World Economic Forum")
                return (
                  <div
                    key={logo.name}
                    className="flex py-8 px-8 bg-transparent"
                  >
                    <img
                      className="mobile-image"
                      src={logo.url}
                      alt={logo.name}
                    />
                  </div>
                );
              else if (logo.name === "Morgan Stanley")
                return (
                  <div key={logo.name} className="flex bg-transparent">
                    <img
                      className="mobile-image"
                      src={logo.url}
                      alt={logo.name}
                    />
                  </div>
                );
              return (
                <div key={logo.name} className="flex py-8 px-4 bg-transparent">
                  <img
                    className="mobile-image"
                    src={logo.url}
                    alt={logo.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
