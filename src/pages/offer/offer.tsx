import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';

import ListOffer from '../../components/card-offer-list/card-offer-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import Page404 from '../404/page-404.tsx';

import { fetchActiveOfferAction, fetchListCommentsByOffer, fetchOffersNearAction } from '../../store/api-actions.ts';
import { typeMap } from '../../const';
import { CommentForOffer } from '../../types.ts';

export default function Offer(): JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const requestStatusAuth = useAppSelector((state) => state.isRequestAuth);
  const errorStatus = useAppSelector((state) => state.error.status);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchActiveOfferAction(id));
      dispatch(fetchListCommentsByOffer(id));
      dispatch(fetchOffersNearAction(id));
    }
  }, []);

  const requestActiveOfferStatus = useAppSelector((state) => state.isRequestActiveOffer);
  const requestOffersNearStatus = useAppSelector((state) => state.isRequestOffersNear);
  const requestCommentsByOffer = useAppSelector((state) => state.isRequestCommentsByOffer);

  const currentOffer = useAppSelector((state) => state.activeOffer);
  const sortedNearListOffer = useAppSelector((state) => state.offersNear);
  const reviewsByOffer = useAppSelector((state) => state.reviewsByOffer);

  const ratingToPercent = (requestActiveOfferStatus) ? (currentOffer.rating * 100 / 5).toFixed(2) : 80;
  const styleRating = {
    width: `${ratingToPercent}%`,
  };

  const [isVisibleLoadingScreen, setIsVisibleLoadingScreen] = useState(false);

  useEffect(() => {

      if ((!requestActiveOfferStatus || !requestOffersNearStatus || !requestCommentsByOffer)) {
        setIsVisibleLoadingScreen(true);
        setTimeout(() => {
          setIsVisibleLoadingScreen(false);
        }, 2200);
      }
  }, []);

  if ((isVisibleLoadingScreen) && (errorStatus !== 404)) {
    return (
      <LoadingScreen />
    );
  }

  if (errorStatus === 404) {
    return (
      <Page404 />
    )
  }

  // const emptyComment : CommentForOffer[] = []
  // const [commentsByOffer, setCommentsByOffer] = useState(emptyComment);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer" >
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {(requestActiveOfferStatus) &&
                (currentOffer.images.map((urlImage) => (
                  <div className="offer__image-wrapper" key={urlImage}>
                    <img className="offer__image" src={urlImage} alt="Photo studio" />
                  </div>
                )
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                {(requestActiveOfferStatus) && ((currentOffer.isPremium) ? <span>Premium</span> : '')}
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {(requestActiveOfferStatus) && currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={styleRating}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {(requestActiveOfferStatus) && currentOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {(requestActiveOfferStatus) && currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {(requestActiveOfferStatus) && `${currentOffer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {(requestActiveOfferStatus) && `Max ${currentOffer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {(requestActiveOfferStatus) &&
                    currentOffer.goods.map((itemGood) => (
                      <li className="offer__inside-item" key={itemGood}>
                        {itemGood}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src={(requestActiveOfferStatus) ? (currentOffer.host.avatarUrl) : ''}
                      width="74" height="74" alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {(requestActiveOfferStatus) && currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {(requestActiveOfferStatus) && ((currentOffer.host.isPro) ? 'Pro' : '')}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {(requestActiveOfferStatus) && currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">

                <ReviewList commentsByOffer={reviewsByOffer} />

                {(requestActiveOfferStatus) && ((requestStatusAuth) && <ReviewForm />)}
              </section>
            </div>
          </div>
          <Map currentCity={currentCity} currentOffers={sortedNearListOffer} typeMap={typeMap.offer} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffer listOffer={sortedNearListOffer} variantCard='near-places' />
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}

//<section className="offer__map map" ref={mapRef} ></section>
/*
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

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {

    if (map) {

      const markerLayer = layerGroup().addTo(map);
      if (requestOffersNearStatus) {
        sortedNearListOffer.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          });
          marker
            .setIcon(defaultCustomIcon)
            .addTo(markerLayer);
        });
      }

      if (requestActiveOfferStatus) {
        const marker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });
        marker
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map,currentOffer,sortedNearListOffer,reviewsByOffer]);
*/
