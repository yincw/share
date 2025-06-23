import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";

// type: point
const createFeature = (data: any) => {
  // console.log("createFeature data", data);
  const geometry = new Point(fromLonLat([data.longitude, data.latitude]));
  const feature = new Feature({ geometry });
  feature.setId(data.id);
  feature.set("containerData", data);
  return feature;
};

export default createFeature;