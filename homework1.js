//let arr =[34,56,12,12,76,30,71,56]

//-1 create a logic to find the sum of all the numbers

//let sum = arr.reduce((firstvalue, currentValue) =>firstvalue + currentValue, 0);
//console.log("The sum of all elements in the array is: " + sum);
// output = The sum of all elements in the array is: 347

//-2 create a logic to claculate the avarage of all the numbers

//let sum = arr.reduce((firstValue , currentValue) => firstValue + currentValue, 0 )/2;
//console.log("avarage of all the elements = "+sum);
//output => avarage of all the elements = 173.5

//-3 create a logic to find the largest numbers in this arr
//   let maxValue =Math.max (...arr);
//   console.log("largest value is = "+maxValue);
//   output =>largest value is = 76
   
//-4 create a new arr of unique value of this arr means remove the duplicate value from this arr
//   let uniqueArr = Array.from(new Set(arr));
//   console.log("remove duplicate value " + uniqueArr);
//   output => remove duplicate value 34,56,12,76,30,71

// let str = "TechSimPlus Learnings"
//-1 count the numbers of value from this length
//     let 
  
// count the words of this str
//   let words = str.split();
//   console.log(str.length);
//    output = 21
   
// count the charecter of this length convert this string to upperCase
// let words = str.toUpperCase();
// console.log(words);
// output =>TECHSIMPLUS LEARNINGS

 let students =["Rahul","Harsh","Shiv","vishnu"];

//convert the value of this arr into upperCase
//   for(let words of students){
//     words = words.toUpperCase();
//     console.log(words);
//   } 
// output =>RAHUL HARSH SHIV VISHNU

// if index of the element this even the convert value in upperCase, else LowerCase  
for(let index in students){
    let word = students[index];
    if (index % 2 === 0){
        console.log(word.toUpperCase());  
    }
      else{
        console.log(word.toLowerCase());
     }
}
// output => RAHUL harsh  SHIV vishnu