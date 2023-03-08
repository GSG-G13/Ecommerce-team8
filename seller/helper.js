function deleteItem(arr, id) {
  return arr.filter((product) => product.id !== id);
}

function filterByCategory(arr, str) {
  
  let filteredProducts = arr.filter(
    
    (e) => str === e.cata
  );
  return filteredProducts
 
}
function filterByPrice(arr, str) {
  let filteredProducts = arr.filter((e) => str === e.price);
  return filteredProducts;
}



module.exports = { deleteItem, filterByPrice, filterByCategory };
