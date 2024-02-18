import React from 'react';
import loginForm from '../cssFolder/loginForm.module.css';

const LoginForm = ({ onClose }) => {
  return (
    <div className={loginForm.modal}>
      <form action="">
        <h1 className={loginForm.title}>Login</h1>
        <label className={loginForm.inputLabel}>
          <i className="fa-solid fa-user"></i>
          <input type="text" id="username" placeholder="Username" className={loginForm.input} />
        </label>
        <label className={loginForm.inputLabel}>
          <i className="fa-solid fa-lock"></i>
          <input type="password" id="password" placeholder="Password" className={loginForm.input} />
        </label>
        <a href="#" className={loginForm.link}>
          Forgot your password?
        </a>
        <button id="button">Login</button>
      </form>
      <button onClick={onClose} className={loginForm.closeButton}>Cerrar</button>
    </div>
  );
};

export default LoginForm;