// function Add(){
//     console.log("hello my dear friends");  
// }
// Add();
// Add();
// output = hello my dear friends
//          hello my dear friends

// function Sub(){
//     console.log("Kuch bhi")
// } 
// Sub();
// function Sub(V1 ,V2){
// console.log(V1-V2);
// }
// Sub(12,3)

// function Add(V1 ,V2){
// console.log(V1+V2);
// }
// Add(12,3)

// function Div(V1 ,V2){
// console.log(V1/V2);
// }
// Div(12,3)

// function Mul(V1 ,V2){
//  console.log(V1*V2);
//  }
//  Mul(12,3)
//  output = 9
//  15
//  4
//  36
// function Add(v1 ,v2){
//     return v1+v2
// }
// let res = Add(12,3)
// let res1 = Add(res,1)
// console.log(res1);
// output = 16

// let arr =[43,4534,5,454,5,4,56]
// let count =0
// for(let a of arr){
//   count +=a
// } console.log(count);
// output = 5101

// splice method
// function Splice(...rest){
//     let count =0
//     for(let a in Splice){
//         count +=a
// }
//      return count
// }
// let newarr= Splice(12,34,45,67,1,5,7,8,6,66,4);
// console.log(newarr);

// function findMax(...nums){
//     let max =0;
//     for (let num of nums){
//      if(num> max){
//         max = num;
//      }
//     }
//     return max;
// }
// let res = findMax(11,22,33);
// console.log(res)
// output = 33

// function findMax(...nums){
//      let max =0;
//      let secoundmax=0;
//      for (let num of nums){
//       if(num > max){
//         secoundmax = max;
//         max = num;
//       }
//       else if (num > secoundmax && num !== max){
//       secoundmax = num
//       }
//      }
//      return secoundmax
//  }
//  let res = findMax(11,22,33,54);
//  console.log(res)
// output = 33

// -1|find the  third(3) largest number

// function findmax(...nums){
//   let largest = 0;
//   let thirdlargest=0;
//   for(let num of nums){
//      if(num >largest){
//       thirdlargest = largest;
//       largest= num;
//      }else if (num > thirdlargest && num !==largest){
//       thirdlargest=num;
//      }
//   } return thirdlargest
// }
// let res = findmax(11,23,43,11,54);
// console.log(res);
//output = 43

//-2 |find the secound minimum numbers
// function Min(...nums){
//   let Min = 20;
//   for(let num of nums){
//     if (num  < Min){
//          Min = num
//     }
//   } return Min
// }
// let res = Min(12,34,56,76,1,21);
// console.log(res);
// output = 1

//-3 |find the average number print
  // function avarage(...nums){
    //let avarage = 0;
    //let largest=0;
  //   for(let num of nums){
  //     if (num >avarage && num >largest){
  //         avarage = largest
  //         largest = num
  //     }
  //   } return avarage
  // }
  // let res = avarage(12,34,56,76,1,21);
  //console.log(res);
  // output = 56
  
   
  // function string(v1,v2){

  //   return v1 + v2;
  //}

  // let res Add(123, 33)
  // console.log(str);

  // let date = new Date()
  // console.log(date.getfullyear);

  // function Cal(v1, v2){
  //   this.sum = v1 + v2;
  //   this.sub = v1 - v2;
  //   this.mul = v1 * v2;
  //   this.div = v1 / v2; 

  //   return v1 + v2
  // }
      
  //    let date = new Cal()
  //    console.log();
    
  
  // function students(name, age, mobileno,email){
  //   this.name =name,
  //   this.firstname = name.split(" ")[0];
  //   this.lastname = name.split(" ")[1];
  //   this.age = age,
  //   this.mobileno = mobileno,
  //   this.email = email
  //   this.canVote = age >= 18?true:false
  // }
  // //  let student = new students("shivani",19,9522456848,"shivanikirar@gamil.com")
  //  let student1 = new students("shivani kirar",19,9522456848,"shivanikirar@gamil.com")
  //  console.log(student1);
   

   //Q1 how have arr of object and in each object you have some keys ,
   //you have to creat a function which takes array
     
    
     
     



   //Q2 in same array create a program which convert the name of object im upper case if age is >18

    // let arr =[
    //   {name:"shivani",age:19},
    //   {name:"rubi",age:17},
    //   {name:"suhani",age:14},
    //   {name:"shiv",age:20},
    // ];
    //   for(const obj of arr){
    //     if(obj.age>18){
    //       obj.name=obj.name.toUpperCase();
    //     }
    //   }
    //   console.log(arr);
      
   


   