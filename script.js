"use strict";

const number0films = +prompt('сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: number0films,
    movies: {},
    actosr: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
    // const a = prompt('один из последних просмотренных фильмов?', ''),
    //       b = +prompt('на сколько его оцените?', '');

    // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //     personalMovieDB.movies[a] = b;
    //     console.log('done');
    // } else {
    //     console.log('error');
    //     i--;
    // }
        
// }

let i = 0;
while (i<2) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = +prompt('на сколько его оцените?', '');
    i++;
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
}

}

if (personalMovieDB.count <10) {
    console.log ('Вы просмотрели довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
    console.log ('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log ('Вы киноман!');
} else {
    console.log ('ошибка');  
}

console.log (personalMovieDB);