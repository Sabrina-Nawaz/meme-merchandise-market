

// Initialize an empty cart
let cart = [];

// Function to add items to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  let itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      // If the item is already in the cart, increase its quantity
      itemInCart = true;
      cart[i].quantity++;
      break;
    }
  }

  // If the item is not in the cart, add it
  if (!itemInCart) {
    item.quantity = 1;
    cart.push(item);
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to remove items from the cart
function removeFromCart(index) {
  // Decrease the quantity of the item if it's more than 1
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    // If the item's quantity is 1, remove it from the cart
    cart.splice(index, 1);
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  // Clear the cart display
  let cartTable = document.getElementById("cart-table");
  cartTable.innerHTML = "";

  // Create a table row for each item in the cart
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let row = document.createElement("tr");

    // Item name and quantity
    let nameCell = document.createElement("td");
    nameCell.innerHTML = item.name;
    let quantityCell = document.createElement("td");
    quantityCell.innerHTML = item.quantity;

    // Remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function () {
      removeFromCart(i);
    };
    let removeCell = document.createElement("td");
    removeCell.appendChild(removeButton);

    // Add the cells to the row
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(removeCell);

    // Add the row to the table
    cartTable.appendChild(row);
  }
}
