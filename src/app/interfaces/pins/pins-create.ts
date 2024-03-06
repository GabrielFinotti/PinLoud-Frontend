export interface PinsCreate {
  title: string;
  description: string;
  image: File;
  ideas: {
    title: string;
  }[];
  user: number;
}
