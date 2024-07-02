// Constructor functions are functions that are used to construct new objects

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log("distance travelled " + speed*time + " kms");
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
};                                             // Constructor function starts with capital letter

var myCar = new Car(70, "Sam");
var myCar2 = new Car(80, "Callister");
var myCar3 = new Car(90, "Alexander");
var myCar4 = new Car(100, "Orion");

myCar.drive(30,5);
myCar3.logDriver();