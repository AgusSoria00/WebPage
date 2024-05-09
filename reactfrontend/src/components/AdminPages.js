import React, { useState, useEffect } from 'react';
import LoginForm from './loginForm'; // Asegúrate de que la ruta de importación sea correcta

const AdminPage = () => {
  const [citas, setCitas] = useState([]);
  const [consultas, setConsultas] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/admin/pedidos')
      .then((response) => response.json())
      .then((data) => {
        setCitas(data.citas);
        setConsultas(data.consultas);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  if (!isLoggedIn) {
    return (
      <LoginForm onLogin={() => setIsLoggedIn(true)} />
    );
  }

  return (
    <div>
      <div>
        {citas.map((cita) => (
          // Renderizar información de la cita
          <div key={cita.id}>
            {/* ... */}
          </div>
        ))}
      </div>
      <div>
        {consultas.map((consulta) => (
          // Renderizar información de la consulta
          <div key={consulta.id}>
            {/* ... */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;