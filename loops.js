//ES6= of(print the numbers) or in(print index numbers)
// arr=[12,22,23,33,34,44,45,56];
//for(let num of arr){
//    if(num % 2 ===0){
//        console.log(num*num);
//    } else{
//        console.log("not zero ="+ num*num*num);
//    }
//  }    OUTPUT = 144
//                484
//                not zero =12167
//                not zero =35937
//                1156
//                1936
//                not zero =91125
//                3136

//arr=["rubi","dhakad","sakshi"];
//   for(let index in arr){
//   let word = arr[index];
//   if(index% 2===0){
//     console.log(word.toUpperCase() );
//   }  else{
//     console.log(word.toLowerCase());
//   }
// }    
// OUTPUT =RUBI
//         dhakad
//         SAKSHI

// let arr=["rubi","dhakad","sakshi"];
//  for(let word of arr){
//   i= arr.indexOf(word);
//   if(i % 2===0){
//       console.log(word.toUpperCase() );
//    }  else{
//       console.log(word.toLowerCase());
//    }
//  }   
//   OUTPUT = RUBI
//            dhakad
//            SAKSHI
       
//     let arr=["riya yadav","siya kirar","sakshi dhakad","raha raja"];
//    for(let name of arr)
//    { let words=name.split(" ");
//     console.log(words[0].toUpperCase() +" "+words[1].toLowerCase());
//    } 
//    OUTPUT = RIYA yadav
//             SIYA kirar
//             SAKSHI dhakad
//             RAHA raja

//   let arr=["riya yadav","siya kirar","sakshi dhakad","raha raja"];
//   for(let index in arr){
//   //pick
//   let name= arr[index];
//  //break
//  let words=name.split(" ");
//  //transform
//  words[0]= words[0].toUpperCase()
//  words[1]= words[1].toLowerCase()
//  //join
//  name= words.join("  ")
//  //update
//  arr[index]= name
//   }
//  console.log(arr)
//  OUTPUT = [ 'RIYA  yadav', 'SIYA  kirar', 'SAKSHI  dhakad', 'RAHA  raja' ]

       
// let arr=["riya sharma","ruhi yadav","kiran kirar","sakshi dhakad"];
//   for(let index in arr){
//    //pick
//    let name = arr[index]
//    //break
//      let words = name.split(" ");
//   //transform
//     words[0] = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase();
//     words[1] = words[1][0].toUpperCase() + words[1].slice(1).toLowerCase();
//     //join
//     name= words.join(" ")
//     //update
//     arr[index]=name
//    }
//      console.log(arr);
//   OUTPUT [ 'Riya Sharma', 'Ruhi Yadav', 'Kiran Kirar', 'Sakshi Dhakad' ]

//  let url="www.techsimplus.com"
// internal url
// iterat
// const ages =[23,12,45,31,10,27,9];
//   let voteCount=0;
//   let notvoteCount=0;
// for(let age  of ages){
// if(age >=18){
//    voteCount +=1;
// } else {
//    notvoteCount +=1;
// }
// } console.log("large number = " +voteCount + " ," +"small number ="+ notvoteCount);
//   output large number 4 small number3

            // find maximum number
//  const ages=[23,12,45,31,10,9,76];
//   let maxNum=0;
//   for(let num of ages){  
//    if(num > maxNum){
//       maxNum=num
//    }
//   }   console.log(maxNum );
//     //OUTPUT  = 76  

// 1 find minimum Number
   /* let arr=[22,33,44,55,11,71,1,2,4,6]
    let minValue=Math.min(...arr);
    console.log("minValue element is " +minValue);
    */
// 2 find sum of all the number of Array
  /* let arr=[22,33,44,55,66];
   let sum=0;
   for(let i=0; i< arr.length;i++){
       sum += arr[i];
   } */
    // console.log("sum is "+ sum)
// 3 find the percentage of the marks
    /* let arr=[22,33,44,55,66];
     let sum=0;
     for(let i=0; i< arr.length;i++){
         sum += arr[i] % 5;
     } 
console.log("sum is "+ sum)
*/
//console.log("sum is "+ sum % 5 ==sum)

  // 4 check is student passed or failed
 // const name=[22,55,88,86,90];
 // let marks=70;
 // for(let n of name){
 //    if (marks<=n){
 //        console.log("passed");
 //    } else{
 //        console.log("failed"); 
 //    }
 //  }
  
  // 5 array of String,  print the upper case of word, 
  // where word length  is less else lowercase 
  // 6 you have a given the 
  // 7 find the second largest number
