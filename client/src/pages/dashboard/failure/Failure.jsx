import { useNavigate } from "react-router-dom";

function Failure() {
  let navigate = useNavigate();

  function goLogin() {
    navigate("/");
  }

  return (
    <div>
      <main className="container">
        <div className="bg-light p-5 rounded">
          <h1 className="text-danger">Oops, please log in first</h1>
          <p className="lead">
            You are trying to access dashboard without being logged in or may be
            your logged in session has expired. Please login first to access
            this page.
          </p>
          <button className="btn btn-lg btn-primary" onClick={goLogin}>
            Login / Register &raquo;
          </button>
        </div>
      </main>
    </div>
  );
}

export default Failure;
