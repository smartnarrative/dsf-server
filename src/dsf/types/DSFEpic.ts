import { DSFStory } from './DSFStory';
import { DSFKpi } from './DSFKpi';

export enum DSFEpicType {
  GENESIS = "GENESIS",
  KNOWLEDGE = "KNOWLEDGE",
  PORTFOLIO = "PORTFOLIO",
  COMMUNICATION = "COMMUNICATION",
  SALES = "SALES"
};

export interface DSFEpic {
  epicType: DSFEpicType,
  storyMap: DSFStory[],
  KPIMap: Array<DSFKpi>
};

export const initDSFEpic = (epicType: DSFEpicType): DSFEpic => {
  const epic: DSFEpic = {
    epicType: epicType,
    storyMap: [],
    KPIMap: []
  };
  return epic;
}

export const initDSFEpicMap = (): Array<DSFEpic> => {
  const epicMap: Array<DSFEpic> = [];
  const genesisEpic: DSFEpic = initDSFEpic(DSFEpicType.GENESIS);
  const knowledgeEpic: DSFEpic = initDSFEpic(DSFEpicType.KNOWLEDGE);
  const portfolioEpic: DSFEpic = initDSFEpic(DSFEpicType.PORTFOLIO);
  const communicationEpic: DSFEpic = initDSFEpic(DSFEpicType.COMMUNICATION);
  const salesEpic: DSFEpic = initDSFEpic(DSFEpicType.SALES);
  epicMap.push(genesisEpic);
  epicMap.push(knowledgeEpic);
  epicMap.push(portfolioEpic);
  epicMap.push(communicationEpic);
  epicMap.push(salesEpic);
  return epicMap;
}