import * as React from 'react';
import { PropsWithChildren } from 'react';
import { AdContextType, Banner, Ingredient } from '../types/AdTypes';

interface Props {
  foo: string;
}

export const Context = React.createContext<AdContextType | null>(null);

const AdContextProvider: React.FC<PropsWithChildren<Props>> = ({ children, foo }) => {
  const [banner, setBanner] = React.useState<Banner[]>([
    {
      id: 0,
      caption: '',
      description: '',
      mediaUrl: '',
      button:{
        link: '',
        buttonText: '',
        buttonColor: '',
      } 
    }
  ]);
  //const [ingredient, setIngredient] = React.useState<Ingredient[]>([]);
  const savedBanner = (currentBanner : Banner) => {
    const newBanner: Banner = {
      id: Math.random(),
      caption: currentBanner.caption,
      description: currentBanner.description,
      mediaUrl: currentBanner.mediaUrl,
      button:{
        link: currentBanner.button.link,
        buttonText: currentBanner.button.buttonText,
        buttonColor: currentBanner.button.buttonText,
      } 
    };
    setBanner([...banner, newBanner])
  };

  const updatedBanner = (id : number) => {
    banner.filter((currentBanner : Banner) => {
      if(currentBanner.id === id) {
        setBanner([...banner]);
      }
    })
  }

  console.log("savedBanner", savedBanner)

  return (
    <Context.Provider value={{ banner, savedBanner, updatedBanner }}>
      {children}
    </Context.Provider>
  );
};

export default AdContextProvider;
