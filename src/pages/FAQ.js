import NavBar from "../components/demo/NavBar";

const faqs = [
  {
    id: 1,
    question: "What is TreesAI?",
    answer:
      "Trees As Infrastructure (TreesAI) is a cloud-based platform, establishing nature as a critical part of urban infrastructure, alongside bridges, roads and rail, enabling investment, profitability and sustainability.",
  },
  {
    id: 2,
    question: "What is the relationship between TreesAI and Dark Matter Labs?",
    answer:
      "TreesAI is part of Dark Matter Laboratories (DML), a strategic discovery, design and development lab involved in projects concerned with societal transition in response to technological revolution and climate breakdown. Dark Matter Laboratories is a not-for-profit company, registered in the UK as a Company Limited by Guarantee. Trees as Infrastructure is a platform developed by DML collaborators, utilizing DML’s technical resources and expertise with additional funding from Morgan Stanley and Google.",
  },
  {
    id: 3,
    question: "What environmental services do urban trees provide?",
    answer:
      "Urban trees provide a multitude of benefits, mostly best understood as regulating and provisioning services, such as: carbon sequestration, air pollutant absorption, stormwater retention, flood control, heat island effect reduction, cooling effect, biodiversity enhancement, noise reduction, water filtration. Other secondary benefits that we also observe are: mental health improvement, crime reduction, improved walkability, decreased crime rates, local economy enhancement.",
  },
  {
    id: 4,
    question: "How do we price environmental services in TreesAI?",
    answer:
      "We derive the economic value of environmental service through a direct non-use valuation method. Where we measure the value of regulating environmental services trees provide (such as carbon sequestration) rather than actual direct use of trees (such as timber). As we want to preserve and repurpose urban trees as civic assets, we estimate the avoided costs enjoyed by stakeholders from the delivery of environmental services. In Phase I pricing, we see tree value as the summation of avoided damage-cost to local stakeholders. In the next phases, we will socialize pricing benchmarks and move towards a willingness-to-pay method informed by local liability holders.",
  },
  {
    id: 5,
    question: "Is 'putting a price on nature' a good idea?",
    answer:
      "Not always. This is a debated topic within climate finance and one we hope to deal with care. Our theory of price is based on an understanding of capturing multi-dimensional values as well as longitudinal values provided by trees across time. We are against the over-financialization of Nature and seek to price only certain environmental services that hold a significant role in the market and within a fiat economy. Services, such as social and cultural benefits derived from the existence of trees, are not priced as we think are non-monetizable and should function outside the current market (for example, mental health and social cohesion from green spaces creation)",
  },
  {
    id: 6,
    question: "What do we mean by stewardship and nature stewards?",
    answer:
      "By stewardship, we mean the responsible use and protection of the natural environment through innovative and sustainable practices, such as preservation, maintenance, restoration, disease management and others. Nature stewards are the ‘doers’, the ones that go out and execute on sustainable practices, through direct action and management.",
  },
  {
    id: 7,
    question: "What is TreesAI's relationship to nature stewards?",
    answer:
      "TreesAI delivers monitoring and forecasting capabilities of urban forest health and evolution to help inform nature stewards' decisions to optimise for natural regeneration. Both parties are part of a non-binding protocol of stewardship practices that details optimal arboricultural techniques to be followed by nature stewards, thus making them eligible for BCB financing.",
  },
  {
    id: 8,
    question: "What are Urban Forests?",
    answer:
      "Urban forests are “networks or systems comprising all woodlands, groups of trees, and individual trees located in urban and peri-urban areas; they include, therefore, forests, street trees, trees in parks and gardens, and trees in derelict areas.”",
  },
  {
    id: 9,
    question: "What do we mean by the previous and impervious surface?",
    answer:
      "A pervious surface allows water to percolate through to the area underneath rather than becoming runoff. Impervious surfaces are solid surfaces that prevent aeration, infiltration, and water penetration, resulting in a number of harmful side effects. Pervious surfaces have multiple benefits from the point of view of stormwater management.",
  },
  {
    id: 10,
    question:
      "What is the difference between ​​Ecosystem services and Environmental services?",
    answer:
      "There is currently a debate among practitioners as to whether to use the term ecosystem or environmental services. The term ecosystem service is used to refer to benefits that are mainly provided by ecosystems, whereas environmental services require key human intervention like, for example, infrastructure or labour.",
  },
  {
    id: 11,
    question: "How do we calculate maintenance?",
    answer:
      "We do not calculate the maintenance cost of project developers. We rely on the project uploader to input an estimate of annual maintenance costs (optional field). In the demo, we are using indicative numbers based on two initial studied sites (annual maintenance cost of £1,000 for 50 years, £50-100 revenue from environmental services; therefore, 5-10% maintenance cost coverage). For the pilot phase, project developers will have the option to input annual maintenance costs then the platform will compute environmental services value, Maintenance cost coverage (%) = Potential Revenue from Sale of Environmental Services / Annual Maintenance Cost of Site",
  },
  {
    id: 12,
    question: "What are climate risks?",
    answer:
      "As the climate of the earth becomes more volatile: public and private entities are experiencing increasing liabilities. For example, corporations have growing carbon and social impact liabilities; water utility companies are faced with tougher regulations and fines due to frequent flood events; and the healthcare sector has increasing treatment costs due to deteriorating air quality in cites. Investing in urban forests is a green strategy for mitigating such climate risks. ",
  },
  {
    id: 13,
    question: "How do TreesAI use artificial intelligence?",
    answer:
      "TreesAI uses a number of modern technologies throughout its tech stack. We use artificial intelligence to monitor trees from a city scale to the individual level. With a myriad of different data sources (such as LiDAR, satellite imagery, surveys, etc)  giving varied information on each tree and its surroundings. We then use other models to simulate each tree’s evolution and plot over time.",
  },
  {
    id: 14,
    question: "How are environmental services calculated in TreesAI?",
    answer:
      "Each environmental service requires different data points to be assessed, even when accounting for them partially. Stormwater retention, for example, requires the amount of rain and its intensity on an hourly level whereas pollutant removal does not. Therefore we can estimate different environmental services depending on the information we have gathered at each site, our capacity, and confidence in modelling it. The basis of each estimation of environmental service is peer-reviewed academic literature.",
  },
  {
    id: 15,
    question: "Can I just run projects that fit the listed activities?",
    answer:
      "In order for projects to receive financial capital for the environmental services they produce, we have to certify that specific actions have been achieved to the highest standards. Thus we are building a series of protocols that will help nature stewards guide their project development and build investible NbS sites.",
  },
  {
    id: 16,
    question: "As a nature steward, will I receive carbon credits?",
    answer: "No.",
  },
  {
    id: 17,
    question: "As an investor, will I receive carbon credits?",
    answer:
      "Not at the moment. At this time we are evaluating the best compensation certifications and credits in the industry for urban forests as well as understanding internal capacities needed to undergo certification processes and due diligence.",
  },
  {
    id: 18,
    question: "As a nature steward, do I need to pay for TreesAI services?",
    answer:
      "No. We are offering free monitoring and reporting capabilities for our pilot phase.",
  },
  {
    id: 19,
    question: "What is the Beyond Carbon Bond?",
    answer:
      "The first investment vehicle issued from the TreesAI Capital Program will be the Beyond Carbon Bond (BCB). In its current form, the BCB is a multi-tranche and outcome-based instrument managed by TreesAI Bond Syndication Desk to deploy capital to eligible and investible NbS projects. The BCB will have a ‘foundational tranche’ composed of patient and philanthropic capital then followed by a more commercial-like structure made up of impact investors and beneficiaries who receive financial and/or environmental returns. Structural details of the BCB and its terms will be negotiated and finalised in discussions with stakeholders during the pilot phase (ending September 2022).",
  },
  {
    id: 20,
    question: "How can I invest?",
    answer:
      "Please get in touch through our e-mail treesai@darkmatterlabs.org and our Investment Team will reach out with indicative terms and conditions.",
  },
  {
    id: 21,
    question: "How do we calculate a city’s stewardship activities?",
    answer:
      "The amount of trees in each stewardship activity indicated in the demo are highly indicative and aimed at showing potential portfolio scenarios. These do not indicate an accurate representation of Glasgow’s urban forest. The are assumptions extracted by a variety of different sources, from the city open space map, to the cities 2015 itree report. 470,000 trees in the planting activity assumes that 70% of all all available space for planting is used, which has been estimated to be about 32% of Glasgow, and that 170,000 of that would be replenished of dead ash trees; 370,000 trees in the maintenance activity assumes that all established trees in public ownership receive advanced maintenance care (maure is defined by > 20cm dbh). 180,000 trees in the preservation activity assumes that all trees in vacant and derelict land in Council ownership are protected;",
  },
];

export default function FAQ() {
  return (
    <>
      <NavBar current="faq" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              TreesAI FAQ
            </h2>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
