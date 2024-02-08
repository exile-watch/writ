export type SupportedDamageTypes = 'fire' | 'lightning' | 'cold' | 'chaos' | 'physical';

export type SingleBossDataType = {
  name: string;
  phases: number;
  transmissions: number;
  damageTypes: SupportedDamageTypes[];
  abilities: BossAbilityType[];
};

export type MultipleBossDataType = {
  multiple: boolean;
  bosses: BossDataType[];
};

export type BossDataType = SingleBossDataType | MultipleBossDataType;

export type PureBossAbilityType = {
  tip: string[];
  about?: string[];
  gif: string;
  isChallenge?: boolean;
  aboutChallenge?: string;
  type?: string;
  name?: string;
};

export type BossAbilityType = {
  [abilityName: string]: PureBossAbilityType;
};

export type Themes = 'light' | 'dark';
