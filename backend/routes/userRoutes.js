const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
	res.status(200).json({ message: "Register the user" });
});
router.post("/login", (req, res) => {
	res.status(200).json({ message: "Login the user" });
});
router.get("/current", (req, res) => {
	res.status(200).json({ message: "Current user information" });
});

module.exports = router;
