// Task Number :1
var multiarr = [ [],[]  ];
// Task Number :2
var matrixarr =[ [0,1,2,3],[1,0,1,2],[2,1,0,1] ];
for (var i=0;i<=matrixarr.length-1;i++){
    for (var j=0;j<=matrixarr[i].length-1;j++){
            document.write(" " +matrixarr[i][j]);
    }
    document.write("<br>");
}
// Task Number :3
for(var i = 1 ; i<=10;i++){
    document.write("<br>"+i);
}
// Task Number :4
var tableNum = +prompt("Enter a number to its multiplication table  :");
var tableLength = +prompt("Enter length multiplication table :");
document.write("<br><br>"); 
for (var i = 1; i <=tableLength; i++){
    document.write("<br> "+ tableNum + " x "+ i +" = "+(tableNum*i));
}
// Task Number : 5

document.write("<br><br>"); 
var fruits = ["apple","banana","mango","orange","strawberry"];
for (var i=0;i<=fruits.length-1;i++){
    document.write("<br>" + fruits[i]); 
}
document.write("<br><br>"); 
for(var i = 0;i<=fruits.length-1;i++){
    document.write("<br> Element at index "+ i + " is "+ fruits[i]);
}

// Task Number : 6

// a. Counting
document.write("<br><br>"); 
document.write("<h3>Counting:</h3>"); 
for(var i = 1;i<=15;i++){
    document.write(i+",");
}

// b. Reverse
document.write("<br><br>"); 
document.write("<h3>Reverse:</h3>"); 
for(var i = 10;i>=1;i--){
    document.write(i+",");
}

// c. Even
document.write("<br><br>"); 
document.write("<h3>Even:</h3>"); 
for(var i = 0;i<=20;i++){
    if((i%2)==0){
        document.write(i+",");
    }
}

// d. Odd   
document.write("<br><br>"); 
document.write("<h3>Odd:</h3>"); 
for(var i = 0;i<=20;i++){
    if((i%2)!=0){
        document.write(i+",");
    }
}

// e. Series
document.write("<br><br>"); 
document.write("<h3>Series:</h3>"); 
for(var i = 2;i<=20;i++){
    if((i%2)==0){
        document.write(i+"k,");
    }
}


// Task Number : 7
document.write("<br><br>"); 
var food = [ "cake","apple pie","cookie","chips","patties"];
var searchFood = prompt("Welcome to ABC Bakery. What do you want to order sir/ ma'am ?");
var flag = false;
for(var i = 0;i<=searchFood.length-1;i++){
    if (searchFood==food[i]){
        document.write(food[i]+" is <b>available </b> at index "+ i +" in our bakery ");
        flag = true;
        break;
    }
}
if (flag == false) {
    document.write("We are sorry. "+searchFood+" is <b> not available </b>  in our bakery ");

}

// Task Number : 8
// Largest Number
document.write("<br><br>"); 
var largeNumber = [24,53,78,91,12];
var check;
for (var i=0;i<=largeNumber.length-1;i++){
    for (var j=0;j<=largeNumber.length - 1;j++){
        
        if (largeNumber[i]<largeNumber[j]){
            check=largeNumber[j];
        }
    }
}
document.write("<h3>Array items:</h3> "+largeNumber + " <br>");

document.write("The large number is "+check);


// Task Number : 9
// Smallest Number
document.write("<br><br>"); 
var smallNumber = [24,53,78,91,12];
var check;
for (var i=0;i<=smallNumber.length-1;i++){
    for (var j=0;j<=smallNumber.length - 1;j++){
        
        if (smallNumber[i]>smallNumber[j]){
            check=smallNumber[j];
        }
    }
}
document.write("<h3>Array items:</h3> "+smallNumber + " <br>");

document.write("The smallest number is "+check);


// Task Number : 10
// Range
document.write("<br><br>"); 
for(i=5;i<=100;i++){
    if(i%5==0){
        document.write(i+",");
    }
}































