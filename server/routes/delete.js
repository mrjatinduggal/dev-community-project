import express from "express";
import { User } from "../server.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  var decoded = jwt.verify(req.body.token, process.env.SESSION_SECRET).id;
  if (req.body.message === "") {
    User.findByIdAndRemove(decoded, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "successfully deleted account" });
      }
    });
  } else {
    User.findByIdAndUpdate(decoded, { profilePicture: "" }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "successfully deleted" });
      }
    });
  }
});

export default router;
