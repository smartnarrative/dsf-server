import { publishDSFEvent } from "../services/aws/providers/SnsProvider";
import {
        DSFChannelType,
        DSFStory, DSFStoryType, initDSFStory,
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

story = initDSFStory(DSFStoryType.INCORPORATE);
// console.dir(story);

const bindMetaData = (epicType:string, storyType:string, event: DSFEventContainer) => {
  event = assoc('epic', epicType, event);
  event = assoc('story', storyType, event);
  return event;
}

export const processDSFEventContainer = (event: DSFEventContainer): DSFEventContainer => {
  // Channel derived from SNS MessageAttribute
  switch (event.channel) {
    case DSFChannelType.GOVERNANCE :
        // Extrapolate layer from context, choose enterprise for now 
        event = bindMetaData(
          // Need to map story type to epic type
          prop('epicType', layers[stack.ENTERPRISE_LAYER].channelMap[stack.GOVERNANCE_CHANNEL].epicMap[stack.GENESIS_EPIC]), 
          story.storyType, 
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
  return event;
};
