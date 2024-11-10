// let details = {name:"rubi", age: 19, mobile:7958988939, rn:3970940}
//console.log(details.mobile)

//const details = {
  //age:34,
  //name:"python"
//}
 //let address={
   // city:"bhopal",
   // state:"MP",
 // }
//   details.name = details.name.toUpperCase();
//   address.city = address.city.toUpperCase();
//   console.log(details.name, details.age,)
//   console.log(address.city,address.state)
//   //OUTPUT PYTHON 34
      //  BHOPAL MP 

//const students =[ {name:"sakshi",age : 18},
//                  {name:"shivani",age : 19},
//                  {name:"raveena",age : 19},]
//    for(let student of students){
//       if(student.age>=18){
//         console.log(student.name.toUpperCase(),student.age)
//      }
//    }   
      //OUTPUT = SAKSHI 18
      //      SHIVANI 19
      //      RAVEENA 19  
  //let details = {name:"rubi", age: 19, mobile:7958988939, rn:3970940}
 // const keys = Object.keys(details)
 // for(let index of keys){
 //   console.log(index.toUpperCase(),details[index]);
 // } 
 //OUTPUT =  NAME rubi
 //          AGE 19
 //          MOBILE 7958988939
 //          RN 3970940


 //let key ='key'
 //console.log(details[key]);
 // OUTPUT = undefined

 //let age ='key'
 //console.log(details[age]);
 // OUTPUT =undefined

//let age ='address'
//console.log(details['address']);
//OUTPUT = undefined

//let age ='age'
//console.log(details['age']);
// OUTPUT = 19

//let parentkey ='address'
//let innerkey = 'city'
//let main = (details[parentkey])
//console.log(main[innerkey])
 
 //details.name ="NEW NAME",
 // address.city="INDORE",
 //console.log(details.name,details.age ,address.city,address.state);
 //OUTPUT = NEW NAME 34 INDORE MP

 //details.email = "shivani@2911",
 // console.log(details)
 //OUTPUT = {name: 'rubi',
 //          age: 19,
 //          mobile: 7958988939,
 //          rn: 3970940,
 //          email: 'shivani@2911'}    

 //console.log(details)
 //console.log(details)
 //details[9.12]="shivani@2911"
 //console.log(details)


//object method.
// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(Object.entries(details))


const myCart = [
  {name:"Mobile", price:230, count:2},
  {name:"iMac", price:1230, count:1},
  {name:"Mouse", price:130, count:8},
]

 let total = 0
 for(let item of myCart){
  total = total + item.price * item.count
  let price = item.count * item.price
  //cond
  if(price <= 500){
    console.log(`you can  order: ${item.name}`);
  }
 }
  //console.log(total);





