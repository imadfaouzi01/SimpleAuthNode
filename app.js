const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userRoutes = require("./Routes/usersRoutes");
const authroutes = require("./Routes/authRoutes");
//------------------------------------
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/auth", authroutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello to our page !!",
    cookies: req.cookies,
  });
});
app.get('/tmp', (q, s)=> {
     s.send('const token = jwt.sign({id: user.id,name: user.name,role: user.role,},process.env.SECRET_KEY,{ expiresIn: "1h" });')
})
app.use((err, req, res, next) => {
  res.status(400).json({
    status: "fails",
    message: err.message || "something went wrong !",
  });
});
//------------------------------------
const Port = process.env.Port || 80;
app.listen(Port, () => {
  console.log(`Server is Running http://localhost:${Port}`);
});
