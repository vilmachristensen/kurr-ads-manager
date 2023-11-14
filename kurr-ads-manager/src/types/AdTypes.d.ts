// BANNER
export interface Banner {
    id: number;
    caption: string;
    description: string;
    mediaUrl: string;
    button: Button;
  }
  
  interface Button {
    link: string;
    buttonText: string;
    buttonColor: string;
  }
  
  //INGREDIENT
  
  export interface Ingredient {
    id: number;
    caption: string;
    description: string;
    category: string;
    dietaryPreferences?: DietaryPreferences;
    nutritionValues?: string;
    emission?: Emission;
    mediaUrl: string;
    bgColor: string;
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

  interface Ad {
    id: number;
    title: string;
    content: string;
  }

  interface TargetGroup {
    id: number;
    toAll: boolean;
    ads: Ad[];
  }

  export type Campaign = {
    id: number;
    name: string;
    targetGroups: TargetGroup[];
  };
  
  /*
  export type AdContextType = {
    banner: Banner | null;
    setBanner: (banner: Banner) => void;
    //ingredient: Ingredient[];
    //recipe: Recipe[]
  };*/
  