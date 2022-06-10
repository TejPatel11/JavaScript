//EX1
const ex1 = () =>{
const array = [1, '2', 3, 'test', 1.2];
console.log(countNumbers(array));
}
const countNumbers = (array) =>{
    let retVal=0;
    for(const num of array){
        if(typeof(num) == 'number')
        if(num%1 !=0)
        retVal++;
    }
    return retVal;
}

//EX2
const ex2 = () =>{
const array = [12, 55, "2", 22, 11, true];
console.log(minNumber(array));
}
const minNumber = (array) =>{
    let minNumber = array[0];
    for(const num of array){
        if(typeof(num) == 'number'){
            if(num< minNumber)
            minNumber = num;
            
        }
    }
    return minNumber;
}

//EX3

const ex3 = () =>{
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));

}

const shortestString = (array) =>{
    let shortestString = array[0]
    for(const num of array){
        if(num.length < shortestString.length)
        shortestString = num
    }
    return shortestString
}
//EX4
const ex4 =() => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));

}
const countLetters =(array) =>{
    let retVal =0;
    for(const num of array){
        
        retVal += num.length;
    }
    return retVal;
}

//Ex5
const ex5 = () =>{
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    
   countIt(array);

}
const countIt = (array) =>{
    console.log("Number of Integers: " +countIntegerNubers(array));
    console.log("Number of Decimal Numbers: " +countDecimalNumbers(array));
    console.log("Number of Strings: " +countString(array));
}
const countIntegerNubers = (array) =>{
    let retval =0;
    for(const num of array){
        if(typeof(num) == 'number' && num%1 ==0)
        retval++;
    }
    return   retval;
}
const countString = (array) =>{
    let retval = 0;
    for(const num of array){
        if(typeof(num) == 'string')
        retval++;
    }
    return retval;
}
 const countDecimalNumbers = (array) =>{
    let retVal=0;
    for(const num of array){
        if(typeof(num) == 'number' && num %1 !==0)
        retVal++;
    }
    return retVal;
}


//EX6 
const ex6 = () =>{
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
console.log("Number of Integers: " + result.numIntegers)
console.log("Number of Decimal Numbers: " + result.numDecimals)
console.log("Number of Strings: " + result.numStrings)

}

const countItems = (numIntegers, numDecimals, numStrings) =>{
  var result= {
      numIntegers: numIntegers,
      numDecimals: numDecimals,
      numStrings: numStrings
  };
    

const countIntegerNubers = (array) =>{
    let numIntegers=0;
    for(const num of array){
        if(typeof(num) =='number')
        numIntegers++
    }
    return result.numIntegers
}
}
const main = async() =>{
   // ex1();
   // ex2();
   // ex3();
   // ex4();
    //ex5();
    ex6();
}
main();