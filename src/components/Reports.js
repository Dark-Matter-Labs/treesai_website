import React from "react";

const videos = [
  {
    id: 1,
    title:
      "TreesAI presenting at Mayday C4 events: Deforestation and Carbon Offsets",
    href: "https://www.youtube.com/watch?v=j9HotCSqh_M",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "1:24:01" },
    imageUrl: "assets/video-1.png",
    preview: "",
    readingLength: "Mayday C4",
  },
  {
    id: 2,
    title:
      "What technology can do for sustainability - The Google.org Impact Challenge on Climate",
    href: "https://www.youtube.com/watch?t=75&v=Y1X3BzuNgdA&feature=youtu.be",
    date: "Jul 6, 2021",
    datetime: "2021-7-6",
    category: { name: "6:20" },
    imageUrl: "assets/video-2.png",
    preview:
      "The Google.org Impact Challenge on Climate commits €10M to fund bold ideas that aim to use technology to accelerate Europe’s progress toward a greener, more resilient future.",
    readingLength: "Euractiv",
  },
  {
    id: 3,
    title: "Interview with Kate Raworth at Trees as Infrastructure Workshop",
    href: "https://vimeo.com/showcase/6628565/video/377023491",
    date: "2019",
    datetime: "2019-12-3",
    category: { name: "45:43" },
    imageUrl: "assets/video-3.png",
    preview:
      "This is the first public workshop of the research project ‘Trees as Infrastructure’ by Dark Matter Labs in partnership with EIT Climate-KIC.",
    readingLength: "Dark Matter Labs",
  },
  {
    id: 4,
    title: "Interview with Mathias Disney at Trees as Infrastructure Workshop",
    href: "https://vimeo.com/showcase/6628565/video/377020523",
    date: "2019",
    datetime: "2019-12-3",
    category: { name: "5:31" },
    imageUrl: "assets/video-4.png",
    preview: "",
    readingLength: "Dark Matter Labs",
  },
  {
    id: 5,
    title: "Interview with Michelle Zucker at Trees as Infrastructure Workshop",
    href: "https://vimeo.com/showcase/6628565/video/379088421",
    date: "2019",
    datetime: "2019-12-3",
    category: { name: "2:05" },
    imageUrl: "assets/video-5.png",
    preview: "",
    readingLength: "Dark Matter Labs",
  },
  {
    id: 6,
    title: "Interview with Jim C. Smith at Trees as Infrastructure Workshop",
    href: "https://vimeo.com/showcase/6628565/video/381168491",
    date: "2019",
    datetime: "2019-12-3",
    category: { name: "3:25" },
    imageUrl: "assets/video-6.png",
    preview: "",
    readingLength: "Dark Matter Labs",
  },
];

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
  {
    id: 3,
    title:
      "Delivering urban Nature-based Solutions in Scotland at Scale: Growing regenerative cities",
    href: "https://drive.google.com/file/d/1OdtF45v59Zh7TDDrNRifnp4e6Cl4OIK0/view",
    date: "Nov 27, 2020",
    datetime: "2020-02-12",
    category: { name: "Report" },
    imageUrl: "assets/nature_scot.jpg",
    preview: "Growing regenerative cities",
    readingLength: "11 min",
  },
];

const posts = [
  {
    title: "Building Vitality – Regenerative Construction",
    href: "https://demoshelsinki.fi/julkaisut/building-vitality-regenerative-construction/",
    description: "Demos Helsinki",
    date: "2021",
    datetime: "2021-03-16",
  },
  {
    title:
      "Inaugural Morgan Stanley Sustainable Solutions Collaborative Cohort",
    href: "https://www.morganstanley.com/ideas/sustainable-solutions-collaborative-winners-2021",
    description: "Morgan Stanley",
    date: "June 9, 2021",
    datetime: "2021-06-9",
  },
  {
    title:
      "These 20 innovations are helping us to conserve, restore and grow 1 trillion trees",
    href: "https://www.weforum.org/agenda/2020/09/world-economic-forum-innovations-conserve-preserve-trillion-trees/",
    description: "World Economic Forum",
    date: "Sep 30, 2020",
    datetime: "2020-09-30",
  },
  {
    title: "Trees As Infrastructure インフラストラクチャーとしての街路樹　後編",
    href: "https://note.com/actant_forest/n/nb2b3d470c2a8",
    description: "TreesAI translated in Japanese",
    date: "April 21, 2021",
    datetime: "2021-04-21",
  },
  {
    title:
      "DM Note #5: Mission Holding at DM: The Case of Nature-based Solutions",
    href: "https://provocations.darkmatterlabs.org/dm-note-5-50e46540dd05",
    description:
      "DM Note #5 is a reflection on how we build and organize missions internally, taking Nature-based Solutions as a case study.",
    date: "July 21, 2021",
    datetime: "2021-07-21",
  },
];

export default function Reports() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="relative bg-gray py-16 sm:py-24 lg:py-20" id="reports">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="font-grotesk mt-2 text-3xl text-gray-900 sm:text-4xl">
            Resources
          </p>
        </div>
        <div className="flex flex-wrap space-x-4" aria-label="Tabs">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row border-b border-gray3 mx-auto mt-4 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
              role="tablist"
            >
              <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0">
                <a
                  className={
                    "px-3 py-2 font-medium text-sm rounded-md block" +
                    (openTab === 1
                      ? "text-gray4 bg-gray3"
                      : "text-gray5 hover:text-gray4")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Videos
                </a>
              </li>
              <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0">
                <a
                  className={
                    "px-3 py-2 font-medium text-sm rounded-md block" +
                    (openTab === 2
                      ? "text-gray4 bg-gray3"
                      : "text-gray5 hover:text-gray4")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Reports
                </a>
              </li>
              <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2  last:mr-0">
                <a
                  className={
                    "px-3 py-2 font-medium text-sm rounded-md block" +
                    (openTab === 3
                      ? "text-gray4 bg-gray3"
                      : "text-gray5 hover:text-gray4")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Articles
                </a>
              </li>
              {/* <li className="-mb-px lg:mr-8 md:mr-8 sm:mr-2  last:mr-0">
                <a
                  className={
                    "px-3 py-2 font-medium text-sm rounded-md block" +
                    (openTab === 4
                      ? "text-gray4 bg-gray3"
                      : "text-gray5 hover:text-gray4")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Press
                </a>
              </li> */}
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                      {videos.map((post) => (
                        <div
                          key={post.id}
                          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="flex-shrink-0">
                            <a
                              target="_blank"
                              rel="noreferrer noopener"
                              href={post.href}
                            >
                              <img
                                className="h-48 w-full object-cover"
                                src={post.imageUrl}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-blue2">
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
                                <p className="mt-3 text-base text-gray-500 text-dark">
                                  {post.preview}
                                </p>
                              </a>
                            </div>
                            <div className="mt-6 flex items-center">
                              <div className="ml-3 text-gray-500">
                                <div className="flex space-x-1">
                                  <p className="text-sm text-gray-900">
                                    {post.readingLength}
                                  </p>
                                </div>
                                <div className="flex space-x-1">
                                  <p className="text-sm text-dark">
                                    {post.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                      {blogPosts.map((post) => (
                        <div
                          key={post.id}
                          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                        >
                          <div className="flex-shrink-0">
                            <a
                              target="_blank"
                              rel="noreferrer noopener"
                              href={post.href}
                            >
                              <img
                                className="h-48 w-full object-cover"
                                src={post.imageUrl}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-blue2">
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
                                <p className="mt-3 text-base text-gray-500 text-dark">
                                  {post.preview}
                                </p>
                              </a>
                            </div>
                            <div className="mt-6 flex items-center">
                              <div className="ml-3">
                                <span className="text-sm">
                                  Trees as Infrastructure
                                </span>
                                <div className="flex space-x-1 text-sm text-dark">
                                  <time dateTime={post.datetime}>
                                    {post.date}
                                  </time>
                                  <span aria-hidden="true">&middot;</span>
                                  <div className="text-gray-500">
                                    <span>{post.readingLength} read</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                      {posts.map((post) => (
                        <div key={post.title}>
                          <p className="text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                          </p>
                          <a
                            href={post.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-2 block"
                          >
                            <p className="text-xl font-semibold text-gray-900">
                              {post.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {post.description}
                            </p>
                          </a>
                          <div className="mt-3">
                            <a
                              href={post.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="text-base font-semibold text-blue2 hover:text-blue1"
                            >
                              Read full story
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                      <p>Coming soon!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
