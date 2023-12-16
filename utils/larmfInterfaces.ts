

export interface LarmfAttribute {
    trait_type: string;
    value: string;
    // max_value?: number;
  }
  
  export interface LarmfStats {
    type: string;
    slime: number;
    speed: number;
    spice: number;
    stealth: number;
    stink: number;
  }
  
  export interface Larmf {
    edition: number;
    name: string;
    description: string;
    image: string;
    image_cutout: string;
    dna: string;
    lucky_number: number;
    stats: LarmfStats;
    attributes: LarmfAttribute[];
    derived_from: Array<{
      name: string;
      network: string;
      src: string;
    }>;
  }
  