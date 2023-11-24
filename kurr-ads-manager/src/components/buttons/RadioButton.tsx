import React, { useState } from 'react';
import { Default } from '../../styles/Text';
import styled from 'styled-components';
import Colors from '../../styles/Colors';

interface RadioButtonProps {
  option1: string;
  option2: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ option1, option2 }) => {
  const [selected, setTarget] = useState<String>();

  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value);
  };

  return (
    <Wrapper>
      <RadioWrapper>
        <StyledRadio
          type="radio"
          id="option1"
          value={`radio-button-${option1}`}
          onChange={handleSelected}
          name="radio"
        />
        <Radio htmlFor="option1">
          <Default>{option1}</Default>
        </Radio>
      </RadioWrapper>
      <RadioWrapper>
        <StyledRadio
          type="radio"
          id="option2"
          value={`radio-button-${option2}`}
          onChange={handleSelected}
          name="radio"
        />
        <Radio htmlFor="option2">
          <Default>{option2}</Default>
        </Radio>
      </RadioWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: left;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Radio = styled.label`
  color: ${Colors.grey_45};
`;

const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 24px;
  height: 24px;
  border: 2px solid ${Colors.kurr_primary_piglet_peach};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
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

export default RadioButton;
