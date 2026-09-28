// let info = ["aditya", 30, false, 60];

let info = {
    name: "aditya",
    age: 20,
    isMarried: false,
    weight: 60,
};
// get
console.log(info.name);
console.log(info.age);
// change
info.name = "ishan";
console.log(info);
// add new property
info.country = 'nepal';
console.log(info);

// delete 
delete info.weight;
console.log(info);