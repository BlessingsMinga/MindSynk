export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    initials: "BM",
    name: "Blessings Minga",
    role: "Co-Founder",
    bio: "Leads product and brand direction at MindSynk, drawing on a Professional Diploma in Social Media Marketing & Management and 3+ years of brand identity and print design experience.",
  },
  // TODO: add remaining co-founder(s) / team members and real headshots
];
