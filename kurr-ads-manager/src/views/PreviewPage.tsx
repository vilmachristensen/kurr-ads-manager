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
          <div>
            Annonser:{' '}
            {group.ads.map((ad) => (
              <p>
                Id: {ad.id}, Caption: {ad.caption}, Description: {ad.description}, Typ: {ad.adType}
                {ad.adType === 'BANNER' ? (
                  <div>
                    <p>Button Link: {ad.button.link}</p>
                    <p>Button Text: {ad.button.buttonText}</p>
                    <p>Button Color: {ad.button.buttonColor}</p>
                    <p>MediaUrl: {ad.mediaUrl}</p>
                  </div>
                ) : (
                  <div>
                    <p>Category: {ad.category}</p>
                    {ad.dietaryPreferences?.dairy === true  && <p>Laktosfri</p>}
                    {ad.dietaryPreferences?.gluten === true  && <p>Glutenfri</p>}
                    {ad.dietaryPreferences?.nuts === true  && <p>Fri från nötter</p>}
                    {ad.dietaryPreferences?.vegan === true  && <p>Vegansk</p>}
                    {ad.dietaryPreferences?.vegetarian === true  && <p>Vegetarisk</p>}
                    <p>Nutriotionvalues: {ad.nutritionValues}</p>
                    <p>Totalfootprint: {ad.emission?.totalFootprint}</p>
                    <p>Grams per piece: {ad.weight?.gramsPerPiece}</p>
                    <p>Grams per package: {ad.weight?.gramsPerPackage}</p>
                    <p>Backgroundcolor: {ad.bgColor}</p>
                  </div>
                )}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewPage;
