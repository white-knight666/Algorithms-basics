//1-Addition: 
let sum = 0;
for(let i=200; i<2700; i++) {
    if(i % 3 == 0 || i % 5 == 0){
        sum = i;
    }//console.log(sum);
}


//2- shift 

const x = [2,1,6,4,-7];
x.reverse();
//console.log(x);



//3- FizzBuzz:

let z=[];
for (let i = 1; i < 135; i++){
    if(i%3==0 & i%5==0){
        z[i]="FizzBuzz";
    }
    else if(i%3==0){
        z[i]="Fizz";
    }
    else if(i%5==0){
        z[i]="Buzz";
    }
    else{ z[i]=i;
        }
    z.push(z[i]) 
}
//console.log(z);


//4-Remove the Negative

function elimination(eliminate) {
    var final =[];
    for (var i = 0; i< eliminate.length; i++)
    if (eliminate[i] <0 ){
    final.delete
    }else{
    final.push(eliminate[i])
    }
    //console.log(final)
}
var k = [1,-2,4,1];
//elimination(k);








function aws(shekho) {
    let text = "";
    var last =[];
    for (var i = 0; i< shekho.length; i++)
    if (array[i] == 'program'){
      last.push(0)
    }else{
      last.push(shekho[i])
    }
   console.log(last)
  }
  
  var array = ['Man', 'I','Love','Tshekho','Matrix','Program'];
  aws(array);

