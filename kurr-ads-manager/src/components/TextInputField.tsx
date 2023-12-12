import React from 'react';
import styled from 'styled-components';
import { Default_medium } from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label?: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  disabled,
  onChange,
  value,
  required,
}) => {
  return disabled ? (
    <TextField
      sx={{
        root: {
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
        },
      }}
      style={{ width: 'inherit', backgroundColor:`${Colors.white}` }}
      disabled
      id="outlined-basic"
      label={label}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      required={required}
      onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
    />
  ) : (
    <TextField
      style={{ width: 'inherit', backgroundColor: `${Colors.white}` }}
      id="outlined-basic"
      label={label}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      required={required}
      onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
    />
  );
};

export default TextInputField;
