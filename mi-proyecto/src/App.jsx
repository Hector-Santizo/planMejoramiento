import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('estudiante')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se manejará la autenticación en el futuro
    console.log({ email, password, role, rememberMe })
  }

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo-container">
          {/* Logo del LiceoTecpan */}
          <img src="" alt="LiceoTecpan Logo" className="school-logo" />
        </div>
        <h1>LiceoTecpan</h1>
        <p>Portal Educativo - Iniciar Sesión</p>
      </header>

      <main className="login-main">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Acceso al Sistema</h2>

          {/* Selector de Rol */}
          <div className="form-group">
            <label htmlFor="role-select">Tipo de Usuario:</label>
            <select
              id="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="estudiante">Estudiante</option>
              <option value="docente">Docente</option>
              <option value="padre">Padre de Familia</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>

          {/* Campo de Correo Electrónico / Usuario */}
          <div className="form-group">
            <label htmlFor="email-input">Correo Electrónico / Código:</label>
            <input
              type="email"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@liceotecpan.edu.gt"
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="form-group">
            <label htmlFor="password-input">Contraseña:</label>
            <input
              type="password"
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          {/* Opciones Adicionales */}
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

          {/* Botón de Enviar */}
          <button type="submit" className="submit-button">
            Ingresar
          </button>
        </form>
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
