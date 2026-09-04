import {
  Map,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapZoomControl,
} from "@/components/ui/map";

export default function MapSection() {
  return (
    <Map
      center={[-18.924452151089834, 47.54911092698423]}
      className="mt-[20px] h-[1271px] w-[90%] rounded-[50px]"
    >
      <MapTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapZoomControl className="pt-6 pl-6" />
      <MapMarker position={[-18.924452151089834, 47.54911092698423]}>
        <MapPopup>Madadiaspora Location</MapPopup>
      </MapMarker>
    </Map>
  );
}
