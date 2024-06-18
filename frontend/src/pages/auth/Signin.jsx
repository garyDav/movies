import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import '../../assets/css/login.css'
import Logo from '/logo/Cine_SAS.png'
import { startLogin } from '../../store/slices/auth/thunks'

const initEvent = {
  username: '',
  password: '',
}

export default function Signin() {
  const dispatch = useDispatch()

  const [formValues, setFormValues] = useState(initEvent)

  const { username, password } = formValues

  // handleChange
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleLogin = e => {
    e.preventDefault()

    console.log(formValues)
    dispatch(startLogin(username, password))
  }

  return (
    <div className='login size-adjust'>
      <div className="contenedorPadre">
        <div className="logocontenedor">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="contenedorsesion">
          <p><h2>INICIO DE SESION</h2></p>
          <form onSubmit={handleLogin}>
            <div className="datos">
              <input name="username" value={username} onChange={handleInputChange} type="text" className="control" placeholder="Correo" />
              <div className="ingresodatos">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
            <div className="datos">
              <input name="password" value={password} onChange={handleInputChange} type="password" className="control" placeholder="Contraseña" />
              <div className="ingresodatos">
                <span className="fas fa-lock"></span>
              </div>
            </div>
            <div id="Btns">
              <div className="btnsesion">
                <button>Login</button>
              </div>
              <Link to="/signup" className="btnsesion">
                <button>Registrarse</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
