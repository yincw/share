import getLayerById from "../layer/getLayerById";

const getFeatureById = ({
  featureId,
  layerId,
  map
}) => {
  const layer = getLayerById(layerId, map);
  const feature = layer.getSource().getFeatureById(featureId);
  return feature;
};

export default getFeatureById;