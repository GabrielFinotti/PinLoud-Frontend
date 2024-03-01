export interface PinAllData {
  id: number;
  title: string;
  description: string;
  user: {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    bio: string | null;
    website: string | null;
    profile_picture: string | null;
  };
  comments: any[];
  likes: any[];
  ideas: {
    id: number;
    title: string;
    created_at: string;
    user: number;
  }[];
  total_likes: number | null;
}
