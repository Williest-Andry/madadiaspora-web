import {
  Map,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapZoomControl,
} from "@/components/ui/map";
import { LatLngLiteral, LatLngTuple } from "leaflet";

const OFFICE_LOCATION = [
  -18.911717897763126, 47.463913167990405,
] as LatLngTuple & LatLngLiteral;

export default function MapSection() {
  return (
    <Map
      center={OFFICE_LOCATION}
      className="z-1 mt-[20px] h-[1271px] w-[90%] rounded-[50px]"
    >
      <MapTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapZoomControl className="pt-6 pl-6" />
      <MapMarker position={OFFICE_LOCATION}>
        <MapPopup>Phenix Agency</MapPopup>
      </MapMarker>
    </Map>
  );
}
