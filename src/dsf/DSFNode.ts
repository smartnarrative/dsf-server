import { publishDSFEvent } from "../services/aws/providers/SnsProvider";
import {
        DSFChannelType,
        DSFStory, DSFStoryMap, 
        DSFEventContainer 
} from './types';
import { initDSFLayerMap } from './DSFStack';
import { DSFLayer } from './types/DSFLayer';
import { initDSFChannelMap } from './types/DSFChannel';
import { initDSFEpicMap } from './types/DSFEpic';
import { stack } from './types/DSFStackMap';
import { assoc, prop } from 'ramda';

export const publishDSFEventContainer = async (event: DSFEventContainer) => {
  return await publishDSFEvent(event);
};

let layers:Array<DSFLayer> = [];
let story:DSFStory;

export const initDSFNode = async () => {
  // Instantiate layers
  layers = initDSFLayerMap();
  layers.forEach(l => {
    // Instantiate channels
    l.channelMap = initDSFChannelMap();
    l.channelMap.forEach(c => {
      // Instantiate epics
      c.epicMap = initDSFEpicMap();
    });
  });
};

const publishStory = (type: DSFStoryMap): DSFStory => {
  const theStory: DSFStory = {
    type: type,
    kpiScore: 0,
    eventMap: []
  };
  return theStory;
};

story = publishStory(DSFStoryMap.INCORPORATE);

const scoreStoryKPI = (kpi:number, theStory: DSFStory) => {
  theStory.kpiScore = kpi;
}

scoreStoryKPI(90, story);
console.dir(story);

const bindMetaData = (epicName:string, storyName:string, event: DSFEventContainer) => {
  event = assoc('epic', epicName, event);
  event = assoc('story', storyName, event);
  return event;
}

export const processDSFEventContainer = async(event: DSFEventContainer) => {
  // Channel derived from SNS MessageAttribute
  switch (event.channel) {
    case DSFChannelType.GOVERNANCE :
        // Extrapolate layer from context, choose enterprise for now 
        event = bindMetaData(
          // Need to map story type to epic type
          prop('type', layers[stack.ENTERPRISE_LAYER].channelMap[stack.GOVERNANCE_CHANNEL].epicMap[stack.GENESIS_EPIC]), 
          story.type, 
          event);
      break;
    case DSFChannelType.FINANCE :
      break;
    case DSFChannelType.MARKETING :
      break;
    case DSFChannelType.PRODUCTION :
      break;
    default:
      break;
  }
  console.dir(event);
};
