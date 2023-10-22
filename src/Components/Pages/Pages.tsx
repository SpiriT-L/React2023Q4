import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import stules from './pages.module.scss';

function Pages() {
  return (
    <div className={stules.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Pages;
