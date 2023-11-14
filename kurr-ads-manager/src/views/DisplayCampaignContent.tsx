import { useCampaign } from "../state/Context";


const DisplayCampaignContent: React.FC = () => {
    const campaign = useCampaign();
  
    return (
      <div>
        <h2>{campaign.name}</h2>
        {campaign.targetGroups.map((group) => (
          <div key={group.id}>
            <h3>{group.toAll.valueOf()}</h3>
            <ul>
              {group.ads.map((ad) => (
                <li key={ad.id}>
                  {ad.title} - {ad.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

export default DisplayCampaignContent;