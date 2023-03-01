import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../server.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/", (req, res) => {
  const { token } = req.body;
  var decoded = jwt.verify(token, process.env.SESSION_SECRET).id;
  User.findById({ _id: decoded }, (err, found) => {
    // console.log("auth");
    if (err) {
      console.log(err);
    } else {
      res.send({ message: "Success", profilePicture: found.profilePicture });
    }
  });
});

export default router;
