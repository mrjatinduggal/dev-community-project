import express from "express";
import { User } from "../server.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, value) => {
    if (value) {
      res.send({ message: "Email already registered." });
    } else {
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
          console.log(err);
        } else {
          const user = new User({
            email: email,
            password: hash,
            profilePicture: "",
            name: "",
            contactNumber: "",
            DOB: "",
            gender: "",
            textarea: "",
          });
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({
                message: "Registered Successfully, please login to enter.",
              });
            }
          });
        }
      });
    }
  });
});

export default router;
