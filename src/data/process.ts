export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and the problem we're solving together.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We map out scope, timeline, and technical approach before any code is written.",
  },
  {
    number: "03",
    title: "Design",
    description: "We design the user experience and interface, aligned with your brand.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build the product in focused iterations, keeping you in the loop.",
  },
  {
    number: "05",
    title: "Testing",
    description: "We test thoroughly across devices and edge cases before launch.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your product and make sure everything runs smoothly in production.",
  },
  {
    number: "07",
    title: "Maintenance",
    description: "We stay on to support, monitor, and improve the product as your business grows.",
  },
];
