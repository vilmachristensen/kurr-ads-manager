import React, { useState } from 'react';
import styled from 'styled-components';
import { Default_medium } from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import BannerImage from '../../src/assets/BannerImage.png';
import IngredientImage from '../../src/assets/IngredientImage.png';
import RecipeImage from '../../src/assets/RecipeImage.png';
import QuaternaryButton from './buttons/QuaternaryButton';

interface AdCardProps {
  adType: 'BANNER' | 'INGREDIENT' | 'RECIPE';
}

const AdCard: React.FC<AdCardProps> = ({ adType }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  console.log('isClicked', isClicked);

  return adType === 'BANNER' ? (
    <GridContainer isClicked={isClicked} onClick={handleClick}>
      <PictureArea src={BannerImage} alt="Banner" />
      <ButtonArea>
        <QuaternaryButton title="Banner" clicked={isClicked} />
      </ButtonArea>
    </GridContainer>
  ) : adType === 'INGREDIENT' ? (
    <GridContainer isClicked={isClicked} onClick={handleClick}>
    <PictureArea src={IngredientImage} alt="Ingredient" />
    <ButtonArea>
      <QuaternaryButton title="Livsmedel" clicked={isClicked} />
    </ButtonArea>
  </GridContainer>
  ) : adType === 'RECIPE' ? (
    <GridContainer isClicked={isClicked} onClick={handleClick}>
    <PictureArea src={RecipeImage} alt="Recipe" />
    <ButtonArea>
      <QuaternaryButton title="Recept" clicked={isClicked} />
    </ButtonArea>
  </GridContainer>
  ) : (
    <p>None</p>
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
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;

const ButtonArea = styled.div`
  height: auto;
  width: auto;
  justify-self: center;
`;

export default AdCard;
