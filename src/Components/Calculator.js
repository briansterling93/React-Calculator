import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleAC = this.handleAC.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      userInput: '',
      result: '0'
    };
  }

  handleAC() {
    this.setState({
      userInput: '',
      result: '0'
    })
  }

  handleClick(e) {
    if(e.target.value === '='){
      this.calculate()
    }
    else this.setState({
      userInput: this.state.userInput + e.target.value,
    })
  }

  calculate() {
    this.setState({
      result: eval(this.state.userInput)
    })
  }
 
    render() {
        return (
<div id='main'>
  <h1 id='title'>React Calculator</h1>
  <div id='result'>
    <div id='inputContainer'>
    <div id='userInput'>
          {this.state.userInput}
    </div>
      <div id='userResult'>
          {this.state.result}
      </div>
    </div>
  </div>
     <div id='calculator'>
      <div id='btns'>
        <input className='btn' type='button' id='acItem' value='AC' onClick={this.handleAC}/>
        <input className='btn' type='button' id='actionBtn' value='.' onClick={this.handleClick}/>
        <input className='btn' type='button' id='actionBtn' value='/' onClick={this.handleClick}/>
        <input className='btn' type='button' value='7' onClick={this.handleClick}/>
        <input className='btn' name='8' type='button' value='8' onClick={this.handleClick} />
        <input className='btn' type='button' value='9' onClick={this.handleClick}/>
        <input className='btn' type='button' id='actionBtn' value='*' onClick={this.handleClick}/>
        <input className='btn' type='button' value='4' onClick={this.handleClick}/>
        <input className='btn' type='button' value='5' onClick={this.handleClick}/>
        <input className='btn' type='button' value='6' onClick={this.handleClick}/>
        <input className='btn' type='button' id='actionBtn' value='-' onClick={this.handleClick}/>
        <input className='btn' type='button' value='1' onClick={this.handleClick}/>
        <input className='btn' type='button' value='2' onClick={this.handleClick}/>
        <input className='btn' type='button' value='3' onClick={this.handleClick}/>
        <input className='btn' type='button' id='actionBtn'  value='+' onClick={this.handleClick}/>
        <input className='btn' type='button' id='zeroBtn' value='0' onClick={this.handleClick}/>
        <input className='btn' type='button' id='actionBtn' value='=' onClick={this.handleClick}/>
      </div>
    </div>
</div>

        )
    }
}

export default Calculator;