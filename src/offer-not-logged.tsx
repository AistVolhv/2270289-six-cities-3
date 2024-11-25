<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>6 cities: offer</title>
    <link rel="stylesheet" href="css/main.css">
  </head>

  <body>
    <div style="display: none">
      <!--
        Нет необходимости копировать данный блок в компоненты. Блок с `svg`-изображениями
        присутствует в разметке файла `index.html`.
      -->
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewbox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewbox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewbox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>

    <div class="page">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <a class="header__logo-link" href="main.html">
                <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41">
              </a>
            </div>
            <nav class="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item user">
                  <a class="header__nav-link header__nav-link--profile" href="#">
                    <div class="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span class="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main class="page__main page__main--offer">
        <section class="offer">
          <div class="offer__gallery-container container">
            <div class="offer__gallery">
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/room.jpg" alt="Photo studio">
              </div>
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/apartment-01.jpg" alt="Photo studio">
              </div>
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/apartment-02.jpg" alt="Photo studio">
              </div>
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/apartment-03.jpg" alt="Photo studio">
              </div>
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/studio-01.jpg" alt="Photo studio">
              </div>
              <div class="offer__image-wrapper">
                <img class="offer__image" src="img/apartment-01.jpg" alt="Photo studio">
              </div>
            </div>
          </div>
          <div class="offer__container container">
            <div class="offer__wrapper">
              <div class="offer__mark">
                <span>Premium</span>
              </div>
              <div class="offer__name-wrapper">
                <h1 class="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button class="offer__bookmark-button button" type="button">
                  <svg class="offer__bookmark-icon" width="31" height="33">
                    <use xlink:href="#icon-bookmark"></use>
                  </svg>
                  <span class="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div class="offer__rating rating">
                <div class="offer__stars rating__stars">
                  <span style="width: 80%"></span>
                  <span class="visually-hidden">Rating</span>
                </div>
                <span class="offer__rating-value rating__value">4.8</span>
              </div>
              <ul class="offer__features">
                <li class="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li class="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li class="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div class="offer__price">
                <b class="offer__price-value">&euro;120</b>
                <span class="offer__price-text">&nbsp;night</span>
              </div>
              <div class="offer__inside">
                <h2 class="offer__inside-title">What&apos;s inside</h2>
                <ul class="offer__inside-list">
                  <li class="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li class="offer__inside-item">
                    Washing machine
                  </li>
                  <li class="offer__inside-item">
                    Towels
                  </li>
                  <li class="offer__inside-item">
                    Heating
                  </li>
                  <li class="offer__inside-item">
                    Coffee machine
                  </li>
                  <li class="offer__inside-item">
                    Baby seat
                  </li>
                  <li class="offer__inside-item">
                    Kitchen
                  </li>
                  <li class="offer__inside-item">
                    Dishwasher
                  </li>
                  <li class="offer__inside-item">
                    Cabel TV
                  </li>
                  <li class="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div class="offer__host">
                <h2 class="offer__host-title">Meet the host</h2>
                <div class="offer__host-user user">
                  <div class="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img class="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar">
                  </div>
                  <span class="offer__user-name">
                    Angelina
                  </span>
                  <span class="offer__user-status">
                    Pro
                  </span>
                </div>
                <div class="offer__description">
                  <p class="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p class="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section class="offer__reviews reviews">
                <h2 class="reviews__title">Reviews &middot; <span class="reviews__amount">1</span></h2>
                <ul class="reviews__list">
                  <li class="reviews__item">
                    <div class="reviews__user user">
                      <div class="reviews__avatar-wrapper user__avatar-wrapper">
                        <img class="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar">
                      </div>
                      <span class="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div class="reviews__info">
                      <div class="reviews__rating rating">
                        <div class="reviews__stars rating__stars">
                          <span style="width: 80%"></span>
                          <span class="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p class="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time class="reviews__time" datetime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <section class="offer__map map"></section>
        </section>
        <div class="container">
          <section class="near-places places">
            <h2 class="near-places__title">Other places in the neighbourhood</h2>
            <div class="near-places__list places__list">
              <article class="near-places__card place-card">
                <div class="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image">
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;80</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlink:href="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p class="place-card__type">Room</p>
                </div>
              </article>

              <article class="near-places__card place-card">
                <div class="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image">
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;132</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlink:href="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p class="place-card__type">Apartment</p>
                </div>
              </article>

              <article class="near-places__card place-card">
                <div class="place-card__mark">
                  <span>Premium</span>
                </div>
                <div class="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img class="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image">
                  </a>
                </div>
                <div class="place-card__info">
                  <div class="place-card__price-wrapper">
                    <div class="place-card__price">
                      <b class="place-card__price-value">&euro;180</b>
                      <span class="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button class="place-card__bookmark-button button" type="button">
                      <svg class="place-card__bookmark-icon" width="18" height="19">
                        <use xlink:href="#icon-bookmark"></use>
                      </svg>
                      <span class="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div class="place-card__rating rating">
                    <div class="place-card__stars rating__stars">
                      <span style="width: 100%"></span>
                      <span class="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 class="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p class="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  </body>
</html>
