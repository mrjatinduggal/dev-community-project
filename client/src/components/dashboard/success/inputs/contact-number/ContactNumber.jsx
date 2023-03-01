import React, { useEffect, useState } from "react";

function ContactNumber(props) {
  const numberRegex = "^[0-9]*$";

  const [numberFilled, setNumberFilled] = useState();
  const [numberAlert, setNumberAlert] = useState(false);
  const [writtenNumber, setWrittenNumber] = useState();

  function handleNumberChange(e) {
    const value = e.target.value;
    if (value.match(numberRegex) || value === "") {
      props.numberToMain(value);
      setWrittenNumber(value);
      setNumberAlert(false);
    } else {
      props.numberToMain("");
      setWrittenNumber(value);
      setNumberAlert(true);
    }
  }

  useEffect(() => {
    if (props.updateNumber === "") {
      setNumberFilled(false);
    } else {
      setNumberFilled(true);
      setWrittenNumber(props.updateNumber);
    }
    setWrittenNumber(props.updateNumber);
  }, [props.updateNumber]);

  useEffect(() => {
    if (props.mainToInput) {
      if (numberAlert === false) {
        if (writtenNumber === "" || writtenNumber === undefined) {
          setNumberFilled(false);
        } else {
          setNumberFilled(true);
        }
      }
    }
    // eslint-disable-next-line
  }, [props.mainToInput]);

  return (
    <div>
      {numberFilled && (
        <div>
          {writtenNumber}
          <i
            className="fa-regular fa-pen-to-square editIcon"
            onClick={() => {
              setNumberFilled(false);
            }}
          ></i>
        </div>
      )}
      {numberFilled === false && (
        <input
          value={writtenNumber}
          onChange={handleNumberChange}
          type="text"
          placeholder={writtenNumber}
          style={{
            border: numberAlert ? "red solid 2px" : "black solid 1px",
          }}
        />
      )}
    </div>
  );
}

export default ContactNumber;
