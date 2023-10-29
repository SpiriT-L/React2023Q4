import SearchIcon from '@mui/icons-material/Search';
import IHeroes from '../../interface/interface';
import styles from './search.module.scss';
import heroesData from '../../data/data';

export const dataSearch: IHeroes[] = heroesData;

function Search(placeholder: string): JSX.Element {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <input type="text" name="" id="" placeholder={placeholder} />
        <div className={styles.search__icon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.search__result}>
        <div>hi</div>
      </div>
    </div>
  );
}

export default Search;
