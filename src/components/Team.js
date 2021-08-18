const people = [
  {
    name: "Aaron Gillett",
    role: "Service and interaction design",
    imageUrl: "images/team/Aaron.jpg",
  },
  {
    name: "Axel Nilsson",
    role: "Data science",
    imageUrl: "images/team/Axel.png",
  },
  {
    name: "Bulent Ozel",
    role: "Impact modelling",
    imageUrl: "images/team/Roni.jpg",
  },
  {
    name: "Carlotta Conte",
    role: "Urban research and system design",
    imageUrl: "images/team/Carlotta.jpg",
  },
  {
    name: "Gurden Batra",
    role: "Full stack development",
    imageUrl: "images/team/Gurden.png",
  },
  {
    name: "Konstantina Koulouri",
    role: "Natural capital innovation research",
    imageUrl: "images/team/Kosta.jpg",
  },
  {
    name: "Oguzhan Yayla",
    role: "Data infrastructure",
    imageUrl: "images/team/Oz.png",
  },
  {
    name: "Raj Kalia",
    role: "Financial structuring",
    imageUrl: "images/team/Raj.png",
  },
];

export default function Team() {
  return (
    <div className="bg-white" id="team">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet our team of urban planning, technology and finance experts
            </h2>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
