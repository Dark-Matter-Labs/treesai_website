export default function ValueProp() {
  const logos = [
    { name: "Google.org", url: "images/partner_logos/google.org_logo.svg" },
    { name: "Morgan Stanley", url: "images/partner_logos/Morgan_Stanley.svg" },
    { name: "NatureScot", url: "images/partner_logos/NatureScot.svg" },
    {
      name: "World Economic Forum",
      url: "images/partner_logos/world_economic_forum.svg",
    },
    { name: "EIT Climate-KIC", url: "images/partner_logos/eit-climatekic.svg" },
  ];

  return (
    <div className="bg-light bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-bold text-primary text-center lg:max-w-xl lg:text-left">
            Trusted by government agencies, supported by technology and finance
            leaders
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="col-span-1 flex justify-center py-8 px-8 bg-white"
              >
                <img className="max-h-12" src={logo.url} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
