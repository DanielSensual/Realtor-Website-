export interface Agent {
  id: string;
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  headshot: string;
  specialties: string[];
  bio: string;
}

export const mockAgents: Agent[] = [
  {
    id: "agent-1",
    slug: "kari-fleck",
    name: "Kari Fleck",
    title: "Broker | Owner | Founder",
    phone: "(407) 555-0182",
    email: "kari@therealestatecollection.com",
    headshot: "/images/agents/kari-fleck.jpg",
    specialties: ["Luxury Estates", "New Development", "Investor Strategy"],
    bio: "Kari brings over two decades of experience in Central Florida's luxury real estate market, curating each transaction with meticulous care and hospitality-first approach."
  },
  {
    id: "agent-2",
    slug: "evoteam",
    name: "EVO Team",
    title: "Top Team | Luxury Real Estate | REALTORS®",
    phone: "(407) 555-0149",
    email: "evoteam@therealestatecollection.com",
    headshot: "/images/agents/evoteam.jpg",
    specialties: ["Luxury Homes", "Investment Properties", "Relocation"],
    bio: "The EVO Team is a powerhouse group specializing in luxury real estate transactions across Central Florida's most prestigious communities."
  },
  {
    id: "agent-3",
    slug: "central-florida-team",
    name: "Central Florida RE Team",
    title: "Top Team | Multi-Million Dollar Producers",
    phone: "(407) 555-0156",
    email: "cfteam@therealestatecollection.com",
    headshot: "/images/agents/central-florida-team.jpg",
    specialties: ["Residential Sales", "New Construction", "Market Analysis"],
    bio: "Central Florida's premier real estate team with a proven track record of multi-million dollar productions and exceptional client service."
  },
  {
    id: "agent-4",
    slug: "lisa-mahjoub",
    name: "Lisa Mahjoub",
    title: "REALTOR® | Luxury Real Estate",
    phone: "(407) 555-0167",
    email: "lisa@therealestatecollection.com",
    headshot: "/images/agents/lisa-mahjoub.jpg",
    specialties: ["Luxury Properties", "Waterfront Homes", "Global Clients"],
    bio: "Lisa specializes in luxury real estate, providing white-glove service to discerning buyers and sellers in Central Florida's premier communities."
  },
  {
    id: "agent-5",
    slug: "morgan-horsley",
    name: "Morgan Horsley",
    title: "Property Manager | REALTOR®",
    phone: "(407) 555-0178",
    email: "morgan@therealestatecollection.com",
    headshot: "/images/agents/morgan-horsley.jpg",
    specialties: ["Property Management", "Rental Properties", "Investment Advisory"],
    bio: "Morgan combines real estate expertise with comprehensive property management services, maximizing returns for investor clients."
  },
  {
    id: "agent-6",
    slug: "matthew-kester",
    name: "Matthew Kester",
    title: "REALTOR® | Luxury Waterfront Specialist",
    phone: "(407) 555-0189",
    email: "matthew@therealestatecollection.com",
    headshot: "/images/agents/matthew-kester.jpg",
    specialties: ["Waterfront Properties", "Luxury Estates", "Lake Communities"],
    bio: "Matthew is Central Florida's go-to specialist for waterfront and lakefront properties, with deep knowledge of the area's most exclusive communities."
  },
  {
    id: "agent-7",
    slug: "christine-hayden",
    name: "Christine Hayden",
    title: "REALTOR® | Broker Associate",
    phone: "(407) 555-0192",
    email: "christine@therealestatecollection.com",
    headshot: "/images/agents/christine-hayden.jpg",
    specialties: ["Residential Sales", "First-Time Buyers", "Negotiation"],
    bio: "Christine brings exceptional negotiation skills and market insight to every transaction, ensuring her clients achieve their real estate goals."
  },
  {
    id: "agent-8",
    slug: "elena-santiago",
    name: "Elena Santiago",
    title: "Transaction Coordinating Manager | REALTOR®",
    phone: "(407) 555-0203",
    email: "elena@therealestatecollection.com",
    headshot: "/images/agents/elena-santiago.jpg",
    specialties: ["Transaction Management", "Contract Compliance", "Client Relations"],
    bio: "Elena ensures seamless transactions from contract to closing, providing meticulous attention to detail and exceptional client communication."
  }
];
