function getDataMovie(movieTitle) {
  
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
  let output = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === movieTitle) {
      output = movies[i];
    }
  }
  return output;
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
  const output = foods.filter((food) => !allergies.includes(food.name));
  const foodallergies = output [0];
  return foodallergies;
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
  const output = drinks.filter((drink) => drink.soda === drinkSoda);
  const freedrink = output[0];
  return freedrink;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };
  // write your code here
  for (const type in types) {
    if (types[type].includes(movieTitle)) {
      return type
    }
    
  }
  return 'Tidak di temukan';
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
  for (let i = 0; i < seats.length; i++) {
    const code = seats[i][0];
    const list = seats[i].slice(1);
    const kosong = list.findIndex((seat) => seat !== 'x');
    if (codeType === code) {
      nomor = `${code}${kosong + 1}`;
      return nomor;
    }
  }
  return 'nomor tidak terserdia';
}

function printTicket(customer) {
  
  let dataMovie = getDataMovie(customer.movie);
  let meal = getFreeMeal(customer.allergies);
  let drink = getFreeDrink(customer.drinkSoda);
  let cinematype = getCinemaType(customer.movie);
  let seatNumber = getSeatNumber(customer.seatCode);

  harga = dataMovie.price + meal.price + drink.price;

  return data = {
    name: customer.name,
    movie: customer.movie,
    meal: meal.name,
    drink: drink.name,
    seatType: cinematype,
    seatNumber: seatNumber,
    totalPrice: harga,
    message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha'
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
