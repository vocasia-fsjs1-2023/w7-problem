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
	return movies.find((movie) => movie.title === movieTitle);
	// return output;
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
	return foods.find((food) => !allergies.includes(food.name));
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
	return drinks.find((drink) => drink.soda === drinkSoda);
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
		if (seats[i][0] === codeType) {
			for (let j = 1; j < seats[i].length; j++) {
				if (seats[i][j] !== "x") {
					return codeType + j;
				}
			}
		}
	}
}

function printTicket(customer) {
	// write your code here
	// let data = getDataMovie(customer);

	let movieData = getDataMovie(customer.movie);
	let meal = getFreeMeal(customer.allergies);
	let drink = getFreeDrink(customer.drinkSoda);
	let seatType = getCinemaType(customer.movie);
	let seatNumber = getSeatNumber(customer.seatCode);
	let message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

	if (movieData && seatType && seatNumber) {
		let totalPrice = movieData.price;

		if (meal) {
			totalPrice += meal.price;
		}

		if (drink) {
			totalPrice += drink.price;
		}

		return {
			name: customer.name,
			movie: customer.movie,
			meal: meal ? meal.name : "Tidak ada makanan",
			drink: drink ? drink.name : "Tidak ada minuman",
			seatType: seatType,
			seatNumber: seatNumber,
			totalPrice: totalPrice,
			message: message,
		};
	} else {
		return "Tidak dapat mencetak tiket. Periksa data pelanggan atau kursi yang tersedia.";
	}
	// return data;
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
