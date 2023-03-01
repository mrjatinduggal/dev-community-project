import "./login-left.css";
import Grid from "./grid/Grid";
import TextContent from "./text-content/TextContent";
import { useState } from "react";

function LoginLeft() {
  const [contentChange, setContentChange] = useState("");

  return (
    <div className="section">
      <TextContent check={contentChange} />
      <div className="links">
        <Grid
          on={(i) => {
            setContentChange(i);
          }}
          off={() => {
            setContentChange("");
          }}
          text={[
            "Javascript",
            "Python",
            "Go",
            "Java",
            "PHP",
            "C",
            "MongoDB",
            "Git",
          ]}
        />
        <Grid
          on={(i) => {
            setContentChange(i);
          }}
          off={() => {
            setContentChange("");
          }}
          text={[
            "Kotlin",
            "Swift",
            "R",
            "Ruby",
            "Typescript",
            "Scala",
            "Mongoose",
            "GitHub",
          ]}
        />
        <Grid
          on={(i) => {
            setContentChange(i);
          }}
          off={() => {
            setContentChange("");
          }}
          text={[
            "SQL",
            "HTML",
            "CSS",
            "NoSQL",
            "Rust",
            "React",
            "AWS",
            "jQuery",
          ]}
        />
        <Grid
          on={(i) => {
            setContentChange(i);
          }}
          off={() => {
            setContentChange("");
          }}
          text={[
            "Bootstrap",
            "CommandLine",
            "Node",
            "Express",
            "APIs",
            "EJS",
            "Angular",
            "Julia",
          ]}
        />
      </div>
    </div>
  );
}

export default LoginLeft;
