// div внутри корзины, в который мы добовляем товары
const cartWrapper = document.querySelector(".cart-wrapper");
const deliveryCost = document.querySelector(".delivery-cost");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInbox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    let itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      let cartItmeHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
        </div>
        `;

      cartWrapper.insertAdjacentHTML("beforeend", cartItmeHTML);
    }
    toggleCartStatus();

    // Сбрасываем счётчик кол-ва товара, который только что добавили в корзину
    card.querySelector("[data-counter]").innerText = "1";
  }
});

// Функция показа.скрытия Корзина пуста, пересчета суммы заказа
function toggleCartStatus() {
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartTotal = document.querySelector(".cart-total");
  const orderForm = document.querySelector("#order-form");

  if (cartWrapper.querySelector(".cart-item")) {
    cartEmpty.classList.add("none");
    cartTotal.classList.remove("none");
    orderForm.classList.remove("none");
  } else {
    cartEmpty.classList.remove("none");
    cartTotal.classList.add("none");
    orderForm.classList.add("none");
  }

  let totalPrice = 0;

  cartWrapper.querySelectorAll(".cart-item").forEach(function (item) {
    const counter = item.querySelector("[data-counter]").innerText;
    const priceOneItem = item.querySelector(".price__currency").innerText;
    const price = parseInt(counter) * parseInt(priceOneItem);

    totalPrice += price;
  });

  cartTotal.querySelector(".total-price").innerText = totalPrice;

  if (totalPrice < 1000) {
    deliveryCost.innerHTML = `
            <span>300</span> <span class="rouble">₽</span>
        `;
  } else {
    deliveryCost.innerText = "Бесплатно";
  }
}
