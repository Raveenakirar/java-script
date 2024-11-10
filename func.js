// let users ={
//     name:"rubi",
//     address:{
//         pincode:"4343",
//     }
// }
//method 1 = details.lastName = "roy" (. dot operator)
// users.address.city="indore";
// console.log(users.address);
// output = { pincode: '4343', city: 'indore' }
   
// mathod 2 = details['lastName']="roy" (of operator ya arr operator)
//   users.address['city']="vidisha";
//   console.log(users.address);
// output = { pincode: '4343', city: 'vidisha' }
 
// mathod 3 = details={...details, lastname:"roy",age:34,and so on} , spread operator
// users={...users,address: {...users.address, pincode:"3432",city:"ujjain"} };
// console.log(users);
// output = { name: 'rubi', address: { pincode: '3432', city: 'ujjain' } }

// let users ={
//     user1:{
//     name:"rubi",
//     age:34,
//     address:{
//         pincode:"4343",
//         city:"Bhopal",
//     },
//   },
// };
// let newusers ={...users, user1:{...users.user1,address:{...users.user1.address,pincode:"3453",city:"vidisha",state:"mp"}}};
//  console.log(newusers);
//  output =  {    user1: {
//     name: 'rubi',
//      age: 34,
//      address: { pincode: '3453', city: 'vidisha', state: 'mp' }
//    }
//  }  
      
// let users ={
//     user1:{
//     name:"rubi",
//     age:34,
//     address:{
//         pincode:"4343",
//         city:"Bhopal",
//     },
//   },
  
//    user2 :{
//     name:"sakshi",
//     age:34,
//     address:{
//         pincode:"4343",
//         city:"Bhopal",
//     },
// }
// };

//   users={...users,user1:{user1:users.user2},
//   user2:{user2:users.user1}};
//   console.log(users);
//   output =   user1: { user1: { name: 'sakshi', age: 34, address: [Object] } },
//              user2: { user2: { name: 'rubi', age: 34, address: [Object] } }
  
// const arr =[
//  { name: "rahul",marks:[22,44,66,66,66]},
//  {name: "rubi" , marks:[10,10,10 ,10,10]},
//  {name: "sakshi" , marks:[22 ,44,16,18,16]},
// ];
// let totalMarks = 0;
// let name = " ";
//  for(let user of arr){
//     let currentMarks=0;
//     for(let m of user.marks){
//         currentMarks += m;
//     }
//     if (currentMarks > totalMarks){
//        total = currentMarks;
//         name = user.name;
//     }     
//   }  console.log(name);

// question 1 
// let arr2 =[34,545,465,65,65,7,57,65]
// find the max number and minimun number and its index.  
// let arr2 =[34,545,465,65,65,7,57,65]
// let minValue = Math.min(...arr2);
// let maxValue = Math.max(...arr2);
// console.log("this is minValue = ",minValue);
// console.log("this is maxValue = ",maxValue);
// output = this is minValue =  7
//          this is maxValue =  545

//question 2
// let lastSubjectMark=76
// 76 ko marks me add karna he spread method se 
//    let obj = {
//     name : "Rahul",
//     marks:[43,45,454,54],
//  }
//  let add = {...obj ,marks:{ ...obj.marks,marks:"76"}};
//  console.log(add);
//  {
//   name: 'Rahul',
//   marks: { '0': 43, '1': 45, '2': 454, '3': 54, marks: '76' }
// }
 
 
 
   
   
   
   
  