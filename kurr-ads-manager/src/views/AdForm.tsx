import React, { useState } from 'react';
import { useCampaign } from '../state/Context';
import { TargetGroup, Campaign, Ad, Banner, Ingredient } from '../types/AdTypes';
import { CampaignProvider } from '../state/Context';
import DisplayCampaignContent from './DisplayCampaignContent';
import { link } from 'fs';

const ExampleComponent: React.FC = () => {
  const banner1: Banner = {
    id: 1,
    caption: '1',
    description: '2',
    mediaUrl: '3',
    button: { link: '4', buttonText: '5', buttonColor: '6' },
    adType: 'BANNER',
  };
  const ingredient1: Ingredient = {
    id: 1,
    caption: '7',
    description: '8',
    mediaUrl: '9',
    dietaryPreferences: { vegetarian: true, vegan: false, dairy: false, nuts: true, gluten: false },
    nutritionValues: '10',
    emission: { totalFootprint: 11 },
    weight: {gramsPerPackage: 12, gramsPerPiece: 13},
    bgColor: '14',
    adType: 'INGREDIENT',
    category: '15',
  };
  const targetGroup1: TargetGroup = { id: 1, toAll: true, ads: [banner1, ingredient1] };
  const campaign: Campaign = {
    id: 1,
    name: 'Min kampanj',
    buyingType: { lifetime: true, daily: false },
    price: 100,
    startDate: new Date('2023-11-14'),
    endDate: new Date('2023-11-20'),
    targetGroups: [targetGroup1],
  };

  return (
    <CampaignProvider campaign={campaign}>
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
