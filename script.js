let marks= 76;

if(marks>=100 || marks<0){
    console.log("invalid marks");
}

else if(marks>=80){
    console.log("the grade is A+");
}

else if(marks>=70){
    console.log("the grade is A");
}

else if(marks>=60){
    console.log("the grade is A-");
}
else if(marks>=50){
    console.log("the grade is B");
}
else if(marks>=40){
    console.log("the grade is C");
}
else if(marks>=33){
    console.log("the grade is D");
}
else{
    console.log("the grade is F");
}

//logical operator

let numb1= 40;
let numb2= 60;
let numb3= 30;

if(numb1>numb2 && numb1>numb3){
    console.log("the maximum number is numb1")
}
else if(numb2>numb1 && numb2>numb3){
    console.log("the maximum number is numb2")
}

else{
    console.log("the maximum number is numb3")
}