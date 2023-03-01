import express from "express";
import cors from "cors";
import { mongoose } from "mongoose";
import loginRoute from "./routes/login.js";
import registerRoute from "./routes/register.js";
import authRoute from "./routes/auth.js";
import uploadRoute from "./routes/upload.js";
import deleteRoute from "./routes/delete.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/devCommunityUsersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  profilePicture: String,
  name: String,
  contactNumber: String,
  DOB: String,
  gender: String,
  textarea: String,
});

const User = mongoose.model("User", userSchema);

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/auth", authRoute);
app.use("/upload", uploadRoute);
app.use("/delete", deleteRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

export { User };
