import React, { useState } from 'react'
import reactLogo from './assets/mips-control-logo.svg'
import './App.css'
import InstructionInput from './components/InstructionInput'
import OutputSignals from './components/OutputSignals';

function App() {
  const [selectedInstruction, setSelectedInstruction] = React.useState(-1);

  function handleInstructionChange(e){
    setSelectedInstruction(e.target.value);
  }

  return (
    <div className="app">
      <header>
        <img src={reactLogo} className="logo mipscontrol" alt="MIPS CONTROL LOGO" />
      </header>
      <main className='main-content'>
        <span>Simulador Unidade Controle Mips</span>
        <InstructionInput clickFunction={handleInstructionChange} value={selectedInstruction}/>
        <OutputSignals instruction={selectedInstruction} />
      </main>
    </div>
  )
}

export default App
