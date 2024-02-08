 type IndexedSearchResultsBossProps = {
  mapPath: string;
  mapName: string;
  bossPath: string;
  bossName: string;
  abilityPath: string;
  abilityName: string;
};

type IndexedSearchResultsProps = Array<IndexedSearchResultsBossProps> | null;

type SupportedDamageTypes = 'fire' | 'lightning' | 'cold' | 'chaos' | 'physical';

type SingleBossDataType = {
  name: string;
  phases: number;
  transmissions: number;
  damageTypes: SupportedDamageTypes[];
  abilities: BossAbilityType[];
};

type MultipleBossDataType = {
  multiple: boolean;
  bosses: BossDataType[];
};

type BossDataType = SingleBossDataType | MultipleBossDataType;

type PureBossAbilityType = {
  tip: string[];
  about?: string[];
  gif: string;
  isChallenge?: boolean;
  aboutChallenge?: string;
  type?: string;
  name?: string;
};

type BossAbilityType = {
  [abilityName: string]: PureBossAbilityType;
};

type Themes = 'light' | 'dark';

export type {
  Themes,
  BossAbilityType,
  PureBossAbilityType,
  BossDataType,
  MultipleBossDataType,
  SingleBossDataType,
  SupportedDamageTypes,
  IndexedSearchResultsProps,
  IndexedSearchResultsBossProps
}
