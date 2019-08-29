import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
<div id='main'>
  <div id='result'>
    <div id='inputContainer'>
    <div id='userInput'>
          Hello
    </div>
      <div id='userResult'>
          this is
      </div>
    </div>
  </div>
     <div id='calculator'>
      <div id='btns'>
        <input className='btn' type='button' id='acItem' value='AC'/>
        <input className='btn' type='button' id='actionBtn' value='.'/>
        <input className='btn' type='button' id='actionBtn' value='/'/>
        <input className='btn' type='button' value='7'/>
        <input className='btn' type='button' value='8'/>
        <input className='btn' type='button' value='9'/>
        <input className='btn' type='button' id='actionBtn' value='x'/>
        <input className='btn' type='button' value='4'/>
        <input className='btn' type='button' value='5'/>
        <input className='btn' type='button' value='6'/>
        <input className='btn' type='button' id='actionBtn' value='-'/>
        <input className='btn' type='button' value='1'/>
        <input className='btn' type='button' value='2'/>
        <input className='btn' type='button' value='3'/>
        <input className='btn' type='button' id='actionBtn'  value='+'/>
        <input className='btn' type='button' id='zeroBtn' value='0'/>
        <input className='btn' type='button' id='actionBtn' value='='/>
      </div>
    </div>
</div>

        )
    }
}

export default Calculator;