const express = require("express");
const router = express.Router();
const {
	getAllContact,
	getContact,
	createContact,
	updateContact,
	deleteContact,
} = require("../controllers/contactController");
const ValidityToken = require("../middleware/validateToken");

router.use(ValidityToken);
router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
