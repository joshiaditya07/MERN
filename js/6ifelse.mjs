/*
    age 
        age >=18 => can vote
        else => he can not vote
*/

let age = 20;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}  


/*

gender 
   gender == "male" => he
   female => she
   other => "they"
   else => "invalid gender"

*/


let gender = "male";
if (gender === "male") {
    console.log("he");
} else if (gender === "female") {
    console.log("she");
} else if (gender === "other") {
    console.log("they");
} else {
    console.log("invalid gender");
}

