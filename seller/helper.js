function deleteItem (arr, id){
  return  arr.filter((product) => product.id !== id);

}

function filterByCategory(arr, str) {
  
  let filteredProducts = arr.filter(
    
    (e) => str === e.cata
  );
  return filteredProducts
 
}



module.exports = {deleteItem,filterByCategory};