import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/Feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
      </NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
