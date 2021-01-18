// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder(num1, num2){
    return num1 % num2;
}

// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(num1, num2){
    return (num1**2) + (num2**2);
}

// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

function timesTwoPlusThree(num1, num2){
    return (num1 * 2) + 3;
}

// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

function areaOfRectangle(num1, num2){
    return num1 * num2;
}

// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
function areaOfCircle(radius){
    return (radius**2) * Math.PI;
}


// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
function circumference(radius){
    return 2 * radius * Math.PI;
}

// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(string){
    return ('aeiouAEIOU'.indexOf(string) !== -1);
  }

// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(string){
    let vowelList = "AEIOU"
    
    for (let i=0; i<vowelList.length; i++){
      if(vowelList.indexOf(string[i]) !== -1) {
        return true;
      }
    }
    return false;
  }
