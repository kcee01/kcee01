
// making 1 to 100 numbers
//displaying those that are divisible by 3 as Fizz and divisible by 5 as Buzz
// display the those both divisible by 3 and 5 as FizzBuzz
//display those that are not divisible by 3 nor 5 as counting numbers

// using for loop
for(counter = 1;counter<=100;counter= counter + 1){

   
    if ( counter % 3 === 0 && counter % 5=== 0){
    
   console.log("FizzBuzz");
}
  
  
  
  else if (counter % 5=== 0 ){
    
    console.log("Buzz");
}
  
   else if (counter % 3===0 ){
    
   console.log("Fizz");
} 
  
  else{
    
    console.log(counter);
  }
}




// using while loop

let counter = 0;

while( counter < 100)

{

  counter = counter + 1;
   
    if ( counter % 3 === 0 && counter % 5=== 0){
    
   console.log("FizzBuzz");
}
  
  
  
  else if (counter % 5=== 0 ){
    
    console.log("Buzz");
}
  
   else if (counter % 3===0 ){
    
   console.log("Fizz");
} 
  
  else{
    
    console.log(counter);
  }


  
  
}




//for loop

let result =" # # # #";

for(let count = 0; count < 4 ; count = count + 1){
    
  console.log(" # # # #");
  
  
  if(result  ===  result ){
    
    console.log("# # # # ")
    
  }
}


// while loop



let result =" # # # #";

let count = 0;

while(count < 4){

 console.log(result);
  
  count = count + 1;
  
  
   if (result === result){
     
      console.log("# # # # ");
   }
  }
  
  //corrected for loop
  

  let size = 8;

  let chess="";
  
  for(let row = 0; row < size; row = row + 1){
      
  for(let col = 0; col < size; col = col + 1){
    
    if((row + col) % 2 ===  0 ){
      
     chess = chess + " ";
      
    }else{
      
      chess = chess + "#";
    }
    
    
  }
    
   chess = chess + "\n";
    
  }
   console.log(chess);
  //corrected while loop

  
let result = 8;
let chess = " ";

let row = 0;




while(row < result ){
  
  let col = 0;
  
  while(col < result){
  if((row + col) % 2 === 0 ){
    
    chess = chess + " ";
    
    
  }else{
    chess = chess + "#";
  }
 col = col + 1;
    
}

   chess = chess + "\n"
   
   row = row + 1;
}
console.log(chess);
