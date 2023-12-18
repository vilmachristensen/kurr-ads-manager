import React from "react";
import { Default } from "../../styles/Text";
import styled from 'styled-components';
import Colors from '../../styles/Colors'

interface SecondaryButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} 

const SecondaryButton: React.FC<SecondaryButtonProps> = ({title, onClick}) => {
    return <Secondary onClick={onClick}><Default>{title}</Default></Secondary>;
};

const Secondary = styled.button`
    background-color: transparent;
    color: ${Colors.kurr_primary_piglet_peach};
    border-radius: 4px;
    padding: 14px 24px 14px 24px;
    border: none;
    text-decoration: underline;
    &:hover{
        opacity: 0.7;
    }
    cursor: pointer;
`
;


export default SecondaryButton;
