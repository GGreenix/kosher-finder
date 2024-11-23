// types.ts
export type KosherType = 'Mehadrin' | 'Rabbanut' | 'Badatz' | 'Landau';
export type SynagogueType = 'Ashkenazi' | 'Sephardi' | 'Mizrahi' | 'Chabad';

export interface Restaurant {
  id: number;
  name: string;
  type: string;
  kosherType: string;
  deliveryFee: string;
  deliveryTime: string;
  rating: string;
  image: string;
  sponsored: boolean;
}

export interface GroceryStore {
  id: number;
  name: string;
  type: string;
  kosherType: KosherType;
  deliveryTime: string;
  rating: string;
  image: string;
}

export interface Synagogue {
  id: number;
  name: string;
  type: SynagogueType;
  nextPrayer: string;
  prayerTime: string;
  rabbi: string;
  address: string;
  image: string;
}

export interface Category {
  id: string;
  icon: string;
  label: string;
}

// Types.ts
export interface Mikvah {
  id: number;
  name: string;
  address: string;
  phone: string;
  openingHours: string;
  rabbi: string;
  menSection: boolean;
  womenSection: boolean;
  image: string;
}
