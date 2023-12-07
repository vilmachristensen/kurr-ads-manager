import { CampaignProvider } from '../state/Context';
import { TargetGroup } from '../types/AdTypes';
import { useState } from 'react';
import { useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import { Default, Header_small } from '../styles/Text';
import RadioButton from '../components/buttons/RadioButton';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Colors from '../styles/Colors';
import { useId } from 'react';

const TargetGroupPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();
  const idString = useId();
  const idNumber = parseInt(idString.replace(/\D/g, ''));
  console.log('Generated ID String:', idString);
  console.log('Converted ID Number:', idNumber);
  console.log('campaing', campaign);

  const [formTarget, setFormTarget] = useState({
    id: 1,
    toAll: false,
    ads: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    campaign.setCampaign({
      ...campaign.campaign,
      targetGroups: [{ id: formTarget.id, toAll: formTarget.toAll, ads: [] }],
    });
    navigate('/AdPage');
  };

  return (
    <CampaignProvider>
      <div>
        <Header_small>Skapa målgrupp</Header_small>
        <div style={{ paddingTop: 50 }}>
          <Default style={{ color: Colors.grey_45 }}>Välj målgrupp</Default>
          <div style={{ paddingTop: 15 }}>
            <form onSubmit={handleSubmit}>
              <RadioButton
                onSelectionChange={() => setFormTarget({ ...formTarget, toAll: true })}
                option1="Annonsera till specifik målgrupp"
                option2="Annonsera till alla"
              ></RadioButton>
              <label htmlFor={idString}>
                Id:
                <input
                  readOnly
                  id={idString}
                  type="text"
                  value={formTarget.id}
                  onChange={(e) => setFormTarget({ ...formTarget, id: parseInt((e.target.value).replace(/\D/g, ''))})}
                />
              </label>
              <div style={{ paddingTop: 50 }}>
                <PrimaryButton
                  title="Nästa"
                  disabled={false}
                  onClick={handleClick}
                  inHeader={false}
                ></PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CampaignProvider>
  );
};

export default TargetGroupPage;

{
  /** 
        <label>
          toAll:
          <input id="toAll" type="radio" value={'toAll'} onClick={() => setFormTarget({...formTarget, toAll: true})}/>
        </label>
        <button type="button" onClick={handleClick}>Skapa målgrupp</button>
        */
}

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
