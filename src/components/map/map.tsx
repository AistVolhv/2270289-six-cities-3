import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';

import {Marker,Icon,layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

import type {CityDestination,OfferPreview } from '../../types';

type MapProps = {
  currentCity: CityDestination;
  currentOffers: OfferPreview[];
  selectedPointId: string | null ;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({currentCity, currentOffers, selectedPointId} : MapProps) : JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPointId !== undefined && offer.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffers, selectedPointId]);

  return(
    <section className="cities__map map" ref={mapRef} id={currentCity.name}>
    </section>
  );
}
