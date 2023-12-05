import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { Tertiary_text } from '../../styles/Text';

interface QuaternaryButtonProps {
  title: string;
  clicked: boolean;
}

const QuaternaryButton: React.FC<QuaternaryButtonProps> = ({ title, clicked }) => {
  return (
    <Quaternary title={title} clicked={clicked}>
      <Tertiary_text>{title}</Tertiary_text>
    </Quaternary>
  );
};

const Quaternary = styled.div<QuaternaryButtonProps>`
  background-color: ${(props) =>
    props.clicked === true ? Colors.kurr_primary_piglet_peach : Colors.kurr_white};
  color: ${(props) => (props.clicked === true ? Colors.kurr_white : Colors.grey_45)};
  border-radius: 32px;
  padding: 7px 15px 7px 15px;
  width: fit-content;
  border: ${(props) => (props.clicked === true ? `1px solid ${Colors.kurr_primary_piglet_peach}` : `1px solid ${Colors.grey_45}`)};
`;

export default QuaternaryButton;
