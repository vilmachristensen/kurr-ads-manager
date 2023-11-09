import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdContextProps {
  ad: Ad | null;
  setAd: (ad: Ad) => void;
}

interface Ad {
  // Define the properties of your ad here
  title: string;
  description: string;
  // Add more properties as needed
}

const AdContext = createContext<AdContextProps | undefined>(undefined);

export const AdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ad, setAd] = useState<Ad | null>(null);

  return <AdContext.Provider value={{ ad, setAd }}>{children}</AdContext.Provider>;
};

export const useAdContext = () => {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error('useAdContext must be used within an AdProvider');
  }
  console.log('Det här har satts: ', context)
  return context;
  
};