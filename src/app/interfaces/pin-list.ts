export interface PinList {
  id: number;
  title: string;
  description: string;
  image: string;
  ideas: number[];
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    bio: string | null;
    website: string | null;
    profile_picute: string | null;
  };
}
