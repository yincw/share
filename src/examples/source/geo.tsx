import React, { JSX, useState, useCallback } from "react";
import { RMap, RLayerTile, RLayerVector, RStyle } from "rlayers";
import { Feature } from "ol";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";
import "ol/ol.css";

import geojsonFeatures from "./wh.json";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const Geo = (): JSX.Element => {
  const [flow, setFlow] = useState<any[]>([]);

	const url = "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };

  const data = new GeoJSON({
    featureProjection: "EPSG:3857",
    // featureClass: Feature
  })
  .readFeatures(geojsonFeatures) as Feature<Point>[];

  console.log("data", data);
  

  return (
    <RMap
      width={"100%"}
      height={"60vh"}
      initial={initial}
    >
      <RLayerTile
        url={url}
        zIndex={0}
      />
      <RLayerVector
        zIndex={10}
        features={
          data
        }
      >
        <RStyle.RStyle>
          <RStyle.RCircle radius={5}>
            <RStyle.RFill color="blue" />
          </RStyle.RCircle>
        </RStyle.RStyle>
      </RLayerVector>
    </RMap>
  );
}

export default Geo;