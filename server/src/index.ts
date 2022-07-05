import express from "express";
//@ts-ignore
import helmet from "helmet";
import compression from "compression";
import config from "config";

import categories from "./routes/categories";
import listings from "./routes/listings";
import listing from "./routes/listing";
import users from "./routes/users";
import user from "./routes/user";
import auth from "./routes/auth";
import my from "./routes/my";
import messages from "./routes/messages";
import expoPushTokens from "./routes/expoPushTokens";
import logger from "./routes/logger";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);
app.use("/api/logger", logger);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
	console.log(`Server started on port ${port}...`);
});
