import { DSFEventContainer } from './DSFEvent';

export enum DSFStoryMap {
  INCORPORATE = "Form the enterprise"
};

export interface DSFStory {
  type: DSFStoryMap,
  kpiScore: number,
  eventMap: DSFEventContainer[]
}