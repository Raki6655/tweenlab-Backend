const express = require("express");

const Message = require("../models/messages");

const router = express.Router();

router.post("/send-message", async (req, res) => {
	try {
		const { email } = req.body;
		if (email) {
			const data = await new Message({ email, message: "" });
			await data.save();
			console.log(email);
			res.status(200).send({ success: true, ok: true });
		} else {
			console.log("no email");
		}
	} catch (err) {
		console.log(err);
		res.json({ message: "Something went wrong", ok: false });
	}
});
module.exports = router;
