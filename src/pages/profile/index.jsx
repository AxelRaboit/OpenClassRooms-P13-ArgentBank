import style from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUser } from '../../tools/slices/profileSlice';
import { Base } from '../../layout/base';

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  // Load user data from DB 
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Base>
      <main className={`background ${style.containerProfile}`}>
        <div className={style.header}>
          <h1>
            Welcome back, {profile.firstName} {profile.lastName}
          </h1>
        </div>
      </main>
    </Base>
  );
};

export default Profile;
