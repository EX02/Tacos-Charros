// Fallback para imágenes
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error',()=>{
    img.src = 'https://via.placeholder.com/600x360/ffffff/333?text=Foto+no+disponible';
  });
});

// Envío de formulario de reserva (intenta la API local, si no muestra mensaje)
const form = document.getElementById('resForm');
const status = document.getElementById('resStatus');
if (form) {
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Enviando...';
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('http://localhost:8080/reservation', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json && json.status === 'ok') {
        status.textContent = 'Reservación enviada. Gracias!';
        form.reset();
      } else {
        status.textContent = 'Reservación enviada (modo offline).';
      }
      } catch (err) {
      // fallback: guardar localmente en localStorage
      const pending = JSON.parse(localStorage.getItem('pendingReservations')||'[]');
      pending.push(data);
      localStorage.setItem('pendingReservations', JSON.stringify(pending));
      status.textContent = 'Sin conexión: reservación guardada localmente.';
    }
  });
}
 
// Intentar reenviar reservas pendientes cuando la API esté disponible
async function flushPending() {
  const pending = JSON.parse(localStorage.getItem('pendingReservations')||'[]');
  if (!pending.length) return;
  for (const p of pending) {
    try {
      const res = await fetch('http://localhost:8080/reservation', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)});
      const j = await res.json();
      if (j && j.status === 'ok') {
        // eliminar de la lista
        const remaining = JSON.parse(localStorage.getItem('pendingReservations')||'[]').filter(x=>JSON.stringify(x)!==JSON.stringify(p));
        localStorage.setItem('pendingReservations', JSON.stringify(remaining));
      }
    } catch(e) {
      // sigue pendiente
    }
  }
}
 
window.addEventListener('online', flushPending);
// intentar al cargar
flushPending();
