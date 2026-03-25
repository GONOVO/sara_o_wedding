const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/aboutus",
  },
  {
    name: "PORTFOLIO",
    dropdown: true,
    items: [
      {
        name: "REGIONAL EVENTS",
        path: "/portfolio",
      },
      {
        name: "INTERNATIONAL EVENTS",
        path: "/national-portfolio",
      },
    ],
  },
  {
    name: "OUR SERVICES",
    path: "/ourservices",
  },
  {
    name: "EVENT TYPES",
    path: "/events",
  },
  {
    name: "DESTINATIONS",
    path: "/destination-weddings",
  },

  {
    name: "CONTACT US",
    path: "/#contactus",
  },
];

export default links;
