import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { JSX } from "react";
import { RMap, RLayerTileWMS } from "rlayers";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const WMS = (): JSX.Element => {
  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };
	const url = "https://sampleserver6.arcgisonline.com/arcgis/services/Toronto/ImageServer/WMSServer?request=GetCapabilities&service=WMS";

  return (
    <BrowserOnly>
      {() => <RMap
        width={"100%"}
        height={"60vh"}
        initial={initial}
      >
        <RLayerTileWMS
          url={url}
          projection="EPSG:3857"
          zIndex={0}
        />
      </RMap>}
    </BrowserOnly>
  );
}

export default WMS;