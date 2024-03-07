export interface PinAllData {
  title: string;
  description: string;
  image: string;
  user: {
    username: string;
    profile_picture: string | null;
  };
  comments: string[];
  ideas: {
    title: string;
  }[];
  total_likes: number | null;
}
