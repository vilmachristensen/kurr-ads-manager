import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import logo from '../../assets/Kurr_logo.svg';
import { Header_bold } from '../../styles/Text';
import TertiaryButton from '../buttons/TertiaryButton';
import DropDown from '../DropDown';
import PrimaryButton from '../buttons/PrimaryButton';

const handleClick = () => {
  console.log('Clicked');
};

const Header: React.FC = () => {
  return (
    <GridContainer>
      <Logo>
        <img src={logo} alt="" />
        <Header_bold>Ads Manager</Header_bold>
      </Logo>
      <Menu>
        <DropDown
          label={'El Taco Truck'}
          width={206}
          inHeader={true}
          menuItems={['företag1', 'företag2', 'företag3']}
        />
        <DropDown label={'Hjälp'} width={83} inHeader={true} menuItems={['hej', 'hej']} />
        <TertiaryButton onClick={handleClick} height={58} title={'Bibliotek'} disabled={false} />
        <PrimaryButton
          inHeader={true}
          title={'Mitt konto'}
          height={58}
          disabled={false}
          onClick={handleClick}
        />
      </Menu>
    </GridContainer>
  );
};

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: flex-end;
  gap: 15px;
  align-items: center;
`;

export default Header;
