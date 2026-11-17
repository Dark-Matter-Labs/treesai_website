const steps = [
  {
    title: 'Understand location',
    body: 'We assess place-based risks and opportunities using spatial analysis and heat, flood, and air-quality data to identify priority areas.',
  },
  {
    title: 'Crystallise benefits',
    body: 'We quantify ecosystem services and model scenarios to build the evidence base for investment and policy decisions.',
  },
  {
    title: 'Engage & coordinate',
    body: 'We design governance, contracts, and funding mechanisms that bring stakeholders together to deliver and steward projects over time.',
  },
];

// The engagement sequence, shown inside the services section.
export default function HowWeWork() {
  return (
    <div id='how-we-work' className='border-t border-b border-indigo-600 py-8 mb-14'>
      <h3 className='bold-intro-md text-dark-wood-800 text-center mb-6'>
        How we work with you: cities, NGOs and private organisations
      </h3>
      <ol className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {steps.map((step, i) => (
          <li key={step.title}>
            <p className='bold-intro-md text-indigo-700 pb-2'>
              {i + 1}. {step.title}
            </p>
            <p className='book-intro-sm text-dark-wood-800'>{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
