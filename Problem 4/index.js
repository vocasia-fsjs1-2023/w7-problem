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

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === movieTitle) {
      return movies[i];
    }
  }
  return null; // Return null if movie not found
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

  for (let i = 0; i < foods.length; i++) {
    if (!allergies.includes(foods[i].name)) {
      return foods[i];
    }
  }
  return null; // Return null if no suitable meal found
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
      name: "SiBoBa",
      price: 18000,
      soda: false,
    },
  ];

  for (let i = 0; i < drinks.length; i++) {
    if (drinkSoda && drinks[i].soda) {
      return drinks[i];
    } else if (!drinkSoda && !drinks[i].soda) {
      return drinks[i];
    }
  }
  return null; // Return null if no suitable drink found
}

function getCinemaType(movieTitle) {
  let premiereMovies = ["Forrest Gump", "The Dark Knight", "5 cm"];
  return premiereMovies.includes(movieTitle) ? "Premiere" : "Regular";
}

function getSeatNumber(codeSeat) {
  // Define seat map
  let seatMap = {
    A: ["A1", "A2", "A3", "A4"],
    B: ["B1", "B2", "B3", "B4"],
    C: ["C1", "C2", "C3", "C4"],
    D: ["D1", "D2", "D3", "D4"],
  };

  // Find and return the first available seat in the specified row
  for (let i = 0; i < seatMap[codeSeat].length; i++) {
    if (!seatMap[codeSeat][i].includes("x")) {
      seatMap[codeSeat][i] = "x"; // Mark the seat as occupied
      return seatMap[codeSeat][i];
    }
  }

  return null; // Return null if no available seats in the specified row
}

function printTicket(customer) {
  const movieData = getDataMovie(customer.movie);
  const mealData = getFreeMeal(customer.allergies);
  const drinkData = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  if (!movieData || !mealData || !drinkData || !cinemaType || !seatNumber) {
    return "Sorry, we couldn't process your ticket. Please check your choices.";
  }

  const totalPrice = movieData.price + mealData.price + drinkData.price;
  const message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

  return {
    name: customer.name,
    movie: customer.movie,
    meal: mealData.name,
    drink: drinkData.name,
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
console.log(printTicket(customer2));
console.log(printTicket(customer3));
