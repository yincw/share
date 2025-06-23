import { Overlay } from "ol";
import { fromLonLat } from "ol/proj";

const createOverlayText = ({
  id, 
  name,
  longitude,
  latitude,
  className,
  mapRef,
}): Overlay => {
  const label = document.createElement("div");
  label.className = className;
  label.innerText = name;

  const overlay = new Overlay({ 
    id,
    element: label,
    positioning: "center-center",
    position: fromLonLat([longitude, latitude])
   });

   if (mapRef?.current?.map) {
    const ol = mapRef.current.map?.ol;
    ol.addOverlay(overlay);
  };

  return overlay;
};

export default createOverlayText;