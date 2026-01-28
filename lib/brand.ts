export const BRAND = {
  name: "carbootsale.com",
  tagline: "We're building a proper home for car boot sales—simple, practical, and fast.",
  launchStatus: "Launching soon",
  launchDetail: "We're tidying listings and polishing the map.",
} as const;

export interface TeaserFeature {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

export const TEASER_FEATURES: TeaserFeature[] = [
  {
    icon: "/icons/search.png",
    title: "Search boot sales near you",
    description: "Find car boot sales in your area with a simple, fast search.",
    iconAlt: "Search icon",
  },
  {
    icon: "/icons/map.png",
    title: "See the essentials before you set off",
    description: "Know what's available: toilets, refreshments, indoor/outdoor venues, accessibility.",
    iconAlt: "Map icon",
  },
  {
    icon: "/icons/directions.png",
    title: "Get directions without the faff",
    description: "Quick links to maps so you can head straight there.",
    iconAlt: "Directions icon",
  },
  {
    icon: "/icons/outdoor.png",
    title: "All the practical details",
    description: "Phone numbers, websites, and opening times when available.",
    iconAlt: "Outdoor venue icon",
  },
] as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} ${BRAND.name}`,
} as const;
