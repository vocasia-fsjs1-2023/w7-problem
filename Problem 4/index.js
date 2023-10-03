function getDataMovie(movieTitle) {
  console.log(movieTitle);
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
  for (const movie of movies) {
    if (movie.title === movieTitle) {
      return movie;
    }
  }

  return null;
}

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
  for (const food of foods) {
    if (!allergies.includes(food.name)) {
      return food;
    }
  }

  return null;
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
  for (const drink of drinks) {
    if (drinkSoda === drink.soda) {
      return drink;
    }
  }

  return null;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };
  // write your code here

  for (const type in types) {
    if (types[type].includes(movieTitle)) {
      return type;
    }
  }

  return null;
}

function getSeatNumber(codeType) {
  // Lambang "x" menandakan bahwa kursi sudah terisi
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];
  // write your code here
  let seatNumber = null;

  // Proses pencarian tempat duduk
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === codeType) {
        seatNumber = seats[i][0] + (j + 1);
        break;
      }
    }
    if (seatNumber !== null) {
      break;
    }
  }

  return seatNumber;
}

function printTicket(customer) {
  // write your code here
  let data = getDataMovie(customer);
  const dataMovie = getDataMovie(customer.movie);
  const freeMeal = getFreeMeal(customer.allergies);
  const freeDrink = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  if (!dataMovie) {
    return "Film tidak ditemukan!";
  }

  if (!freeMeal) {
    return "Tidak ada makanan gratis yang tersedia!";
  }

  if (!freeDrink) {
    return "Tidak ada minuman gratis yang tersedia!";
  }

  const totalPrice = dataMovie.price + freeMeal.price + freeDrink.price;

  return {
    name: customer.name,
    movie: customer.movie,
    meal: freeMeal.name,
    drink: freeDrink.name,
    seatType: cinemaType,
    seatNumber: seatNumber,
    totalPrice: totalPrice,
    message:
      "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
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
