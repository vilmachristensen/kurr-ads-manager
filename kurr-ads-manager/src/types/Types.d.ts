// BASE OF AD
interface BaseAd {
  id: number;
  caption: string;
  description: string;
  adType: 'BANNER' | 'INGREDIENT';
}

// BANNER
export interface Banner extends BaseAd{
    adType: 'BANNER';
    media?: string;
    mediaUrl: string;
    button: Button;
  }
  
  interface Button {
    link: string;
    buttonText: string;
    buttonColor: string;
  }
  
  // INGREDIENT
  export interface Ingredient extends BaseAd {
    adType: 'INGREDIENT';
    category: string;
    dietaryPreferences?: DietaryPreferences;
    nutritionValues?: string;
    emission?: Emission;
    weight?: Weight;
    bgColor: string;
    media?: string;
  }
  
  interface DietaryPreferences {
    vegetarian?: boolean;
    vegan?: boolean;
    dairy?: boolean;
    nuts?: boolean;
    gluten?: boolean;
  }
  
  interface Emission {
    totalFootprint: number; // co2e per kg
  }

  interface Weight {
    gramsPerPiece: number;
    gramsPerPackage: number;
  }

  // AD
  type Ad = Banner | Ingredient;

  // TARGET GROUP
  interface TargetGroup {
    id: number;
    toAll: boolean;
    ads: Ad[];
  }

  // CAMPAIGN
  export type Campaign = {
    id: number;
    name: string;
    buyingType: BuyingType;
    price: number;
    startDate: Date;
    endDate: Date;
    targetGroups: TargetGroup[];
  };

  interface BuyingType {
    lifetime: boolean;
    daily: boolean;
  }
  