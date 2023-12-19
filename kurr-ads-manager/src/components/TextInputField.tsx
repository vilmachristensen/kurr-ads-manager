import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label?: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
  rows?: number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  disabled,
  onChange,
  value,
  required,
  rows,
}) => {

  return disabled ? (
    <StyledTextField
      style={{ width: 'inherit', backgroundColor:`${Colors.white}` }}
      disabled
      id="outlined-basic"
      label={label}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      required={required}
      multiline
      rows={rows}
      onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
    />
  ) : (
    <StyledTextField
      style={{ width: 'inherit', backgroundColor: `${Colors.white}` }}
      id="outlined-basic"
      label={label}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      required={required}
      multiline
      rows={rows}
      onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
    />
  );
};

export default TextInputField;

const StyledTextField = styled(TextField)`
  width: inherit;
  background-color: ${Colors.white};

  & label.Mui-focused {
    color: white;
  }

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${Colors.grey_20};
    }
    &:hover fieldset {
      border-color: ${Colors.grey_45};
    }
    &.Mui-focused fieldset {
      border-color: ${Colors.grey_45};
    }
  }
`;