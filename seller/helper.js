function deleteItem (arr, id){
  return  arr.filter((product) => product.id !== id);

}
module.exports = deleteItem;