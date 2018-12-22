console.log("printing all number between -10 and 19");
var counter = -10;

while(counter < 20){
    console.log(counter);
    counter++;
}

console.log("printing all even betwwen 10 and 40");
var counter =10;

while (counter <= 40){
    console.log(counter);
    counter+=2;
}

console.log("printing all even betwwen 300 and 40");
var counter =300;

while (counter <= 333){
    if(counter % 2 !== 0){
        console.log(counter);
    }
    counter+=1;
}

console.log("printing all even betwwen 5 and 3");
var counter =5;

while (counter <= 50){
    if(counter % 5 ===0 && counter % 3=== 0){
        console.log(counter);
    }
    counter+=1;
}