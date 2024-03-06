export interface PinCreate {
  image: File;
  title: string;
  description: string;
  ideas: {
    title: string;
  }[];
  user: number;
}
