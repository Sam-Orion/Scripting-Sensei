var myCar2 = {
    maxSpeed: 70, 
    driver: "Atlas", 
    drive: function(speed, time){                             
        console.log("distance travelled " + speed*time + " kms"); 
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};  

var myCar3 = {
    maxSpeed: 70, 
    driver: "Sam", 
    drive: function(speed, time){                             
        console.log("distance travelled " + speed*time + " kms"); 
    },
    test: function(){
        console.log(this);
    }
};  


myCar2.logDriver();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);