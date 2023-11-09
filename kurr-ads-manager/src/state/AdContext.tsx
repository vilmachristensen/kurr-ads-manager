import * as React from 'react';
import { PropsWithChildren } from 'react';
import { AdContextType, Banner, Ingredient } from '../types/AdTypes';
import TestForm from '../views/TestForm';
import { useState } from 'react';

export const AdContext = React.createContext<AdContextType | null>(null);
console.log('AdContext', AdContext)

const AdContextProvider: React.FC<PropsWithChildren<object>> = ({ children }) => {
//const AdContextProvider: React.FC<PropsWithChildren<Props>> = ({ children, foo }) => {
  const [banner, setBanner] = useState<Banner>({
      id: 0,
      caption: '',
      description: '',
      mediaUrl: '',
      button:{
        link: '',
        buttonText: '',
        buttonColor: '',
      }
  });
  
  const updateBanner = (currentBanner: Banner) => {
    console.log("Inne i updateBanner")
    const newBanner: Banner = {
      id: Math.random(),
      caption: currentBanner.caption,
      description: currentBanner.description,
      mediaUrl: currentBanner.mediaUrl,
      button:{
        link: currentBanner.button.link,
        buttonText: currentBanner.button.buttonText,
        buttonColor: currentBanner.button.buttonColor,
      } 
    };
    //setBanner([...banner, newBanner])
    setBanner(newBanner)
  };

  return (
    <AdContext.Provider value={{ banner, updateBanner}}>
      <TestForm/>
    </AdContext.Provider>
  );
};

export default AdContextProvider;
