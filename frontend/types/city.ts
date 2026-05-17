import { info } from "console";

export type City = {
  id: string;
  name: string;
  info: string;
  slug: string;
  title?: string;
  description?: string;
  content?: string | null;
  multiplier?: number;
};