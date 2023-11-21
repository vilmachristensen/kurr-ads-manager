import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Ingredient from '../components/Ingredient';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();
  const [click, setClick] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  /*
  const handleClick = (sts: string) => {
    if (sts === 'banner') {
      return <Banner />;
    } else {
      return <Ingredient />;
    }
  };
  */

  return (
    <div>
      <button onClick={() => setClick('banner')}>Banner</button>
      <button onClick={() => setClick('ingredient')}>Ingredient</button>
      {click === 'banner' && <Banner />}
      {click === 'ingredient' && <Ingredient />}
    </div>
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
