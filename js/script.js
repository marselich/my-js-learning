'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastFilm ='', filmRating = '';

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if(personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман!');
	} else {
		alert('Произошла ошибка!');
	}
}

detectPersonalLevel();

function showMyDb() {
	if(!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}

showMyDb();

function writeYourGenres() {
	for(let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
	}
}

writeYourGenres();