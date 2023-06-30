//Write a program that creates a string that represents an 8×8 grid, using newline
//characters to separate lines. At each position of the grid there is either a space
//or a "#" character. The characters should form a chessboard.
//Passing this string to console.log should show something like this:
///# # # #
//# # # #
//# # # #
//# # # #
//# # # #
//# # # #
//# # # #
//# # # #
//When you have a program that generates this pattern, define a binding size
//= 8 and change the program so that it works for any size, outputting a grid
//of the given width and height. 
  
  
  
  
  
  
  
  
  
  //for loop
  

  let size = 8;

  let chess =" ";
  
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




  // while loop

  
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
