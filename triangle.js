
//Write a loop that makes seven calls to console.log to output the following
//triangle:
//#
//##
//###
//####
//#####
//######
//#######


// for loop
let result = "#";

for (let counter = 0; counter < 7; counter = counter + 1){
    result = result + "#"
    console.log(result);
   

}


// while loop

let hash = "#";

let count = 0;

while (count < 7) {
    
    console.log(hash);

    hash = hash + "#";

    count = count + 1;
}