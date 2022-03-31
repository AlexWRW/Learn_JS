"use strict";

const number0films = +prompt('сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: number0films,
    movies: {},
    actosr: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = +prompt('на сколько его оцените?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = +prompt('на сколько его оцените?', '');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log (personalMovieDB);