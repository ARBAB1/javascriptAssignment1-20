//Task Number :1
var value = prompt("Enter any letter : ");
var checkvalue = value;

if (true !==isNaN(checkvalue)){
    alert("Value is integer")
}
else if (value=== checkvalue.toUpperCase()){
    alert("value is in upper case");
}
else if (value=== checkvalue.toLowerCase()){
    alert("Value is in lower case");
}
// Task Number :2
var inputnum1 = +prompt("Enter first number : ");
var inputnum2 = +prompt("Enter second number : ");
if (inputnum1===inputnum2){
    alert("Both numbers are equal");
}
else if (inputnum1>inputnum2){
    alert("First numbers is larger than second number");
}
else {
    alert ("First number is smaller than second number");
}
// Task Number :3

var num = +prompt("Enter any number : ");
a = -1;
if((num+a)>a){
    alert("You entered positive number");
}
else if ((num+a)<a){
    alert("You entered negative number ");
}
else if ((num+a)===a){
    alert("you entered zero");
}

// TAsk Number :4
 var val = prompt("Enter any word : ");
 var arr = ["a","e","i","o","u"];
 var flag = true;
for(i=0;i<=arr.length-1;i++){
    for (var j=0;j<=val.length-1;j++){
        if(arr[i]==val[j]){
            alert("Vowel found ");
            flag = false;
            break;
        }
        

    }
    
    if(flag == false){
        break;
    }
  
}
if(flag == true){
    alert("vowel not found ");
}

// Task Number : 5
var password = prompt("Please enter your password : ");
var confirmPassword = prompt("please renter your password ");
if (password===confirmPassword){
    alert("Correct! The password you entered matches the original password");
}
else if (password!==confirmPassword){
    alert("Incorrect password");
}
// Task Number : 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);}
else {
greeting = "Good evening";
alert(greeting);
}
var time = prompt("Enter time : ");
caltimeGreaterThan1200= (12-(time/100))*-1;
//alert(caltimeGreaterThan1200);
caltimeLessThan1200= ((time/100));
// alert(caltimeLessThan1200);

if (time>=1200){
    alert("Its "+caltimeGreaterThan1200+" pm");
}
else if (time<=1200){
    alert("Its "+caltimeLessThan1200 +" am");

}



if ((time>=0000) && (time<1200)){
    alert("Good Morning");
}
else if ((time>=1200) && (time<1700)){
    alert("Good afternoon");
}
else if ((time>=1700) && (time<2100)){
    alert("Good Evening");
}
else if ((time>=2100) && (time<2359)){
    alert("Good Night");
}
