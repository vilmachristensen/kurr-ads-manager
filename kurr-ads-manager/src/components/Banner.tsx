import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';

const Banner: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();

  const [formBanner, setFormBanner] = useState({
    id: 0,
    caption: '',
    description: '',
    mediaUrl: '',
    media: '',
    adType: 'BANNER',
    button: { link: '', buttonText: '', buttonColor: '' },
  });
  
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
          : group
      ))
    })

    console.log("Skickat banner annons")
    navigate('/PreviewPage')
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <div>
        <p>Banner page</p>
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

export default Banner;
