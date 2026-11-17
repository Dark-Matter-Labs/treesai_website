const backgrounds = {
  typology: 'bg-green-700',
};

// Rounded-top tab that labels the box below it.
export default function SectionHeader({ id, title, type }) {
  return (
    <div
      id={id}
      className={`${
        backgrounds[type] || 'bg-indigo-600'
      } title-box-info mx-4 sm:mx-auto flex max-w-2xl justify-center px-12 sm:px-5 py-5`}
    >
      <h2 className='text-white-200 text-center bold-intro-md sm:text-4xl sm:font-medium sm:leading-6'>
        {title}
      </h2>
    </div>
  );
}
