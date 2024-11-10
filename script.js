 //1.
function calculateSum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // 2.
  function findMaxNumber(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
  }
  
  // 4. 
  function concatenateStrings(arr) {
    return arr.reduce((acc, str) => acc + str, '');
  }
  
  // 5. 
  function multiplyNumbers(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
  }
  
  // 7.
  function calculateDifference(arr) {
    return arr.reduce((acc, num) => acc - num);
  }
  
  // 8.
  function doubleValues(arr) {
    return arr.map(num => num * 2);
  }
  
  // 9. 
  function convertToLowerCase(arr) {
    return arr.map(str => str.toLowerCase());
  }
  
  // 11.
  function addTextToDOMElements(elements, text) {
    elements.map(element => element.textContent += text);
  }
  
  // 12. 
  function squareNumbers(arr) {
    return arr.map(num => num * num);
  }
  
  // 13.
  function addTextToEachDOMElement(elements, text) {
    elements.forEach(element => {
      element.textContent += text;
    });
  }
  
  // 14. 
  function increaseScores(students) {
    students.forEach(student => {
      student.score += 5;
    });
  }
  
  // 16. 
  function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  // 17.
  function createDivElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement('div');
      div.textContent = arr[i];
      document.body.appendChild(div);
    }
  }
  
  // 18.
  function printMultiplicationTable(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Multiplication table for ${arr[i]}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${arr[i]} * ${j} = ${arr[i] * j}`);
      }
    }
  }
  
  // 19. 
  function filterGreaterThanTen(arr) {
    return arr.filter(num => num > 10);
  }
  
  // 20.
  function filterDOMElementsByClass(elements, className) {
    return elements.filter(element => element.classList.contains(className));
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const strings = ['Hello', 'world', 'this', 'is', 'JS'];
  const students = [{ name: 'John', score: 80 }, { name: 'Jane', score: 90 }];
  const domElements = document.querySelectorAll('p'); 
  
  
  console.log(calculateSum(numbers));
  console.log(findMaxNumber(numbers)); 
  console.log(concatenateStrings(strings)); 
  console.log(multiplyNumbers(numbers)); 
  console.log(calculateDifference(numbers)); 
  
  
  console.log(doubleValues(numbers)); 
  console.log(convertToLowerCase(strings)); 
  addTextToDOMElements(domElements, ' - Additional text'); 
  console.log(squareNumbers(numbers)); 
  

  addTextToEachDOMElement(domElements, ' - Extra text'); 
  increaseScores(students);
  console.log(students); 
  

  console.log(reverseArray(numbers)); 
  createDivElements(strings);
  printMultiplicationTable([2, 3, 5]); 
  
  console.log(filterGreaterThanTen(numbers)); 
  console.log(filterDOMElementsByClass(domElements, 'special-class')); 
  