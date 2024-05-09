import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Modal from '../modal';
import React from 'react';

jest.mock('../../App.css', () => {
    return {};
});

test('sends data to the database when the form is submitted', async () => {
  // ...
});

// La nueva prueba
test('calls fetch with the right arguments when "Enviar" is clicked', async () => {
  // Configura fetch para que devuelva una promesa que se resuelve con un objeto de respuesta falso
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );

  render(<Modal />);

  const button = await screen.findByText(/solicitar cita/i, { exact: false });
fireEvent.click(button);

  fireEvent.change(screen.getByLabelText('Nombre y apellido'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Teléfono'), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: 'john.doe@example.com' } });

  fireEvent.click(screen.getByText('Siguiente'));

  fireEvent.change(screen.getByLabelText('Fecha'), { target: { value: '2022-12-31' } });
  fireEvent.change(screen.getByLabelText('Hora'), { target: { value: '17' } });
  fireEvent.change(screen.getByLabelText('Seleccione la modalidad'), { target: { value: 'presencial' } });

  fireEvent.click(screen.getByText('Enviar'));

// Espera a que todas las promesas se resuelvan
await new Promise((resolve) => setTimeout(resolve, 0));

// Ahora puedes comprobar que fetch se llamó con los argumentos correctos
expect(fetch).toHaveBeenCalledWith('/api/citas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // Aquí deberías poner los datos que esperas que se pasen a fetch
  body: JSON.stringify({
    nombre_apellido: 'nombre',
    telefono: 'telefono',
    correo_electronico: 'email',
    fecha: 'fecha',
    hora: 'hora',
  }),
});
});