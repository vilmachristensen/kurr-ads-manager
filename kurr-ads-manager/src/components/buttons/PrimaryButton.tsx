import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../../styles/Text';
import Colors from '../../styles/Colors';

interface PrimaryButtonProps {
  title: string;
  disabled: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, disabled }) => {
  return <Primary disabled={disabled}><Default_medium>{title}</Default_medium></Primary>;
};

const Primary = styled.button`
  background-color: ${(props) => (props.disabled ? Colors.grey_20 : Colors.kurr_black)};
  color: {Colors.kurr_white};
  border-radius: 4px;
  padding: 14px 24px 14px 24px;
  border: none;
  &:hover{
    opacity: 0.7;
  }
`;

export default PrimaryButton;
