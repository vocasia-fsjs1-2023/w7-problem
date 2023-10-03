function getProductAmount(products) {
  const listProductAmount = {};
  for (const [productName, quantity] of products) {
    listProductAmount[productName] = listProductAmount[productName] || 0;
    listProductAmount[productName] += quantity;
  }
  return listProductAmount;
}

function getTotalPrice(listProductAmount) {
  const productPrices = {
    'Asus ROG': 25000000,
    'Lenovo Legion': 22000000,
    'HP Omen': 20000000,
    'Acer Predator': 21000000,
  };

  let totalPrice = 0;
  for (const productName in listProductAmount) {
    if (productPrices.hasOwnProperty(productName)) {
      totalPrice += productPrices[productName] * listProductAmount[productName];
    }
  }
  return totalPrice;
}

function getDiscount(statusMember, totalPrice) {
  if (statusMember) {
    return totalPrice * 0.8; // Member mendapatkan diskon 20%
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  const listProductAmount = getProductAmount(customer.products);
  const totalPrice = getTotalPrice(listProductAmount);
  const totalPriceAfterDiscount = getDiscount(customer.member, totalPrice);

  let message;
  if (customer.member) {
    message = `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  } else {
    message = `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  }

  return message;
}

// Contoh penggunaan
const customer = {
  name: "Amir",
  products: [
    ["Acer Predator", 2],
    ["Asus ROG", 1],
    ["Lenovo Legion", 1]
  ],
  member: true
};

console.log(shoppingTeros(customer));
