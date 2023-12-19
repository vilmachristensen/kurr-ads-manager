import React, { useState } from 'react';
import { Default } from '../../styles/Text';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

interface CheckboxButtonProps {
  option1: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({ option1, onChange }) => {
  const [selected, setTarget] = useState<string>();

  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Wrapper>
      <CheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          id={option1}
          value={option1}
          name={option1}
          onChange={handleSelected}
        />
        <Checkbox htmlFor={option1}>
          <Default>{option1}</Default>
        </Checkbox>
      </CheckboxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: left;
  flex-direction: column;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Checkbox = styled.label`
  color: ${Colors.grey_45};
`;

const StyledCheckbox = styled.input`
  appearance: none;
  margin: 0;
  width: 24px;
  height: 24px;
  border: 2px solid ${Colors.kurr_primary_piglet_peach};
  border-radius: 25%;
  transition: all 0.1s ease-in-out;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    margin: 2px;
  }

  &:checked::after {
    background-color: ${Colors.kurr_primary_piglet_peach};
  }

  &:hover::after {
    cursor: pointer;
  }

  &:focus {
    background-color: ${Colors.kurr_white};
  }
`;

export default CheckboxButton;