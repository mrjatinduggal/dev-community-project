import React, { useState, useEffect } from "react";

function DOB(props) {
  const [writtenDOB, setWrittenDOB] = useState("");

  function handleDOBChange(e) {
    const value = e.target.value;
    setWrittenDOB(value);
    props.DOBToMain(value);
  }

  useEffect(() => {
    if (props.updateDOB !== "") {
      setWrittenDOB(props.updateDOB);
    }
  }, [props.updateDOB]);

  return (
    <div>
      <input value={writtenDOB} onChange={handleDOBChange} type="date" />
    </div>
  );
}

export default DOB;
