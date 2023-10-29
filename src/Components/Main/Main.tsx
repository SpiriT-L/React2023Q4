import heroesData from '../../data/data';
import CardList from '../CardList/CardList';
import Search from '../Search/Search';
import styles from './main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.section__search}>
        <Search placeholder="Input here..." />
      </section>
      <section className={styles.section__cards}>
        <CardList charters={heroesData} />
      </section>
    </main>
  );
}

export default Main;
