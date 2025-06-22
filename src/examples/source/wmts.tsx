import React, { JSX } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import { RMap, RLayerWMTS } from "rlayers";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const WMTS = (): JSX.Element => {
	const url = "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS?service=WMTS&request=GetCapabilities";
  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };

  return (
    <BrowserOnly>
      {() => <RMap
        width={"100%"}
        height={"60vh"}
        initial={initial}
      >
        <RLayerWMTS
          // onCapabilities={function (opt) {
          //   console.log("opt", opt);
          // }}
          url={url}
          layer="World_Imagery"
          projection="EPSG:3857"
          zIndex={0}
        />
      </RMap>}
    </BrowserOnly>
  );
}

export default WMTS;