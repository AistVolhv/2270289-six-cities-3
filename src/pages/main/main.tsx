//import {useState} from 'react';
import {useAppSelector } from '../../hooks/index.ts';
import Header from '../../components/header/header.tsx';
import ListOffer from '../../components/card-offer-list/card-offer-list.tsx';
import SortOffer from '../../components/sort-offer/sort-offer.tsx';
import Map from '../../components/map/map.tsx';
import ListCity from '../../components/list-city/list-city.tsx';

export default function Main () : JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const cityName = useAppSelector((state) => state.city);
  const currentOffersByCity = offers.filter((itemCard) => itemCard.city.name === cityName);
  const currentCity = currentOffersByCity[0].city;
  const countOffers = currentOffersByCity.length;

  //const [cardActiveId, setCardActiveId] = useState<string|null>(null);
  //const cardActiveId = currentOffersByCity[0].id;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <ListCity />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffers} place{countOffers > 1 && 's'} to stay in {cityName}</b>

              <SortOffer />

              <div className="cities__places-list places__list tabs__content">

                <ListOffer listOffer={currentOffersByCity} variantCard='cities'  />

              </div>
            </section>
            <div className="cities__right-section">

              <Map currentCity={currentCity} currentOffers={currentOffersByCity}  />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
//mouseMove={setCardActiveId}
//selectedPointId={cardActiveId}
