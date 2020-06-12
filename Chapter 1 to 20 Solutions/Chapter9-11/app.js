
//Task Number :1
var city = prompt("Enter city name: ");
if (city==="Karachi" || city==="karachi"){
    document.write("Welcome to city of light <br><br>");
}
//Task Number :2

var gender=prompt("Enter your gender: ");
if (gender==="male" || gender==="Male"){
document.write("Good Morning Sir! <br><br>");
}
else if(gender === "female" || gender === "Female"){
    document.write("Good Morning Ma'am! <br><br>");

}

//Task Number :3

var color = prompt("Enter color of road traffic signal: ");
if(color==="Red" ||color === "red"){
    document.write("Must Stop!<br><br>");
}
else if(color==="Yellow" ||color === "yellow"){
    document.write("Ready to move!<br><br>");
}
else if(color==="Green" ||color === "green"){
    document.write("Move now!<br><br>");
}
//Task Number :4

var currentFuel = +prompt("Enter current fuel in litres : ");
if(currentFuel<= 0.25){
    alert("Please refill the fuel in your car");
}

//Task Number : 5

//a.Following code is true
var a = 4;
if (++a === 5){ //alert output
alert("given condition for variable a is true");
}

// b.Following condition is false
var b = 82;
if (b++ === 83){       // no output
alert("given condition for variable b is true");
}


// c.
var c = 12;
if (c++ === 13){  //no output
alert("condition 1 is true");
}
if (c === 13){  // this condition is true
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){ //this condition is true
    alert("condition 4 is true");
    }

//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e.
if (true){
    alert("True");  // output alert
    }
    if (false){
    alert("False");
    }

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// Task Number : 6
var sub1=+prompt("Enter marks of first subject: ");
var totalMarksSub1= +prompt("Enter total marks of first subject: ");
var sub2=+prompt("Enter marks of second subject: ");
var totalMarksSub2= +prompt("Enter total marks of second subject: ");
var sub3=+prompt("Enter marks of third subject: ");
var totalMarksSub3= +prompt("Enter total marks of third subject: ");
var totalPercent= ((sub1+sub2+sub3)/(totalMarksSub1+totalMarksSub2+totalMarksSub3))*100;
var totalObtainedMarks= sub1+sub2+sub3;
var totalMarksAllSubject = totalMarksSub1+totalMarksSub2+totalMarksSub3;
var Remark1 = "Excellent";
var Remark2 = "Good";
var Remark3 = "You need to improve " ;
var Remark4 = "Sorry" ;
var gradeAone = "A-one";
var gradeA ="A";
var gradeB="B";
var gradeF="Fail";

document.write("<br><br> <h1>Marksheet</h1>")
if (totalPercent>=80){
    document.write("<br><br>Total Marks: "+totalMarksAllSubject);
    document.write("<br><br>Obtained Marks: "+totalObtainedMarks);
    document.write("<br><br>Percentage: "+totalPercent + "%");
    document.write("<br><br>Grade: "+gradeAone);
    document.write("<br><br>Remarks: "+Remark1);
}
else if (totalPercent>=70){
    document.write("<br><br>Total Marks: "+totalMarksAllSubject);
    document.write("<br><br>Obtained Marks: "+totalObtainedMarks);
    document.write("<br><br>Percentage: "+totalPercent + "%");
    document.write("<br><br>Grade: "+gradeA);
    document.write("<br><br>Remarks: "+Remark2);
}
else if (totalPercent>=60){
    document.write("<br><br>Total Marks: "+totalMarksAllSubject);
    document.write("<br><br>Obtained Marks: "+totalObtainedMarks);
    document.write("<br><br>Percentage: "+totalPercent + "%");
    document.write("<br><br>Grade: "+gradeB);
    document.write("<br><br>Remarks: "+Remark3);
}
else if (totalPercent<60){
    document.write("<br><br>Total Marks: "+totalMarksAllSubject);
    document.write("<br><br>Obtained Marks: "+totalObtainedMarks);
    document.write("<br><br>Percentage: "+totalPercent + "%");
    document.write("<br><br>Grade: "+gradeF);
    document.write("<br><br>Remarks: "+Remark4);
}
// Task Number : 7
// Guess game:
var secretNum= 6;
var guessNum = +prompt("Guess and enter the value between 0-10: ");
if (guessNum===secretNum){
    alert("Bingo! correct answer");
}
else if (guessNum === (secretNum+1)){
    alert("Close enough to the answer");
}
// Task Number : 8
var divide = +prompt("Enter number to check the divisible by 3 ");
if ((divide%3)==0){
    alert("It is divisible by three");
}
else if ((divide%3)!=0){
    alert("It is not divisible by three");
}

//Task Number :9
var value = +prompt("Enter number to check even or odd ");
if ((value%2)===0){
    alert("The number is even")
}
else if ((value%2)!==0){
    alert("The number is odd")
}


// Task Number :10

var temperature=+prompt("Enter temperature :");
if (temperature>40){
    alert("It is too hot outside");
}
else if (temperature>30){
    alert("The weather today is normal");
}
else if (temperature>20){
    alert("Today weather is cool");
}
else if (temperature>10){
    alert("OMG! Today’s weather is so Cool");
}

// Task Number : 11

firstNum = +prompt("Enter first number : ");
operator =prompt("Enter operator : ");
secondNum =+prompt("Enter second number : ");
if(operator=== "+"){
    alert(firstNum+secondNum);
}
else if(operator=== "-"){
    alert(firstNum-secondNum);
}
else if(operator=== "*"){
    alert(firstNum*secondNum);
}
else if(operator=== "/"){
    alert(firstNum/secondNum);
}
else if(operator=== "%"){
    alert(firstNum+secondNum);
}



























