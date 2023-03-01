import { useEffect, useState } from "react";
import "./input.css";

function Input(props) {
  const [passwordType, setPasswordType] = useState(false);

  function showPassword(e) {
    e.preventDefault();
    setPasswordType((prev) => !prev);
    props.showPassword();
  }

  useEffect(() => {
    setPasswordType(false);
  }, [props.forceHide]);

  return (
    <div className="form-floating">
      <input
        name={props.name}
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.changeUpdate}
        value={props.value}
        style={{
          borderBottomRightRadius: props.changeStyle,
          borderBottomLeftRadius: props.changeStyle,
          width: "100%",
        }}
      />
      {props.name !== "email" && (
        <div className="input-group-btn">
          {passwordType ? (
            <i onClick={showPassword} className="fa-solid fa-eye eye"></i>
          ) : (
            <i onClick={showPassword} className="fa-solid fa-eye-slash eye"></i>
          )}
        </div>
      )}
      <label forhtml={props.forhtml}>{props.label}</label>
    </div>
  );
}

export default Input;
