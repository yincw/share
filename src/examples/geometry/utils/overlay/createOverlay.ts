import { Overlay } from "ol";

// 通过 ol.getOverlayById(id) 获取
const createOverlay = ({
  id, 
  popupRef
}): Overlay => {
  const overlay = new Overlay({ 
    id,
    element: popupRef,
    autoPan: true,
    autoPanAnimation: {},
    offset: [0, 0],
    positioning: "center-center",
    stopEvent: false
   });
  return overlay;
};

export default createOverlay;