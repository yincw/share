import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { JSX, useRef, useState, useEffect } from "react";
import { RMap, RLayerTile } from "rlayers";
import { fromLonLat } from "ol/proj";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import { Feature } from "ol";
// import { Circle, LineString, Point } from "ol/geom";
import { Style, Icon, Circle, Text, Fill, Stroke } from "ol/style";

// ol (mapRef.current.map.ol)
  // VectorLayer
    // source: VectorSource
      // Feature
        // geometry: Point
        // Style
          // image: Icon
          // text: Text
        // iconFeature.setId()
        // iconFeature.setStyle(iconStyle)
      // vectorSource.addFeatures(iconFeature) / vectorSource.addFeature()
  // vectorLayer.set("id", )
// ol.addLayer(vectorLayer)

import "ol/ol.css";
import createLayer from './utils/layer/createLayer';
import createFeature from './utils/feature/createFeature';
import getFeatureById from "./utils/feature/getFeatureById";
import icon from "./img/icon.png";

// 武汉市-江夏区
const origin = [114.322000, 30.375699];

const XYZ = (): JSX.Element => {
  const [lists, setLists] = useState([
    {
      id: "1",
      longitude: 114.373460,
      latitude: 30.413082,
      label: "庙山站",
      show: false
    },
    {
      id: "2",
      longitude: 114.375771,
      latitude: 30.406175,
      label: "保利海上五月花",
      show: true
    },
    {
      id: "3",
      longitude: 	114.413045,
      latitude: 30.400763,
     label: "阳光100大湖第",
      show: true
    }
  ]);
	const mapRef = useRef<any>(null);

  const initial = {
    center: fromLonLat(origin),
    zoom: 11
  };
	const url = "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";

  useEffect(() => {
    // console.log("mapRef", mapRef);
    
    if (mapRef.current) {
      const { vectorSource } = createLayer({
        id: "icon",
        zIndex: 1,
        map: mapRef.current
      });
      const iconFeatures = lists.map(item => {
        const feature = createFeature(item);
        feature.setId(item.id);
        const iconStyle = new Style({
          image: new Icon({
            src: icon,
            scale: 0.6
          }),
          zIndex: 2
        });
        feature.setStyle(iconStyle);
        const lastItem = lists[lists.length-1];
        if (item.id === lastItem.id) {
          const iconStyle2 = new Style({
            image: new Circle({
              radius: 4,
              fill: new Fill({
                color: "#ff000070"
              }),
              stroke: new Stroke({
                color: "#ff000090",
                width: 1
              })
            }),
            zIndex: 2
          });
          feature.setStyle(iconStyle2);
        }
        return feature;
      });
      vectorSource.addFeatures(iconFeatures);

      mapRef.current.ol.on("click", handleMapClick);
    }

    return () => {
      mapRef.current?.ol.un("click", handleMapClick);
    };
  }, [lists]);

  const handleMapClick = (event: any) => {
    const ol = mapRef.current.ol;
    // 获取 feature
    const feature = ol.forEachFeatureAtPixel(event.pixel, (feature: any) => feature);
    console.log("handleMapClick feature", feature);
    if (feature) {
			const currentVal = feature.getProperties()?.containerData;
      const extent = feature.getGeometry().getExtent();
      console.log("handleMapClick currentVal", currentVal);
      console.log("handleMapClick extent", extent);

      ol.getView().fit(extent, {
        nearest: true, 
        duration: 1000, // 持续时间
        padding: [30, 50, 30, 50]
      });
    }

    // 获取 feature
    // const feature = getFeatureById({
    //   featureId: "3",
    //   layerId: "icon",
    //   map: ol
    // });
    // const currentVal = feature.getProperties()?.containerData;
    // const extent = feature.getGeometry().getExtent();
    // console.log("handleMapClick feature", feature);
    // console.log("handleMapClick currentVal", currentVal);
    // console.log("handleMapClick extent", extent);
    // ol.getView().fit(extent, {
    //   // nearest: true, 
    //   duration: 1000,
    //   // padding: [30, 50, 30, 50]
    //   zoom: 10
    // });
  }

  return (
    <BrowserOnly>
      {() => <RMap
        ref={mapRef}
        width={"100%"}
        height={"60vh"}
        initial={initial}
      >
        <RLayerTile
          url={url}
          zIndex={0}
        />
      </RMap>}
    </BrowserOnly>
  );
}

export default XYZ;