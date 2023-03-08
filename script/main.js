var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const container = document.querySelector(".shop-content");
const searchBar = document.querySelector("#search-form").querySelector("input");
const totalCount = document.querySelector(".total-products-num");
console.log(searchBar.value);

let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const renderProductsHome = () => {
  container.innerHTML = "";
  totalCount.textContent = cart.length;
  products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    let img = document.createElement("img");
    img.classList.add("product-img");
    img.setAttribute("src", product.url);

    let h2 = document.createElement("h2");
    h2.classList.add("product-title");
    h2.textContent = product.name;

    let p = document.createElement("p");
    p.classList.add("product-description");
    p.textContent = product.description;

    let span = document.createElement("span");
    span.classList.add("price");
    span.textContent = `$ ${product.price}`;

    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-cart-plus", "add-cart");

    i.addEventListener("click", () => {
      addToCart(product.id);
      totalCount.textContent = cart.length;
    });

    card.append(img, h2, p, span, i);

    container.appendChild(card);
  });
};

renderProductsHome();

searchBar.addEventListener("keyup", (e) => {
  const cardProduct = document.querySelectorAll(".product-card");
  let searchTitle = e.target.value.toLowerCase();

  cardProduct.forEach((card) => {
    let title = card.querySelector("h2").textContent;

    console.log(title);
    console.log(searchTitle);
    if (title.toLowerCase().indexOf(searchTitle) != -1) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const addToCart = (id) => {
  let cartItem = products.find((product) => product.id === id);

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderProductsHome();
};
