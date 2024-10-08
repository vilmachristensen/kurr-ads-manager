import React, { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import TertiaryButton from './buttons/TertiaryButton';
import styled from 'styled-components';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import Colors from '../styles/Colors';

interface ColorPickerProps {
  onChange?: (color: { target: { value: string } }) => void;
  value?: string;
  adType: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange, value, adType }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>(adType === "BANNER" ? Colors.kurr_black : Colors.grey_20);

  const handleClick = () => {
    setDisplayColorPicker((prevDisplay) => !prevDisplay);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColor = (color: ColorResult) => {
    setSelectedColor(color.hex);
    if (onChange) {
      onChange({ target: { value: color.hex } });
    }
  };

  return (
    <div>
      <TertiaryButton
        onClick={handleClick}
        disabled={false}
        title={selectedColor}
        width={228}
        icon={<SquareRoundedIcon style={{ color: selectedColor }} />}
      />
      {displayColorPicker ? (
        <Popup>
          <Cover onClick={handleClose}></Cover>
          <ChromePicker disableAlpha={true} color={selectedColor} onChange={handleColor} />
        </Popup>
      ) : null}
    </div>
  );
};

const Popup = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default ColorPicker;
