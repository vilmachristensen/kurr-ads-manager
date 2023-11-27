import React, { useState } from 'react';
import { Default } from '../../styles/Text';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import CheckIcon from '@mui/icons-material/Check';

interface CheckboxButtonProps {
  option1: string;
  option2: string;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({ option1, option2 }) => {
  const [selected, setTarget] = useState<String>();

  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value);
  };

  return (
    <Wrapper>
      <CheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          id="option1"
          value="option1"
          name="option1"
          onChange={handleSelected}
        />
        <Checkbox htmlFor="option1">
          <Default>{option1}</Default>
        </Checkbox>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          id="option2"
          value="option2"
          name="option2"
          onChange={handleSelected}
        />
        <Checkbox htmlFor="option2">
          <Default>{option2}</Default>
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


/*
<Icon style={{ color: Colors.kurr_primary_piglet_peach, fontSize: 'small', position: 'absolute', left: 20, top: 60}}></Icon>
const Icon = styled(CheckIcon)`
  &.override {
    color: ${Colors.kurr_white};
    background-color: ${Colors.kurr_white};
  }
`;*/