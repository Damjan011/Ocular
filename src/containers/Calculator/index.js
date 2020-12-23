import React, {useRef} from 'react';

const Calculator = () => {
  const jasamfunkcija = (prim) => {
    return prim/2;
  }
  const damjan = useRef(null);

  const onButtonClick = () => {
    var b = damjan.current.value;
    console.log(b);
  }
  return (
    <div className="ui-center-content" style={{width: '300px'}}>
      <input ref={damjan} type="number"></input>
      <button onClick={onButtonClick}>ejjjjj</button>
    </div>
  )
}

export default Calculator;