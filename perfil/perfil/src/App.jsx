import React, { useState, useEffect } from 'react';
import './App.css';
import { FaUser, FaIdBadge, FaBook, FaVenusMars } from 'react-icons/fa';

function App() {
  const [libre, setLibre] = useState([]);

  const fetchLibre = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/libre');
      if (!response.ok) throw new Error('Error');
      const data = await response.json();
      setLibre(data);
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
  };

  useEffect(() => {
    fetchLibre();
  }, []);

  return (
    <div className="container">
      {libre.map((p) => (
        <div className="card" key={p.rId}>
          <div className="avatar">
            {p.nombre[0]}.{p.ape1[0]}
          </div>

          <div className="info">
            <div className="section">
              <FaUser className="icon" />
              <span className="label">Nombre:</span>
              <span>{p.nombre}</span>
            </div>
            <div className="section">
              <FaUser className="icon" />
              <span className="label">Apellidos:</span>
              <span>{p.ape1} {p.ape2}</span>
            </div>
            <div className="section">
              <FaIdBadge className="icon" />
              <span className="label">RFID:</span>
              <span>{p.rId}</span>
            </div>
            <div className="section">
              <FaVenusMars className="icon" />
              <span className="label">Género:</span>
              <span>Masculino</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
