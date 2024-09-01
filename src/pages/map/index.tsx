import { brazilCapitals } from "@/data/brazil-capitals";

import { Map, MapMarker } from "@/components/extends-ui/map";
import { Text } from "@/components/Text";
import { LatLngExpression } from "leaflet";
// import { LatLngExpression } from "leaflet";

export default function MapPage() {
  return (
    <div className="w-full">
      <Text.Title variant={"h1"} text={"Map"} />
      <Text.Paragraph
        text={"A hierarchical checkbox list structure component."}
      />
      <Map position={[-19.6, -40.6]}>
        {brazilCapitals.map((capital, idx) => (
          <MapMarker
            key={capital.capital + idx}
            position={capital.cords as LatLngExpression}
          >
            <p>
              {capital.state} - {capital.capital}
            </p>
            <p>{capital.description}</p>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
