// addOne takes in a number as a parameter 
// and returns that numbers +1
// Example: addOne(-7) returns -6

function addOne(x) {
  return ++x;
}

// test addOne
console.log(addOne(-78));


// divide takes in two numbers as parameters
// and returns the first divided by the second
// Example: divide(6, 3) returns 2

function divide(x, y) {
  return x / y;
}

// test divide
console.log(divide(32, 4));

// getBiggest takes in two numbers
// and returns the largest of the two
// if they are the same, return either
// Example getBiggest(-1, 3) returns 3

function getBiggest(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// test getBiggest
console.log(getBiggest(-9, 8));

// getLength takes in a string
// and returns the length of the string
// Example: getLength('tazerface') returns 9

function getLength(str) {
  return str.length;
}

// test getLength
console.log(getLength("Heitor"));

// orderPizza takes in a boolean
// if it is true return the string 'cheese pizza'
// if not, return the string 'pepperoni pizza'
// Example: orderPizza(true) returns 'cheese pizza'

function orderPizza(vegetarian) {
  if (vegetarian) {
    return 'cheese pizza';
  } else {
    return 'pepperoni pizza';
  }
}

// test orderPizza
console.log(orderPizza(false));

// countDown takes in a number greater than 0
// it logs every number starting from the input down to 0
// there is no return value
// Example: countDown(3) logs the following
// 3 
// 2 
// 1 
// 0

function countDown(start) {
  if (start > 0) {
    for (start > 0; start < 10000000000000; start--) {
      console.log(start);
      if (start === 0) {
        break;
      }
    }
  } else {
    return "Sorry, this number is smaller than zero!";
  }
}

// test countDown
countDown(22);

// repeat logs a phrase x number of times
// there is no return value
// Example: repeat("not your mama's edamame", 4) logs the following
// "not your mama's edamame"
// "not your mama's edamame"
// "not your mama's edamame"
// "not your mama's edamame"

function repeat(phrase, x) {
  if (typeof phrase === 'string') {
    for (i = 0; i < x; i++) {
      console.log(phrase);
    }  
  } else {
    return "Error! Your first input is not a string";
  }
}

// test
repeat("Tell me more", 8);

// getHTMLTag takes in a tag name 
// and returns the opening and closing tag
// Example: getHTMLTag('div') would return '<div></div>'

function getHTMLTag(tagName) {
  return "<" + tagName + "></" + tagName + ">";
}

// test getHTMLTag
console.log(getHTMLTag("house"));


// STRETCH PROBLEMS (NOT REQUIRED)

// getHeaderTag takes in header text and a header size 
// and returns the opening and closing H tag with the text inside
// Example: getHeaderTag('Welcome', 2) would return '<h2>Welcome</h2>'

function getHeaderTag(text, size) {
  if (typeof text === 'string') {
    if (typeof size === 'number' && size <= 6) {
      return '<h'+ size + '>' + text + '</h' + size + '>';
    } else {
      return 'Error! Your second input is not a number or is bigger than six!';
    }
  } else {
    return 'Error! Your first input is not a string!';
  }
}

// test getHeaderTag
console.log(getHeaderTag("Seja benvindo de volta", 2));

// logMultiples takes in two numbers 
// and logs any number between 1 and 100 that is a multiple of x or y
// there is no return value
// Example: logMultiples(20, 25) would log
// 20
// 25
// 40
// 50
// 60
// 75
// 80
// 100

function logMultiples(x, y) {
  for (let i = 1; i < 101; i++) {
    if (i % x === 0 || i % y === 0){
      console.log(i);
    }
  }
}

// test logMultiples
console.log(logMultiples(7, 42));

// reverseWords takes in a string and reverses every word in the phrase
// it returns the reversed version of the string
// Example: reverseWords('good luck') would return 'kcul doog'

function reverseWords(phrase) {
  return phrase.split('').reverse().join('');
}

// test reverseWords
console.log(reverseWords("Whatever"));
