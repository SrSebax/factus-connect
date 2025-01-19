import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../controller/loginController';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    validateLogin(email, password, setErrors, navigate);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #6b73ff, #000dff)' }}>
      <div className="bg-white p-5 rounded-4 shadow-lg w-100" style={{ maxWidth: '450px' }}>
        <h1 className="text-center text-primary mb-5" style={{ fontSize: '2rem', fontWeight: '600' }}>Iniciar sesión</h1>

        {/* Input Correo */}
        <div className="form-group mb-4 position-relative">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control rounded-3 py-2 px-4 ${errors.email ? 'is-invalid' : ''}`}
            style={{
              borderColor: errors.email ? '#e74c3c' : '#ced4da',
              boxShadow: errors.email ? '0 0 8px rgba(231, 76, 60, 0.5)' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          <i className="bi bi-envelope position-absolute" style={{ top: '10px', left: '10px', fontSize: '1.2rem', color: '#aaa' }}></i>
        </div>

        {/* Input Contraseña */}
        <div className="form-group mb-4 position-relative">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control rounded-3 py-2 px-4 ${errors.password ? 'is-invalid' : ''}`}
            style={{
              borderColor: errors.password ? '#e74c3c' : '#ced4da',
              boxShadow: errors.password ? '0 0 8px rgba(231, 76, 60, 0.5)' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          <i className="bi bi-lock position-absolute" style={{ top: '10px', left: '10px', fontSize: '1.2rem', color: '#aaa' }}></i>
        </div>

        {/* Botón de Ingreso */}
        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2 rounded-3 shadow-lg"
          style={{
            background: 'linear-gradient(45deg, #4e73df, #1e3d8e)',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = 'linear-gradient(45deg, #1e3d8e, #4e73df)'}
          onMouseLeave={(e) => e.target.style.background = 'linear-gradient(45deg, #4e73df, #1e3d8e)'}
        >
          Ingresar
        </button>

        {/* Pie de página */}
        <div className="mt-4 text-center">
          <button className="btn btn-link text-muted p-0" style={{ fontSize: '0.9rem' }}>¿Olvidaste tu contraseña?</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
