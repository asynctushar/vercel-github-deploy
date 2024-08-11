const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Hello world",
	});
});

app.get("/time", async (req, res) => {
	setTimeout(() => {
		return res.json({
			success: true,
			message: "Hello world, I've waited 15 seconds",
		});
	}, 11000);
});

app.listen(port, () => {
	console.log("App started on port ", port);
});
