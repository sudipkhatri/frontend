import { ReactComponent as Money } from "../../Images/money.svg";
import { ReactComponent as Location } from "../../Images/map.svg";
import { ReactComponent as Agent } from "../../Images/agent.svg";

const blogs = [
  {
    title: "Sydney Top Suburbs",
    url: "https://cdn.pixabay.com/photo/2014/09/18/11/56/skyscrapers-450793_1280.jpg",
    desc: "3 mins read.",
  },
  {
    title: "Melbourne Top Suburbs",
    url: "https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925_1280.jpg",
    desc: " 2 mins read",
  },
  {
    title: "Adelaide Top Suburbs",
    url: "https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_1280.jpg",
    desc: " 2 mins read",
  },
  {
    title: "Brisbane Top Suburbs",
    url: "https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_1280.jpg",
    desc: " 2 mins read",
  },
];

const homeSix = [
  {
    title: "Steve Smith",
    desc: "Steve is one of Sydney's top realestate agent for past 20 years. He is the man for your dream house.",
    url: "https://cdn.pixabay.com/photo/2023/12/10/09/44/ai-generated-8440920_1280.jpg",
  },
  {
    title: "John Cena",
    desc: "John is one of Sydney's top realestate agent for past 20 years. He is the man for your dream house.",
    url: "https://cdn.pixabay.com/photo/2023/12/10/09/44/ai-generated-8440920_1280.jpg",
  },
  {
    title: "Peter Smith",
    desc: "Randy is one of Sydney's top realestate agent for past 20 years. He is the man for your dream house.",
    url: "https://cdn.pixabay.com/photo/2023/12/10/09/44/ai-generated-8440920_1280.jpg",
  },
  {
    title: "Mike Tyson",
    desc: "Mike is one of Sydney's top realestate agent for past 20 years. He is the man for your dream house.",
    url: "https://cdn.pixabay.com/photo/2023/12/10/09/44/ai-generated-8440920_1280.jpg",
  },
];

const propertyLists = [
  {
    title: "Estimated Property Prices",
    url: <Money />,
    desc: "Check how much is your property worth at current price.",
  },
  {
    title: "Best real estate agent",
    url: <Agent />,
    desc: "Top agent to find your Australian dream house at low price.",
  },
  {
    title: "Explore Suburbs",
    url: <Location />,
    desc: "Check out different suburbs and find your future house.",
  },
];



export default [homeSix, blogs, propertyLists];