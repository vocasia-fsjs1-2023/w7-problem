function recommendFilmByGenre(filmData, selectedGenre) {
  // Filter film yang sesuai dengan genre yang dipilih
  const filteredFilms = filmData.filter((film) => film.genre === selectedGenre);

  // Jika tidak ada film yang sesuai dengan genre, kembalikan pesan
  if (filteredFilms.length === 0) {
    return "Tidak ada film yang sesuai dengan genre yang dipilih.";
  }

  // Temukan film dengan rating tertinggi
  let highestRatedFilm = filteredFilms[0];
  for (let i = 1; i < filteredFilms.length; i++) {
    if (filteredFilms[i].rating > highestRatedFilm.rating) {
      highestRatedFilm = filteredFilms[i];
    }
  }

  return highestRatedFilm;
}

// Contoh data film dalam bentuk array of objects
const filmData = [
  {
    title: "Film 1",
    genre: "Action",
    rating: 8.5,
  },
  {
    title: "Film 2",
    genre: "Action",
    rating: 7.9,
  },
  {
    title: "Film 3",
    genre: "Drama",
    rating: 9.2,
  },
  {
    title: "Film 4",
    genre: "Comedy",
    rating: 6.8,
  },
];

// Genre yang dipilih
const selectedGenre = "Action";

// Memanggil fungsi untuk merekomendasikan film berdasarkan genre
const recommendedFilm = recommendFilmByGenre(filmData, selectedGenre);

// Menampilkan hasil rekomendasi
if (typeof recommendedFilm === "string") {
  console.log(recommendedFilm);
} else {
  console.log(`Film dengan rating tertinggi dalam genre ${selectedGenre}:`);
  console.log(recommendedFilm);
}
