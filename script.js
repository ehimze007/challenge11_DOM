// Wait for the DOM content to be loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Select all the increment buttons
  const incrementButtons = document.querySelectorAll(".increment");

  // Select all the decrement buttons
  const decrementButtons = document.querySelectorAll(".decrement");

  // Select all the like buttons
  const likeButtons = document.querySelectorAll(".like");

  // Select all the remove buttons
  const removeButtons = document.querySelectorAll(".remove");

  // Select all the add-to-cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Select all the quantity elements
  const quantityElements = document.querySelectorAll(".quantity");

  // Select the cart items element
  const cartItemsElement = document.querySelector(".cart-items");

  // Select the total price element
  const totalPriceElement = document.querySelector(".cart-total");

  let total = 0;

  // Function to update the quantity of an item
  function updateQuantity(element, increment) {
    const productItem = element.closest(".product-item");
    const quantityElement = productItem.querySelector(".quantity");
    let quantity = parseInt(quantityElement.innerText);

    if (increment) {
      quantity += 1;
    } else {
      if (quantity > 0) {
        quantity -= 1;
      }
    }

    quantityElement.innerText = quantity;
    updateTotalPrice();
  }

  // Function to update the total price of the cart
  function updateTotalPrice() {
    total = 0;
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function (productItem) {
      const quantity = parseInt(
        productItem.querySelector(".quantity").innerText
      );
      const price = parseInt(productItem.getAttribute("data-price"));
      total += quantity * price;
    });

    totalPriceElement.innerText = "Total: ₦" + total;
  }

  // Function to toggle the "liked" class on the like button
  function toggleLike(element) {
    element.classList.toggle("liked");
  }

  // Function to remove an item from the cart
  function removeItem(element) {
    const productItem = element.closest(".product-item");
    productItem.remove();
    updateTotalPrice();
  }

  // Function to add an item to the cart
  function addToCart(element) {
    const productItem = element.closest(".product-item");
    const name = productItem.getAttribute("data-name");
    const price = parseInt(productItem.getAttribute("data-price"));
    const quantity = parseInt(productItem.querySelector(".quantity").innerText);

    updateTotalPrice();
  }

  // Add event listeners to the increment buttons
  incrementButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      updateQuantity(event.target, true);
    });
  });

  // Add event listeners to the decrement buttons
  decrementButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      updateQuantity(event.target, false);
    });
  });

  // Add event listeners to the like buttons
  likeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      toggleLike(event.target);
    });
  });

  // Add event listeners to the remove buttons
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      removeItem(event.target);
    });
  });

  // Add event listeners to the add-to-cart buttons
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      addToCart(event.target);
    });
  });
});
