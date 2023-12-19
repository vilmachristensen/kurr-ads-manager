import React from 'react';
import styled from 'styled-components';
import statusBar from '../../src/assets/StatusBar.svg';
import { Default, Menu, Mini_text } from '../styles/Text';
import Colors from '../../src/styles/Colors';
import Checkmark from '../../src/assets/Checkmark.svg';
import Felix from '../../src/assets/Felix_logo.png';
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

  const getArrayLength = (type: string) => {
    let length = campaign.campaign.targetGroups.length - 1;
    return type === 'targetGroup'
      ? length
      : (length = campaign.campaign.targetGroups[length].ads.length - 1);
  };

  const getLastAd = () => {
    const lastAd =
      campaign.campaign.targetGroups[getArrayLength('targetGroup')].ads[getArrayLength('ads')];
    return lastAd;
  };

  const thisAd = getLastAd();

  return (
    <div>
      {(formBanner || formIngredient) !== undefined ? (
        <div>
          <Screen image={formBanner.media || formIngredient.media} bgColor={formIngredient.bgColor}>
            <TopBar />
            <TopSection>
              <StatusBar>
                <img src={statusBar} width={280} alt="" />
              </StatusBar>
              <Default style={{ textAlign: 'center', color: Colors.kurr_black }}>
                {(formBanner && formBanner.caption) || (formIngredient && formIngredient.caption)}
              </Default>
            </TopSection>
            <BottomSection adType={adType}>
              <BottomBar>
                <Left>
                  <Profile>
                    <img src={Felix} width={24} alt="" />
                    <Mini_text>{profile}</Mini_text>
                  </Profile>
                  <Mini_text>
                    {(formBanner && formBanner.description) ||
                      (formIngredient && formIngredient.description)}
                  </Mini_text>
                </Left>

                {adType === 'INGREDIENT' && formIngredient ? (
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
          <Screen
            image={thisAd.media}
            bgColor={thisAd.adType === 'INGREDIENT' ? thisAd.bgColor : Colors.grey_20}
          >
            <TopBar />
            <TopSection>
              <StatusBar>
                <img src={statusBar} width={280} alt="" />
              </StatusBar>
              <Default style={{ textAlign: 'center', color: Colors.kurr_black }}>
                {thisAd.caption}
              </Default>
            </TopSection>

            <BottomSection adType={adType}>
              <BottomBar>
                <Left>
                  <Profile>
                    <img src={Felix} width={24} alt="" />
                    <Mini_text>{profile}</Mini_text>
                  </Profile>
                  <Mini_text>{thisAd.description}</Mini_text>
                </Left>

                {thisAd.adType === 'INGREDIENT' ? (
                  <Right>
                    <Emission>
                      <Menu>{thisAd.emission?.totalFootprint}</Menu>
                      <Mini_text>CO2e</Mini_text>
                    </Emission>
                    <DietaryPreferences>
                      <img src={Checkmark} width={52} alt="" />
                      {thisAd.dietaryPreferences?.vegetarian && <Mini_text>Vegetariskt</Mini_text>}
                      {thisAd.dietaryPreferences?.vegan && <Mini_text>Veganskt</Mini_text>}
                      {thisAd.dietaryPreferences?.dairy && <Mini_text>Laktosfri</Mini_text>}
                      {thisAd.dietaryPreferences?.nuts && <Mini_text>Nötfri</Mini_text>}
                      {thisAd.dietaryPreferences?.gluten && <Mini_text>Glutenfri</Mini_text>}
                    </DietaryPreferences>
                  </Right>
                ) : null}
              </BottomBar>
              {thisAd.adType === 'BANNER' ? (
                <Button
                  buttonColor={thisAd.button.buttonColor}
                  onClick={() => handleLink(thisAd.button.link)}
                >
                  <Menu style={{ color: Colors.white }}>{thisAd.button.buttonText}</Menu>
                  <ArrowForwardIosRoundedIcon fontSize="small" style={{ color: Colors.white }} />
                </Button>
              ) : null}
            </BottomSection>
          </Screen>
        </div>
      )}
    </div>
  );
};

const Screen = styled.div<{ image?: string; bgColor?: string }>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 250px;
  height: 521px;
  background-color: ${(props) => props.bgColor || Colors.grey_20};
  background-image: ${(props) => (props.image ? `url(${props.image})` : 'none')};
  background-size: cover;

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
  width: inherit;
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
  width: inherit;
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
`;

export default Phone;
