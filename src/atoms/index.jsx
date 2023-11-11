import { atom, useAtom, useSetAtom } from "jotai";

export const cartItems = atom([]);

export const getCartNumber = atom((get) => {
  const cart = get(cartItems);
  return cart.length;
});
