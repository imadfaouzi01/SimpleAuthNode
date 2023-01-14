const users = require("../Utils/users");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const signin = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((el) => el.email == email && el.password == password);

  if (!user)
    return res.status(400).json({
      status: "fail",
      message: "info incorect !!",
    });

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      role: user.role,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(Date.now() + 60 * 60 * 1000),
  });

  res.status(200).json({
    status: "success",
    message: "Logged in successfully",
  });
};

const logout = (req, res) => {

  res.cookie("token", '', {
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
};

module.exports = { signin, logout };
