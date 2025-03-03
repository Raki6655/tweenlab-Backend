const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduledAppointments = new Schema(
	{
		phone: {
			type: Number,
			required: true,
		},
		preferredDate: {
			type: String,
			required: false,
		},
		preferredTime: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Appointments", scheduledAppointments);
