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
        path: "/portfolio",
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
    name: "DESTINATION",
    dropdown: true,
    items: [
      {
        name: "DESTINATION WEDDINGS",
        path: "/destination-weddings",
      },
      {
        name: "DESTINATIONS",
        path: "/wedding",
      },
    ],
  },

  {
    name: "CONTACT US",
    path: "/#contactus",
  },
];

export default links;
