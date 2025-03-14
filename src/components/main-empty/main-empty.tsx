import Header from '../header/header';
import ListCity from '../list-city/list-city';

type MainEmptyProps = {
  cityName : string;
}

export default function MainEmpty({cityName} :MainEmptyProps) : JSX.Element {
  return (
    <div className='page page--gray page--main'>

      <Header />

      <main className='page__main page__main--index page__main--index-empty'>
        <h1 className='visually-hidden'>Cities</h1>

        <ListCity />

        <div className='cities'>
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>We could not find any property available at the moment in {cityName}</p>
              </div>
            </section>
            <div className='cities__right-section'></div>
          </div>
        </div>
      </main>
    </div>
  );
}
