import "./column.css";

function Column(props) {
//   function mouseEnter() {
//     return console.log("on");
//   }

//   function mouseLeave() {
//     return console.log("off");
//   }
  return (
    <div
      onMouseEnter={props.on}
      onMouseLeave={props.off}
      className="col-sm m-3 grid-col"
    >
      {props.text}
    </div>
  );
}

export default Column;
