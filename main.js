//EX1
const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};
const countNumbers = (array) => {
  let retVal = 0;
  for (const num of array) {
    if (typeof num == "number") if (num % 1 != 0) retVal++;
  }
  return retVal;
};

//EX2
const ex2 = () => {
  const array = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array));
};
const minNumber = (array) => {
  let minNumber = array[0];
  for (const num of array) {
    if (typeof num == "number") {
      if (num < minNumber) minNumber = num;
    }
  }
  return minNumber;
};

//EX3

const ex3 = () => {
  array = ["this", "is", "a", "test", "happy"];
  console.log(shortestString(array));
};

const shortestString = (array) => {
  let shortestString = array[0];
  for (const num of array) {
    if (num.length < shortestString.length) shortestString = num;
  }
  return shortestString;
};
//EX4
const ex4 = () => {
  let array = ["this", "is", "a", "test"];
  console.log(countLetters(array));
};
const countLetters = (array) => {
  let retVal = 0;
  for (const num of array) {
    retVal += num.length;
  }
  return retVal;
};

//Ex5
const ex5 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];

  countIt(array);
};
const countIt = (array) => {
  console.log("Number of Integers: " + countIntegerNubers(array));
  console.log("Number of Decimal Numbers: " + countDecimalNumbers(array));
  console.log("Number of Strings: " + countString(array));
};
const countIntegerNubers = (array) => {
  let retval = 0;
  for (const num of array) {
    if (typeof num == "number" && num % 1 == 0) retval++;
  }
  return retval;
};
const countString = (array) => {
  let retval = 0;
  for (const num of array) {
    if (typeof num == "string") retval++;
  }
  return retval;
};
const countDecimalNumbers = (array) => {
  let retVal = 0;
  for (const num of array) {
    if (typeof num == "number" && num % 1 !== 0) retVal++;
  }
  return retVal;
};

//EX6
const ex6 = () => {
  let array = ["this", "is", 1, 3, 2.1, "a", "test"];
  let result = countItems(array);
  console.log("Number of Integers: " + result.numIntegers);
  console.log("Number of Decimal Numbers: " + result.numDecimals);
  console.log("Number of Strings: " + result.numStrings);
};
const countItems = (array) => {
  let result = { numIntegers: 0, numDecimals: 0, numStrings: "" };
  result.numIntegers = countIntegerNubers(array);
  result.numDecimals = countDecimalNumbers(array);
  result.numStrings = countString(array);
  return result;
};

//EX7
const ex7 = () => {
  let person1 = { name: "Alice", age: 22 };
  let person2 = { name: "Bob", age: 21 };
  let person3 = { name: "Charlie", age: 23 };
  let array = [];
  array.push(person1);
  array.push(person2);
  array.push(person3);
  console.table(array);
};

//EX8

const ex8 = () => {
  console.log(countOver20(personArray));
};
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p = new Person("Alice", 11);
const p1 = new Person("bob", 21);
const p2 = new Person("Charlie", 23);
let personArray = [];
personArray.push(p);
personArray.push(p1);
personArray.push(p2);

const countOver20 = (personArray) => {
  let retval = 0;
  for (const Person of personArray) {
    if (Person.age > 20) {
      retval++;
    }
  }
  return retval;
};
const ex9 = () => {
  console.log(calculateTotal(array));
};
class item {
  constructor(quantity, cost) {
    this.quantity = quantity;
    this.cost = cost;
  }
}
let item1 = new item(1, 1.0);
let item2 = new item(2, 2.0);
let item3 = new item(3, 3.0);
let array = [];
array.push(item1);
array.push(item2);
array.push(item3);

const calculateTotal = (array) => {
  let total = 0;
  for (const item of array) {
    total += item.quantity * item.cost;
  }
  return total;
};

const ex10 = () =>{
    let usageData = [{ userId: 1111, minutes: 10.0 },
        { userId: 2222, minutes: 20.0 },
        { userId: 3333, minutes: 30.0 }];
    let person = { userId: 3333, fullName: "Charlie" };
    let result = calcCellBillForPerson(usageData, person);
    console.log(result);
  }
  const calcCellBillForPerson = (array, obj) => {
    let perMinCharge = 0.1;
    let result = 0;
    for (let i of array) {
      if (i.userId = obj.userId) {
        result = {
          'userId': i.userId,
          'fullName': obj.fullName,
          'minutes': i.minutes,
          'perMinuteCharge': perMinCharge,
          'charge' : (i.minutes * perMinCharge)
        }
      }
    } return result;
  }
  
const main = async () => {
  // ex1();
  // ex2();
  // ex3();
  // ex4();
  //ex5();
  //ex6();
  //ex7();
  //ex8();
  //ex9();
  ex10();
};
main();
