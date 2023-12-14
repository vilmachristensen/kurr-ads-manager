import { useEffect, useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import { Default, Header_mini } from '../styles/Text';
import TextInputField from './TextInputField';
import DropDown from './DropDown';
import styled from 'styled-components';
import PrimaryButton from './buttons/PrimaryButton';
import ColorPicker from './ColorPicker';
import CheckboxButton from './buttons/CheckboxButton';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import Colors from '../styles/Colors';

interface IngredientProps {
  getFormIngredient: any;
}

const Ingredient: React.FC<IngredientProps> = ({getFormIngredient }) => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const [formIngredient, setFormIngredient] = useState({
    id: 0,
    caption: '',
    description: '',
    adType: 'INGREDIENT',
    category: '',
    dietaryPreferences: {
      vegetarian: false,
      vegan: false,
      dairy: false,
      nuts: false,
      gluten: false,
    },
    nutritionValues: '',
    emission: { totalFootprint: 0 },
    weight: { gramsPerPiece: 0, gramsPerPackage: 0 },
    bgColor: '#262626',
    media: '',
  });

  useEffect(() => {
    getFormIngredient(formIngredient)
  }, [formIngredient])

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
                  caption: formIngredient.caption,
                  description: formIngredient.description,
                  adType: 'INGREDIENT',
                  category: formIngredient.category,
                  dietaryPreferences: {
                    vegetarian: formIngredient.dietaryPreferences.vegetarian,
                    vegan: formIngredient.dietaryPreferences.vegan,
                    dairy: formIngredient.dietaryPreferences.dairy,
                    nuts: formIngredient.dietaryPreferences.nuts,
                    gluten: formIngredient.dietaryPreferences.gluten,
                  },
                  nutritionValues: formIngredient.nutritionValues,
                  emission: { totalFootprint: formIngredient.emission.totalFootprint },
                  weight: {
                    gramsPerPiece: formIngredient.weight.gramsPerPiece,
                    gramsPerPackage: formIngredient.weight.gramsPerPackage,
                  },
                  bgColor: formIngredient.bgColor,
                  media: 'bildadress',
                },
              ],
            }
          : group,
      ),
    });

    console.log('Skickat annons');
    navigate('/PreviewPage');
  };

  const handleMediaUpload = () => {
    console.log('Media uppladdning');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <Content>
        <Header_mini>Inställningar för livsmedel</Header_mini>
        <form onSubmit={handleSubmit}>
          <FormContent>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Rubrik*</Default>
              <TextInputField
                onChange={(e) => setFormIngredient({ ...formIngredient, caption: e.target.value })}
                value={formIngredient.caption}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Bildtext*</Default>
              <TextInputField
                onChange={(e) =>
                  setFormIngredient({ ...formIngredient, description: e.target.value })
                }
                value={formIngredient.description}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <DropDown
              title="Kategori"
              width={318}
              label="Kategori"
              inHeader={false}
              menuItems={[
                { item: 'Välj kategori' },
                { item: 'Mejeri' },
                { item: 'Pasta' },
                { item: 'Drycker' },
                { item: 'Texmex' },
              ]}
              value={formIngredient.category}
              onChange={(e) => setFormIngredient({ ...formIngredient, category: e.target.value })}
            ></DropDown>
            <MiniSection>
            <Default style={{ paddingBottom: 5 }}>Specialkost</Default>
            <Section>
              <CheckboxButton
                onChange={() =>
                  setFormIngredient({
                    ...formIngredient,
                    dietaryPreferences: {
                      vegetarian: !false,
                      vegan: formIngredient.dietaryPreferences.vegan,
                      dairy: formIngredient.dietaryPreferences.dairy,
                      nuts: formIngredient.dietaryPreferences.nuts,
                      gluten: formIngredient.dietaryPreferences.gluten,
                    },
                  })
                }
                option1="Vegetarisk"
              ></CheckboxButton>
              <CheckboxButton
                onChange={() =>
                  setFormIngredient({
                    ...formIngredient,
                    dietaryPreferences: {
                      vegetarian: formIngredient.dietaryPreferences.vegetarian,
                      vegan: !false,
                      dairy: formIngredient.dietaryPreferences.dairy,
                      nuts: formIngredient.dietaryPreferences.nuts,
                      gluten: formIngredient.dietaryPreferences.gluten,
                    },
                  })
                }
                option1="Vegansk"
              ></CheckboxButton>
              <CheckboxButton
                onChange={() =>
                  setFormIngredient({
                    ...formIngredient,
                    dietaryPreferences: {
                      vegetarian: formIngredient.dietaryPreferences.vegetarian,
                      vegan: formIngredient.dietaryPreferences.vegan,
                      dairy: !false,
                      nuts: formIngredient.dietaryPreferences.nuts,
                      gluten: formIngredient.dietaryPreferences.gluten,
                    },
                  })
                }
                option1="Laktosfri"
              ></CheckboxButton>
              <CheckboxButton
                onChange={() =>
                  setFormIngredient({
                    ...formIngredient,
                    dietaryPreferences: {
                      vegetarian: formIngredient.dietaryPreferences.dairy,
                      vegan: formIngredient.dietaryPreferences.vegan,
                      dairy: formIngredient.dietaryPreferences.dairy,
                      nuts: !false,
                      gluten: formIngredient.dietaryPreferences.gluten,
                    },
                  })
                }
                option1="Nötfri"
              ></CheckboxButton>
              <CheckboxButton
                onChange={() =>
                  setFormIngredient({
                    ...formIngredient,
                    dietaryPreferences: {
                      vegetarian: formIngredient.dietaryPreferences.dairy,
                      vegan: formIngredient.dietaryPreferences.vegan,
                      dairy: formIngredient.dietaryPreferences.dairy,
                      nuts: formIngredient.dietaryPreferences.nuts,
                      gluten: !false,
                    },
                  })
                }
                option1="Glutenfri"
              ></CheckboxButton>
            </Section>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Näringsvärden</Default>
              <TextInputField
                onChange={(e) =>
                  setFormIngredient({ ...formIngredient, nutritionValues: e.target.value })
                }
                value={formIngredient.nutritionValues}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>CO2e-värde (kg)</Default>
              <TextInputField
                onChange={(e) =>
                  setFormIngredient({
                    ...formIngredient,
                    emission: { totalFootprint: parseInt(e.target.value) },
                  })
                }
                value={formIngredient.emission.totalFootprint}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Vikt i gram per styck</Default>
              <TextInputField
                onChange={(e) =>
                  setFormIngredient({
                    ...formIngredient,
                    weight: {
                      gramsPerPiece: parseInt(e.target.value),
                      gramsPerPackage: formIngredient.weight.gramsPerPackage,
                    },
                  })
                }
                value={formIngredient.weight.gramsPerPiece}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <MiniSection>
              <Default style={{ paddingBottom: 5 }}>Vikt i gram per förpackning</Default>
              <TextInputField
                onChange={(e) =>
                  setFormIngredient({
                    ...formIngredient,
                    weight: {
                      gramsPerPiece: formIngredient.weight.gramsPerPiece,
                      gramsPerPackage: parseInt(e.target.value),
                    },
                  })
                }
                value={formIngredient.weight.gramsPerPackage}
                disabled={false}
                required={true}
              ></TextInputField>
            </MiniSection>
            <PrimaryButton
              onClick={handleMediaUpload}
              title="Ladda upp media"
              disabled={false}
              inHeader={false}
              width={204}
              icon={<PhotoOutlinedIcon style={{ color: Colors.kurr_white, fontSize: 'large' }} />}
            />
            <MiniSection>
            <Default style={{ paddingBottom: 5 }}>Bakgrundsfärg*</Default>
            <ColorPicker
              value={formIngredient.bgColor}
              onChange={(e) =>
                setFormIngredient({
                  ...formIngredient,
                  bgColor: e.target.value,
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
          width={91}
          onClick={handleClick}
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

export default Ingredient;
