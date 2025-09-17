import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validate = () => {  };
  const handleLogin = (event) => {  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); 
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login Administrativo</h1>
        <form className="login-form" onSubmit={handleLogin} noValidate>
          <div className="input-group">
            { }
            <input
              type="email"
              placeholder="Endereço de e-mail"
              className={errors.email ? 'input-error' : ''}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          { }
          <div className="input-group password-group"> { }
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Senha"
              className={errors.password ? 'input-error' : ''}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            { }
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              { }
              {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
            </button>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          { }

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;