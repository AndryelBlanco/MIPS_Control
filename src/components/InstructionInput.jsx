import React from 'react';
import { MenuItem, Select } from '@mui/material';
import './instructioninput.css';

const InstructionInput = ({clickFunction, value}) => {
 

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
      <label>INSTRUCTIONS</label>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        className='instruction-input'
        value={value}
        onChange={(e) => clickFunction(e)}
      >
        <MenuItem value={-1}>(SELECT)</MenuItem>
        <MenuItem value={1}>R FORMAT</MenuItem>
        <MenuItem value={2}>LW</MenuItem>
        <MenuItem value={3}>SW</MenuItem>
        <MenuItem value={4}>JUMP</MenuItem>
      </Select>
    </div>
  )
}

export default InstructionInput