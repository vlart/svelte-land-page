/**src/Data/data.js**/
const HEADER = "Freelancee";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
const BANNER_DATA = {
  HEADING: "Go digital with Freelancee",
  DECRIPTION:
    "Freelancee can help you skyrocket the ROI of your marketing campaign without having to spend tons of money or time to assemble an in-house team.",
  TUTORIAL_URL:
    "www.google.com",
  WATCH_TUTORIAL: "Watch Tutorials"
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Content Marketing Strategy",
      DESCRIPTION:
        "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Search Engine Optimisation",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: "images/service1.png"
    },
    {
      LABEL: "Develop Social Media Strategy",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "WHY CHOOSE US?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "We provides Cost-Effective Digital Marketing than Others.",
    "High customer statisfaction and experience.",
    "Marketing efficiency and quick time to value.",
    "Clear & transparent fee structure.",
    "We provides Marketing automation which is an integral platform that ties all of your digital marketing together.",
    "A strong desire to establish long lasting business partnerships.",
    "Provide digital marketing to mobile consumer.",
    "We provides wide range to services in reasonable prices"
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "WHAT CLIENTS SAY?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Freelancee has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Jane Doe",
      DESIGNATION: "Co-founder at ABC"
    },
    {
      DESCRIPTION:
        "Freelancee and our team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Doe",
      DESIGNATION: "Co-founder at XYZ"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "FIND US ON SOCIAL MEDIA",
  IMAGES_LIST: [
    {
      IMG_SRC : "images/facebook-icon.png",
      SOCIAL_LINK: "http://www.facebook.com",
      TITLE: "facebook"
    },
    {
      IMG_SRC : "images/instagram-icon.png",
      SOCIAL_LINK: "http://www.instagram.com",
      TITLE: "instagram"
    },
    {
      IMG_SRC : "images/whatsapp-icon.png",
      SOCIAL_LINK: "http://www.facebook.com",
      TITLE: "whatsapp"
    },
    {
      IMG_SRC : "images/twitter-icon.png",
      SOCIAL_LINK: "http://www.twitter.com",
      TITLE: "twitter"
    },
    {
      IMG_SRC : "images/linkedin-icon.png",
      SOCIAL_LINK: "http://www.linkedin.com",
      TITLE: "linkedin"
    },
    {
      IMG_SRC : "images/snapchat-icon.png",
      SOCIAL_LINK: "http://www.snapchat.com",
      TITLE: "snapchat"
    }
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "Where our dreams begin, Chisinau",
    MOBILE: "+1 (234)567-890",
    EMAIL: "freelancee@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;