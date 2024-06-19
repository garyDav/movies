import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../assets/css/registro.css'
import Logo from '/logo/Cine_SAS.png'
import { startRegister } from '../../store/slices/auth/thunks'

const initEvent = {
  username: '',
  password: '',
  name: '',
  lastname: '',
  fecha_nacimiento: new Date('01-01-1990').toISOString().substring(0, 10),
  celular: '',
}

export default function App() {
  const dispatch = useDispatch()

  // FormValues And SelectValues
  const [formValues, setFormValues] = useState(initEvent)

  // Destructuring FormValues
  const {
    username,
    password,
    name,
    lastname,
    fecha_nacimiento,
    celular,
  } = formValues

  // handleChange
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleSubmitForm = e => {
    e.preventDefault()

    console.log(formValues)
    dispatch(startRegister(formValues))
  }

  return (
    <div className='registro size-adjust'>
      <div className="contenedorPadre">
        <div className="logocontenedor">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="contenedorsesion">
          <p><h2>REGISTRO</h2></p>

          <form onSubmit={handleSubmitForm}>
            <div className="datos">
              <input name="username" value={username} onChange={handleInputChange} type="text" className="control" placeholder="Username" />
              <div className="ingresodatos">
                <span className="fas fa-user"></span>
              </div>
            </div>

            <div className="datos">
              <input name="password" value={password} onChange={handleInputChange} type="password" className="control" placeholder="Contraseña" />
              <div className="ingresodatos">
                <span className="fas fa-lock"></span>
              </div>
            </div>

            <div className="datos">
              <input name="name" value={name} onChange={handleInputChange} type="text" className="control" placeholder="Name" />
              <div className="ingresodatos">
                <span className="fas fa-signature"></span>
              </div>
            </div>

            <div className="datos">
              <input name="lastname" value={lastname} onChange={handleInputChange} type="text" className="control" placeholder="Lastname" />
              <div className="ingresodatos">
                <span className="fas fa-signature"></span>
              </div>
            </div>

            <div className="datos">
              <input name="fecha_nacimiento" value={fecha_nacimiento} onChange={handleInputChange} type="date" className="control" />
              <div className="ingresodatos">
                <span className="fas fa-calendar"></span>
              </div>
            </div>

            <div className="datos">
              <input name="celular" value={celular} onChange={handleInputChange} type="text" className="control" placeholder="Celular" />
              <div className="ingresodatos">
                <span className="fas fa-phone"></span>
              </div>
            </div>

            <div id="Btns">
              <div className="btnsesion">
                <button type="submit">Registrarse</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}