import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Campaign, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/buttons/PrimaryButton';
import RadioButton from '../components/buttons/RadioButton';
import { Header_small, Header_mini, Default } from '../styles/Text';
import TextInputField from '../components/TextInputField';
import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers';

const CampaignPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();

  const [formCampaign, setFormCampaign] = useState({
    name: '',
    buyingType: { lifetime: false, daily: false },
    price: 0,
    startDate: new Date('2023-11-14'),
    endDate: new Date('2023-11-20'),
    targetGroups: [],
  });

  console.log('Campaign: ', campaign);

  const handleClick = () => {
    campaign.setCampaign({
      id: 1,
      name: formCampaign.name,
      buyingType: {
        lifetime: formCampaign.buyingType.lifetime,
        daily: formCampaign.buyingType.daily,
      },
      price: formCampaign.price,
      startDate: formCampaign.startDate,
      endDate: formCampaign.endDate,
      targetGroups: [],
    });
    navigate('/TargetGroupPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <div>
        <form onSubmit={handleSubmit}>
          <FormContent>
            <Header_small>Skapa kampanj</Header_small>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Namn*</Default>
              <TextInputField
                disabled={false}
                value={formCampaign.name}
                required={true}
                onChange={(e) => setFormCampaign({ ...formCampaign, name: e.target.value })}
              />
            </MiniSection>
            <br />
            <Section>
              <Header_mini>Budget</Header_mini>
              <MiniSection>
                <Default style={{ paddingBottom: 18 }}>Köptyp*</Default>
                <RadioButton
                  option1="Daglig"
                  option2="Livstid"
                  onSelectionChange={(selectedOption) =>
                    setFormCampaign({
                      ...formCampaign,
                      buyingType: {
                        lifetime: selectedOption === 'option2' ? true : false,
                        daily: selectedOption === 'option1' ? true : false,
                      },
                    })
                  }
                />
              </MiniSection>
              <MiniSection>
                <Default style={{ paddingBottom: 5 }}>Pris*</Default>
                <TextInputField
                  disabled={false}
                  value={formCampaign.price}
                  required={true}
                  onChange={(e) =>
                    setFormCampaign({ ...formCampaign, price: parseInt(e.target.value) })
                  }
                />
              </MiniSection>
            </Section>
            <br />
            <Section>
              <MiniSection>
                <Default style={{ paddingBottom: 5 }}>Tidsperiod*</Default>
                <label>
                Start date:
                <input
                  type="date"
                  value={formCampaign.startDate.toISOString().split('T')[0]}
                  onChange={(e) =>
                    setFormCampaign({ ...formCampaign, startDate: new Date(e.target.value) })
                  }
                />
              </label>
              <br />
              <label>
                End date:
                <input
                  type="date"
                  value={formCampaign.endDate.toISOString().split('T')[0]}
                  onChange={(e) =>
                    setFormCampaign({ ...formCampaign, endDate: new Date(e.target.value) })
                  }
                />
              </label>
              </MiniSection>

            </Section>
          </FormContent>
        </form>
        <PrimaryButton onClick={handleClick} title="hej" disabled={false} inHeader={false} />
      </div>
    </CampaignProvider>
  );
};

export default CampaignPage;

const FormContent = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 50px;
  width: 40%;
`;

const Section = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 30px;
`;

const MiniSection = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;
`;
