// 2 |  [1, 2, 3] and [4, 5, 6] combine these 2 log a new array. 
// let arr =[1,2,3,];
// let newarr = arr.push(4,5,6);
// console.log(arr);
 // output = [ 1, 2, 3, 4, 5, 6 ]

// 3 | Create an array with elements 1, 2, and method to add 4 to the end of the array. array and console Use an array
//    let arr = [1,2,3,];
//    let arr2=[5,6,7];
//    let newarr=  arr.push(4);
//    let newarr2= arr2.push(4)
//    console.log(arr,arr2);
//    output = [ 1, 2, 3, 4 ] [ 5, 6, 7, 4 ]

// 4 |Given an array [10, 20, 30, 40, 50], use an array method to remove the last element. 
// let arr = [10, 20, 30, 40, 50];
// let newarr = arr.splice(0,4);
// console.log(arr);
// output = [ 50 ]

// 5 |Take a number between 1 and 7 and displays the corresponding day of the week. for example: day: 1 = output: Monday
// const days = ["Monday","Tuesday","Wednasday","thrusday","Friday","Saturday","Sunday"];
// let day = days.splice(4,1);
// console.log(day);
// output = [ 'Tuesday' ]

// 6 |Create a menu-driven program that allows the user to select from different food items using numbers, and displays the selected item.
// forExampel const menuItems = [“Pizza”,”Burger”,”Dosa”,”Fry Rice”] const userItemNumber =  1 output will be  “Pizza Ordered”
// if item number is incorrect then print this item is Not Available

// const menuItems =["Pizza","Burger","Dosa","Fry Rice"];
// let newmenuItems= menuItems.splice(1,1);
// console.log( newmenuItems);
// output = [ 'Burger' ]

// -7 | Write a program that based on the color of the traffic light(red, yellow, green) show the message.
//for Example: “Red”: "Stop! The traffic light is red." “Yellow”: “wait or go slow” “green”: "Go! The traffic light is green."for any other color show “Unknown traffic light color.

// let  trafficLight =("red","yellow","Green");{
//     for(let color of trafficLight){
//    switch(color.toLowerCase){
//     case "red":
//     return "Stop";
//     case "yellow":
//     return"wait or go slow";
//     case"Green":
//     return"Go"
//     default:"Unknown TrafficLight Color";
// }
// }
// }
// let trafficLight1 = 1;
// console.log(trafficLight )

// -8 | Write a JavaScript program that takes user's age in a variable. If the age is below a certain value (for example below 18), the program could 
// display a  message saying they're too young to access the content, otherwise, it allows access. 

// let names =[age=34,age=11,age=15]
// for(let index in  names){
//     let age = names[index];
//     if(age>=18){
//         console.log("valid"); 
//     }
//     else{
//         console.log("not Valid");
//     }
// }  output = alid
//             not Valid
//             not Valid

//-9 |Temperature Checker: Write a program that takes tempreature in a variable and console log a 
 //  string indicating whether the temperature is "hot", "moderate", or "cold" based on the following conditions: 
 
// let temperature = [15,24,54,12,22,63];
// for (let index in temperature){
//     let temp =temperature[index];
//     if(temp<=20 ){
//         console.log("Cold");     
//     }else if(temp<30 && temp>20){
//         console.log("moderate");
//     }else{
//         console.log("Hot")
//     }
//  } output = Cold,moderate, Hot,Cold,moderate, Hot

//-10 | Create a program to find favruite fruit from array, if favruite fruit is present in the array then print “Your favruite fruit is (fruit name)” otherwise print “Not Found
 
// let fruit =["Apple","Mango","Orange","Banana"];
// let favFruit =" Apple";
// // for(let favFruit of fruit){
// //     let fruitNmae = fruit[favFruit];
//     if(fruit.includes(favFruit)){
//         console.log(`Your FavFruit is = ${favFruit}`);  
//     }else{
//         console.log("Not Found");
//     }

//-11 | Develop a program that takes an array of numbers (10, 20, 30, 40, 50) and uses the slice method to extract a subarray containing only the last two numbers. 
//   let numbers = [10, 20, 30, 40, 50];
//   let num = numbers.slice(-2);
//   console.log(num);
//   output = [ 40, 50 ]

//-12 | 

// OBJECT 

//-13 | Create an object student with properties name, age, and grade. Set the values of name and age to "Alice" and 20, respectively. Then,
// write a conditional statement to check if student has a grade property. If it does, log the value of student.grade, otherwise, log "Grade not available".
//  let student ={name:"Alice",age:20,grade:"A+"}
//  if(student.grade){
//     console.log("Grade is available");
//  }else{
//     console.log("Grade not available")
//  } output = Grade is available

//-14 | 14.  Create an object person with properties name, gender, and age. Then, write a conditional statement to check if the
// age property of person is less than 21. If it is, log "Underage", otherwise, log "Adult".
// let person =[{age:14},{age:12},{age:83}];

//      for(let index of person){
//             let age=person[index];
//             if(age> 21){
//                 console.log("Underage");     
//             }else{
//                 console.log("Adult");
//             }
//         }

//-15|  Student Grades:You have an array of student objects, each with a name and an array of grades:
//  let students = [
//   { name: "Alice", grades: [85, 90, 78] },
//   { name: "Bob", grades: [80, 85, 88] },
//   { name: "Charlie", grades: [90, 92, 95] },
//   { name: "Dave", grades: [70, 75, 80] },
//   { name: "Eve", grades: [88, 84, 82] }
//  ];
//  Write a program that create an array of student names who have at least one 
// grade above 90. 
// Write a program that create an array of students with their average grade 
// for(let student of students){
//     let grades= false;
//     let count = 0;
//     for(let grade of student.grades){
//     if(grade >= 90){
//         grades = true;
//          count++;
//      }
//     }
//     if(count>=1){
//         console.log(student.name);
        
//     }
// }  output = Alice ,Charlie

//-16 | Given an array of objects representing employees (with properties like name, age, department), extract all the employees who belong to the 
// "Engineering" department.
// let employees =[ 
// { name: "Rajesh Kumar", age: 28, department: "Engineering"}, 
// { name: "Suman Sharma", age: 35, department: "Marketing"}, 
// { name: "Anita Gupta", age: 30, department: "Engineering"}, 
// { name: "Vikram Singh", age: 40, department: "Sales" }, 
// { name: "Priya Desai", age: 27, department: "Human Resources"}, 
// { name: "Ajay Mehta", age: 32, department: "Engineering"} 
// ];
// let Engineeringemployees = employees.filter(employee => employee.department==="Engineering");
//     console.log(Engineeringemployees);
// output = [
//     { name: 'Rajesh Kumar', age: 28, department: 'Engineering' },
//     { name: 'Anita Gupta', age: 30, department: 'Engineering' },
//     { name: 'Ajay Mehta', age: 32, department: 'Engineering' }
//   ]

//-18 |Recipe Book: You are working on a recipe management system for Indian cuisine. Given the following array of Indian recipes:
  const indianRecipes = [ {
         name: "Paneer Tikka Masala",
         ingredients: ["paneer", "onion", "tomato", "capsicum", "cream", "spices"],
         category: "vegetarian"
       }, { 
         name: "Vegetable Biryani",
         ingredients: ["rice", "vegetables", "spices", "saffron", "yogurt"],
         category: "vegetarian"
        },{
         name: "Aloo Gobi",
         ingredients: ["potatoes", "cauliflower", "onion", "tomato", "spices"],
         category: "vegetarian"
        },{
         name: "Chana Masala",
         ingredients: ["chickpeas", "onion", "tomato", "spices"],
         category: "vegan"
        },{
         name: "Dal Tadka",
         ingredients: ["lentils", "onion", "tomato", "spices"],
         category: "vegan"
        },{
         name: "Chicken Curry",
         ingredients: ["chicken", "onion", "tomato", "spices"],
         category: "non-vegetarian"
        }];