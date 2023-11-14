import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Campaign, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';

const CampaignPage: React.FC = () => {
  const navigate = useNavigate();

  const campaign: Campaign = {
    id: 1,
    name: 'Min kampanj',
    buyingType: { lifetime: true, daily: false },
    price: 100,
    startDate: new Date('2023-11-14'),
    endDate: new Date('2023-11-20'),
    targetGroups: [],
  };

  const handleClick = () => {
    navigate('./TargetGroupPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  }; 

  return (
    <CampaignProvider campaign={campaign}>
    <div>
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
    </form>

      <p>Hej</p>

      <button type="submit" onClick={handleClick}>
        Skapa kampanj
      </button>
    </div>
    </CampaignProvider>
  );
};

export default CampaignPage;
