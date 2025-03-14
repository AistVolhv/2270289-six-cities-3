import {useRef, useEffect, memo} from 'react';
import useMap from '../../hooks/use-map';

import {Marker,Icon,layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

import type {TCity,TOfferPreview, TOffer } from '../../types/types';
import { useSelector } from 'react-redux';
import { activeOfferId } from '../../store/all-offers/all-offers.selectors';

type MapProps = {
  currentCity: TCity;
  offers: TOfferPreview[];
  currentOffer: TOffer | null;
  typeMap : string;
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

function Map({currentCity, offers, currentOffer, typeMap} : MapProps) : JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const geolocation: [number,number] = [currentCity.location.latitude,currentCity.location.longitude];
  const cardActiveId = useSelector(activeOfferId);
  const classNameByTypeMap = `${typeMap} map`;

  useEffect(() => {
    if (map) {
      map.setView(geolocation);
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            cardActiveId !== undefined && offer.id === cardActiveId && !currentOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (currentOffer) {
        const markerCurrentOffer = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });

        markerCurrentOffer
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentCity, cardActiveId, currentOffer]);

  return(
    <section className={classNameByTypeMap} ref={mapRef} id={currentCity.name}>
    </section>
  );
}

const MemoizedMap = memo(Map);
export default MemoizedMap;
