//user routes with authentication
const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");

//login routes
router.post("/login", loginUser);
//signup routes
router.post("/signup", signupUser);
module.exports = router;
