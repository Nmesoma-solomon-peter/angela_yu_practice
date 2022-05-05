// A program that prints the number from 1 to 100 in an array using a function. 
// But for Multiples of three Print "FIZZ"
//  instead of the number and for the multiples of five print "BUZZ". 
//  for numbers which are multiples of both three and five print "FizzBuzz".

var numberArray = [];
function fizzbuzz(){
   for(i=1;i<=100; i++){ 
        if(i % 3 === 0 && i % 5 === 0){
       console.log("FIZZBUZZ");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
           console.log('buzz');
        }
        else{
            console.log(i);
        }
    }
}
numberArray.push(fizzbuzz());

 