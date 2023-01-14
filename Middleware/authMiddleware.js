const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


const getUserFromToken = (req, res) => {
     if (!req.cookies.token) 
         return {answer: false}
     try {
       const user = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
       req.user = user;
       return {answer: true, user : user}
     } catch (err) {
          return {answer: false}
     } 
}

const isLoggedIn_Let_Pass = (req, res, next) => {
    const answer = getUserFromToken(req, res);
    if(answer.answer)
         next()
    else
         next(new Error('You\'re not Loggin')) 
};

const isLoggedIn_Dont_Let_Pass = (req, res, next) => {
     const answer = getUserFromToken(req, res);
     if(answer.answer)
          next(new Error('You\'re Alerdy Loggin !!'))
     else
          next() 
 };

module.exports = {
     isLoggedIn_Let_Pass,
     isLoggedIn_Dont_Let_Pass
};
