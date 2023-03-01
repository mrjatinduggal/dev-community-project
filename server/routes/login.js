import express from "express";
import { User } from "../server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, found) => {
    if (found) {
      if (bcrypt.compareSync(password, found.password)) {
        var token = jwt.sign({ id: found._id }, process.env.SESSION_SECRET, {
          expiresIn: "30m",
        });

        res.send({
          token: token,
          message: "Logged in",
        });
      } else {
        res.send({ message: "Wrong password" });
      }
    } else {
      res.send({ message: "Email is not registered" });
    }
  });
});

export default router;
