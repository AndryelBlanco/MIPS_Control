import React from 'react';
import './outputSignals.css';

const OutputSignals = ({instruction}) => {

  const [signals, setSignals] = React.useState([
    {title: 'RegDst', value: ''},
    {title: 'Branch', value: ''},
    {title: 'MemRead', value: ''},
    {title: 'MemToReg', value: ''},
    {title: 'ALUOp', value: ''},
    {title: 'MemWrite', value: ''},
    {title: 'ALUSrc', value: ''},
    {title: 'RegWrite', value: ''}
  ]);

  React.useEffect(() => {
    switch(instruction){
      case 1:
        setSignals([ 
          {title: 'RegDst', value: '1'},
          {title: 'Branch', value: '0'},
          {title: 'MemRead', value: '0'},
          {title: 'MemToReg', value: '0'},
          {title: 'ALUOp', value: '01'},
          {title: 'MemWrite', value: '0'},
          {title: 'ALUSrc', value: '0'},
          {title: 'RegWrite', value: '1'}
        ]);
        break;
      case 2:
        setSignals([ 
          {title: 'RegDst', value: '0'},
          {title: 'Branch', value: '0'},
          {title: 'MemRead', value: '1'},
          {title: 'MemToReg', value: '1'},
          {title: 'ALUOp', value: '0'},
          {title: 'MemWrite', value: '0'},
          {title: 'ALUSrc', value: '1'},
          {title: 'RegWrite', value: '1'}
        ]);
        break;
      case 3: 
        setSignals([ 
          {title: 'RegDst', value: 'x'},
          {title: 'Branch', value: '0'},
          {title: 'MemRead', value: '0'},
          {title: 'MemToReg', value: 'x'},
          {title: 'ALUOp', value: '0'},
          {title: 'MemWrite', value: '1'},
          {title: 'ALUSrc', value: '1'},
          {title: 'RegWrite', value: '0'}
        ]);
        break;
      case 4: 
        setSignals([ 
          {title: 'RegDst', value: 'x'},
          {title: 'Branch', value: '1'},
          {title: 'MemRead', value: '0'},
          {title: 'MemToReg', value: 'x'},
          {title: 'ALUOp', value: '0'},
          {title: 'MemWrite', value: '0'},
          {title: 'ALUSrc', value: '0'},
          {title: 'RegWrite', value: '0'}
        ]);
        break;
      default: 
        setSignals([ 
          {title: 'RegDst', value: '0'},
          {title: 'Branch', value: '0'},
          {title: 'MemRead', value: '0'},
          {title: 'MemToReg', value: '0'},
          {title: 'ALUOp', value: '0'},
          {title: 'MemWrite', value: '0'},
          {title: 'ALUSrc', value: '0'},
          {title: 'RegWrite', value: '0'}
        ]);
    }
  }, [instruction])

  function SignalComponent(element){
    return(
      <div className='signal-container'>
        <div className={element.value == '1' || element.value == '01' ? 'circle-signal green' : element.value == 'x' ? 'circle-signal yellow' :'circle-signal red'}>
          <h4 className='element-value'>
            {element.value}
          </h4>
        </div>
        <span>{element.title}</span>
      </div>
    )
  }

  return (
    <div className='output-signals-content'>
      <h3>OUTPUT SIGNALS</h3>
      <div className='row'>
        {signals.map((element) => {
          return(
            <>
              {SignalComponent(element)}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default OutputSignals