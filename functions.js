var average = 0; // global variable

function getAverage (a,b){

    average = (a + b)/2; 
    console.log(average);
    return average;

}

var myResult = getAverage(7,8); // global variable


// console.log(average); // undefined

function logResult(){
    console.log("The average is " + myResult);
}

logResult();