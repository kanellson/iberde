import { TypeUser } from "./typeUser";

export type typeIberde = {
  id: number;
  user: TypeUser;
  body: string;
  image?: string;
  likeCount: number;
  commentCount: number;
  reIberdeCount: number;
  liked: boolean;
  reIberded: boolean;
  dataPost: Date;
};
