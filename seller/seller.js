const addItemForm = document.querySelector('.inps-add-products'),
name = document.getElementById('name-input'),
url = document.getElementById('url-input'),
desc = document.getElementById('desc-input'),
price = document.getElementById('price-input'),
cat = document.getElementById('cat-input'),
addButton = document.getElementById('add-button');

// let products
// if(!localStorage.getItem('products')){
//     localStorage.setItem('products',JSON.stringify([]))
// }
 let products = JSON.parse(localStorage.getItem('products')) || [];

addItemForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let product = {
        id : Date.now(),
        name: name.value,
        url: url.value,
        description: desc.value,
        price: price.value,
        category: cat.value
    } 

    //products = JSON.parse(localStorage.getItem('products')) 

    products.push(product)
    localStorage.setItem('products', JSON.stringify(products));

    addItemForm.reset();

})


