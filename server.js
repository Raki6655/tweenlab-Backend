const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { urlencoded } = require("express");
require("dotenv").config();

const app = express();
mongoose
	.connect(
		"mongodb+srv://alannpn75:UVo17URJQjRCndpp@cluster0.dii7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then((res) => console.log("Database Connected"));
app.use(urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));
app.use(
	cors({
		origin: "*",
	})
);
app.use("/api", require("./routes/appointments"));
app.use("/message", require("./routes/messages"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/.next"));
}
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port ${port}`));
