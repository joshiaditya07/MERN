// verify token

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNzkwMDUxNzc1LCJleHAiOjE3OTAwNTM1NzV9.75X8X9L5eBxSsa86rnHcW5eoCnrocd2N6hXPxqCiXqc"

import jwt from 'jsonwebtoken';
let value = jwt.verify(token,"hihello");
console.log(value)