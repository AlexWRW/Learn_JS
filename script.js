"use strict";

let numberofilms;

function start() {
    numberofilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberofilms == '' || numberofilms == null || isNaN(numberofilms)) {
        numberofilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberofilms,
    movies: {},
    actosr: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из последних просмотренных фильмов?', ''),
              b = +prompt('на сколько его оцените?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPesonalLevel() {
    if (personalMovieDB.count <10) {
        console.log ('Вы просмотрели довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
        console.log ('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log ('Вы киноман!');
    } else {
        console.log ('ошибка');  
    }
}

detectPesonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по порядку ${i}`);  
    }
}

writeYourGenres();