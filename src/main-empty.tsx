<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>6 cities</title>
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

    <div class="page page--gray page--main">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <a class="header__logo-link header__logo-link--active">
                <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41">
              </a>
            </div>
            <nav class="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item user">
                  <a class="header__nav-link header__nav-link--profile" href="#">
                    <div class="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span class="header__favorite-count">3</span>
                  </a>
                </li>
                <li class="header__nav-item">
                  <a class="header__nav-link" href="#">
                    <span class="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main class="page__main page__main--index page__main--index-empty">
        <h1 class="visually-hidden">Cities</h1>
        <div class="tabs">
          <section class="locations container">
            <ul class="locations__list tabs__list">
              <li class="locations__item">
                <a class="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li class="locations__item">
                <a class="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li class="locations__item">
                <a class="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li class="locations__item">
                <a class="locations__item-link tabs__item">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li class="locations__item">
                <a class="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li class="locations__item">
                <a class="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div class="cities">
          <div class="cities__places-container cities__places-container--empty container">
            <section class="cities__no-places">
              <div class="cities__status-wrapper tabs__content">
                <b class="cities__status">No places to stay available</b>
                <p class="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div class="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div></body>

</html>
