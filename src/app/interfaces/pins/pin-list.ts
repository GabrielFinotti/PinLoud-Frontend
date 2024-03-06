export interface PinList {
  id: number;
  title: string;
  description: string;
  image: string;
  ideas: {
    title: string;
  }[];
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    email: string;
    username: string;
    bio: string | null;
    profile_picute: string | null;
  };
}
