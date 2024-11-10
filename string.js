//let msg ="i love to learn js";
//let words =msg.split()
//console.log(msg.length);
//OUTPUT = 18

//console.log(words);
//OUTPUT = [ 'i love to learn js' ]

//let str="hello world!";
//let str="raveena shivani";
//let words=str.split(" ")
//console.log("hello "+ words[1]); 
//OUTPUT = hello shivani

//let out=str.split("0")
//console.log(out); 
//OUTPUT = [ 'raveena shivani' ]

//console.log(str.length); 
//method

//let str="raneeva kirar";
//let words=str.split(" ");
//words.splice(1,0,"shivani")
//console.log(words)
//OUTPUT = ['raneeva', 'shivani', 'kirar']

//str=words.join(" ")
//console.log(words[0] +" " + words[1] +" Sakshi " + words[2]);
//OUTPUT = raneeva shivani Sakshi kirar

//console.log(str)
let str="raneeva kirar";
for(let s of str){
let words=str.split(" ");
//words[0]=words[0][0].toUpperCase() + words[0].slice[1].toLowerCase();
//words[1]=words[1][0].toUpperCase() + words[0].slice[1].toLowerCase();
words[0] = words[0][0].toLowerCase() + words[1].slice[1].toUpperCase();
    

console.log(words[0].toUpperCase)}
//console.log(words[0].toUpperCase()+" "+words[1].toLowerCase());
//OUTPUT = RANEEVA kirar
//console.log(str(1).toLowerCase);
