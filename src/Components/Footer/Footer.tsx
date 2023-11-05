import stules from './footer.module.scss';

function Footer() {
  return (
    <footer className={stules.footer}>
      <ul className={stules.footer_list}>
        <li className={stules.footer_item}>2023</li>
        <li className={stules.footer_item}>GitHub</li>
        <li className={stules.footer_item}>RSSchool</li>
      </ul>
    </footer>
  );
}

export default Footer;
