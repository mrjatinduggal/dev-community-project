import { useState, useEffect } from "react";
import React from "react";
import "./gender.css";

function Gender(props) {
  const [toggleMale, setToggleMale] = useState(false);
  const [toggleFemale, setToggleFemale] = useState(false);

  function clickMale() {
    setToggleMale((prev) => {
      return !prev;
    });
    setToggleFemale(false);
    if (toggleMale) {
      props.genderToMain("");
    } else {
      props.genderToMain("Male");
    }
  }

  function clickFemale() {
    setToggleFemale((prev) => {
      return !prev;
    });
    setToggleMale(false);
    if (toggleFemale) {
      props.genderToMain("");
    } else {
      props.genderToMain("Female");
    }
  }

  useEffect(() => {
    if (props.updateMale === "Male") {
      setToggleMale(true);
    }
    if (props.updateFemale === "Female") {
      setToggleFemale(true);
    }
    // eslint-disable-next-line
  }, [props.updateMale]);

  return (
    <div>
      <div className="male" onClick={clickMale}>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={toggleMale}
          readOnly
        />
        &nbsp; Male
      </div>

      <div className="female" onClick={clickFemale}>
        <input
          id="female"
          type="radio"
          name="gender"
          value="female"
          checked={toggleFemale}
          readOnly
        />
        &nbsp; Female
      </div>
    </div>
  );
}

export default Gender;
