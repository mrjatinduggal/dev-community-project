import "./dashboard.css";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import Success from "../../components/dashboard/success/Success";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const cookies = new Cookies();
  const token = cookies.get("jwtToken");
  let navigate = useNavigate();

  const [temp, setTemp] = useState({});

  useEffect(() => {
    token
      ? axios
          .post("http://localhost:5000/auth", {
            token: token,
          })
          .then((res) => {
            if (res.data.message === "Success") {
              setTemp(true);
            }
          })
      : navigate("/failure");
    // eslint-disable-next-line
  }, []);

  return <div>{temp && <Success />}</div>;
}

export default Dashboard;
