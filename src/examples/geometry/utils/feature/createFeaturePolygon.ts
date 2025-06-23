import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { fromLonLat } from "ol/proj";

const createFeaturePolygon = (datas) => {
    // console.log("datas", datas);
    const coordinates: any[] = [];
    datas.forEach(item => {
      coordinates.push([item.longitude, item.latitude]);
    });
    const arrs = coordinates.map((c: any) => fromLonLat(c));
    const geometry = new Polygon([arrs]);
    const feature = new Feature({ geometry });
    feature.set("containerData", datas);
    return feature;
};

export default createFeaturePolygon;