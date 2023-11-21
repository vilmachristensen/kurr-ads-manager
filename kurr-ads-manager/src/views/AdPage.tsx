import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';

const AdPage: React.FC = () => {
  const campaign = useCampaign();
  const navigate = useNavigate();


  return (
    <CampaignProvider>
      <div>

      </div>
    </CampaignProvider>


    
  );
};

export default AdPage;

{/** 
    <div>
       <p>AdPage</p>
       <p>Kampanj-namn</p>
       <p>{campaign.campaign.name}</p>
       <p>Målgruppsinformation:</p>
       {campaign.campaign.targetGroups.map((group) =>
       <p key = {group.id}>Id: {group.id}</p>
       )}
    </div>
    */}