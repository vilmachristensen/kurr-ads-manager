import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AdContextType, Banner } from '../types/AdTypes';

const AdContext = createContext<AdContextType | undefined>(undefined);

export const AdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [banner, setBanner] = useState<Banner | null>(null);

  return <AdContext.Provider value={{ banner, setBanner }}>{children}</AdContext.Provider>;
};

export const useAdContext = () => {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error('useAdContext must be used within an AdProvider');
  }
  console.log('Det här har satts: ', context)
  return context;
  
};