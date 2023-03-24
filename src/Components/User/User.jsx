import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router';
import Feed from '../Feed/Feed';
import UserPhotoPost from '../User/UserPhotoPost';
import UserStats from '../User/UserStats';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
