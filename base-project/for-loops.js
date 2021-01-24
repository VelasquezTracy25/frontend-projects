//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(number){
let i = 1;

    while (i <= 10){
        console.log(number + " x " + i + " = " + (number*i));
        i++;
    }
}

showMultiplicationTable(1);

