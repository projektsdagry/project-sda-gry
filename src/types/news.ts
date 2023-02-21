import { Timestamp } from "@firebase/firestore";

export type Article = {
  title: string;
  content: string;
  description: string;
  image: string;
  id: number;
  createdAt: Timestamp;
};

const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export { months };
