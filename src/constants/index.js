import {
  facebook,
  instagram,
  linkedin,
  twitter,
  Send,
  Shield,
  Star,
} from "../assets/index/assets.index";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
    path: "/",
  },
  {
    id: "bio",
    title: "BIO",
    path: "/bio",
  },
  {
    id: "portfolio",
    title: "PORTFOLIO",
    path: "/portfolio",
  },
  {
    id: "contact",
    title: "CONTACT",
    path: "/contact",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nic-babineaux/",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Fullstack",
    value: "",
  },
  {
    id: "stats-2",
    title: "Front-End",
    value: "",
  },
  {
    id: "stats-3",
    title: "UI/UX",
    value: "",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: Star,
    title: "Projects",
    path: "/portfolio",
    content:
      "Returning to south Louisiana some years later...still in the powersports industry, I was on the search for something bigger, better, and more rewarding. I got into cryptocurrencies and day trading. Furthermore, that led to an extreme interest in web design and software development.",
  },
  {
    id: "feature-2",
    icon: Shield,
    title: "Education",
    path: "/resume",
    content: "Universsal Technical Institute, South Louisiana Community College, Fullstack Academy",
  },
  {
    id: "feature-3",
    icon: Send,
    title: "Experience",
    path: "/resume",
    content: " Powersports Technician, Fullstack Developer",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: PhoneInTalkIcon,
    content: "(337) 257-9202",
  },
  {
    id: 2,
    icon: AlternateEmailIcon,
    content: "stellarinnovation@gmail.com",
  },  
  {
    id: 3,
    icon: PlaceIcon,
    content: "123 Merlot Cir., Laf, La., 70503",
  }
]

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
