import { CampaignProvider } from '../state/Context';
import { Banner, Ingredient } from '../types/AdTypes';

const TargetGroupPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('skickat!');
  };

  /*
  id: number;
    toAll: boolean;
    ads: Ad[];*/

  return (
    <CampaignProvider campaign={camp}>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="text" value={1} readOnly />
        </label>
        <br />

        <label>
          toAll:
          <input type="text" value={} />
        </label>
        <br />
        <button type="submit">Skapa målgrupp</button>
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
