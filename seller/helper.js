function deleteItem(arr, id) {
  return arr.filter((product) => product.id !== id);
}
function filterByPrice(arr, str) {
  let filteredProducts = arr.filter((e) => str === e.price);
  return filteredProducts;
}
module.exports = { deleteItem, filterByPrice };
