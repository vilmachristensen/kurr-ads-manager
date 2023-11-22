import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label: string;
  disabled: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, disabled }) => {
    return (
        disabled
          ? <TextField disabled id="outlined-basic" label={label} variant="outlined" />
          : <TextField id="outlined-basic" label={label} variant="outlined" />
      );
};

export default TextInputField;
