import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Campaign } from '../types/AdTypes';

const CampaignContext = createContext<Campaign | undefined>(undefined);

export const CampaignProvider: React.FC<{ campaign: Campaign; children: ReactNode }> = ({ campaign, children }) => { //kanske ta bort export?
  //const [campaign, setCampaign] = useState<Campaign | null>(null);

  return <CampaignContext.Provider value={campaign}>{children}</CampaignContext.Provider>;
};

export const useCampaign = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useAdContext must be used within an AdProvider');
  }
  console.log('Det här har satts: ', context)
  return context;
  
};