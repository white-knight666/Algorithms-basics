//print number from 1 to 135
for (let i=0; i<=  135 ;i++){
   // console.log(i);
}

///Print Odd Numbers 1 - 135
for (let i = 1; i < 135; i++) {
  if (i % 2 != 0) {
      //console.log(i);
  }
}

///Sum of Printed Numbers
var sum =0;
for(let i = 0; i < 135; i++){
    sum = i+sum;
  //console.log("number is: " + i + " sum: " + sum);
}

///Print the elements of an array
let  x = [1,4,2,12,-3,-10,]
for(let i=0 ; i<x.length; i++){
   // console.log(x[i]);
}

///Find Max
console.log(Math.max(...x));

///Get Average
x = [1,4,2,12];
let total=0;
for(let i=0; i< x.length ;i++){
    total = total +x[i];
}
//console.log( total/x.length);




//Pseudocode
//1- Write a function that takes an array of number as an argument
//2-creat a result variable to storethe last result and equal it to empty array
//3- Loop through the array
//4- If the number is less than 0 replace it with the word Turing function
//5- print the results

function numberToString(array) {
  var result =[];
  for (var i = 0; i< array.length; i++)
  if (array[i] <0 ){
    result.push('Turing')
  }else{
    result.push(array[i])
  }
  //console.log(result)
}

var y = [1,-4,0,-1];
numberToString(y);

//Diagram
//1- i =0 .... 1 >0 .... result:[1]
//2: i = 1.... -4<0.... result : [1,"Turing"]
//3: i = 2.... 0=0.... result : [1,"Turing",0]
//4- i = 3.... -1<0.... result : [1,"Turing",0,"Turing"]





//Eliminate the negative

function elimination(eliminate) {
  var final =[];
  for (var i = 0; i< eliminate.length; i++)
  if (eliminate[i] <0 ){
    final.push(0)
  }else{
    final.push(eliminate[i])
  }
 console.log(final)
}

var k = [2,-1,4,-3];
elimination(k);
