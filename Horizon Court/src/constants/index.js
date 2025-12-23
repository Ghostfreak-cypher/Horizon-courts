// Navigation links
export const navLinks = [
  { id: 1, label: "about us", href: "#about", highlighted: true },
  { id: 2, label: "services", href: "#services", highlighted: false },
  { id: 3, label: "facilities", href: "#facilities", highlighted: false },
  { id: 4, label: "contact", href: "#contact", highlighted: false },
  { id: 5, label: "blog", href: "#blog", highlighted: false },
];

// Statistics data
export const statsData = [
  { id: 1, number: "100+", label: "Happy Clients" },
  { id: 2, number: "200+", label: "Projects Completed" },
  { id: 3, number: "50+", label: "Awards Won" },
  { id: 4, number: "10+", label: "Years of Experience" },
];

// Cards data
export const cardsData = [
  {
    id: 1,
    type: "feature",
    bgColor: "bg-[#0D1A2E]",
    icon: "icon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perferendis officiis aperiam doloremque ipsam enim doloribus itaque iste? Animi recusandae laborum sed dignissimos delectus labore.",
    hasGameMode: true,
  },
  {
    id: 2,
    type: "image",
    bgImage: "bg-[url(/hero.webp)]",
    title: "Private & Group Lessons",
  },
  {
    id: 3,
    type: "stats",
    bgColor: "bg-zinc-300",
    textColor: "text-zinc-800",
    mainNumber: "100+",
    mainLabel: "pro Coaches",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sint. Lorem ipsum dolor sit.",
    stats: [
      { text: "beginner", balls: 9, number: 55 },
      { text: "intermediate", balls: 5, number: 55 },
      { text: "advanced", balls: 3, number: 55 },
    ],
  },
];

// Social media links
export const socialLinks = [
  { id: 1, name: "Instagram", url: "#" },
  { id: 2, name: "linkedin", url: "#" },
  { id: 3, name: "facebook", url: "#" },
];

// Footer services cards
export const footerServicesCards = [
  {
    id: 1,
    title: "Coaching Programs",
    description: "Programs designed for all ages and abilities",
    bgImage: "bg-[url(/hero.webp)]",
  },
  {
    id: 2,
    title: "Hourly Court Rental",
    description:
      "Snag into a space built for players — to grow, compete, and thrive.",
    bgImage: "bg-[url(/hero.webp)]",
    hasNavigation: true,
  },
];
