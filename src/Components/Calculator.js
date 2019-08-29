import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
<div id='main'>
  <div id='result'></div>
    <div id='calculator'>
      <div id='btns'>
        <input class='btn' type='button' id='acItem' value='AC'/>
        <input class='btn' type='button' value='.'/>
        <input class='btn' type='button' value='/'/>
        <input class='btn' type='button' value='7'/>
        <input class='btn' type='button' value='8'/>
        <input class='btn' type='button' value='9'/>
        <input class='btn' type='button' value='x'/>
        <input class='btn' type='button' value='4'/>
        <input class='btn' type='button' value='5'/>
        <input class='btn' type='button' value='6'/>
        <input class='btn' type='button' value='-'/>
        <input class='btn' type='button' value='1'/>
        <input class='btn' type='button' value='2'/>
        <input class='btn' type='button' value='3'/>
        <input class='btn' type='button'  value='+'/>
        <input class='btn' type='button' id='zeroBtn' value='0'/>
        <input class='btn' type='button' id='equalBtn' value='='/>
      </div>
    </div>
</div>

        )
    }
}

export default Calculator;