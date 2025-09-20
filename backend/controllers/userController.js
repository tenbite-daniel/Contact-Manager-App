const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
// @desc Register a user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Register the user" });
});

// @desc Login user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Login the user" });
});

// @desc Current user information
// @route GET /api/user/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
