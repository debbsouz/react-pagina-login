import { useState } from 'react';
import './App.css';
import clinicBackground from './assets/clinica-bg.jpg'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'O campo de e-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Formato de e-mail inválido.';
    if (!password) newErrors.password = 'O campo de senha é obrigatório.';
    else if (password.length < 8) newErrors.password = 'A senha deve ter no mínimo 8 caracteres.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Dados válidos, enviando para o servidor:', { email, password });
      alert('Login efetuado com sucesso! (Simulação)');
    } else {
      console.log('Dados inválidos, login bloqueado.');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isFormValid = /\S+@\S+\.\S+/.test(email) && password.length >= 8;

  return (
    <div className="login-page-full" style={{ backgroundImage: `url(${clinicBackground})` }}>
      <div className="overlay"></div>
      <h1 className="clinic-title">ODONTCLINIC</h1>
      
      <div className="login-container">
        <h1>Login Administrativo</h1>
        <form className="login-form" onSubmit={handleLogin} noValidate>
          <div className="input-group">
            <input type="email" placeholder="Endereço de e-mail" className={errors.email ? 'input-error' : ''} value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group password-group">
            <input type={isPasswordVisible ? 'text' : 'password'} placeholder="Senha" className={errors.password ? 'input-error' : ''} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>{isPasswordVisible ? 'Ocultar' : 'Mostrar'}</button>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" disabled={!isFormValid}>Entrar</button>
        </form>
      </div>

      <div className="footer-info">
        <p className="secure-page">
          <i className="fas fa-shield-alt icon-left"></i> PÁGINA SEGURA <i className="fas fa-lock icon-right"></i>
        </p>
        <a href="#" onClick={(e) => { e.preventDefault(); alert('Funcionalidade de abrir ticket em desenvolvimento!'); }} className="admin-support-link">
          <i className="fas fa-headset"></i> 
          <span>SUPORTE ADMINISTRATIVO</span>
        </a>
      </div>
    </div>
  );
}

export default App;