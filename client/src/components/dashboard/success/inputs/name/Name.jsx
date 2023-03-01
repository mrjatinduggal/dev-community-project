import React, { useEffect, useState } from "react";

function Name(props) {
  const fullNameRegex = "^[A-Za-z ]{1,}[.]{0,1}[A-Za-zs]{0,}$";

  const [nameFilled, setNameFilled] = useState();
  const [nameAlert, setNameAlert] = useState(false);
  const [writtenName, setWrittenName] = useState("");

  function handleNameChange(e) {
    const value = e.target.value;
    if (value.match(fullNameRegex) || value === "") {
      props.nameToMain(value);
      setWrittenName(value);
      setNameAlert(false);
    } else {
      props.nameToMain("");
      setWrittenName(value);
      setNameAlert(true);
    }
  }

  useEffect(() => {
    if (props.updateName === "") {
      setNameFilled(false);
    } else {
      setNameFilled(true);
      setWrittenName(props.updateName);
    }
    setWrittenName(props.updateName);
  }, [props.updateName]);

  useEffect(() => {
    if (props.mainToInput) {
      props.inputToMain(false);
      if (nameAlert === false) {
        if (writtenName === "") {
          setNameFilled(false);
        } else {
          setNameFilled(true);
        }
      }
    }
    // eslint-disable-next-line
  }, [props.mainToInput]);

  return (
    <div>
      {nameFilled && (
        <div>
          {writtenName}

          <i
            className="fa-regular fa-pen-to-square editIcon editIcon"
            onClick={() => {
              setNameFilled(false);
            }}
          ></i>
        </div>
      )}
      {nameFilled === false && (
        <input
          maxLength="22"
          value={writtenName}
          onChange={handleNameChange}
          type="text"
          placeholder={writtenName}
          style={{
            border: nameAlert ? "red solid 2px" : "black solid 1px",
          }}
        />
      )}
    </div>
  );
}

export default Name;
