// Data film, makanan, dan minuman
const films = [
  { title: "Sherlock Holmes", price: 20000 },
  { title: "Forrest Gump", price: 18000 },
  { title: "Call", price: 16000 },
  { title: "The Dark Knight", price: 14000 },
  { title: "5 cm", price: 25000 },
];

const meals = [
  { name: "Pizza", price: 50000 },
  { name: "Burger", price: 45000 },
  { name: "Popcorn", price: 35000 },
  { name: "Odading", price: 20000 },
  { name: "Gorengan", price: 10000 },
  { name: "Chitato", price: 5000 },
];

const drinks = [
  { name: "Coca-Cola", soda: true, price: 15000 },
  { name: "Pepsi", soda: true, price: 12000 },
  { name: "Thai Tea", soda: false, price: 20000 },
  { name: "SiBoBa", soda: false, price: 18000 },
];

// Fungsi untuk mendapatkan data film
function getDataMovie(movieTitle) {
  const movie = films.find((film) => film.title === movieTitle);
  return movie ? { title: movie.title, price: movie.price } : null;
}

// Fungsi untuk mendapatkan makanan berdasarkan alergi
function getFreeMeal(allergies) {
  const freeMeal = meals.find((meal) => !allergies.includes(meal.name));
  return freeMeal ? { name: freeMeal.name, price: freeMeal.price } : null;
}

// Fungsi untuk mendapatkan minuman berdasarkan preferensi soda
function getFreeDrink(drinkSoda) {
  const freeDrink = drinks.find((drink) => drink.soda === drinkSoda);
  return freeDrink ? { name: freeDrink.name, price: freeDrink.price, soda: drinkSoda } : null;
}

// Fungsi untuk mendapatkan tipe cinema berdasarkan film yang dipilih
function getCinemaType(movieTitle) {
  if (["Forrest Gump", "The Dark Knight", "5 cm"].includes(movieTitle)) {
    return "Premiere";
  } else {
    return "Regular";
  }
}

// Fungsi untuk mendapatkan nomor kursi berdasarkan kode kursi
function getSeatNumber(codeSeat) {
  // Anda dapat mengimplementasikan logika penentuan nomor kursi di sini
  // Contoh sederhana: menggabungkan kode kursi dengan nomor tersedia
  const seatNumber = codeSeat + "1";
  return seatNumber;
}

// Fungsi utama untuk mencetak tiket
function printTicket(customer) {
  const movieData = getDataMovie(customer.movie);
  const mealData = getFreeMeal(customer.allergies);
  const drinkData = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  // Menghitung total harga tiket
  let totalPrice = 0;
  if (movieData) totalPrice += movieData.price;
  if (mealData) totalPrice += mealData.price;
  if (drinkData) totalPrice += drinkData.price;

  // Membuat pesan berdasarkan total harga
  let message;
  if (totalPrice === 0) {
    message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";
  } else {
    message = `Total harga yang harus kamu bayar adalah Rp ${totalPrice}`;
  }

  // Membuat objek tiket
  const ticket = {
    name: customer.name,
    movie: customer.movie,
    meal: mealData ? mealData.name : "Tidak ada makanan gratis",
    drink: drinkData ? drinkData.name : "Tidak ada minuman gratis",
    seatType: cinemaType,
    seatNumber: seatNumber,
    totalPrice: totalPrice,
    message: message,
  };

  return ticket;
}

// Contoh penggunaan
const customer = {
  name: "Vincent",
  movie: "Call",
  allergies: ["Popcorn", "Burger"],
  drinkSoda: true,
  seatCode: "B",
};

const ticket = printTicket(customer);
console.log(ticket);
