import { useState } from 'react';
import { CampaignProvider, useCampaign } from '../state/Context';
import { Banner, Campaign, Ingredient } from '../types/AdTypes';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/buttons/PrimaryButton';

const CampaignPage: React.FC = () => {
  const navigate = useNavigate();
  const campaign = useCampaign();

  const [formCampaign, setFormCampaign] = useState({
    name: '',
    buyingType: { lifetime: false, daily: false },
    price: 0,
    startDate: new Date('2023-11-14'),
    endDate: new Date('2023-11-20'),
    targetGroups: [],
  });


  console.log('Campaign: ', campaign);

  const handleClick = () => {
    campaign.setCampaign({
      id: 1,
      name: formCampaign.name,
      buyingType: {
        lifetime: formCampaign.buyingType.lifetime,
        daily: formCampaign.buyingType.daily,
      },
      price: formCampaign.price,
      startDate: formCampaign.startDate,
      endDate: formCampaign.endDate,
      targetGroups: [],
    });
    navigate('/TargetGroupPage');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CampaignProvider>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={formCampaign.name}
              onChange={(e) => setFormCampaign({ ...formCampaign, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Lifetime:
            <input
              id="lifetime"
              type="radio"
              value={'Lifetime'}
              onClick={() =>
                setFormCampaign({ ...formCampaign, buyingType: { lifetime: true, daily: false } })
              }
            />
          </label>
          <br />
          <label>
            Daily:
            <input
              id="daily"
              type="radio"
              value={'Daily'}
              onClick={() =>
                setFormCampaign({ ...formCampaign, buyingType: { lifetime: false, daily: true } })
              }
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={formCampaign.price}
              onChange={(e) =>
                setFormCampaign({ ...formCampaign, price: parseInt(e.target.value) })
              }
            />
          </label>
          <br />
          <label>
            Start date:
            <input
              type="date"
              value={formCampaign.startDate.toISOString().split('T')[0]}
              onChange={(e) =>
                setFormCampaign({ ...formCampaign, startDate: new Date(e.target.value) })
              }
            />
          </label>
          <br />
          <label>
            End date:
            <input
              type="date"
              value={formCampaign.endDate.toISOString().split('T')[0]}
              onChange={(e) =>
                setFormCampaign({ ...formCampaign, endDate: new Date(e.target.value) })
              }
            />
          </label>
        </form>
        <PrimaryButton onClick={handleClick} title='hej' disabled={false} inHeader={false}/>
      </div>
    </CampaignProvider>
  );
};

export default CampaignPage;
