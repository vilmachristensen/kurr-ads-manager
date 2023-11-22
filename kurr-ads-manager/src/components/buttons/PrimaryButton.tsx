import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
  title: string;
  disabled: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, disabled }) => {
  return <Primary disabled={disabled}>{title}</Primary>;
};

const Primary = styled.button`
  background-color: ${(props) => (props.disabled ? '#DDDDDD' : '#000000')};
  color: #ffffff;
  border-radius: 4px;
  padding: 14px 24px 14px 24px;
  border: none;
  &:hover{
    opacity: 0.7;
  }
`;

export default PrimaryButton;
