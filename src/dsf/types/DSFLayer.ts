import { DSFChannel } from './DSFChannel';

export enum DSFLayerType {
  ENTERPRISE = "ENTERPRISE",
  TECHNOLOGY = "TECHNOLOGY",
  PERSONAL = "PERSONAL"
};

export interface DSFLayer {
  type: DSFLayerType,
  channelMap: DSFChannel[];
};

export const initDSFLayer = (layerType: DSFLayerType): DSFLayer => {
  const layer: DSFLayer = {
    type: layerType,
    channelMap: []
  };
  return layer;
};