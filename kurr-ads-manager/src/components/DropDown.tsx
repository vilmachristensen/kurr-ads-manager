import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Default, Tertiary_text } from '../styles/Text';
import Colors from '../styles/Colors';
import styled from 'styled-components';
import TertiaryButton from './buttons/TertiaryButton';

type MenuItem = {
  item: string;
  icon?: React.ReactNode;
};

interface DropDownProps {
  title?: string;
  label: string;
  width: number;
  inHeader: boolean;
  menuItems: MenuItem[];
  onChange?: (event: SelectChangeEvent) => void; // La till denna för banner komponenten
  value?: string // La till denna för banner komponenten
}

const DropDown: React.FC<DropDownProps> = ({ title, label, width, menuItems, inHeader, onChange, value }) => {
  const [state, setState] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div style={{ width: width }}>
      <Textstyle>
        {inHeader === true ? <Tertiary_text>{title}</Tertiary_text> : <Default>{title}</Default>}
      </Textstyle>
     
      <FormControl sx={{ m: 1, width: 'inherit', bgcolor: Colors.white}}>
        <Select
          sx={{
            color: Colors.kurr_black,
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
            },
          }}
          value={state}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps: {
              sx: {
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: Colors.grey_30,
                },
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: Colors.grey_25,
                },
              },
            },
          }}
        >
          <MenuItem style={{gap: 5}} disabled value="">
            {menuItems[0].icon}
            {inHeader === true ? (
              <Tertiary_text>{menuItems[0].item}</Tertiary_text>
            ) : (
              <Default>{menuItems[0].item}</Default>
            )}
          </MenuItem>
          {menuItems.map((item) => (
            <MenuItem style={{gap: 5}}key={item.item} value={item.item}>
              {item.icon}
              {inHeader === true ? (
                <Tertiary_text>{item.item}</Tertiary_text>
              ) : (
                <Default>{item.item}</Default>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

  );
};

const Textstyle = styled.div`
  color: ${Colors.grey_45};
  padding-bottom: ${(props) => (props.title ? '5px' : '0px')};
  margin-left: ${(props) => (props.title ? '8px' : '8px')};
`;

export default DropDown;
