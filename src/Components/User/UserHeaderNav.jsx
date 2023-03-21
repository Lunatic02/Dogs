import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/Feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import { useLocation } from 'react-router';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/UseMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem');

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
