import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
// import { logout } from './logout/exit';

const Header = () => {
  //onClick={logout}
  return (
    <>
      <div>
        <Link to={'/'} className={styles.header_link}>
          <b className={styles.header_log}>Log out</b>
        </Link>
      </div>
    </>
  );
};
export default Header;
