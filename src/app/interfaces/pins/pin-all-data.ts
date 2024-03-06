export interface PinAllData {
  id: number;
  title: string;
  description: string;
  image: string;
  user: {
    id: number;
    email: string;
    username: string;
    bio: string | null;
    profile_picture: string | null;
  };
  comments: string[];
  ideas: {
    title: string;
  }[];
  total_likes: number | null;
}
