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

// var corsOptions = {
// 	origin: "https://tweenlab.com",
// 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const corsOptions = {
	origin: "*", // Allow all origins (you can replace with a specific origin)
	methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
	allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
	credentials: true, // Allow cookies/auth headers
};
app.use(cors(corsOptions));
// app.use("/", (req, res) => {
// 	res.send("<h1>Hello,Welcome to TweenLab</>");
// });
app.use("/api", require("./routes/appointments"));
app.use("/message", require("./routes/messages"));

app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/.next"));
}
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port ${port}`));
