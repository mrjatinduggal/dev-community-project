import express from "express";
import { User } from "../server.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", (req, res) => {
  const { profilePicture, name, contactNumber, DOB, gender, textarea } =
    req.body.information;

  var decoded = jwt.verify(req.body.token, process.env.SESSION_SECRET).id;
  User.findByIdAndUpdate(
    decoded,
    {
      profilePicture: profilePicture,
      name: name,
      contactNumber: contactNumber,
      DOB: DOB,
      gender: gender,
      textarea: textarea,
    },
    (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "uploaded successfully" });
      }
    }
  );
});

router.post("/update", (req, res) => {
  var decoded = jwt.verify(req.body.token, process.env.SESSION_SECRET).id;
  User.findById(decoded, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        profilePicture: found.profilePicture,
        name: found.name,
        email: found.email,
        contactNumber: found.contactNumber,
        DOB: found.DOB,
        gender: found.gender,
        textarea: found.textarea,
      });
    }
  });
});

export default router;
