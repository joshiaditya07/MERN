import bcrypt from 'bcrypt';

// let password = "abc"

// let hashedPassword = await bcrypt.hash(password, 10);
// console.log(hashedPassword)


let hashedPassword = "$2b$10$QOfFOUiP.YP6913zJS77x.R1rSghj3m8wn6XPZhDtKQcP2JXV7pN."
let loginPassword = "abc"

let isValidPassword = await bcrypt.compareSync(loginPassword, hashedPassword)
console.log(isValidPassword)