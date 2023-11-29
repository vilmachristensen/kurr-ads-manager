import React, { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import PrimaryButton from './buttons/PrimaryButton';
import styled from 'styled-components';

const ColorPicker: React.FC = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

  const handleClick = () => {
    setDisplayColorPicker((prevDisplay) => !prevDisplay);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColor = (color: ColorResult) => {
    setSelectedColor(color.hex);
    /*
    let colorStr = color.hex;
    if (color.rgb.a !== 1) {
      colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
      setSelectedColor(colorStr);
    }*/
  };

  return (
    <div>
      <PrimaryButton onClick={handleClick} disabled={false} title={JSON.stringify(selectedColor)} />
      {displayColorPicker ? (
        <Popup>
          <Cover onClick={handleClose}></Cover>
          <ChromePicker disableAlpha={false} color={selectedColor} onChange={handleColor} />
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
