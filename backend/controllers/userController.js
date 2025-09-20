const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// @desc Register a user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		res.status(400);
		throw new Error("All fields are mandatory");
	}
	const userAvaliable = await User.findOne({ email });
	if (userAvaliable) {
		res.status(400);
		throw new Error("User already registered!");
	}

	// Has password
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({
		username,
		email,
		password: hashedPassword,
	});
	console.log(`User created : ${user}`);
	if (user) {
		res.status(201).json({ _id: user.id, email: user.email });
	} else {
		res.status(400);
		throw new Error("User data is not valid");
	}
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
