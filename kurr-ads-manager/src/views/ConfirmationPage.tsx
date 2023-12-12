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
    <Content>
      <div style={{justifyContent: 'center'}}>
      <div style={{ paddingLeft: 320, paddingBottom: 112 }}>
        <Header>Nice kampanj!</Header>
      </div>
      <div style={{ paddingLeft: 210 }}>
        <img width={453} src={confirmation} alt="Nice kampanj!" />
      </div>
      <div style={{ paddingLeft: 380 }}>
        <PrimaryButton
          title="Kampanjöversikt"
          inHeader={false}
          disabled={false}
          width={169}
          onClick={handleClick}
        ></PrimaryButton>
        <SecondaryButton title="Skapa fler kampanjer"></SecondaryButton>
      </div>
      </div>
    </Content>
  );
};

const Content = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export default ConfirmationPage;
