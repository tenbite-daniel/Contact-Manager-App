const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add the contact name"],
		},
		email: {
			type: String,
			required: [true, "Please add the contact email"],
		},
		phone: {
			type: String,
			required: [true, "Please add the contact phone number"],
		},
	},
	{
		timestamps: true,
	}
);

moodule.exports = mongoose.model("Contact", contactSchema);
