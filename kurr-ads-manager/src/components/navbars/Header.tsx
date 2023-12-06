import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import logo from '../../assets/Kurr_logo.svg';
import { Header_bold } from '../../styles/Text';
import TertiaryButton from '../buttons/TertiaryButton';
import DropDown from '../DropDown';
import PrimaryButton from '../buttons/PrimaryButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ElTacoTruck from '../../assets/ElTacoTruck_logo.png';
import JavligtGott from '../../assets/Javligtgott_logo.png';
import Vasterbotten from '../../assets/Vasterbotten_logo.png';
import Felix from '../../assets/Felix_logo.png';

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
          menuItems={[
            { item: 'El Taco Truck', icon: <img src={ElTacoTruck} width={24} height={24} alt=""/> },
            { item: 'Jävligt Gott', icon: <img src={JavligtGott} width={24} height={24} alt=""/> },
            { item: 'Västerbottensost', icon: <img src={Vasterbotten} width={24} height={24} alt=""/> },
            { item: 'Felix', icon: <img src={Felix} width={24} height={24} alt=""/> },
          ]}
        />
        <DropDown
          label={'Hjälp'}
          width={83}
          inHeader={true}
          menuItems={[{ item: 'Hjälp' }, { item: 'Kontakt' }]}
        />
        <TertiaryButton
          icon={
            <LibraryBooksOutlinedIcon style={{ color: Colors.kurr_black, fontSize: 'large' }} />
          }
          onClick={handleClick}
          height={58}
          title={'Bibliotek'}
          disabled={false}
        />
        <PrimaryButton
          icon={<Person2OutlinedIcon style={{ color: Colors.kurr_white, fontSize: 'large' }} />}
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
  padding-top: 1%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 3%;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: flex-end;
  gap: 15px;
  align-items: center;
`;

export default Header;
