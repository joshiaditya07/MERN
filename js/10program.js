// let age = 20
// const isAdult = (age) =>{
//     if (age >0 && age < 18){
//         return "Child"
//     }
//     else if (age >=18 && age <= 60){
//         return "Adult"
//     }
//     else {
//         return "Old"
//     }
// }
// console.log(isAdult(age))


// const isWeekDay = (day) =>{
//     if (day ==="Saturday" || day ==="Sunday"){
//         return "Weekend"
//     }
//     else{
//         return "Weekday"
//     }
// }
// console.log(isWeekDay("Monday"))


// const checkAge = (age, gender) => {
//     if (age < 18) {
//         return "You cannot enter the club"
//     }
//     else if (age > 18 && gender === "female") {
//         return " you can enter the club for free"
//     }
//     else if ( age > 18 && gender === "male" ){
//         return " you can enter the club but you have to pay 1000"
//     }
//     else{
//         return "Invalid crediantials"
//     }
// }
// console.log(checkAge(20, "male"))

const displayNameandAge = (name, age) =>{
    return `Name: ${name}, Age: ${age}`;
}
console.log(displayNameandAge("Aditya", 25));