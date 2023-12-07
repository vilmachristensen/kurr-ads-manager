import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label?: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, disabled, onChange, value, required }) => {
    return (
        disabled
          ? <TextField style={{width: "inherit"}} disabled id="outlined-basic" label={label} variant="outlined" InputLabelProps={{ shrink: true }} required={required}  onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)} />
          : <TextField style={{width: "inherit"}}id="outlined-basic" label={label} variant="outlined" InputLabelProps={{ shrink: true }} required={required}  onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}/>
      );
};

export default TextInputField;
