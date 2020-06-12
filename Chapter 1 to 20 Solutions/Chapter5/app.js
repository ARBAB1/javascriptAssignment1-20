// Task Number : 1 
var num1 = +prompt("Enter first number :");
var num2 = +prompt("Enter second number :");
document.write("Sum of "+ num1 +" and " + num2 +" is "+ (parseInt(num1)+parseInt(num2)) + "<br>");

// Task Number : 2 
// var num1 = +prompt("Enter first number :");
// var num2 = +prompt("Enter second number :");
document.write("Substraction of "+ num1 +" and " + num2 +" is "+ (parseInt(num1)-parseInt(num2))+ "<br>");
document.write("Multiplication of "+ num1 +" and " + num2 +" is "+ (parseInt(num1)*parseInt(num2))+ "<br>");
document.write("Division of "+ num1 +" and " + num2 +" is "+ (parseInt(num1)/parseInt(num2))+ "<br>");
document.write("Modulus of "+ num1 +" and " + num2 +" is "+ (parseInt(num1)%parseInt(num2))+ "<br>");

// Task Number : 3

var a;
document.write("<br> <br> Value after variable declaration is : "+a+" <br>");
a = 5;
document.write("<br> <br> Value after variable initialization is : "+a+" <br>");
a++;
document.write("<br> <br> Value after increment is : "+a+" <br>");
a = a+7;
document.write("<br> <br> Value after adding 7 in variable is : "+a+" <br>");
a--;
document.write("<br> <br> Value after decrement is : "+a+" <br>");
a = a%3;
document.write("<br> <br> Remainder value after dividing by 3 is : "+a+" <br>");




// Task Number : 4
var ticket = 600;
var numberOfTickets = 5;
document.write("<br> <br> Total cost to buy 5 tickets to a movie is "+(ticket*numberOfTickets)+" PKR <br>");

// Task Number : 5

var tabnum = 4;
document.write(" <h3>Table of 4</h3>  <br>")
for (var i=1; i<11 ; i++){
    document.write(tabnum+"x"+ i+"="+(tabnum*i)+"<br> ");
}

// Task Number : 6

var tempc;
var tempf;
c = 25;
f = 70;

tempc = (f -32) *5/9;
tempf = (c*9/5)+32;
document.write("<br> <br>"+f +"<sup>o</sup>F is "+ tempf + "<sup>o</sup>C <br>");
document.write(c +"<sup>o</sup>C is "+ tempc + "<sup>o</sup>F <br>");



// Task Number : 7
var priceOfItem1 = +prompt("Enter price of item 1 :");
var orderdQuantityOfItem1 = +prompt("Enter ordered quantity of item 1 :");
var priceOfItem2 = +prompt("Enter price of item 2 :");
var orderdQuantityOfItem2 = +prompt("Enter ordered quantity of item 2 :");
var shippingCharges = 100;
var totalCost =((priceOfItem1*orderdQuantityOfItem1)+(priceOfItem2*orderdQuantityOfItem2) + shippingCharges) ;
document.write("<h1>Shopping Cart</h1> <br> ");
document.write("Price of item 1 is "+priceOfItem1+" .<br> ");
document.write("Ordered quantity of item 1 is "+orderdQuantityOfItem1+" .<br> ");
document.write("Price of item 2 is "+priceOfItem2+" .<br> ");
document.write("Ordered quantity of item 2 is "+orderdQuantityOfItem2+" .<br> ");
document.write("Ordered quantity of item 2 is "+orderdQuantityOfItem1+" .<br> ");
document.write("Shipping Charges "+shippingCharges+" .<br> ");
document.write("Total cost of your order is "+totalCost+" .<br> ");


// Task Number : 8

var totalMarks = prompt("Enter Total Marks: ");
var obtainedMarks = prompt("Enter Obtained Marks: ");
document.write("<h1>Mark Sheet</h1> <br>");
document.write(" <br> Total Marks: " + parseInt(totalMarks));
document.write("<br> Obtained Marks :" + parseInt(obtainedMarks));
document.write(" <br> Percentage : " + ((parseInt(obtainedMarks)/parseInt(totalMarks))*100) + "%");


// Task Number : 9

var oneDollar = 104.80;
var saudiRiyal = 28;

var pkr = (10 * oneDollar) + (saudiRiyal* 25);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR : " + pkr + "<br>");



// Task number : 10
 var num = 6;
 num = ((num + 5) *10)/2;
 document.write("Single expression value after calculation : " + num );
 
 //Task number : 11
 var currentYear = 2020;
 var birthYear = +prompt("Enter your birth year : ");
 var age = currentYear - birthYear;
 document.write("<h1>Age Calculator</h1>");
 document.write("Current Year : "+currentYear + "<br>" );
 document.write("Birth Year : "+ birthYear + "<br>");
 document.write("Your Age is : " + age + "<br>"); 

 //Task Number :12
 var radius = parseFloat(prompt("Enter Radius of a Circle  : "));
 var pi = 3.142;
 var circumference = 2 * pi * radius;
 var area = pi * (radius*radius );
 document.write("<h1>The Geometrizer</h1>");
 document.write("Radius of a circle  : "+ radius + " <br>");
 document.write("The circumference is : "+ circumference + "<br>");
 document.write("The area is : " + area+"<br>");

 //Task number : 13 
  
var favouriteSnack = "Lays";
var currentAge = 26;
var maxAge = 80;
var estimatedAmountPerDay = 3;
var restLifeEat = (maxAge-currentAge)*365*3;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack  : "+ favouriteSnack + " <br>");
document.write("Current Age : "+ currentAge + "<br>");
document.write("Estimated Maximum Age : "+ maxAge + "<br>");
document.write("Amount of snacks per day : "+ estimatedAmountPerDay + "<br>");
document.write("You will need "+restLifeEat+ " to last until the rip old age of "+maxAge+ "<br>");






































