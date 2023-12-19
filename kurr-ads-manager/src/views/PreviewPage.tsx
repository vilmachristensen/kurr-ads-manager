import styled from 'styled-components';
import { useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import { Header_small, Header_mini, Default, Default_medium } from '../styles/Text';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { useState } from 'react';
import Colors from '../styles/Colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Phone from '../components/Phone';

const PreviewPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    {

      {
        campaign.campaign.targetGroups.map((group) => {
          if (group.id !== null) {
            type === 'Ad' &&
              navigate('/AdPage', {
                state: { id: group.id },
              });
          }
        });
      }
    }
    {
      type === 'TargetGroup' && navigate('/TargetGroupPage');
    }
    {
      type === 'Confirmation' && navigate('/ConfirmationPage');
    }
  };

  return (
    <Content>
      <PreviewContent>
        <Header_small>Publicera</Header_small>
        <Default>
          Kontrollera att alla uppgifter är korrekta och tryck sedan på publicera för att spara din
          nya kampanj.
        </Default>

        <Section>
          <MiniSection>
            <Header_mini>Namn</Header_mini>
            <Default>{campaign.campaign.name}</Default>
          </MiniSection>
          <MiniSection>
            <Header_mini>Budget</Header_mini>
            {campaign.campaign.buyingType.daily ? (
              <Default>Daglig {campaign.campaign.price}kr/dag</Default>
            ) : (
              <Default>Livstid {campaign.campaign.price}kr</Default>
            )}
          </MiniSection>
          <MiniSection>
            <Header_mini>Tidsperiod</Header_mini>
            <Default>
              {campaign.campaign.startDate.toISOString().split('T')[0]} till{' '}
              {campaign.campaign.endDate.toISOString().split('T')[0]}
            </Default>
          </MiniSection>
        </Section>

        <MiniSection>
          <Header_mini>Målgrupp</Header_mini>
          <PrimaryButton
            title={'Lägg till målgrupp'}
            disabled={false}
            inHeader={false}
            onClick={() => handleClick('TargetGroup')}
            width={178}
          />
        </MiniSection>

        {campaign.campaign.targetGroups.map((group) => (
          <TargetGroupSection key={group.id}>
            {group.toAll ? (
              <MiniSection>
                <Default_medium>Målgrupp</Default_medium>
                <DetailSection>
                  <Default_medium>Namn</Default_medium>
                  <Default>Alla</Default>
                </DetailSection>
                <DetailSection>
                  <Default_medium>Demografi</Default_medium>
                  <Default>Alla</Default>
                </DetailSection>
                <DetailSection>
                  <Default_medium>Intressen</Default_medium>
                  <Default>Alla</Default>
                </DetailSection>
              </MiniSection>
            ) : (
              <MiniSection>
                <Default_medium>Målgrupp</Default_medium>
                <DetailSection>
                  <Default_medium>Namn</Default_medium>
                  <Default>Hämta namn</Default>
                </DetailSection>
                <DetailSection>
                  <Default_medium>Demografi</Default_medium>
                  <Default>Hämta demografi</Default>
                </DetailSection>
                <DetailSection>
                  <Default_medium>Intressen</Default_medium>
                  <Default>Hämta intressen</Default>
                </DetailSection>
              </MiniSection>
            )}
            <MiniSection>
              <Default_medium>Annonser</Default_medium>
              <AdSection>
                {group.ads.map((ad) => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 20,
                      width: '90px',
                      whiteSpace: "nowrap",
                      overflow: 'hidden',
                      msTextOverflow: "ellipsis"
                    }}
                  >
                    <Ad
                      image={ad.media}
                      bgColor={ad.adType === 'INGREDIENT' ? ad.bgColor : Colors.kurr_white}
                    ></Ad>
                    <DetailSection>
                      <Default_medium>Annonstyp</Default_medium>
                      {ad.adType === 'INGREDIENT' ? (
                        <Default>Livsmedel </Default>
                      ) : (
                        <Default>
                          {ad.adType.charAt(0).toUpperCase() + ad.adType.slice(1).toLowerCase()}{' '}
                        </Default>
                      )}
                    </DetailSection>
                    <DetailSection>
                      <Default_medium>Rubrik</Default_medium>
                      <Default>{ad.caption}</Default>
                    </DetailSection>
                    <DetailSection>
                      <Default_medium>Bildtext</Default_medium>
                      <Default>{ad.description}</Default>
                    </DetailSection>
                    {ad.adType === 'BANNER' ? (
                      <MiniSection>
                        <DetailSection>
                          <Default_medium>Länk</Default_medium>
                          <Default>{ad.button.link}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Knapp text</Default_medium>
                          <Default>{ad.button.buttonText}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Knapp färg</Default_medium>
                          <Default>{ad.button.buttonColor}</Default>
                        </DetailSection>
                      </MiniSection>
                    ) : (
                      <MiniSection>
                        <DetailSection>
                          <Default_medium>Kategori</Default_medium>
                          <Default>{ad.category}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Specialkost</Default_medium>
                          {ad.dietaryPreferences?.dairy === true && <Default>Laktosfri</Default>}
                          {ad.dietaryPreferences?.gluten === true && <Default>Glutenfri</Default>}
                          {ad.dietaryPreferences?.nuts === true && (
                            <Default>Fri från nötter</Default>
                          )}
                          {ad.dietaryPreferences?.vegan === true && <Default>Vegansk</Default>}
                          {ad.dietaryPreferences?.vegetarian === true && (
                            <Default>Vegetarisk</Default>
                          )}
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Näringsvärden</Default_medium>
                          <Default>{ad.nutritionValues}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Totalt koldioxidutsläpp</Default_medium>
                          <Default>{ad.emission?.totalFootprint}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Vikt i gram per styck</Default_medium>
                          <Default>{ad.weight?.gramsPerPiece}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Vikt i gram per förpackning</Default_medium>
                          <Default>{ad.weight?.gramsPerPackage}</Default>
                        </DetailSection>
                        <DetailSection>
                          <Default_medium>Bakgrundsfärg</Default_medium>
                          <Default>{ad.bgColor}</Default>
                        </DetailSection>
                      </MiniSection>
                    )}
                  </div>
                ))}
                <Ad />
                <AddCircleIcon
                  style={{
                    paddingLeft: '10px',
                    color: `${Colors.kurr_primary_piglet_peach}`,
                    paddingTop: '88px',
                    cursor: "pointer"
                  }}
                  onClick={() => handleClick('Ad')}
                />
              </AdSection>
            </MiniSection>
          </TargetGroupSection>
        ))}
        <PrimaryButton
          title={'Publicera'}
          disabled={false}
          inHeader={false}
          onClick={() => handleClick('Confirmation')}
          width={116}
        />
      </PreviewContent>
      <Preview>
        <Phone title={''} profile={'El taco truck'} description={''} image={''} adType="" />
      </Preview>
    </Content>
  );
};

export default PreviewPage;

const Content = styled.div`
  display: grid;
  grid-template-columns: 49% auto;
  gap: 10%;
`;

const PreviewContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 50px;
`;

const Preview = styled.div`
  position: fixed;
  top: 130px; 
  right: calc(100vw - 90vw);
}`;

const Section = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
`;

const MiniSection = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 15px;
`;

const DetailSection = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;
`;

const AdSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-start;
`;

const Ad = styled.div<{ image?: string; bgColor?: string }>`
  width: 85px;
  height: 184px;
  border-radius: 4px;
  border: 1px dashed ${Colors.grey_25};
  background-color: ${(props) => props.bgColor || Colors.white};
  background-image: ${(props) => (props.image ? `url(${props.image})` : 'none')};
  background-size: contain;
`;

const TargetGroupSection = styled.div`
  display: grid;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid ${Colors.grey_20};
  padding: 32px 32px;
  grid-template-columns: auto;
  gap: 45px;
  box-shadow: 5px 10px 20px #e9e9e9;
`;
