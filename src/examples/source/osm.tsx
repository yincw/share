import React, { JSX, useState, useCallback } from "react";
import { RMap, ROSM, RLayerVector, RStyle } from "rlayers";
import { Feature } from "ol";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";
import "ol/ol.css";
import geojsonFeatures from "./jx.json";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const OSM = (): JSX.Element => {
  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };

  const data = new GeoJSON({
    featureProjection: "EPSG:3857",
    // featureClass: Feature
  })
  .readFeatures(geojsonFeatures) as Feature<Point>[];

  return (
    <RMap
      width={"100%"}
      height={"60vh"}
      initial={initial}
    >
      <ROSM />
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

export default OSM;