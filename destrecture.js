//USESTATE (this is used to )

 //Array destrecture
//let marks = ["shivani","raveena","sakshi","roy"];
//let[v1,v2,v3,v4] = marks;
//console.log(v4)

// object  destrecture
//  let details = {
//      name:"shivani kirar",
//      age:19,
//      email: "shivanikirar23@gmail.com",
//      address:"Indore",   
//  };
//  let details2 = {
//      name:"rubi kirar",
//      age:19,
//      email: "shivanikirar23@gmail.com",   
//  }  
//     const { name }=details; 
//     let { name: newname}= details2;
//     console.log(name,newname);

//object default value
// let {address ="Bhopal"}=details;
//console.log(address);
///  1 ui page
///figma app
//*
//w=100
//h=200
//bc=white
   

// Que = 3| you age one object ,single key :address:
///let age ={
///address:"vidisha"
//      }
//      let {address = "ujjain"}=age;
//      console.log(address)
   
// 2 Array of object we have ,{name, age marks} (print 5 object )
// if student passed in all the subjects (so print ) 
//  const students = [
//     { name: "Amit", age: 20, marks: [85, 78, 92] },
//     { name: "sakshi", age: 21, marks: [90, 85, 88] },
//     { name: "rubi", age: 19, marks: [55, 55, 60] },
//     { name: "shivi", age: 20, marks: [28, 90, 95] },
//     { name: "sami", age: 23, marks: [33, 60, 55] }
// ];
//
//  const passingScore =33; // Define the passing score
//    students.forEach(student => {
//        const hasPassed = student.marks.every(mark => mark >= passingScore);
//        if (hasPassed) {
//            console.log(student.name,student.marks);
//        }
//    });
//       
//  const students = [
//   { name: "Amit", age: 20, marks: [85, 78, 92,43] },
//   { name: "sakshi", age: 21, marks: [90, 85, 88,67] },
//   { name: "rubi", age: 19, marks: [15, 55, 60,12] },
//   { name: "shivi", age: 20, marks: [28, 90, 95,11] },
//   { name: "sami", age: 23, marks: [33, 60, 55,44] } ];

//   for(let student of students){
//     let isfailedstudent =false ;
//     let count = 0
//     for(let mark of student.marks){
//       if(mark <= 33){
//         isfailedstudent=true;  
//         count++;
//       }
//     }
   
//   if(count>=2){
//   console.log(student.name);
//   }
//}  

//       SAME CODE
// for(let student of students){
//   let isfailedstudentCount =0 ;
//   for(let mark of student.marks){
//     if(mark <= 33){
//       isfailedstudentCount +=1;  
//     }
//   }
//  
// if(isfailedstudentCount >1){
// console.log(student.name);
// }
//  }  
// questoin 1 |
//    let  arr= [{name:" ", ages:34, skills:["HTML ", "CSS" , "NODEJS", "React"],},
//          {name:" ", ages:34, skills:["RAVEENA", "SHIVANI" , "Dhakad", "Kirar"],},
//    ]    
//   //  student age >=18 so print skills in lower case all arr print 
//      arr.forEach(person => {
//       if (person.ages > 18) {
//          console.log(person.skills.map(skill => skill.toLowerCase()));
//       }
//       console.log(person.skills.map(skill => skill.toUpperCase()));
//     });  
//  output = ['raveena', 'shivani', 'dhakad', 'kirar']
//             ['RAVEENA', 'SHIVANI', 'DHAKAD', 'KIRAR']

// question 2|  
//     function reverseString(str) {
//      return str.split('').reverse().join('');
//    }    
//    const originalString = "Hello, World!";
//    const reversedString = reverseString(originalString);
//    
//    console.log("Original string:", originalString);
//    console.log("Reversed string:", reversedString);

//rest
// 1 step |
//  let names =["hello ", "all"];
//  names=[...names, "hi", "all"]; // spread operator
//  console.log(names);
// output = [ 'hello ', 'all', 'hi', 'all' ]
  
//  let names =["hello ", "all"];
//  names=[...names , "hi"];   // spread operator
//  let[s1 ,s2 , ...rest]=names;  // rest operator
//  console.log(names);
//  output = [ 'hello ', 'all', 'hi' ]

  // 2 step | 
//  let names =[22,34,56,76,43,11];
//  names=[34,67,89,90 , ...names];   // spread operator
//  let[s1 ,s2 , ...rest]=names;  // rest operator
//  console.log(...rest);
// output = 89 90 22 34 56 76 43 11

//  console.log(names);
// output = [
//           34, 67, 89, 90, 22,
//           34, 56, 76, 43, 11
//          ]

//  console.log(s1,s2);
// output = 34 67
  
// let detail = {firstName: "rahul"};
//  detail =
//  { ...detail,lastName:"kirar",age:23,email:"raveenakirar",firstName:"rubi"
//   }  
//   console.log(detail);

  // let detail ={firstname:"rubi", lastname:"dhakad",firstname:"sakshi",lastname:"dhakad"};
  // console.log(detail);
  
