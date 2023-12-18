import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Campaign, Ingredient } from '../types/Types';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/buttons/PrimaryButton';
import RadioButton from '../components/buttons/RadioButton';
import InfoButton from '../components/buttons/InfoButton';
import { Header_small, Header_mini, Default } from '../styles/Text';
import TextInputField from '../components/TextInputField';
import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Colors from '../styles/Colors';
import 'dayjs/locale/en-gb';


const CampaignPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();

  const [formCampaign, setFormCampaign] = useState({
    name: '',
    buyingType: { lifetime: false, daily: false },
    price: 0,
    startDate: null,
    endDate: null,
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
      startDate: formCampaign.startDate || new Date(),
      endDate: formCampaign.endDate || new Date(),
      targetGroups: [],
    });
    navigate('/TargetGroupPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Content>
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
                <InfoSection>
                  <div>
                    <Header_mini>Budget</Header_mini>
                  </div>
                  <div>
                    <InfoButton
                      title="Ange budget"
                      description="Budgeten avser den summa som din kampanj kan förbruka per dag. Den kan sättas till daglig eller väljas till livstid"
                    />
                  </div>
                </InfoSection>
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
                <InfoSection>
                  <div>
                    <Header_mini>Tidsperiod*</Header_mini>
                  </div>
                  <div>
                    <InfoButton
                      title="Ange tidsperiod"
                      description="Tidsperioden för hur länge din kampanj ska vara aktiv anges med start samt slutdatum"
                    />
                  </div>
                </InfoSection>
                <MiniSection>
                  <Default style={{ paddingBottom: 5 }}>Startdatum</Default>
                  <DatePicker
                    slotProps={{
                      toolbar: {
                        sx: {
                          '& .MuiMenuItem-root.Mui-selected': {
                            backgroundColor: Colors.grey_30,
                          },
                          '& .MuiMenuItem-root:hover': {
                            backgroundColor: Colors.grey_25,
                          },
                          '& .MuiMenuItem-root:active': {
                            backgroundColor: Colors.grey_25,
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: Colors.grey_45,
                          },
                        }
                      },
                    }}
                    value={formCampaign.startDate}
                    onChange={(date) => setFormCampaign({ ...formCampaign, startDate: date })}
                  />
                  <Default style={{ paddingBottom: 5 }}>Slutdatum</Default>
                  <DatePicker
                    value={formCampaign.endDate}
                    onChange={(date) => setFormCampaign({ ...formCampaign, endDate: date })}
                  />
                </MiniSection>
              </Section>
            </FormContent>
          </form>
          <PrimaryButton
            onClick={handleClick}
            title="Nästa"
            disabled={false}
            inHeader={false}
            width={91}
          />
        </Content>
      </LocalizationProvider>
    </CampaignProvider>
  );
};

export default CampaignPage;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 50px;
  width: auto;
`;

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

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
