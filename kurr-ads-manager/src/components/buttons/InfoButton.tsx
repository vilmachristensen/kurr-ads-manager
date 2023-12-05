import React, { useState } from 'react';
import styled from 'styled-components';
import { Default_medium, Menu } from '../../styles/Text';
import Colors from '../../styles/Colors';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface InfoButtonProps {
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const InfoButton: React.FC<InfoButtonProps> = ({ title, onClick, description }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <Info onClick={onClick} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <InfoOutlinedIcon />
      </Info>
      {isHover && (
        <InfoBox onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <Default_medium>{title}</Default_medium>
          <Menu>{description}</Menu>
        </InfoBox>
      )}
    </div>
  );
};

const Info = styled.div`
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 8px;
  background-color: ${Colors.kurr_black};
  color: ${Colors.kurr_white};
  max-width: 200px;
  max-height: 100px;
  overflow-y: scroll;
  border-radius: 4px;
  padding: 16px 16px;
  border: none;
  opacity: 0.87;
  position: relative;
  left: 22px;
`;

export default InfoButton;
