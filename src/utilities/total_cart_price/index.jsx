export function total_Cart_Price(array) {
  return array
    .map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
}
