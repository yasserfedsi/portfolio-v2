type ExperienceType =
  | "FullTime"
  | "PartTime"
  | "Intern"
  | "Education"
  | "Certification"
  | "Extracurricular";

interface IExperience {
  role: string;
  company: string;
  duration: string | number;
  type: ExperienceType;
  description: string;
}

export const experiences: Array<IExperience> = [
  {
    role: "Intermediate School Graduation",
    company: "",
    duration: "2021",
    type: "Education",
    description: "Completed middle school with a grade of 73.75%.",
  },
  {
    role: "Basic Concepts of Computer Science Certificate",
    company: "",
    duration: "2021",
    type: "Certification",
    description:
      "Learned basic computer science concepts such as variables and loops.",
  },
  {
    role: "PlayCanvas Experienced Certificate",
    company: "PlayCanvas",
    duration: "2022 - Present",
    type: "Certification",
    description:
      "Developing chase.io which reached 1000+ views and 400+ daily players.",
  },
  {
    role: "Programming with Python",
    company: "BrainerX",
    duration: "2023",
    type: "Certification",
    description: "Python programming certification.",
  },
  {
    role: "Secondary School Graduation (BAC)",
    company: "",
    duration: "2024",
    type: "Education",
    description: "Graduated with 60.2% and started studies at USTHB.",
  },
  {
    role: "BS, Science & Technology Student",
    company: "USTHB",
    duration: "2024 - 2025",
    type: "Education",
    description: "First year in Science & Technology.",
  },
  {
    role: "Member of IT Department",
    company: "CELEC Club",
    duration: "2024 - Present",
    type: "Extracurricular",
    description: "Worked on frontend and backend projects.",
  },
  {
    role: "BS, Process Engineering",
    company: "USTHB",
    duration: "2025 - 2027",
    type: "Education",
    description: "Bachelor’s degree in Process Engineering.",
  },
  {
    role: "Head of IT Department",
    company: "CELEC Club",
    duration: "Sep 2025 - Present",
    type: "Extracurricular",
    description: "Leading IT initiatives and managing technical projects.",
  },
  {
    role: "HSE Engineer",
    company: "Naftal SPA",
    duration: "March 2026 - Present",
    type: "Intern",
    description:
      "Topic: Treatment of liquid effluents using hydrocarbon separators.",
  },
  {
    role: "Founder & CTO",
    company: "Khwaris",
    duration: "March 2026 - Present",
    type: "FullTime",
    description:
      "Khwaris is a boutique AI and software engineering solutions.",
  },
];
