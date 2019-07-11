import { DSFEventContainer } from './DSFEvent';
import { DSFKpi } from './DSFKpi';

export enum DSFStoryType {
  INIT = "",
  INCORPORATE = "Form the enterprise",
  INNOVATION = "Develop ideas",
  PORTFOLIO = "Create assets",
  CAMPAIGN = "Build brand",
  SALES = "Sell product",
};

export interface DSFStory {
  storyType: DSFStoryType,
  kpi: DSFKpi,
  eventMap: DSFEventContainer[],
}

export const initDSFStory = (storyType: DSFStoryType): DSFStory => {
  const story: DSFStory = {
    storyType: storyType,
    kpi: {
      indicator: "mock_kpi",
      baseline: 90,
      variance: 0,
    },
    eventMap: [],
  };
  return story;
}