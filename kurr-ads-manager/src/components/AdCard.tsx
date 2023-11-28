import React, { useState } from 'react';
import styled from 'styled-components';
import { Default_medium } from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import BannerImage from '../../src/assets/BannerImage.png';
import QuaternaryButton from './buttons/QuaternaryButton';

interface AdCardProps {
  adType: 'BANNER' | 'INGREDIENT' | 'RECIPE';
}

const AdCard: React.FC<AdCardProps> = ({ adType }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
      setIsClicked(true)
      };

  return adType === 'BANNER' ? (
    <GridContainer>
      <PictureArea src={BannerImage} alt="Banner" />
      <ButtonArea><QuaternaryButton title='hej' disabled={false} onClick={handleClick} clicked={isClicked}/></ButtonArea>
    </GridContainer>
  ) : adType === 'INGREDIENT' ? (
    <p>Ingredient</p>
  ) : adType === 'RECIPE' ? (
    <p>Recipe</p>
  ) : (
    <p>None</p>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto; 
  border: 5px solid black;
`;

const PictureArea = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
`;

const ButtonArea = styled.div`
  background-color: ${Colors.kurr_macaroni};
  height: auto;
`;

export default AdCard;
