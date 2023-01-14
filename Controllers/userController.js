const users = require('../Utils/users');

const getAlluser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: users,
  });
};

const getOneuser = (req, res) => {
     const user = users.find(el => el.id == req.params.id);
     res.status(200).json({
       status: "success",
       data: user,
     });
   };

module.exports = {
     getAlluser,
     getOneuser
}