import { useState } from "react";
import Input from "./input/Input";
import "./login-right.css";
import logo from "../../../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function LoginRight() {
  let navigate = useNavigate();

  const d = new Date();
  const year = d.getFullYear();

  const emailValidation = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  var passwordValidation = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})"
  );

  const cookies = new Cookies();

  const [newUser, setNewUser] = useState(false);
  const [alert, setAlert] = useState("");
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showHideConfirmPassword, setShowHideConfirmPassword] = useState(false);
  const [oneMore, setOneMore] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function someone(i) {
    i.preventDefault();
    const buttonText = i.target.textContent;
    const { email, password, confirmPassword } = user;

    if (buttonText === "Register") {
      if (email && email.match(emailValidation)) {
        if (password && password.match(passwordValidation)) {
          if (password === confirmPassword) {
            axios.post("http://localhost:5000/register", user).then((res) => {
              const mess = res.data.message;
              if (mess === "Registered Successfully, please login to enter.") {
                setAlert(mess);
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              } else {
                setAlert(mess);
              }
            });
          } else {
            setAlert("Password did not match");
          }
        } else {
          setAlert("Password is not strong enough");
        }
      } else {
        setAlert("Please enter a valid email address");
      }
    } else if (buttonText === "Log in") {
      axios.post("http://localhost:5000/login", user).then((res) => {
        const mess = res.data.message;
        if (mess === "Logged in") {
          cookies.set("jwtToken", res.data.token, {
            path: "/",
            maxAge: 1800,
            // httpOnly: true,
          });

          navigate("/dashboard");
        } else {
          setAlert(mess);
        }
      });
    }
  }

  function showPassword() {
    setShowHidePassword((prev) => !prev);
  }

  function showConfirmPassword() {
    setShowHideConfirmPassword((prev) => !prev);
  }

  function handleRegisterClick(e) {
    setNewUser((prev) => !prev);
    setAlert("");
    setUser({
      email: "",
      password: "",
      confirmPassword: "",
    });
    if (showHidePassword || showHideConfirmPassword) {
      setOneMore(true);
      setShowHidePassword(false);
      setShowHideConfirmPassword(false);
    }
  }

  function handleChange(u) {
    const { name, value } = u.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div id="body" className="text-center">
      <main id="sub-body" className="form-signin w-100 m-auto">
        <form>
          <img className="mb-4 logo" src={logo} alt="" width="90" height="90" />
          <h1 className="heading h3 mb-1 fw-normal">Welcome !</h1>

          <div
            className={
              alert === "Registered Successfully, please login to enter."
                ? "text-primary alertText"
                : "alertText"
            }
          >
            {alert}
          </div>

          <Input
            name={"email"}
            type={"email"}
            id={"floatingInput"}
            placeholder={"name@example.com"}
            forhtml={"floatingInput"}
            label={"Email address"}
            changeUpdate={handleChange}
            value={user.email}
          />

          <Input
            name={"password"}
            type={showHidePassword ? "text" : "password"}
            id={"floatingPassword"}
            placeholder={"Password"}
            forhtml={"floatingPassword"}
            label={"Password"}
            changeUpdate={handleChange}
            changeStyle={newUser ? 0 : null}
            showPassword={showPassword}
            value={user.password}
            forceHide={oneMore}
          />

          {newUser && (
            <Input
              name={"confirmPassword"}
              type={showHideConfirmPassword ? "text" : "password"}
              id={"floatingConfirmPassword"}
              placeholder={"Confirm password"}
              forhtml={"floatingPassword"}
              label={"Confirm password"}
              changeUpdate={handleChange}
              showPassword={showConfirmPassword}
              value={user.confirmPassword}
              forceHide={oneMore}
            />
          )}

          <div className="mb-3 mt-3">
            {newUser ? "Already have an account ?" : "New user ?"}
            <span
              onClick={handleRegisterClick}
              className="text-primary register"
            >
              {newUser ? " Login" : " Register here"}
            </span>
          </div>
          <button onClick={someone} className="try" type="submit">
            {newUser ? "Register" : "Log in"}
          </button>
          <p className=" copy mt-4 text-muted">&copy; {year} Dev-Community</p>
        </form>
      </main>
    </div>
  );
}

export default LoginRight;
