import React, { useEffect, useState } from "react";
import "./textarea.css";

function Textarea(props) {
  const [textFilled, setTextFilled] = useState();

  const [writtenText, setWrittenText] = useState("");

  function handleTextChange(e) {
    const value = e.target.value;

    props.textareaToMain(value);
    setWrittenText(value);
  }

  useEffect(() => {
    if (props.updateTextarea === "") {
      setTextFilled(false);
    } else {
      setTextFilled(true);
      setWrittenText(props.updateTextarea);
    }
    setWrittenText(props.updateTextarea);
  }, [props.updateTextarea]);

  useEffect(() => {
    if (props.mainToInput) {
      if (writtenText === "") {
        setTextFilled(false);
        props.textareaFilled(false);
      } else {
        setTextFilled(true);
        props.textareaFilled(true);
      }
    }
    // eslint-disable-next-line
  }, [props.mainToInput]);

  return (
    <div>
      {textFilled && (
        <div className="parent-textarea">
          <div className="about-me-text">{writtenText}</div>
          <div>
            <i
              className="fa-regular fa-pen-to-square editIcon"
              onClick={() => {
                setTextFilled(false);
                props.textareaFilled(false);
              }}
            ></i>
          </div>
        </div>
      )}
      {textFilled === false && (
        <textarea
          rows="5"
          cols="25"
          maxLength={50}
          value={writtenText}
          onChange={handleTextChange}
          placeholder={writtenText}
        />
      )}
    </div>
  );
}

export default Textarea;
