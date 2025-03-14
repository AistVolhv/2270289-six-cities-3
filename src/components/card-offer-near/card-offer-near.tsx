// import { Link } from 'react-router-dom';
// import type { TOfferPreview } from '../../types/types';

// type CardOfferNearProps = {
//   offer: TOfferPreview;
// }

// export default function CardOfferNear({ offer }: CardOfferNearProps): JSX.Element {
//   return (
//     <article className="near-places__card place-card">
//       <div className="near-places__image-wrapper place-card__image-wrapper">
//         <Link to="#">
//           <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
//         </Link>
//       </div>
//       <div className="place-card__info">
//         <div className="place-card__price-wrapper">
//           <div className="place-card__price">
//             <b className="place-card__price-value">&euro;{offer.price}</b>
//             <span className="place-card__price-text">&#47;&nbsp;night</span>
//           </div>
//           <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
//             <svg className="place-card__bookmark-icon" width="18" height="19">
//               <use xlinkHref="#icon-bookmark"></use>
//             </svg>
//             <span className="visually-hidden">In bookmarks</span>
//           </button>
//         </div>
//         <div className="place-card__rating rating">
//           <div className="place-card__stars rating__stars">
//             <span style={{ width: '80%' }}></span>
//             <span className="visually-hidden">Rating {offer.rating}</span>
//           </div>
//         </div>
//         <h2 className="place-card__name">
//           <a href="#">{offer.title}</a>
//         </h2>
//         <p className="place-card__type">{offer.type}</p>
//       </div>
//     </article>
//   );
// }
