import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router';
import Feed from '../Feed/Feed';
import UserPhotoPost from '../User/UserPhotoPost';
import UserStats from '../User/UserStats';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
