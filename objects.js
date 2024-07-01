/*
    We define a new object by using the syntax:
    var myCar = new car();

    To call a property of an object we use:
    myCar.maxSpeed;-------------------------> property, notice NO parenthesis

    To call a method/function of an object we use:
    myCar.drive();--------------------------> method, notice YES parenthesis, to pass arguments write within parenthesis

*/

// Creating a new JavaScript Object

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Sam";
myCar.drive = function(){                          // When we define a method we don't use paranthesis
    console.log("now driving"); 
};

myCar.drive();                                     // When we call the method we use paranthesis

var myCar2 = {
    maxSpeed: 70, 
    driver: "Atlas", 
    drive: function(speed, time){                             // When we define a method we don't use paranthesis
        console.log("distance travelled " + speed*time + " kms"); 
    }
};                                                 // Short-hand for object -------> {}

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

console.log(myCar.driver);