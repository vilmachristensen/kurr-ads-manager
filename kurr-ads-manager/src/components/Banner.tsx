import { useEffect, useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import { Default, Header_mini } from '../styles/Text';
import TextInputField from './TextInputField';
import DropDown from './DropDown';
import ColorPicker from './ColorPicker';
import PrimaryButton from './buttons/PrimaryButton';
import styled from 'styled-components';


interface BannerProps {
  getFormBanner: any
}

const Banner: React.FC<BannerProps> = ({ getFormBanner }) => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const [formBanner, setFormBanner] = useState({
    id: 0,
    caption: '',
    description: '',
    mediaUrl: '',
    media: '',
    adType: 'BANNER',
    button: { link: '', buttonText: '', buttonColor: '#262626' },
  });

  useEffect(() => {
    getFormBanner(formBanner)
  }, [formBanner])

  const handleClick = () => {
    campaign.setCampaign({
      ...campaign.campaign,
      targetGroups: campaign.campaign.targetGroups.map((group, index) =>
        index === campaign.campaign.targetGroups.length - 1
          ? {
              ...group,
              ads: [
                {
                  id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                  caption: formBanner.caption,
                  description: formBanner.description,
                  mediaUrl: formBanner.mediaUrl,
                  media: 'bildadress',
                  adType: 'BANNER',
                  button: {
                    link: formBanner.button.link,
                    buttonText: formBanner.button.buttonText,
                    buttonColor: formBanner.button.buttonColor,
                  },
                },
              ],
            }
          : group,
      ),
    });
    navigate('/PreviewPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <Content>
        <Header_mini>Inställningar för banner</Header_mini>
        <form onSubmit={handleSubmit}>
          <FormContent>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Rubrik*</Default>
              <TextInputField
                onChange={(e) => setFormBanner({ ...formBanner, caption: e.target.value })}
                value={formBanner.caption}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Bildtext*</Default>
              <TextInputField
                onChange={(e) => setFormBanner({ ...formBanner, description: e.target.value })}
                value={formBanner.description}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Bild*</Default>
              <TextInputField
                onChange={(e) => setFormBanner({ ...formBanner, mediaUrl: e.target.value })}
                value={formBanner.mediaUrl}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Länk*</Default>
              <TextInputField
                onChange={(e) =>
                  setFormBanner({
                    ...formBanner,
                    button: {
                      link: e.target.value,
                      buttonText: formBanner.button.buttonText,
                      buttonColor: formBanner.button.buttonColor,
                    },
                  })
                }
                value={formBanner.button.link}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <DropDown
                title="Call to action"
                label="Välj knapptext"
                width={318}
                menuItems={[
                  { item: 'Välj knapptext' },
                  { item: 'Köp nu' },
                  { item: 'Till erbjudande' },
                  { item: 'Läs mer' },
                  { item: 'Visa mer' },
                ]}
                inHeader={false}
                value={formBanner.button.buttonText}
                onChange={(e) =>
                  setFormBanner({
                    ...formBanner,
                    button: {
                      link: formBanner.button.link,
                      buttonText: e.target.value,
                      buttonColor: formBanner.button.buttonColor,
                    },
                  })
                }
              ></DropDown>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Knappfärg*</Default>
              <ColorPicker
                value={formBanner.button.buttonColor}
                onChange={(e) =>
                  setFormBanner({
                    ...formBanner,
                    button: {
                      link: formBanner.button.link,
                      buttonText: formBanner.button.buttonText,
                      buttonColor: e.target.value,
                    },
                  })
                }
              ></ColorPicker>
            </MiniSection>
          </FormContent>
        </form>
        <PrimaryButton
          title="Nästa"
          inHeader={false}
          disabled={false}
          onClick={handleClick}
          width={91}
        ></PrimaryButton>
      </Content>
    </CampaignProvider>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 50px;
  width: auto;
  padding-top: 50px;
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

const FormContent = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 50px;
  width: 40%;
`;

export default Banner;
