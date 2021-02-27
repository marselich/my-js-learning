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

//колбэки

function a (a, callback) {
	console.log(a);
	callback();
}

a('сообщение', function () {
	console.log('привет мир!');
});

// объекты

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() { // можно и функции написать в объекте
		console.log('test');
	}
};

options.makeTest();

// деструктуризация объектов
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length); // узнать количество ключей объекта

// console.log(options.name);

// перебор значений
for (let key in options) {
	if(typeof(options[key]) === 'object') {
		for(let i in options[key]) {
			console.log(`Свойство ${i} иммет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} иммет значение ${options[key]}`);
	}
}

console.dir(String); //чтобы узнать все свойства и методы объекта String работает в консоли браузера