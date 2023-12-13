import { useCampaign } from '../state/Context';
import { Banner, Ingredient } from '../types/Types';
import { useNavigate } from 'react-router-dom';
import confirmation from '../assets/confirmation.png';
import { Header } from '../styles/Text';
import Colors from '../styles/Colors';
import styled from 'styled-components';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';

const handleClick = () => {
  console.log('Gå till kampanjöversikt');
};

const ConfirmationPage: React.FC = () => {
  return (
    <Grid>
      <Content>
        <div style={{ paddingBottom: 50 }}>
          <Header>Nice kampanj!</Header>
        </div>
        <img width={453} src={confirmation} alt="Nice kampanj!" />
        <Buttons>
          <PrimaryButton
            title="Kampanjöversikt"
            inHeader={false}
            disabled={false}
            width={169}
            onClick={handleClick}
          ></PrimaryButton>
        </Buttons>
        <SecondaryButton title="Skapa fler kampanjer"></SecondaryButton>
      </Content>
    </Grid>
  );
};

const Grid = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-right: 30%;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export default ConfirmationPage;
