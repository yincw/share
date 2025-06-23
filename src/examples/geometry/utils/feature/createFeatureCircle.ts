import { Feature } from "ol";
import { Circle } from "ol/geom";
import { fromLonLat } from "ol/proj";

const createFeatureCircle = (data, radius = 10) => {
  // console.log("data", data);
  // console.log("radius", radius);
  
  const geometry = new Circle(fromLonLat([data.longitude, data.latitude]), radius);
  const feature = new Feature({ geometry });
  feature.setId(data.id);
  feature.set("containerData", data);
  return feature;
};

export default createFeatureCircle;