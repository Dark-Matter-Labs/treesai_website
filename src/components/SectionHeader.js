function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SectionHeader(props) {
  return (
    <div
      className={classNames(
        props.type === 'typology'
          ? 'bg-green-600 '
          : props.type === 'account'
          ? 'bg-dark-wood-800 '
          : 'bg-indigo-600',
        'title-box-info mx-10 sm:mx-auto flex max-w-2xl justify-center p-5 ',
      )}
    >
      <h2 className='text-white-200 hidden sm:block'>{props.title}</h2>
      <p className='bold-intro-md text-center text-white-200 block sm:hidden'>{props.title}</p>
    </div>
  );
}
