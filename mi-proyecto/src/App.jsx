import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se manejará la autenticación en el futuro
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="login-container">
      <main className="login-main">
        <div className="login-card">
          {/* Logo del LiceoTecpan: Escudo con una T, libro abierto arriba */}
          <div className="logo-container">
            <svg 
              className="school-logo-svg" 
              viewBox="0 0 100 115" 
              width="90" 
              height="104" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 50 24 C 40 16 28 18 16 21 V 9 C 28 6 40 5 50 12 C 60 5 72 6 84 9 V 21 C 72 18 60 16 50 24 Z" 
                fill="#FFFFFF" 
                stroke="#800020" 
                strokeWidth="2.2" 
                strokeLinejoin="round"
              />
              <path 
                d="M 50 12 V 24" 
                stroke="#800020" 
                strokeWidth="2.2" 
                strokeLinecap="round"
              />
              <path 
                d="M 22 34 C 22 34 50 38 78 34 C 78 65 50 94 50 94 C 50 94 22 65 22 34 Z" 
                fill="#800020" 
                stroke="#FEBAA8" 
                strokeWidth="3.5" 
                strokeLinejoin="round"
              />
              <text 
                x="50" 
                y="63" 
                fontFamily="'Georgia', 'Times New Roman', serif" 
                fontSize="28" 
                fontWeight="bold" 
                textAnchor="middle" 
                fill="#FFFFFF"
                dominantBaseline="middle"
              >
                T
              </text>
            </svg>
          </div>

          <header className="login-header">
            <h1>LiceoTecpan</h1>
            <p>Portal Educativo - Iniciar Sesión</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email-input">Correo Electrónico</label>
              <input
                type="email"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@liceotecpan.edu.gt"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password-input">Contraseña</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Recordarme en este dispositivo
              </label>
              <a href="#forgot-password" className="forgot-password-link">
                ¿Olvidó su contraseña?
              </a>
            </div>

            <button type="submit" className="submit-button">
              Ingresar
            </button>
          </form>
        </div>
      </main>

      <footer className="login-footer">
        <p>&copy; {new Date().getFullYear()} LiceoTecpan. Todos los derechos reservados.</p>
        <p>
          Si tiene problemas para acceder, por favor contacte a soporte técnico en{' '}
          <a href="mailto:soporte@liceotecpan.edu.gt">soporte@liceotecpan.edu.gt</a>
        </p>
      </footer>
    </div>
  )
}

export default App
