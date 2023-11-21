import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const [formBanner, setFormBanner] = useState({
    id: 0,
    caption: '',
    description: '',
    mediaUrl: '',
    adType: 'BANNER',
    button: { link: '', buttonText: '', buttonColor: '' },
  });

  /*
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
  */

  const handleClick = () => {
    campaign.setCampaign({
      ...campaign.campaign,
      targetGroups: campaign.campaign.targetGroups.map((group, index) => (
        index === campaign.campaign.targetGroups.length - 1
          ? {
              ...group,
              ads: [
                {
                  id: formBanner.id,
                  caption: formBanner.caption,
                  description: formBanner.description,
                  mediaUrl: formBanner.mediaUrl,
                  adType: 'BANNER',
                  button: {
                    link: formBanner.button.link,
                    buttonText: formBanner.button.buttonText,
                    buttonColor: formBanner.button.buttonColor,
                  },
                },
              ],
            }
          : group
      ))
    })

    console.log("Skickat annons")
    navigate('/PreviewPage')
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <div>
        <p>Ad page</p>
        <form onSubmit={handleSubmit}>
          <label>
            Id:
            <input
              type="number"
              value={formBanner.id}
              onChange={(e) => setFormBanner({ ...formBanner, id: parseInt(e.target.value) })}
            />
          </label>
          <br />
          <label>
            Caption:
            <input
              type="text"
              value={formBanner.caption}
              onChange={(e) => setFormBanner({ ...formBanner, caption: e.target.value })}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={formBanner.description}
              onChange={(e) => setFormBanner({ ...formBanner, description: e.target.value })}
            />
          </label>
          <br />
          <label>
            MediaUrl:
            <input
              type="text"
              value={formBanner.mediaUrl}
              onChange={(e) => setFormBanner({ ...formBanner, mediaUrl: e.target.value })}
            />
          </label>
          <br />
           <label>
            Button link:
            <textarea
              value={formBanner.button.link}
              onChange={(e) =>
                setFormBanner({
                  ...formBanner,
                  button: {
                    link: e.target.value,
                    buttonText: formBanner.button.buttonText,
                    buttonColor: formBanner.button.buttonColor
                  },
                })
              }
            />
          </label>
          <br />
          <label>
            Button text:
            <textarea
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
            />
          </label>
          <br />
          <label>
            Button color:
            <textarea
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

export default AdPage;

{
  /** 
    <div>
       <p>AdPage</p>
       <p>Kampanj-namn</p>
       <p>{campaign.campaign.name}</p>
       <p>Målgruppsinformation:</p>
       {campaign.campaign.targetGroups.map((group) =>
       <p key = {group.id}>Id: {group.id}</p>
       )}
    </div>
    */
}
