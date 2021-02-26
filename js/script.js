'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastFilm ='', filmRating = '';
let i = 0;

for (let i = 0; i < numberOfFilms; i++) {
	lastFilm = prompt('Один из последних просмотренных фильмов?', '');
	filmRating = prompt('На сколько оцените его?', '');
	if (lastFilm === null || filmRating === null) {
		alert('не нажимайте отмена! пожалуйста, введите снова.');
		i--;
	} else if (lastFilm === '' || filmRating === '') {
		alert('вы ничего не ввели! пожалуйста, введите снова.');
		i--;
	} else if (lastFilm.length > 50 || filmRating.length > 50) {
		alert('название фильма не должно быть больше 50 символов! пожалуйста, введите снова.');
		i--;
	}
	personalMovieDB.movies[lastFilm] = filmRating;
}

if(personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман!');
} else {
	alert('Произошла ошибка!');
}

console.log(personalMovieDB);