import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Default } from '../styles/Text';
import Styled from '../styles/Colors';
import Colors from '../styles/Colors';
import styled from 'styled-components';

interface DropDownProps {
  label: string;
}

const DropDown: React.FC<DropDownProps> = ({ label }) => {
  const [state, setState] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <div>
      <Textstyle>
        <Default>{label}</Default>
      </Textstyle>
      <FormControl sx={{ m: 1, width: 318, bgcolor: Colors.kurr_white }}>
        <Select
        sx={{
            color: Colors.grey_45,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: Colors.grey_45,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: Colors.grey_45,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: Colors.grey_45,
            },
            '.MuiSvgIcon-root ': {
              fill: Colors.grey_45,
            }
          }}
          value={state}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: Colors.grey_30
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: Colors.grey_25
                },
              }
            }
          }}
        >
          <MenuItem disabled value="">
            <em>Välj knapptext</em>
          </MenuItem>
          <MenuItem value="Köp nu">Köp nu</MenuItem>
          <MenuItem value="Till erbjudande">Till erbjudande</MenuItem>
          <MenuItem value="Läs mer">Läs mer</MenuItem>
          <MenuItem value="Visa mer">Visa mer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const Textstyle = styled.div`
  color: ${Colors.grey_45};
  padding-bottom: 5px;
  margin-left: 8px;
`;

export default DropDown;
