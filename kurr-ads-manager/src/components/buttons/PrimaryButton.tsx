import React from 'react';
import styled from 'styled-components';
import { Default_medium, Tertiary_text } from '../../styles/Text';
import Colors from '../../styles/Colors';

interface PrimaryButtonProps {
  title: string;
  disabled: boolean;
  height?: number;
  width?: number
  icon?: React.ReactNode;
  inHeader: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  disabled,
  onClick,
  height,
  width,
  inHeader,
  icon,
}) => {
  return (
    <Primary style={{ height: height, width: width }} onClick={onClick} disabled={disabled}>
      {icon}
      {inHeader === true ? (
        <Tertiary_text>{title}</Tertiary_text>
      ) : (
        <Default_medium>{title}</Default_medium>
      )}
    </Primary>
  );
};

const Primary = styled.button`
  background-color: ${(props) => (props.disabled ? Colors.grey_20 : Colors.kurr_black)};
  color: ${Colors.kurr_white};
  border-radius: 4px;
  padding: 14px 24px 14px 24px;
  border: none;
  &:hover {
    opacity: 0.7;
  }
  display:flex;
  align-items:center;
  gap: 5px;
  cursor: pointer;
`;

export default PrimaryButton;
