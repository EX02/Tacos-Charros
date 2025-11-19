import React, { useState } from 'react';

export default function Reservation() {
  const [status, setStatus] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    fetch('http://localhost:8080/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(r => setStatus(r.status === 'ok' ? 'Reservación enviada' : 'Error al reservar'));
  };
  return (
    <section>
      <h2>Reserva tu Mesa</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder="Nombre completo" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="telefono" type="tel" placeholder="Teléfono" />
        <input name="fecha" type="date" required />
        <input name="hora" type="time" required />
        <input name="personas" type="number" min="1" max="20" defaultValue={2} />
        <textarea name="mensaje" placeholder="Mensaje adicional" rows={2}></textarea>
        <button type="submit">Confirmar Reservación</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}
