const getLayerById = (layerId, map) => {
  let selectedLayer;
  map.getLayers().forEach((layer) => {
    if (layer.getProperties().id === layerId) {
      selectedLayer = layer;
    }
  });
  return selectedLayer;
};

export default getLayerById;