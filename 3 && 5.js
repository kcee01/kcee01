
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