import { CampaignProvider } from '../state/Context';
import { TargetGroup } from '../types/Types';
import { useState } from 'react';
import { useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import { Default, Header_small } from '../styles/Text';
import RadioButton from '../components/buttons/RadioButton';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Colors from '../styles/Colors';

const TargetGroupPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();
  console.log('campaing', campaign);

  const [formTarget, setFormTarget] = useState({
    id: 1,
    toAll: false,
    ads: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    campaign.setCampaign({
      ...campaign.campaign,
      targetGroups: [{ id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), toAll: formTarget.toAll, ads: [] }],
    });
    navigate('/AdPage', {
      state: { id: 0 },
    });
  };

  return (
    <CampaignProvider>
      <div>
        <Header_small>Skapa målgrupp</Header_small>
        <div style={{ paddingTop: 50 }}>
          <Default style={{ color: Colors.grey_45 }}>Välj målgrupp</Default>
          <div style={{ paddingTop: 15 }}>
            <form onSubmit={handleSubmit}>
              <RadioButton
                onSelectionChange={() => setFormTarget({ ...formTarget, toAll: true })}
                option1="Annonsera till specifik målgrupp"
                option2="Annonsera till alla"
              ></RadioButton>
              <div style={{ paddingTop: 50 }}>
                <PrimaryButton
                  title="Nästa"
                  disabled={false}
                  onClick={handleClick}
                  inHeader={false}
                ></PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CampaignProvider>
  );
};

export default TargetGroupPage;