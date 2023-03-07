const addItemForm = document.querySelector('.inps-add-products'),
name = document.getElementById('name-input'),
url = document.getElementById('url-input'),
desc = document.getElementById('desc-input'),
price = document.getElementById('price-input'),
cat = document.getElementById('cat-input'),
addButton = document.getElementById('add-button');
const wholeProduct = document.querySelector('.whole-product-div');

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

function renderProduct(){
     products = JSON.parse(localStorage.getItem('products')) || [];

    console.log(products);
    products.forEach(product => {
        wholeProduct.innerHTML +=`
        <div class="card-product">
        <div class="img-box">
          <img src="" alt="">
        </div>
        <div class="content-card">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price-catagory-show">
            <p>${product.price}</p>
            <p>${product.category}</p>
          </div>
        </div>
        <div class="delete-edit-div">
          <span class="delete-item"><i  class="fa-solid fa-trash"></i></span>
          <span class="edit-item"><i class="fa-sharp fa-solid fa-pen"></i></span>
        </div>
      </div>
        `
    });
    
}
renderProduct()


