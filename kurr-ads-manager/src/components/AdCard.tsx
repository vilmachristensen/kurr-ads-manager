import React, { useState } from 'react';
import styled from 'styled-components';
import BannerImage from '../../src/assets/BannerImage.png';
import IngredientImage from '../../src/assets/IngredientImage.png';
import RecipeImage from '../../src/assets/RecipeImage.png';
import QuaternaryButton from './buttons/QuaternaryButton';

interface AdCardProps {
  adType: 'BANNER' | 'INGREDIENT' | 'RECIPE';
  onClick: () => void;
}


const AdCard: React.FC<AdCardProps> = ({ adType, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  const getImageAndTitle = () => {
    switch (adType) {
      case 'BANNER':
        return [BannerImage, 'Banner'];
      case 'INGREDIENT':
        return [IngredientImage, 'Livsmedel'];
      case 'RECIPE':
        return [RecipeImage, 'Recept']
      default:
        return '';
    }
  };

  return (
    <GridContainer isClicked={isClicked} onClick={handleClick}>
      <PictureArea src={getImageAndTitle()[0]} alt={adType} />
      <ButtonArea>
        <QuaternaryButton title={getImageAndTitle()[1]} clicked={isClicked} />
      </ButtonArea>
    </GridContainer>
  );
};

const GridContainer = styled.div<{ isClicked: boolean }>`
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
  opacity: ${props => (props.isClicked === false ? 0.7 : 'none')};

  &:hover {
    opacity: 0.7;
  }
`;

const PictureArea = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 5px;
  object-fit: cover;
`;

const ButtonArea = styled.div`
  height: auto;
  width: auto;
  justify-self: center;
`;

export default AdCard;
