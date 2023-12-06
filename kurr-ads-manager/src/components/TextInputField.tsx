import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label?: string;
  disabled: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  required: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, disabled, onChange, value, required }) => {
    return (
        disabled
          ? <TextField disabled id="outlined-basic" label={label} variant="outlined" InputLabelProps={{ shrink: true }} required={required} />
          : <TextField id="outlined-basic" label={label} variant="outlined" InputLabelProps={{ shrink: true }} required={required}/>
      );
};

export default TextInputField;
