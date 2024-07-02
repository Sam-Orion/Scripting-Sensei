var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);
console.log(myPastDate);
console.log(myFutureDate);


var birthday = new Date(1985, 0, 15, 11, 25, 15);
var birthday2 = new Date(1985, 0, 15, 11, 25, 15);

//get the month of the date (0-11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1-31)
console.log(birthday.getDate());

//get the day of the week (1-6)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number of milliseconds since 1st January 1970
console.log(birthday.getTime());


if (birthday.getTime() == birthday2.getTime()) {
    console.log("birthdays are equal");
} else {
    console.log("birthdays are not equal");
}