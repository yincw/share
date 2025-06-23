import { Feature } from "ol";
import { LineString } from "ol/geom";
import { fromLonLat } from "ol/proj";

const createFeatureLine = (lines: any[]) => {
  // console.log("lines", lines);
  const arrs = lines.map((line: { longitude: number; latitude: number }) => fromLonLat([line.longitude, line.latitude]));
  const geometry = new LineString(arrs);
  const feature = new Feature({ geometry });
  feature.set("containerData", lines);
  return feature;
};

export default createFeatureLine;