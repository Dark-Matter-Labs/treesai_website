import NavBar from "../components/demo/NavBar";

const faqs = [
  {
    id: 1,
    question: "Carbon sequestration",
    answer:
      "By reducing energy demand and absorbing carbon dioxide, trees and vegetation decrease the production and negative effects of air pollution and greenhouse gas emissions.",
  },
  {
    id: 2,
    question: "Stormwater runoff reduction",
    answer:
      "Urban trees may replace need for flood water mitigation infrastructure and reduce stress on drainage systems reducing need for maintenance and upgrade",
  },
  {
    id: 3,
    question: "Flood control",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
  },
  {
    id: 4,
    question: "Therapeutic",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
  },
  {
    id: 5,
    question: "Noise reduction",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
  },
  {
    id: 6,
    question: "Air quality improvement",
    answer:
      "Environments services refers to the qualitative functions of natural assets of land, water and air. The three basic types of environmental services are disposal services, which reflect the functions of the natural environment as an absorptive sink for residuals, productive services, which reflect economic functions, and consumer or consumptive services, which provide for the physiological and recreational needs of humans.",
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
              What are Environmental Services?
            </h2>
            <p className="mt-4 text-gray-500">
              Environments services refers to the qualitative functions of
              natural assets of land, water and air. The three basic types of
              environmental services are disposal services, which reflect the
              functions of the natural environment as an absorptive sink for
              residuals, productive services, which reflect economic functions,
              and consumer or consumptive services, which provide for the
              physiological and recreational needs of humans. TreesAI accounts
              for the following environmental services. Scientific evidence
              underpins the benefits provided by trees in cities.
            </p>
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
