export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    initials: "BM",
    name: "Blessings Minga",
    role: "Co-Founder",
    bio: "Leads Product, Design & Business Development, responsible for UI/UX and product design, front-end development, and broader positioning, branding, and growth strategy.",
    linkedinUrl: "https://www.linkedin.com/in/blessings-minga-9b6516256/?isSelfProfile=true",
  },
  {
    initials: "IP",
    name: "Innocent Phakira",
    role: "Co-Founder",
    bio: "Lead Developer, shaping dependable digital products from the technical foundation through to launch.",
    linkedinUrl: "https://www.linkedin.com/in/innocent-phakila-ba901a264/",
  },
];
