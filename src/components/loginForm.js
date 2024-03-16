import React from 'react';
import '../App.css';

const LoginForm = ({ onClose }) => {
  return (
    <div className='modal1'>
    <form action="">
      <h1 className="title">Login</h1>
      <label>
        <i className="fa-solid fa-user"></i>
        <input type="text" id="username" placeholder="Username" />
      </label>
      <label>
        <i className="fa-solid fa-lock"></i>
        <input type="password" id="password" placeholder="Password" />
      </label>
      <a href="#" className="link">
        Forgot your password?
      </a>
      <button id="button">Login</button>
    </form>
    <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default LoginForm;
