import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Ingredient from '../components/Ingredient';
import { Header_small, Header_mini } from '../styles/Text';
import AdCard from '../components/AdCard';
import styled from 'styled-components';
import PrimaryButton from '../components/buttons/PrimaryButton';
import InfoButton from '../components/buttons/InfoButton';
import { useLocation } from 'react-router-dom';
import Phone from '../components/Phone';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();
  const [click, setClick] = useState('');
  const [selectedAd, setSelectedAd] = useState('');
  const location = useLocation();
  //let id = 0;

  //id = location.state.id;

  const handleClick = () => {
    // Recept
  };

  //console.log("Mottaget id", id)

  return (
    <Content>
      <div style={{ paddingRight: 0 }}>
        <Header_small>Skapa annons</Header_small>
        <div style={{ paddingTop: 50 }}>
          <InfoSection>
            <div>
              <Header_mini>Annonstyp*</Header_mini>
            </div>
            <div>
              <InfoButton
                title="Välj annonstyp"
                description="Annonstyperna är banner, livsmedel och recept"
              />
            </div>
          </InfoSection>

          <Grid>
            <AdCard
              adType="BANNER"
              onChange={() => setClick('banner')}
              selectedType={selectedAd}
              setSelectedType={setSelectedAd}
            ></AdCard>
            <AdCard
              adType="INGREDIENT"
              onChange={() => setClick('ingredient')}
              selectedType={selectedAd}
              setSelectedType={setSelectedAd}
            ></AdCard>
            <AdCard
              adType="RECIPE"
              onChange={() => setClick('recipe')}
              selectedType={selectedAd}
              setSelectedType={setSelectedAd}
            ></AdCard>
          </Grid>

          {click === 'banner' && <Banner />}
          {click === 'ingredient' && <Ingredient />}
          {click === 'recipe' && (
            <RecipePage>
              <Header_mini>Receptuppladdning</Header_mini>
              <Buttons>
                <PrimaryButton
                  title="Hämta skapade recept"
                  inHeader={false}
                  disabled={false}
                  onClick={handleClick}
                ></PrimaryButton>
                <PrimaryButton
                  title="Skapa nytt recept"
                  inHeader={false}
                  disabled={false}
                  onClick={handleClick}
                ></PrimaryButton>
              </Buttons>
            </RecipePage>
          )}
        </div>
      </div>
      {click === 'banner' ? (
        <Preview>
          <Phone
            title={''}
            profile={'El taco truck'}
            description={''}
            image={''}
            buttonText={''}
            buttonLink={''}
            adType="BANNER"
          />
        </Preview>
      ) : click === 'ingredient' ? (
        <Preview>
          <Phone
            title={'El taco truck'}
            profile={''}
            description={''}
            image={''}
            adType="INGREDIENT"
          />
        </Preview>
      ) : null}
    </Content>
  );
};

const Content = styled.div`
  display: grid;  
  grid-template-columns: 49% auto;
  gap: 10%;
}`;

const Preview = styled.div`
  background-color: #00000;
  width: 100px;  
}`;

const Grid = styled.div`
  display: grid;  
  grid-template-columns: auto auto auto;
  gap: 50px;
}`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-bottom: 50px;
`;

const RecipePage = styled.div`
  padding-top: 50px;
  padding-bottom: 79px;
`;

const Buttons = styled.div`
  justify-content: column;
  display: flex;
  gap: 25px;
  padding-top: 50px;
`;

export default AdPage;
