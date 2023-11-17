import { atom, useAtom, useSetAtom } from "jotai";

export const cartItems = atom([]);
export const user = atom();

export const priceInCart = atom((get) => {
  const cart = get(cartItems);
  return cart
    .map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
});

export const getCartNumber = atom((get) => {
  const cart = get(cartItems);
  return cart.length;
});
