import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { JSX } from "react";
import { RMap, RLayerTile, RLayerVector, RStyle } from "rlayers";
import { Feature } from "ol";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";
import "ol/ol.css";

import geojsonFeatures from "./jx.json";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const Geo = (): JSX.Element => {
  const initial = {
    center: fromLonLat(origin),
    zoom: 10
  };
	const url = "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";

  const data = new GeoJSON()
  .readFeatures(geojsonFeatures, {
    featureProjection: 'EPSG:3857'
  }) as Feature<Point>[];

  return (
    <BrowserOnly>
    {() => <RMap
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
          features={data}
        >
          <RStyle.RStyle>
              <RStyle.RStroke color="#007bff" width={2} />
              <RStyle.RFill color="#ff000060" />
            </RStyle.RStyle>
        </RLayerVector>
      </RMap>}
    </BrowserOnly>
  );
}

export default Geo;
