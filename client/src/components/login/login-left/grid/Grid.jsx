import Column from "./column/Column";
import "./grid.css";

function Grid(props) {
  const [one, two, three, four, five, six, seven, eight] = props.text;

  function some(i){
    const text = i.target.textContent
    return props.on(text);
  }

  function go(){
    return props.off();
  }

  return (
    <div className="row grid-row">
      <Column on={some} off={go} text={one} />
      <Column on={some} off={go} text={two} />
      <Column on={some} off={go} text={three} />
      <Column on={some} off={go} text={four} />
      <Column on={some} off={go} text={five} />
      <Column on={some} off={go} text={six} />
      <Column on={some} off={go} text={seven} />
      <Column on={some} off={go} text={eight} />
    </div>
  );
}

export default Grid;
