function getDataMovie(movieTitle) {
  // console.log(movieTitle.name);
  let movies = [
    {
      title: "Sherlock Holmes",
      price: 20000,
    },
    {
      title: "Forrest Gump",
      price: 18000,
    },
    {
      title: "Call",
      price: 16000,
    },
    {
      title: "The Dark Knight",
      price: 14000,
    },
    {
      title: "5 cm",
      price: 25000,
    },
  ];
  // write your code here

  const pilihMovies = movies.find ((movie) => movie.title === movieTitle);

  return pilihMovies;
}
getDataMovie();

function getFreeMeal(allergies) {
  let foods = [
    {
      name: "Pizza",
      price: 50000,
    },
    {
      name: "Burger",
      price: 45000,
    },
    {
      name: "Popcorn",
      price: 35000,
    },
    {
      name: "Odading",
      price: 20000,
    },
    {
      name: "Gorengan",
      price: 10000,
    },
    {
      name: "Chitato",
      price: 5000,
    },
  ];
  // write your code here
const availableFoods = foods.filter((food) => !allergies.includes(food.name));
const pilihMeal = availableFoods[0];

return pilihMeal;
}

function getFreeDrink(drinkSoda) {
  let drinks = [
    {
      name: "Coca-Cola",
      price: 15000,
      soda: true,
    },
    {
      name: "Pepsi",
      price: 12000,
      soda: true,
    },
    {
      name: "Thai Tea",
      price: 20000,
      soda: false,
    },
    {
      name: "Siboba",
      price: 18000,
      soda: false,
    },
  ];
  // write your code here
  const availableDrink = drinks.filter((drink) => drink.soda === drinkSoda);
  const pilihDrink = availableDrink[0]

  return pilihDrink;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };
  // write your code here
  for (const type in types) {
    if(types[type].includes(movieTitle)){
      return type;
    }
  }
  return "Tidak Ditemukan";
}

function getSeatNumber(seatCode) {
  // Lambang "x" menandakan bahwa kursi sudah terisi
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];
  // write your code here
    for (let i = 0; i < seats.length; i++) {
      const row = seats[i][0];
      const availableSeats = seats[i].slice(1);
      const emptySeatIndex = availableSeats.findIndex((seat) => seat !== "x");

      if (row == seatCode && emptySeatIndex !== -1) {
        const seatNumber = emptySeatIndex + 1;
        return `${row}${seatNumber}`;
      }
    }
    return "Tidak Tersedia";
}

function printTicket(customer) {
  const dataMovie = getDataMovie(customer.movie);
  const freeMeal = getFreeMeal(customer.allergies);
  const freeDrink = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  // Menghitung total harga
  const totalPrice =
    dataMovie.price + (freeMeal ? freeMeal.price : 0) + (freeDrink ? freeDrink.price : 0);

  // Membuat pesan
  let message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";
  if (totalPrice > 0) {
    message = "Terima kasih telah membeli tiket!";
  }

  return {
    name: customer.name,
    movie: customer.movie,
    meal: freeMeal ? freeMeal.name : "Tidak Ada",
    drink: freeDrink ? freeDrink.name : "Tidak Ada",
    seatType: cinemaType,
    seatNumber: seatNumber,
    totalPrice: totalPrice,
    message: message,
  };
}


let customer1 = {
  name: "Fajrin",
  movie: "5 cm",
  allergies: ["Pizza", "Burger"],
  drinkSoda: true,
  seatCode: "C",
};

let customer2 = {
  name: "Amel",
  movie: "The Dark Knight",
  allergies: ["Popcorn", "Burger", "Pizza", "Chitato"],
  drinkSoda: false,
  seatCode: "A",
};

let customer3 = {
  name: "Rega",
  movie: "Sherlock Holmes",
  allergies: ["Gorengan", "Chitato", "Popcorn", "Burger", "Pizza"],
  drinkSoda: true,
  seatCode: "D",
};

// TEST CASES

console.log(printTicket(customer1));
// {
//   name: 'Fajrin',
//   movie: '5 cm',
//   meal: 'Popcorn',
//   drink: 'Coca-Cola',
//   seatType: 'Premiere',
//   seatNumber: 'C3',
//   totalPrice: 75000,
//   message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha'
// }

console.log(printTicket(customer2));
// {
//   name: 'Amel',
//   movie: 'The Dark Knight',
//   meal: 'Odading',
//   drink: 'Thai Tea',
//   seatType: 'Premiere',
//   seatNumber: 'A2',
//   totalPrice: 54000,
// }

console.log(printTicket(customer3));
// {
//   name: 'Rega',
//   movie: 'Sherlock Holmes',
//   meal: 'Odading',
//   drink: 'Coca-Cola',
//   seatType: 'Regular',
//   seatNumber: 'D4',
//   totalPrice: 55000,
// }
