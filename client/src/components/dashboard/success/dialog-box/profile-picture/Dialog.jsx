import "./dialog.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Avatar from "react-avatar-edit";

function ProfilePictureDialog(props) {
  const [imgCrop, setImgCrop] = useState("");

  function onCrop(v) {
    setImgCrop(v);
  }

  function onClose() {
    setImgCrop(null);
  }

  function displayImageAndClose() {
    props.switchDialog();
    props.showImage(imgCrop);
  }

  function removeAndClose() {
    props.switchDialog();
    props.delete();
    setImgCrop("");
  }


  return (
    <div>
      <Modal show={props.dialog} onHide={props.switchDialog}>
        <Modal.Header>
          <Modal.Title>Upload Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Avatar
            width={460}
            height={300}
            src={null}
            onCrop={onCrop}
            onClose={onClose}
            exportSize={150}
            imageWidth={300}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="remove-btn"
            variant="secondary"
            onClick={removeAndClose}
          >
            Remove image
          </Button>
          <Button
            className="close-btn"
            variant="secondary"
            onClick={props.switchDialog}
          >
            Close
          </Button>
          <Button
            className="save-btn"
            variant="primary"
            onClick={displayImageAndClose}
          >
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProfilePictureDialog;
