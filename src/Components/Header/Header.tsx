import stules from './header.module.scss';

function Header() {
  return (
    <header className={stules.header}>
      <ul className={stules.header__list}>
        <li className={stules.header__item}>Menu</li>
        <li className={stules.header__item}>Search</li>
      </ul>
    </header>
  );
}

export default Header;
