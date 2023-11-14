import React, { useState } from 'react';
import { useCampaign } from '../state/Context';
import { TargetGroup, Campaign, Ad } from '../types/AdTypes';
import { CampaignProvider } from '../state/Context';
import DisplayCampaignContent from './DisplayCampaignContent';


const ExampleComponent: React.FC = () => {
  
  const ad1: Ad = {id: 1, title: 'hej', content: 'hejsan'}
  const targetGroup1: TargetGroup = {id: 1, toAll: true, ads: [ad1]}
  const campaign: Campaign = {id: 1, name: 'My Campaign', targetGroups: [targetGroup1]}
  
  

  return (
    <CampaignProvider campaign={campaign}>
      {/* Your component code here */}
      <DisplayCampaignContent />
    </CampaignProvider>
  );
};

export default ExampleComponent;

/*
const MAX_VALUE = 1000;

const AdForm: React.FC = () => {
  
  
  const { setBanner } = useAdContext();
  const [id, setId] = useState(Math.floor(Math.random()*MAX_VALUE));
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [button, setButton] = useState({
    link: '',
    buttonText: '',
    buttonColor: '',
  }
  );

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