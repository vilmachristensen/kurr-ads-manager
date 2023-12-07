import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Ingredient from '../components/Ingredient';
import { Header_small } from '../styles/Text';
import AdCard from '../components/AdCard';
import styled from 'styled-components';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();
  const [click, setClick] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header_small>Skapa annons</Header_small>
      <div style={{ paddingTop: 50 }}>
        <Space>
          <Grid>
            <AdCard adType="BANNER" onClick={() => setClick('banner')}></AdCard>
            <AdCard adType="INGREDIENT" onClick={() => setClick('ingredient')}></AdCard>
            <AdCard adType="RECIPE" onClick={() => setClick('recipe')}></AdCard>
            {click === 'banner' && <Banner />}
            {click === 'ingredient' && <Ingredient />}
            {click === 'recipe' && <p>Sidan är inte skapad än</p>}
          </Grid>
        </Space>

        {/** 
        <button onClick={() => setClick('banner')}>Banner</button>
        <button onClick={() => setClick('ingredient')}>Ingredient</button>
        {click === 'banner' && <Banner />}
        {click === 'ingredient' && <Ingredient />}

        */}
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

export default AdPage;
