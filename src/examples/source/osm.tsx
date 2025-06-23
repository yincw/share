import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { JSX } from "react";
import { RMap, ROSM } from "rlayers";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const OSM = (): JSX.Element => {
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
        <ROSM />
      </RMap>}
    </BrowserOnly>
  );
}

export default OSM;