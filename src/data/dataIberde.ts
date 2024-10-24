import { typeIberde } from "@/_types/typeIberde";
import { dataUser } from "./dataUser";

export const dataIberde: typeIberde = {
  id: 123,
  user: dataUser,
  body: "Criando conteudo",
  image: "/images/iberde.jpg",
  likeCount: 125,
  commentCount: 32,
  reIberdeCount: 5,
  liked: true,
  reIberded: false,
  dataPost: new Date(2024, 8, 1, 10, 0, 0),
};
