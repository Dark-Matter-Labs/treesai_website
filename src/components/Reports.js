const blogPosts = [
  {
    id: 1,
    title: "Trees as Infrastructure Report 1",
    href: "https://provocations.darkmatterlabs.org/trees-as-infrastructure-1dd94e1cfedf",
    date: "Feb 10, 2020",
    datetime: "2020-02-10",
    category: { name: "Report"},
    imageUrl: "https://miro.medium.com/max/2000/1*gEpd55UAV-i1GUi3rFTr7g.jpeg",
    preview:
      "Why municipalities are struggling to reach tree-planting targets",
    readingLength: "15 min",
  },
  {
    id: 2,
    title: "Trees as Infrastructure Report 2",
    href: "https://provocations.darkmatterlabs.org/trees-as-infrastructure-aa141acdf227",
    date: "Mar 6, 2020",
    datetime: "2020-03-6",
    category: { name: "Report" },
    imageUrl:
      "https://miro.medium.com/max/3840/1*_tUcwA67m11u_UI54xR15Q.jpeg",
    preview:
      "A proposition for supporting cities to transition towards resilient urban forest infrastructures",
    readingLength: "15 min",
  },
  //TODO: update image URL
  {
    id: 3,
    title: "Delivering urban Nature-based Solutions in Scotland at Scale: Growing regenerative cities",
    href: "https://drive.google.com/file/d/1OdtF45v59Zh7TDDrNRifnp4e6Cl4OIK0/view",
    date: "Nov 27, 2020",
    datetime: "2020-02-12",
    category: { name: "Report" },
    imageUrl:
      "https://freight.cargo.site/w/1500/q/75/i/fc4cc05c67582e7ee24644e63ac10fc40e666f6a593024c51251c013a61b6dca/27.11.20_Nature.Scot_developing-urban-nature-based-solutions-in-scotland-at-scale.jpg",
    preview:
      "Growing regenerative cities",
    readingLength: "11 min",
  },
];

export default function Reports() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
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
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
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
  );
}
