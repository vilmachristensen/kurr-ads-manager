import React from 'react';
import styled from 'styled-components';
import {Default_medium} from '../styles/Text';
import Colors from '../styles/Colors';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  adType: 'BANNER' | 'INGREDIENT' | 'RECIPE';
}

const TextInputField: React.FC<TextInputFieldProps> = ({ adType }) => {
    return (
        adType === 'BANNER' ? (

            <p>Banner</p>

        ) : adType === 'INGREDIENT' ? (

            <p>Ingredient</p>

        ) : adType === 'RECIPE' ? (
         
            <p>Recipe</p>

        ) : (
            <p>None</p>
        )
      );
};

export default TextInputField;