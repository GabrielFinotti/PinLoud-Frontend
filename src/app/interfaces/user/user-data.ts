export interface UserData {
  user: {
    id: number;
    email: string;
    username: string;
    bio: string;
    profile_picture: string;
  };
  pins: {
    id: number;
    image: string;
    title: string;
  }[];
}
