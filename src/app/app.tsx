import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppRoute,AuthorizationStatus} from '../../src/const.ts';
import Main from '../pages/main/main';
import Login from '../pages/login/login.tsx';
import Offer from '../pages/offer/offer.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Page404 from '../pages/404/page-404.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
//import {mockPreviewCard} from '../mocks/mock-card.ts';

import { useAppSelector } from '../hooks/index.ts';

import LoadingScreen from '../pages/loading-screen/loading-screen.tsx';
import { RequestStatus } from '../../src/const.ts';

//const favoritesCard = mockPreviewCard.listPreviewCards.filter((itemCard) => itemCard.isFavorite);

export default function App () : JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const requestStatus = useAppSelector((state) => state.requestStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown && requestStatus === RequestStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Offer} element={<Offer />}/>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites variantCard='favorite'/>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}
