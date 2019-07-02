import {  DSFLayer, DSFLayerType, initDSFLayer } from './types/DSFLayer';

export interface DSFStack {
  layerMap: Array<DSFLayer>;
}

export const initDSFLayerMap = (): Array<DSFLayer> => {
  const layerMap: Array<DSFLayer> = [];
  const enterpriseLayer: DSFLayer = initDSFLayer(DSFLayerType.ENTERPRISE);
  const technologyLayer: DSFLayer = initDSFLayer(DSFLayerType.TECHNOLOGY);
  const personalLayer: DSFLayer = initDSFLayer(DSFLayerType.PERSONAL);
  layerMap.push(enterpriseLayer);
  layerMap.push(technologyLayer);
  layerMap.push(personalLayer);
  return layerMap;
};