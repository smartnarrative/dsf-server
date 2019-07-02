import { DSFEpic } from './DSFEpic';

export enum DSFChannelType  {
  GOVERNANCE = "GOVERNANCE",
  FINANCE = "FINANCE",
  MARKETING = "MARKETING",
  PRODUCTION = "PRODUCTION"
}

export interface DSFChannel {
  type: DSFChannelType,
  epicMap: DSFEpic[]
};

export const initDSFChannel = (channelType: DSFChannelType): DSFChannel => {
  const channel: DSFChannel = {
    type: channelType,
    epicMap: []
  };
  return channel;
};

export const initDSFChannelMap = (): Array<DSFChannel> => {
  const channelMap: Array<DSFChannel> = [];
  const governanceChannel: DSFChannel = initDSFChannel(DSFChannelType.GOVERNANCE);
  const financeChannel: DSFChannel = initDSFChannel(DSFChannelType.FINANCE);
  const marketingChannel: DSFChannel = initDSFChannel(DSFChannelType.MARKETING);
  const productionChannel: DSFChannel = initDSFChannel(DSFChannelType.PRODUCTION);
  channelMap.push(governanceChannel);
  channelMap.push(financeChannel);
  channelMap.push(marketingChannel);
  channelMap.push(productionChannel);
  return channelMap;  
}
