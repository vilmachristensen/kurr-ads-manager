import { useCampaign } from '../state/Context';
import { Banner, Ingredient } from '../types/AdTypes';

const DisplayCampaignContent: React.FC = () => {
  const campaign = useCampaign();

  return (
    <div>
      {/**       <h2>{campaign.name}</h2>
      {campaign.buyingType.daily ? <p>Daily</p> : <p>Lifetime</p>}
      <p>{campaign.price}</p>
      <p>{campaign.startDate.toString()}</p>
      <p>{campaign.endDate.toString()}</p>

      {campaign.targetGroups.map((group) => (
        <div key={group.id}>
          {group.toAll ? <p>To all</p> : <p>Not to all</p>}

          {group.ads.map((ad) => (
            <div key={ad.id}>
              <p>{ad.caption}</p>
              <p>{ad.description}</p>
              <p>{ad.mediaUrl}</p>
              {ad.adType == 'BANNER' ? (
                <p>
                  {(ad as Banner).button.link}, {(ad as
                  Banner).button.buttonText}, {(ad as Banner).button.buttonColor}
                </p>
              ) : (
                <p>
                  {(ad as Ingredient).dietaryPreferences?.gluten}, {(ad as Ingredient).emission?.totalFootprint}, {(ad as Ingredient).nutritionValues},
                  {(ad as Ingredient).weight?.gramsPerPackage}, {(ad as Ingredient).weight?.gramsPerPiece}, {(ad as Ingredient).bgColor}, 
                  {(ad as Ingredient).category}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}*/}

    </div>
  );
};

export default DisplayCampaignContent;
