const blogPosts = [
  {
    id: 1,
    title: "Trees as Infrastructure Report 1",
    href: "https://provocations.darkmatterlabs.org/trees-as-infrastructure-1dd94e1cfedf",
    date: "Feb 10, 2020",
    datetime: "2020-02-10",
    category: { name: "Report" },
    imageUrl: "https://miro.medium.com/max/2000/1*gEpd55UAV-i1GUi3rFTr7g.jpeg",
    preview: "Why municipalities are struggling to reach tree-planting targets",
    readingLength: "15 min",
  },
  {
    id: 2,
    title: "Trees as Infrastructure Report 2",
    href: "https://provocations.darkmatterlabs.org/trees-as-infrastructure-aa141acdf227",
    date: "Mar 6, 2020",
    datetime: "2020-03-6",
    category: { name: "Report" },
    imageUrl: "https://miro.medium.com/max/3840/1*_tUcwA67m11u_UI54xR15Q.jpeg",
    preview:
      "A proposition for supporting cities to transition towards resilient urban forest infrastructures",
    readingLength: "15 min",
  },
  //TODO: update image URL
  {
    id: 3,
    title:
      "Delivering urban Nature-based Solutions in Scotland at Scale: Growing regenerative cities",
    href: "https://drive.google.com/file/d/1OdtF45v59Zh7TDDrNRifnp4e6Cl4OIK0/view",
    date: "Nov 27, 2020",
    datetime: "2020-02-12",
    category: { name: "Report" },
    imageUrl: "images/nature_scot.jpg",
    preview: "Growing regenerative cities",
    readingLength: "11 min",
  },
];

const pilotPosts = [
  {
    id: 1,
    title:
      "TreesAI is developing novel investment opportunities, to help meet Glasgow’s climate targets",
    href: "images/01.07.21_TreesAI in Glasgow Synopsis.pdf",
    date: "July 20, 2021",
    datetime: "2021-07-20",
    category: { name: "Partnership" },
    imageUrl: "images/synopsis.jpg",
    preview:
      "Exploring radical new approaches to financing urban tree planting and maintenance",
    readingLength: "15 min",
  },
];

export default function Reports() {
  return (
    <>
      <div
        className="relative bg-extraLight py-16 sm:py-24 lg:py-32"
        id="reports"
      >
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
              Reports
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <a target="_blank" rel="noreferrer noopener" href={post.href}>
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline"
                      >
                        {post.category.name}
                      </a>
                    </p>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500 font-body">
                        {post.preview}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-extraLight py-16 sm:py-24 lg:py-18">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              TreesAI Pilot
            </p>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              TreesAI is partnering with Glasgow City Council to launch its
              first pilot, helping to meet the city’s climate targets.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {pilotPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <a target="_blank" rel="noreferrer noopener" href={post.href}>
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:underline"
                      >
                        {post.category.name}
                      </a>
                    </p>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500 font-body">
                        {post.preview}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
