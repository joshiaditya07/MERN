import jwt from 'jsonwebtoken';

let details = {
    id :1234,
};

let secretKey = "hihello";

let expiryInfo = {
    expiresIn: "30m"
};
let token = jwt.sign(details,secretKey,expiryInfo)
console.log(token)