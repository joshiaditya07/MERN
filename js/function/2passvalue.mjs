let sum = (a, b, c, d) => {
    console.log(a,b,c,d);
};

sum(1,2,3);


// default value
let val = (a = 11, b = 22, c = 33, d = 44) => {
    console.log(a,b,c,d);
}
val(1);
