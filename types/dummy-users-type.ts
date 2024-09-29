import { CartItem } from "./dummy-products-type";

export type UserItem = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type TransactionItem = {
  id: string;
  createdAt: number;
  user: UserItem;
  items: CartItem[];
  totalAmount: number;
  status: "Completed" | "Cancelled";
};
