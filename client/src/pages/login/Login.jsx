import React, { useEffect } from "react";
import "./login.css";
import LoginLeft from "../../components/login/login-left/LoginLeft";
import LoginRight from "../../components/login/login-right/LoginRight";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("jwtToken");

    if (token) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="primary">
      <LoginLeft />

      <LoginRight />
    </div>
  );
}

export default Login;
