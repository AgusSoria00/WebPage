import React, { useState } from 'react';
import '../App.css';

const LoginForm = ({ onClose, onCloseClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginStyle = {
    width: '50%',
    marginLeft: '25%',
    marginTop: '2%'
  }
  const cerrarStyle = {
    width: '8%',
    marginLeft: '2%',
    marginTop: '1%',
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      console.log('Inicio de sesión exitoso');
      onClose(); // Llama a onClose solo cuando la respuesta es exitosa
    } else {
      console.log('Error en el inicio de sesión');
    }
  };

  return (
    <div className='modal1'>
      <form onSubmit={handleLogin}>
        <h1 className="title">Login</h1>
        <label>
          <i className="fa-solid fa-user"></i>
          <input type="text" id="username" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <i className="fa-solid fa-lock"></i>
          <input type="password" id="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button id="button" style={loginStyle}>Registrar</button>
      </form>
      <button onClick={onCloseClick} style={cerrarStyle}>Cerrar</button>
    </div>
  );
};

export default LoginForm;