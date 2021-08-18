export default function ValueProp() {
  const logos = [
    { name: "Google.org", url: "images/partner_logos/google.org_logo.svg" },
    { name: "Morgan Stanley", url: "images/partner_logos/Morgan_Stanley.svg" },
    { name: "NatureScot", url: "images/partner_logos/NatureScot.png" },
    {
      name: "World Economic Forum",
      url: "images/partner_logos/world_economic_forum.svg",
    },
    { name: "EIT Climate-KIC", url: "images/partner_logos/eit-climatekic.svg" },
  ];

  return (
    <div className="bg-light bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-2">
        <div className="">
          <h2 className="max-w-md text-3xl font-bold text-primary text-center lg:max-w-xl lg:text-left">
            Supported by
          </h2>
          <div className="mt-12 grid grid-cols-5 gap-1 md:grid-cols-3 lg:mt-0 lg:grid-cols-5 justify-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex py-8 px-4 bg-transparent">
                <img className="" src={logo.url} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
