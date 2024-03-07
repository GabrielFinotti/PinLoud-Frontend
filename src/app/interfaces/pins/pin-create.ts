export interface PinCreate {
  image: File;
  title: string;
  description: string;
  ideas: {
    id: number;
  }[];
  user: number;
}
