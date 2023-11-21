import { CampaignProvider } from '../state/Context';
import { TargetGroup } from '../types/AdTypes';
import { useState } from 'react';
import { useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';

const TargetGroupPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();
  console.log('campaing', campaign)

  const [formTarget, setFormTarget] = useState({
    id: 1,
    toAll: false,
    ads: []
  });

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const handleClick = () => {
    campaign.setCampaign({
      id: campaign.campaign.id,
      name: campaign.campaign.name,
      buyingType: { lifetime: campaign.campaign.buyingType.lifetime, daily: campaign.campaign.buyingType.daily },
      price: campaign.campaign.price,
      startDate: campaign.campaign.startDate,
      endDate: campaign.campaign.endDate,
      targetGroups: [{id: formTarget.id, toAll: formTarget.toAll, ads:[]}]
    });
    console.log('skickat!');
    navigate('/AdPage')
  };

  return (
    <CampaignProvider>
    <div>
      <p>Kampanj information:</p>
      <p>{campaign.campaign.name}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="number" value={formTarget.id} onChange={(e) => setFormTarget({...formTarget, id: parseInt(e.target.value)})}/>
        </label>
        <br />

        <label>
          toAll:
          <input id="toAll" type="radio" value={'toAll'} onClick={() => setFormTarget({...formTarget, toAll: true})}/>
        </label>
        <br />
        <button type="button" onClick={handleClick}>Skapa målgrupp</button>
      </form>
      <p>Targetpage</p>
    </div>
    </CampaignProvider>
  );
};

export default TargetGroupPage;

/*
const newBanner = { id,caption, description, mediaUrl, button };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setBanner(newBanner);
    console.log('newBanner', newBanner)
  };  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Caption:
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        MediaURL:
        <textarea value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} />
      </label>
      <label>
        Button link:
        <textarea value={button.link} onChange={(e) => setButton({...button, link: e.target.value})} />
      </label>
      <label>
        Button text:
        <textarea value={button.buttonText} onChange={(e) => setButton({...button, buttonText: e.target.value})} />
      </label>
      <label>
        Button color:
        <textarea value={button.buttonColor} onChange={(e) => setButton({...button, buttonColor: e.target.value})} />
      </label>
      <button type="submit">Create Ad</button>
    </form>
  );
};

export default AdForm;*/
