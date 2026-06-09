export const site = {
  name: "Joy's Nail & Spa",
  address: "172 Eagle Rock Ave, Roseland, NJ 07068",
  phone: "(973) 618-1100",
  email: "joysnailspa@gmail.com",
  hours: [
    { days: "Monday - Friday", time: "9:30AM - 7:00PM" },
    { days: "Saturday", time: "9:00AM - 6:00PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://www.instagram.com/joysnailspa/",
    facebook:
      "https://www.facebook.com/Joys-Nail-Spa-107453230706564/",
  },
  copyright: "© 2026 Joy's Nail & Spa",
  tagline: "Experience the Best Beauty Services from the most luxurious salon in the area. Here at Joy's Nail & Spa, we strive to give our clients the best service you deserve."
};

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Mani & Pedi", href: "/mani-pedi" },
      { label: "Spa Services", href: "/spa-services" },
      { label: "Waxing", href: "/waxing" },
      { label: "Beauty Perks & Kid's Special", href: "/misc" },
    ],
  },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Location", href: "/location" },
  { label: "Social Media", href: "/#social" },
  { label: "Contact Us", href: "/#contact" },
];

export const serviceCards = [
  {
    title: "Mani & Pedi",
    href: "/mani-pedi",
    image: "/images/mani-pedi.jpg",
  },
  {
    title: "Spa Services",
    href: "/spa-services",
    image: "/images/spa.jpg",
  },
  {
    title: "Waxing",
    href: "/waxing",
    image: "/images/waxing.jpg",
  },
  {
    title: "Beauty Perks & Kid's Special",
    href: "/misc",
    image: "/images/misc.jpg",
  },
];

export const galleryImages = [
  "gallery-5db2b719a5cd4e558a3df0ed878c7d97.jpg",
  "gallery-635cdb8cf574410a9bec1d0175567762.jpg",
  "gallery-6a300a58cab94ee0bf449b48e54bfd01.jpg",
  "gallery-8fcc0e1914d043078090cde53898882e.jpg",
  "gallery-9b80b21fab5d4ef4a8037f0e24c7cffd.jpg",
  "gallery-b4add28a0ea643f495b19e1edff4aca6.jpg",
  "gallery-b648302128f54c5eb8059c7a667a1ca3.jpg",
  "gallery-d3c4012bdbd84ad3ab807ac5b73350a8.jpg",
  "gallery-d8550915f9ab470893cdf5ab83f77ac4.jpg",
];

export const maniPediServices = {
  manicure: [
    "Manicure",
    "Weekly Manicure",
    "French Manicure",
    "Buff Manicure",
    "Paraffin Manicure",
    "Reflexology Manicure",
    "Polish Change",
  ],
  colorGel: [
    "Color Gel Manicure",
    "Color Gel French Manicure",
    "Powder Base Gel Manicure",
    "Powder Base French Gel Manicure",
    "Color Gel Pedicure",
    "Soak Off Only",
    "UV Gel Take Off",
    "Powder Gel Soak OFF",
    "3 or More Colors",
    "5 or More Colors",
  ],
  pedicure: [
    "Pedicure",
    "Callus Pedicure",
    "French Pedicure",
    "Paraffin Pedicure",
    "Reflexology Pedicure (10 min.)",
    "Reflexology Pedicure (15 min.)",
    "Toe Repair ADD",
    "EZ Callus Removal",
    "Polish Change",
  ],
  fullSet: [
    "UV Gel Set",
    "French Fill-ins",
    "Fill with Color Gel",
    "Nail Repair",
    "LCN",
    "Color French",
    "All Fill-ins After 2 Weeks",
    "All Fill-ins Long Nails",
  ],
};

export const spaServices = {
  spaPedicure: {
    note: "*Callus Removal Included*",
    items: [
      "Green Tea Spa",
      "Eucalyptus Spa",
      "Peppermint Spa",
      "Jelly Spa",
      "Grape Spa",
      "Pomegranate Spa",
      "Pearl Spa",
      "Spa Organic",
      "Silky Milk Spa",
      "Purissima Spa",
      "Golden Mystique",
    ],
  },
  bodyMassages: [
  {
    name: "Deep Tissue Massage",
  },
  {
    name: "Reflexology/Chair Massage",
  },
  ],
};

export const waxingServices = [
  "Eyebrows",
  "Eyebrows (Tweezing)",
  "Lip",
  "Neck",
  "Chin",
  "Side burn",
  "Back",
  "Under Arms",
  "Half Arms",
  "Full Arms",
  "Upper Legs",
  "Half Legs",
  "Full Legs",
  "Bikini",
  "Brazilian",
  "Fingers",
  "Toes",
  "Ears",
  "Nose",
  "Stomach",
];

export const miscServices = {
  beautyPerks: [
    "Eyelash Extension",
    "Eyelash Fill-ins After 2 Weeks",
    "Eyelash Fill-ins After 3 Weeks",
    "Eyelash Perm",
    "Facial",
  ],
  kidsSpecial: [
    "Mani + Pedi for Ages Under 6",
    "Manicure for Ages Under 6",
    "Pedicure for Ages Under 6",
    "Mani + Pedi for ages 7-12",
    "Manicure for ages 7-12",
    "Pedicure for ages 7-12",
  ],
};
