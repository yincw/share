import React, { JSX } from "react";
import { RMap, RLayerTile } from "rlayers";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const XYZ = (): JSX.Element => {
	const url = "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };

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
    </RMap>
  );
}

export default XYZ;