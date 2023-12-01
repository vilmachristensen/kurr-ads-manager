import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import {Tertiary_text} from '../../styles/Text';

interface TertiaryButtonProps {
  title: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  buttonSize: number;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ title, disabled, onClick, icon, buttonSize }) => {
  return (
    <Tertiary style={{width: buttonSize}} onClick={onClick} disabled={disabled}>{icon}<Tertiary_text>{title} </Tertiary_text></Tertiary>
  )
};

const Tertiary = styled.button`
  background-color: ${Colors.kurr_white};
  justify-content: space-between;
  color: ${Colors.kurr_black};
  border-radius: 4px;
  padding: 7px 15px 7px 15px;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.grey_45};
  &:hover{
    opacity: 0.7;
  }
`;

export default TertiaryButton;
