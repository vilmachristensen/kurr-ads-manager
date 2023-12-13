import React from 'react';
import styled from 'styled-components';
import statusBar from '../../src/assets/StatusBar.svg';
import { Default, Menu, Mini_text } from '../styles/Text';
import Colors from '../../src/styles/Colors';
import Checkmark from '../../src/assets/Checkmark.svg';
import ElTacoTruck from '../../src/assets/ElTacoTruck_logo.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface IPhoneFrameProps {
  title: string;
  profile: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const Phone: React.FC<IPhoneFrameProps> = ({
  title,
  profile,
  description,
  image,
  buttonText,
  buttonLink,
}) => {
  const handleLink = () => {
    window.location.href = `${buttonLink}`;
  };

  return (
    <Screen image={image}>
      <TopBar />
      <TopSection>
        <StatusBar>
          <img src={statusBar} width={340} alt="" />
        </StatusBar>
        <Default style={{ textAlign: 'center', color: Colors.white }}>{title}</Default>
      </TopSection>
      <BottomSection>
        <BottomBar>
          <Left>
            <Profile>
              <img src={ElTacoTruck} width={24} alt="" />
              <Mini_text>{profile}</Mini_text>
            </Profile>
            <Mini_text>{description}</Mini_text>
          </Left>

          <Right>
            <Emission>
              <Menu>3.96</Menu>
              <Mini_text>CO2e</Mini_text>
            </Emission>
            <DietaryPreferences>
              <img src={Checkmark} width={52} alt="" />
              <Mini_text>Vegetarisk</Mini_text>
            </DietaryPreferences>
          </Right>
        </BottomBar>
        <Button onClick={handleLink}>
          <Menu style={{ color: Colors.white }}>{buttonText}</Menu>
          <ArrowForwardIosRoundedIcon fontSize="small" style={{ color: Colors.white }} />
        </Button>
      </BottomSection>
    </Screen>
  );
};

const Screen = styled.div<{ image?: string }>`
  width: 315px;
  height: 657px;
  background: ${Colors.kurr_primary_piglet_peach};
  background-image: url('https://www.pleasecopyme.se/wp-content/uploads/2012/06/max_wraps.jpg');
  border-radius: 34px;
  overflow: hidden;
  padding: 20px;
  border: 10px solid #000;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

const TopBar = styled.div`
  width: 135px;
  height: 20px;
  background: #000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  top: -25px;
  left: 29%;
`;

const StatusBar = styled.div`
  width: auto;
  position: relative;
  top: -40px;
  right: 12px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  position: relative;
  gap: 3%;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 60%;
  gap: 16px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Emission = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 15px;
  gap: 5px;
`;

const DietaryPreferences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: rows;
  gap: 15px;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${Colors.kurr_black};
  border-radius: 4px;
  border: none;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export default Phone;
