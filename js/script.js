'use strict';



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function() {
		this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function() {
		for (let i = 0; i < this.count; i++) {
			let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
			let filmRating = prompt('На сколько оцените его?', '');
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
	},

	detectPersonalLevel: function() {
		if(personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман!');
		} else {
			alert('Произошла ошибка!');
		}
	},

	showMyDb: function() {
		if(!personalMovieDB.privat) {
			console.log(personalMovieDB);
		}
	},

	writeYourGenres: function() {
		for(let i = 0; i < 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
			if (genre === null || genre === '') {
				alert('Ошибка! Вы ввели пустую строку или нажали отмена! Введите снова.');
				i--;
			} else {
				personalMovieDB.genres[i] = genre;
			}
		}
		this.genres.forEach((genre, i) => {
			console.log(`Любимый жанр #${i+1} - это ${genre}`);
		});
	},

	toggleVisibleMyDB: function() {
		this.privat = !this.privat;
	}
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDb();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

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

// динамическая типизация

// to string

// 1)