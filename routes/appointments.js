const express = require("express");
const scheduledAppointments = require("../models/appointments");

const router = express.Router();

router.post("/book-appointment", async (req, res) => {
	try {
		const { phone, date, time, email } = req.body;

		const message = await new scheduledAppointments({
			phone,
			preferredDate: date,
			preferredTime: time,
			email,
		});
		await message.save();
		console.log(phone, date, time);
		res.status(200).send({ message: "success", data: message });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
