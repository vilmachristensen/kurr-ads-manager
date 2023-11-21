import { useCampaign } from '../state/Context';
import { Banner, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';

const PreviewPage: React.FC = () => {
  const campaign = useCampaign();

  return (
    <div>
      <p>PreviewPage</p>
      <p>Kampanj-namn</p>
      <p>{campaign.campaign.name}</p>
      <p>Målgruppsinformation:</p>
      {campaign.campaign.targetGroups.map((group) => (
        <div>
        <p key={group.id}>Id: {group.id} </p>
        <p>Annonser: {group.ads.map((ad) => (
          <p>Id: {ad.id}, Caption: {ad.caption}, Description: {ad.description}, MediaUrl: {ad.mediaUrl}, Typ: {ad.adType}</p>  
        ))}</p>
        </div>
      ))}
      <p>Annonser:</p>
    </div>
  );
};

export default PreviewPage;
