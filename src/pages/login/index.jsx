import { useState, useEffect } from 'react';
import style from './Login.module.scss';
import { Base } from '../../layout/base';

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  return (
    <Base>
      <main className={`background ${style.containerLogin}`}>
        <section className={style.signInContent}>
          <i className={`fa fa-user-circle sign-in-icon ${style.icon}`}></i>
          <h1>Sign In</h1>
          <form /* onSubmit={handleSubmit} */>
            <div className={style.inputWrapper}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className={style.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className={style.containerRemember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={style.signInButton}>
              {'Login'}
            </button>
          </form>
        </section>
      </main>
    </Base>
  );
};

export default Login;
