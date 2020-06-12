// Task Number :1
var arrStudent =[]; // a.literal method array declaration
// Task Number :2
var arrObjectWala = new Array(); // b.object notation method declaration
// Task Number :3
var arrStringWala = ["Arbab","Ali","Samad"];
// Task Number :4
var arrNumberWala = [33,5,54,32,5,67,7,6,45];
// Task Number :5
var arrboolWala =[true,false,true, true, true];
// Task Number :6
var arrMixedWala = ["Arbab",232,true, true,false, true,34];
// Task Number :7
var arrQualification= [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification</h1>");
for (var i =0;i<=arrQualification.length -1;i++){
    document.write("<br>"+(i+1)+") "+ arrQualification[i]);
}

// Task Number :8

var arrStud =["Michael", "John","Tony"];
var score =[450,480,300];
var total = 500;
for(i=0;i<=arrStud.length-1;i++){
    document.write("<br> Score of  "+arrStud[i] +" is " +score[i] + " .Pecentage:  "+ ((score[i]/total)*100)+" %");
} 

// Task Number : 9
var color = ["red","green", "blue"];
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// a.
var addcolor = prompt("What color you want to add in the beginning :");
document.write("<br> <h3>After Adding color</h3>")
color.unshift(addcolor);
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// b.
var addcolor = prompt("What color you want to add in the end :");
document.write("<br> <h3>After Adding color in the end</h3>")
color.push(addcolor);
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// c.
for (i = 0; i<2;i++)
{
    var addcolor = prompt("What color you want to add in the beginning :");
    color.unshift(addcolor);
}
document.write("<br> <h3>After Adding color in the beginning</h3>")
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// d.
document.write("<br> <h3>After Deleting color from beginning</h3>")
color.shift(1)
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// e
document.write("<br> <h3>After Deleting color from end</h3>")
color.pop();
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}
// f.
var colorAddIndex = +prompt("At which index you want to add element : ");
var addColorAtDesireIndex ;
for(i=0;i<2;i++){
    addColorAtDesireIndex =prompt("Enter the value to add in array :");
    color.splice(colorAddIndex,0,addColorAtDesireIndex);
}
document.write("<br> <h3>After adding color on desire index</h3>")
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}

// g.
var colorDelIndex = +prompt("At which index you want to delete element : ");
var colorDelQuantity =+prompt("How many colors you want to delete :") ;
color.splice(colorDelIndex,colorDelQuantity);
document.write("<br> <h3>After deleting color on desire index</h3>")
for(i=0;i<=color.length-1;i++){
    document.write("<br> " + color[i])
}


// Task Number : 10
var scoreOfStudent = [353,433,876,345,234,656];
document.write("<br> Score of Students "+ scoreOfStudent);
document.write("<br> Score of Students "+ scoreOfStudent.sort());

// Task Number :11
var cities = [ "Karachi", "Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(2,3);
document.write("<br> <h3>Cities List :</h3> ")
for(i=0;i<=cities.length-1;i++){
        document.write("<br> " + cities[i]);
    }
document.write("<br> <h3>Selected cities List :</h3> ")
for(i=0;i<=selectedCities.length-1;i++){
        document.write("<br> " + selectedCities[i]);
    }
// Task Number :12
var arrJoinWala = ["This ", " is ", " my ", "cat"];
arrJoinWalaNew = arrJoinWala.join(" ");
document.write("<h3>Arrat:</h3>")
document.write(arrJoinWala);
document.write("<h3>String:</h3>")
document.write(arrJoinWalaNew);


// Task Number : 13 
// FIFO METHOD 
document.write("<h3>FIFO METHOD</h3>")
var fifoarr= [];
fifoarr.push("Keyboard");
fifoarr.push("Mouse");
fifoarr.push("Printer");
fifoarr.push("Monitor");
document.write("<h3>Devices :</h3>");
document.write(fifoarr);
var device = fifoarr.shift(0);
document.write("<br> Out : <br> "+device);
var device = fifoarr.shift(0);
document.write("<br> Out : <br> "+device);
var device = fifoarr.shift(0);
document.write("<br> Out : <br> "+device);
var device = fifoarr.shift(0);
document.write("<br> Out : <br> "+device);

// Task Number :14
// LIFO METHOD
document.write("<h3>LIFO METHOD</h3>");
var fifoarr= [];
fifoarr.push("Keyboard");
fifoarr.push("Mouse");
fifoarr.push("Printer");
fifoarr.push("Monitor");
document.write("<h3>Devices :</h3>");
document.write(fifoarr);
var device = fifoarr.pop();
document.write("<br> Out : <br> "+device);
var device = fifoarr.pop();
document.write("<br> Out : <br> "+device);
var device = fifoarr.pop();
document.write("<br> Out : <br> "+device);
var device = fifoarr.pop();
document.write("<br> Out : <br> "+device);

// Task Number : 15 
var namearr=["Apple","Samsung", "Motorola", "Nokia", "Sony"," Haier"];
document.write("<select><option value='"+namearr[0]+"'>"+namearr[0]+"</option><option value='"+namearr[1]+"'>"+namearr[1]+"</option><option value='"+namearr[2]+"'>"+namearr[2]+"</option><option value='"+namearr[3]+"'>"+namearr[3]+"</option><option value='"+namearr[4]+"'>"+namearr[4]+"</option><option value='"+namearr[5]+"'>"+namearr[5]+"</option></select>")

