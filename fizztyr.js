// A program that prints the number from 1 to 100 in an array using a function and a while loop. 
// But for Multiples of three Print "FIZZ"
//  instead of the number and for the multiples of five print "BUZZ". 
//  for numbers which are multiples of both three and five print "FizzBuzz".

var output = [];
var num = 1;

function fizzbuzz(){
    while(num<=100){    
        if (num %3 === 0 && num % 5 === 0){ 
            output.push("FizzBuss");
        }else if(num % 3 === 0){
            output.push("Fizz");
        }else if(num % 5 === 0 ){
            output.push("buzz");
        }
        else{ 
        output.push(num);
        }
        console.log(output);
        num++;
  
    }
    }
 

fizzbuzz();