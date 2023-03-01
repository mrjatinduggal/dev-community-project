import React from "react";
import { useEffect } from "react";

function ProfilePicture(props) {
  useEffect(() => {
    if (props.mainToInput) {
      props.inputToMain(false, {
        profilePicture: props.userImage === "" ? props.sample : props.userImage,
      });
    }
    // eslint-disable-next-line
  }, [props.mainToInput]);

  return (
    <div className="user" onClick={props.switchDialog}>
      <img
        className="sampleImg"
        title="Click to upload image"
        alt="pic"
        src={
          props.userImage === "" || props.userImage === undefined
            ? props.sample
            : props.userImage
        }
      />
    </div>
  );
}

export default ProfilePicture;
