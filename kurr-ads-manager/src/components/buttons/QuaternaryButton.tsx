import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import {Tertiary_text} from '../../styles/Text';

interface QuaternaryButtonProps {
  title: string;
  disabled: boolean;
  clicked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const QuaternaryButton: React.FC<QuaternaryButtonProps> = ({ title, disabled, onClick, clicked }) => {
  return (
    <Quaternary disabled={disabled} onClick={onClick}><Tertiary_text>{title}</Tertiary_text></Quaternary>
  )
};

const Quaternary = styled.button`
  background-color: ${Colors.kurr_white};
  color:  ${Colors.grey_45};
  border-radius: 32px;
  padding: 7px 15px 7px 15px;
  border: 1px solid ${Colors.grey_45};
  &:hover{
    opacity: 0.7;
  }
  &:clicked{
    background-color:  ${Colors.kurr_primary_piglet_peach};
    color: ${Colors.kurr_white};
  }
`;

export default QuaternaryButton;
