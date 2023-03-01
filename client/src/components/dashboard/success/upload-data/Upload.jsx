import axios from "axios";

function Upload(props) {
  axios.post("http://localhost:5000/upload", {
    token: props.token,
    information: props.information,
  });
}

export default Upload;
