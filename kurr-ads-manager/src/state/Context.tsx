import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';
import { Campaign } from '../types/Types';

interface CampaignContextType {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const CampaignProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [campaign, setCampaign] = useState<Campaign>({
    id: 0,
    name: '',
    buyingType: { lifetime: false, daily: false },
    price: 0,
    startDate: new Date('2023-11-14'),
    endDate: new Date('2023-11-20'),
    targetGroups: []
    
  })

  const contextValue: CampaignContextType = {
    campaign,
    setCampaign,
  };

  return <CampaignContext.Provider value={contextValue}>{children}</CampaignContext.Provider>;
};

export const useCampaign = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within an CampaignProvider');
  }
  return context;
  
};