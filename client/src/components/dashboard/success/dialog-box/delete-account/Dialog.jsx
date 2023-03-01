import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

function Dialog(props) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("jwtToken");

  function deleteAccount() {
    if (token) {
      cookies.remove("jwtToken");
      axios
        .post("http://localhost:5000/delete", {
          token: token,
          message: "",
        })
        .then((res) => {
          if (res.data.message === "successfully deleted account") {
            navigate("/");
          }
        });
    } else {
      navigate("/failure");
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-danger">Delete Account</h4>
        <p>This will delete your account and related details forever.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Cancel
        </Button>{" "}
        <Button variant="danger" onClick={deleteAccount}>
          Delete
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}

export default Dialog;
