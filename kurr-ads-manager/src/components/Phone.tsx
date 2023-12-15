import React from 'react';
import styled from 'styled-components';
import statusBar from '../../src/assets/StatusBar.svg';
import { Default, Menu, Mini_text } from '../styles/Text';
import Colors from '../../src/styles/Colors';
import Checkmark from '../../src/assets/Checkmark.svg';
import ElTacoTruck from '../../src/assets/ElTacoTruck_logo.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useCampaign } from '../state/Context';

interface IPhoneFrameProps {
  title: string;
  profile: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
  adType: string;
  formBanner?: any;
  formIngredient?: any;
}

const Phone: React.FC<IPhoneFrameProps> = ({
  title,
  profile,
  description,
  image,
  buttonText,
  buttonLink,
  buttonColor,
  adType,
  formBanner,
  formIngredient,
}) => {
  const campaign = useCampaign();

  const handleLink = (link: string) => {
    window.open(link, '_blank');
  };

  const getArrayLength = () => {
    const length = campaign.campaign.targetGroups.length - 1;
    return length;
  };

  return (
    <div>
      {(formBanner || formIngredient) !== undefined ? (
        <div>
          <Screen image={image}>
            <TopBar />
            <TopSection>
              <StatusBar>
                <img src={statusBar} width={280} alt="" />
              </StatusBar>
              <Default style={{ textAlign: 'center', color: Colors.white }}>
                {formBanner && formBanner.caption || formIngredient && formIngredient.caption}
              </Default>
            </TopSection>
            <BottomSection adType={adType}>
              <BottomBar>
                <Left>
                  <Profile>
                    <img src={ElTacoTruck} width={24} alt="" />
                    <Mini_text>{profile}</Mini_text>
                  </Profile>
                  <Mini_text>{ formBanner && formBanner.description || formIngredient && formIngredient.description}</Mini_text>
                </Left>

                {adType === 'INGREDIENT' && formIngredient? (
                  <Right>
                    <Emission>
                      <Menu>{formIngredient.emission?.totalFootprint}</Menu>
                      <Mini_text>CO2e</Mini_text>
                    </Emission>
                    <DietaryPreferences>
                      <img src={Checkmark} width={52} alt="" />
                      {formIngredient.dietaryPreferences?.vegetarian && (
                        <Mini_text>Vegetariskt</Mini_text>
                      )}
                      {formIngredient.dietaryPreferences?.vegan && <Mini_text>Veganskt</Mini_text>}
                      {formIngredient.dietaryPreferences?.dairy && <Mini_text>Laktosfri</Mini_text>}
                      {formIngredient.dietaryPreferences?.nuts && <Mini_text>Nötfri</Mini_text>}
                      {formIngredient.dietaryPreferences?.gluten && (
                        <Mini_text>Glutenfri</Mini_text>
                      )}
                    </DietaryPreferences>
                  </Right>
                ) : null}
              </BottomBar>
              {adType === 'BANNER' && formBanner ? (
                <Button
                  buttonColor={formBanner.button.buttonColor}
                  onClick={() => handleLink(formBanner.button.link)}
                >
                  <Menu style={{ color: Colors.white }}>{formBanner.button.buttonText}</Menu>
                  <ArrowForwardIosRoundedIcon fontSize="small" style={{ color: Colors.white }} />
                </Button>
              ) : null}
            </BottomSection>
          </Screen>
        </div>
      ) : (
        <div>
          {campaign.campaign.targetGroups[getArrayLength()].ads.map((ad) => (
            <Screen image={image}>
              <TopBar />
              <TopSection>
                <StatusBar>
                  <img src={statusBar} width={280} alt="" />
                </StatusBar>
                <Default style={{ textAlign: 'center', color: Colors.white }}>{ad.caption}</Default>
              </TopSection>

              <BottomSection adType={adType}>
                <BottomBar>
                  <Left>
                    <Profile>
                      <img src={ElTacoTruck} width={24} alt="" />
                      <Mini_text>{profile}</Mini_text>
                    </Profile>
                    <Mini_text>{ad.description}</Mini_text>
                  </Left>

                  {adType && ad.adType === 'INGREDIENT' ? (
                    <Right>
                      <Emission>
                        <Menu>{ad.emission?.totalFootprint}</Menu>
                        <Mini_text>CO2e</Mini_text>
                      </Emission>
                      <DietaryPreferences>
                        <img src={Checkmark} width={52} alt="" />
                        {ad.dietaryPreferences?.vegetarian && <Mini_text>Vegetariskt</Mini_text>}
                        {ad.dietaryPreferences?.vegan && <Mini_text>Veganskt</Mini_text>}
                        {ad.dietaryPreferences?.dairy && <Mini_text>Laktosfri</Mini_text>}
                        {ad.dietaryPreferences?.nuts && <Mini_text>Nötfri</Mini_text>}
                        {ad.dietaryPreferences?.gluten && <Mini_text>Glutenfri</Mini_text>}
                      </DietaryPreferences>
                    </Right>
                  ) : null}
                </BottomBar>
                {adType && ad.adType === 'BANNER' ? (
                  <Button
                    buttonColor={ad.button.buttonColor}
                    onClick={() => handleLink(ad.button.link)}
                  >
                    <Menu style={{ color: Colors.white }}>{ad.button.buttonText}</Menu>
                    <ArrowForwardIosRoundedIcon fontSize="small" style={{ color: Colors.white }} />
                  </Button>
                ) : null}
              </BottomSection>
            </Screen>
          ))}
        </div>
      )}
    </div>
  );
};

const Screen = styled.div<{ image?: string }>`
display: grid;
  grid-template-rows: auto 1fr auto;
  width: 250px;
  height: 521px;
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
  left: 23%;
`;

const StatusBar = styled.div`
  width: auto;
  position: relative;
  top: -43px;
  right: 15px;
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

const BottomSection = styled.div<{ adType?: string }>`
display: flex;
flex-direction: column;
gap: 16px;
`;

{/**   position: relative; top: ${(props) => (props.adType === 'BANNER' ? '55%' : '65%')}; */}

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

const Button = styled.button<{ buttonColor?: string }>`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${(props) => (props.buttonColor ? props.buttonColor : Colors.kurr_black)};
  border-radius: 4px;
  border: none;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export default Phone;
