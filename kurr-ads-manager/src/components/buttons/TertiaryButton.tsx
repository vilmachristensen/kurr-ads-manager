import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import {Tertiary_text} from '../../styles/Text';

interface TertiaryButtonProps {
  title: string;
  disabled: boolean;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ title, disabled }) => {
  return (
    <Tertiary disabled={disabled}><Tertiary_text>{title}</Tertiary_text></Tertiary>
  )
};

const Tertiary = styled.button`
  background-color: ${Colors.kurr_white};
  color: ${Colors.kurr_black};
  border-radius: 4px;
  padding: 7px 15px 7px 15px;
  border: 1px solid ${Colors.grey_45};
  &:hover{
    opacity: 0.7;
  }
`;

export default TertiaryButton;
