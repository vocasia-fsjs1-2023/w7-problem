function getProductsAmount(productsArr) {
  // Create an object to store product amounts
  const productAmounts = {};

  // Iterate through the products array
  for (const product of productsArr) {
    const productName = product[0];
    const amount = product[1];

    // Add the product and its amount to the object
    productAmounts[productName] = amount;
  }

  return productAmounts;
}

function getTotalPrice(productsObj) {
  // Define the list of products and their prices
  const productPrices = {
    "Asus ROG": 25000000,
    "Lenovo Legion": 22000000,
    "Zyrex 1945": 7000000,
    "HP Omen": 20000000,
    "Acer Predator": 21000000,
  };

  let totalPrice = 0;

  // Iterate through the productsObj and calculate the total price
  for (const productName in productsObj) {
    const amount = productsObj[productName];
    const price = productPrices[productName];

    totalPrice += amount * price;
  }

  return totalPrice;
}

function getDiscount(memberStatus, totalPrice) {
  if (memberStatus) {
    // Apply a 20% discount for members
    return totalPrice * 0.8;
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  const productsObj = getProductsAmount(customer.products);
  const totalPrice = getTotalPrice(productsObj);
  const discountedPrice = getDiscount(customer.member, totalPrice);

  if (customer.member) {
    return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${discountedPrice}`;
  } else {
    return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${discountedPrice}`;
  }
}

let customer1 = {
  name: "Fajrin",
  products: [
    ["Asus ROG", 2],
    ["Lenovo Legion", 3],
  ],
  member: true,
};

let customer2 = {
  name: "Fadlila",
  products: [
    ["Acer Predator", 1],
    ["Asus ROG", 3],
    ["Lenovo Legion", 1],
  ],
  member: false,
};

let customer3 = {
  name: "Jetly",
  products: [["HP Omen", 2]],
  member: true,
};

// TEST CASES
console.log(shoppingTeros(customer1)); // Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 92800000
console.log(shoppingTeros(customer2)); // Hai Fadlila! Total Harga yang harus kamu bayar adalah Rp 118000000
console.log(shoppingTeros(customer3)); // Hai pelanggan setia Jetly! Total Harga yang harus kamu bayar adalah Rp 32000000
