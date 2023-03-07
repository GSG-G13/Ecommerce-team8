var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const container = document.querySelector('.shop-content');

let products = JSON.parse(localStorage.getItem('products')) || [];


const renderProductsHome = ()=>{

  container.innerHTML = '';

  products.forEach(product => {
    
    let card = document.createElement('div');
    card.classList.add('product-card');

    let img = document.createElement('img');
    img.classList.add('product-img');
    img.setAttribute('src', product.url)

    let h2 = document.createElement('h2');
    h2.classList.add('product-title')
    h2.textContent = product.name

    let p = document.createElement('p');
    p.classList.add('product-description')
    p.textContent = product.description

    let span = document.createElement('span')
    span.classList.add('price')
    span.textContent = `$ ${product.price}`

    let i = document.createElement('i')
    i.classList.add('fa-solid', 'fa-cart-plus', 'add-cart')

    card.append(img, h2, p, span, i)

    container.appendChild(card)


  });

}

renderProductsHome();