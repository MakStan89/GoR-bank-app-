import car from "../../../content/loans/car.svg";
import education from "../../../content/loans/education.svg";
import wedding from "../../../content/loans/wedding.svg";

export const loans = [
  {
    id: 1,
    name: "Personal Loan",
    description:
      "Borrow from £1,000 to £25,000 with a personal loan and make your goals a reality.",
    percent: "3.3% APR",
  },
  {
    id: 2,
    name: "Car Loan",
    description:
      "Available for students opting for undergraduate and master’s degree.",
    percent: "16.99% APR",
    image: car,
  },
  {
    id: 3,
    name: "Wedding Loan",
    description:
      "Spread the cost of your special day. Be it a gathering with close family or a big party, it could help turn your dream wedding into reality.",
    percent: "15.5% APR",
    image: wedding,
  },
  {
    id: 4,
    name: "Student Loan",
    description:
      "Available for students opting for undergraduate and master’s degree.",
    percent: "4.12% APR",
    image: education,
  },
  {
    id: 5,
    name: "Debt Consolidation Loan",
    description:
      "Borrow from £1,000 to £25,000 with a personal loan and make your goals a reality.",
    percent: "7.7% APR",
  },
] as const;

export const noLoans = "No loans in here" as const;
export const linkText = "Find out more" as const;
export const heading = "Loan Products" as const;
export const buttonText = "Apply" as const;
