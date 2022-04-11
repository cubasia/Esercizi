import { userOrder } from "@models";
import { testuser } from "./testuser.mock-up";

export const items: userOrder[] = [
    {
      user: testuser,
      order: 'ordine di questo',
    },
    {
      user: testuser,
      order: 'ordine di quello',
    },
    {
      user: testuser,
      order: 'ordine di codesto',
    },
  ];
