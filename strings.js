var myString = 'I\'m a "FUN" string Ninja';
string = "Ninja";

console.log(myString);

console.log(myString.toUpperCase());

console.log(myString.toLowerCase());

console.log(myString.indexOf("string"));

if (myString.indexOf(string.toLowerCase()) === -1){

    console.log("The word 'ninja' does not exist in this string");

}   else{

    console.log("The word 'ninja' exists at position " + myString.indexOf(string.toLowerCase()));

}


var string1 = "abc";
var string2 = 'Bd';

console.log(string1 < string2);