
// Task number :1
var a = 10;
document.write("Result: <br>");
document.write("<br> <br>The value of a is : "+ a );
document.write("<br>.........................");
++a;
document.write("<br> <br>The value of ++a is : "+ a );
document.write("<br>Now the value of a is : "+ a );

a++;
document.write("<br> <br> The value of a++ is : "+ a );
document.write("<br>Now the value of a is : "+ a );

--a;
document.write("<br> <br>The value of --a is : "+ a );
document.write("<br>Now the value of a is : "+ a );

a--;

document.write("<br> <br>The value of a-- is : "+ a );
document.write("<br>Now the value of a is : "+ a );

// Task Number : 2 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br> <br> a is : "+a +"<br>");
document.write("b is : "+ b+"<br>");
document.write("result is : "+ result+"<br><br>");

document.write("--a is : "+ (--a)+"<br>");
document.write("--a - --b is : "+ ((--a)-(--b))+"<br>");
document.write("--a - --b + ++b is : "+ ((--a)-(--b)+(++b))+"<br>");
document.write("--a - --b + ++b + b-- is : "+ ((--a)-(--b)+(++b)+(b--))+"<br>");

//Task Number : 3

var name = prompt("Enter your name : ");
alert("Welcome! " + name);
document.write("Welcome! "+ name +"<br><br>");
 

//Task number : 5
var num = prompt("Enter a number for table :");
c = parseInt(num);


if ( isNaN(c) == true  ){


    for (i=1;i<=10;i++){
        document.write("5 x " + i + "="+ (i*5)+"<br><br>");
    }
    // document.write("not number");

}
else if ( isNaN(c) == false ){
    
    for (i=1;i<=10;i++){
        document.write(num +" x " + i + "="+ (i*num) +"<br><br>");
    }

    // document.write(" number");

}


//Task number : 6
var sub1 = prompt("Enter first subject name: ");
var sub2 = prompt("Enter second subject name: ");
var sub3 = prompt("Enter third subject name: ");
var totalMarks=100;
var obtainedMarksOfSub1 = prompt("Enter first subject marks: ");
var obtainedMarksOfSub2 = prompt("Enter second subject marks: ");
var obtainedMarksOfSub3 = prompt("Enter third subject marks: ");
var percent = ((obtainedMarksOfSub1+obtainedMarksOfSub2+obtainedMarksOfSub3)/(totalMarks*3))*100;
var subjectPercent1 = (obtainedMarksOfSub1/totalMarks)*100;
var subjectPercent2 = (obtainedMarksOfSub2/totalMarks)*100;
var subjectPercent3 = (obtainedMarksOfSub3/totalMarks)*100;

document.write("<table><tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr> <tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+obtainedMarksOfSub1+"</td><td>"+subjectPercent1+"%</td></tr><tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+obtainedMarksOfSub2+"</td><td>"+subjectPercent2+"%</td></tr><tr><td>"+sub3+"</td><td>"+totalMarks+"%</td><td>"+obtainedMarksOfSub3+"</td><td>"+subjectPercent3+"%</td></tr><tr><td></td><td><b>"+(totalMarks*3)+"</b></td><td><b>"+(obtainedMarksOfSub1+ obtainedMarksOfSub2 + obtainedMarksOfSub3)+"</b></td><td><b>"+percent+"%</b></td></tr></table>");



