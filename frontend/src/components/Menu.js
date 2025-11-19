import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/menu')
      .then(res => res.json())
      .then(data => {
        if (data.menu) {
          setItems(data.menu.map(name => ({ name, price: Math.floor(Math.random()*8)+10 })));
        }
      });
  }, []);
  return (
    <section>
      <h2>Menú</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </section>
  );
}
