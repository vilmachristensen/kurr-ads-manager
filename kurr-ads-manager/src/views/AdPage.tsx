import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Ingredient from '../components/Ingredient';
import { Header_small, Header_mini } from '../styles/Text';
import AdCard from '../components/AdCard';
import styled from 'styled-components';
import PrimaryButton from '../components/buttons/PrimaryButton';
import InfoButton from '../components/buttons/InfoButton';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();
  const [click, setClick] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    // Recept
  };

  return (
    <div>
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

        <Space>
          <Grid>
            <AdCard adType="BANNER" onClick={() => setClick('banner')}></AdCard>
            <AdCard adType="INGREDIENT" onClick={() => setClick('ingredient')}></AdCard>
            <AdCard adType="RECIPE" onClick={() => setClick('recipe')}></AdCard>
          </Grid>
        </Space>

        {click === 'banner' && <Banner />}
        {click === 'ingredient' && <Ingredient />}
        {click === 'recipe' && (
          <div style={{ paddingTop: 50, paddingBottom: 79 }}>
            <Header_mini>Receptuppladdning</Header_mini>
            <div style={{ justifyContent: 'column', display: 'flex', gap: 25, paddingTop: 50 }}>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Grid = styled.div`
  display: flex;  
  flex-direction: row;
  gap: 50px;
}`;

const Space = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
}`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-bottom: 50px;
`;

export default AdPage;
