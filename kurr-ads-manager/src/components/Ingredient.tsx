import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';

const Ingredient: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const [formIngredient, setFormIngredient] = useState({
    id: 0,
    caption: '',
    description: '',
    mediaUrl: '',
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
    bgColor: '',
  });

  const handleClick = () => {
    campaign.setCampaign({
      ...campaign.campaign,
      targetGroups: campaign.campaign.targetGroups.map((group, index) =>
        index === campaign.campaign.targetGroups.length - 1
          ? {
              ...group,
              ads: [
                {
                  id: formIngredient.id,
                  caption: formIngredient.caption,
                  description: formIngredient.description,
                  mediaUrl: formIngredient.mediaUrl,
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
                },
              ],
            }
          : group,
      ),
    });

    console.log('Skickat annons');
    navigate('/PreviewPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <div>
        <p>Ingredient page</p>
        <form onSubmit={handleSubmit}>
          <label>
            Id:
            <input
              type="number"
              value={formIngredient.id}
              onChange={(e) =>
                setFormIngredient({ ...formIngredient, id: parseInt(e.target.value) })
              }
            />
          </label>
          <br />
          <label>
            Caption:
            <input
              type="text"
              value={formIngredient.caption}
              onChange={(e) => setFormIngredient({ ...formIngredient, caption: e.target.value })}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={formIngredient.description}
              onChange={(e) =>
                setFormIngredient({ ...formIngredient, description: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            MediaUrl:
            <input
              type="text"
              value={formIngredient.mediaUrl}
              onChange={(e) => setFormIngredient({ ...formIngredient, mediaUrl: e.target.value })}
            />
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              value={formIngredient.category}
              onChange={(e) => setFormIngredient({ ...formIngredient, category: e.target.value })}
            />
          </label>
          <br />
          <label>
            Vegetarisk:
            <input
              id="vegetarian"
              type="checkbox"
              value={'vegetarian'}
              onClick={() =>
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
            />
          </label>
          <br />
          <label>
            Vegansk:
            <input
              id="vegan"
              type="checkbox"
              value={'vegan'}
              onClick={() =>
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
            />
          </label>
          <br />
          <label>
            Laktosfri:
            <input
              id="dairy"
              type="checkbox"
              value={'dairy'}
              onClick={() =>
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
            />
          </label>
          <br />
          <label>
            Nötfri:
            <input
              id="nuts"
              type="checkbox"
              value={'nuts'}
              onClick={() =>
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
            />
          </label>
          <br />
          <label>
            Glutenfri:
            <input
              id="gluten"
              type="checkbox"
              value={'gluten'}
              onClick={() =>
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
            />
          </label>
          <br />
          <label>
            Nutritionvalues:
            <input
              type="text"
              value={formIngredient.nutritionValues}
              onChange={(e) =>
                setFormIngredient({ ...formIngredient, nutritionValues: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Emission:
            <input
              type="number"
              value={formIngredient.emission.totalFootprint}
              onChange={(e) =>
                setFormIngredient({
                  ...formIngredient,
                  emission: { totalFootprint: parseInt(e.target.value) },
                })
              }
            />
          </label>
          <br />
          <label>
            Weight in grams per piece:
            <input
              type="number"
              value={formIngredient.weight.gramsPerPiece}
              onChange={(e) =>
                setFormIngredient({
                  ...formIngredient,
                  weight: { gramsPerPiece: parseInt(e.target.value) , gramsPerPackage: formIngredient.weight.gramsPerPackage},
                })
              }
            />
          </label>
          <br />
          <label>
            Weight in grams per package:
            <input
              type="number"
              value={formIngredient.weight.gramsPerPackage}
              onChange={(e) =>
                setFormIngredient({
                  ...formIngredient,
                  weight: { gramsPerPiece: formIngredient.weight.gramsPerPiece , gramsPerPackage: parseInt(e.target.value)},
                })
              }
            />
          </label>
          <br />
          <label>
            Background-color:
            <input
              type="text"
              value={formIngredient.bgColor}
              onChange={(e) =>
                setFormIngredient({
                  ...formIngredient,
                  bgColor: e.target.value
                })
              }
            />
          </label>
        </form>
        <br />
        <button type="button" onClick={handleClick}>
          Skapa annons
        </button>
      </div>
    </CampaignProvider>
  );
};

export default Ingredient;
