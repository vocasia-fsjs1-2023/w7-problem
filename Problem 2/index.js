function getProductsAmount(productsArr) {
  // Write your code here
  DataHP = {};
  for (const product of productsArr) {
    const [productName, quality] = product;
    DataHP[productName] = quality;
  }
  return DataHP
  // EXPECTIATION
  // Input from customer.products
  // [
  //   ["Asus ROG", 2],
  //   ["Lenovo Legion", 3],
  // ],
  // Result
  // {
  //   "Asus ROG": 2,
  //   "Lenovo Legion":3
  // }
}

function getTotalPrice(productsObj) {
  const listProduct = [
    ["Asus ROG", 25000000],
    ["Lenovo Legion", 22000000],
    ["Zyrex 1945", 7000000],
    ["HP Omen", 20000000],
    ["Acer Predator", 21000000],
  ];
  let Harga = 0;
  for (const [productName, quality] of Object.entries(productsObj)) {
    const Hargaproduct = listProduct.find((data) => data[0] === productName)[1];
    Harga += Hargaproduct * quality;
  }
  return Harga;
  // EXPECTIATION
  // Input
  // {
  //   "Asus ROG": 2,
  //   "Lenovo Legion":3
  // }
  // Result
  // 121000000 // NUMBER
}

function getDiscount(memberStatus, totalPrice) {
  const Discount = 0.20;
  let Hargaupdate = 0;
  if (memberStatus) {
    Hargaupdate = totalPrice - (totalPrice * Discount);
  }else {
    Hargaupdate = totalPrice;
  }
  return Hargaupdate;
  // EXPECTIATION
  // Input
  // memberStatus = true
  // totalPrice = 121000000
  // Result
  // 92800000 // NUMBER
}

function shoppingTeros(customer) {
  const productAmount = getProductsAmount(customer.products);
  const totalPrice = getTotalPrice(productAmount);
  const Discount = getDiscount(customer.member, totalPrice);
  let pesan = '';
  if (customer.member) {
    pesan = `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${Discount}`;
  }else {
    pesan = `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${Discount}`;
  }
  return pesan;
  // EXPECTATION Return berupa string sesuai contoh dibawah
  // apabila member maka panggil dia pelanggan setia
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
