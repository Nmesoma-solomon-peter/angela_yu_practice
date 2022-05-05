// a code that selects who a random name from an arrays
var namesOfPeople = ["Nmesoma","Alex","Ifeanyi","Victor","Edit","Papa","Admin"];

function whoWillBuy(){ 
// getting the number of people in the array
var nameslength = namesOfPeople.length;
// getting the position of everyone in the array and getting a random number
var namesPosition = Math.floor(Math.random() * nameslength);
    return namesOfPeople[namesPosition] + " Will buy the food";
}
console.log(whoWillBuy());
 