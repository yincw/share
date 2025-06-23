import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const createLayer = ({
  id, 
  zIndex = 1, 
  map
}): any => {
  // console.log("createLayer id", id);
  // console.log("createLayer zIndex", zIndex);
  // console.log("createLayer map", map);
  const vectorSource = new VectorSource();
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex: zIndex || 1
  });
  if (id) {
    vectorLayer.set("id", id);
  };
  if (map) {
    const ol = map?.ol;
    ol.addLayer(vectorLayer);
  };

  return {
    vectorSource,
    vectorLayer
  };
};

export default createLayer;