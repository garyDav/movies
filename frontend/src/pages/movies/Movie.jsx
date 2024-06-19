import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../store/slices/auth'
import '../../assets/css/peliculas.css'

import Logo from '/logo/Cine_SAS.png'
import Gar from '/cartelera/gar.jpg'

export default function Movie() {
  const dispatch = useDispatch()
  const { username } = useSelector(state => state.authState)

  return (
    <div className="peliculas">
      <header className="mov-header">
        <nav>
          <ul>
            <li className="nav-li"><Link to="/">INICIO</Link></li>
          </ul>
        </nav>
        <div className="mov-logo">
          <Link to="/"><img src={Logo} alt="CineSAS" /></Link>
        </div>
        <div className="mov-registro">
          {!username ? (<>
            <li><Link to="/signin">INICIAR SESION</Link></li>
            <li><Link to="/signup">REGISTRARSE</Link></li>
          </>) : (<><li>{username}</li><li onClick={() => dispatch(logout())}>salir</li></>)}
        </div>
      </header>
      <div className="mov-contenedorPadre">
        <section className="mov-pelicula">
          <div className="mov-contenedorPelicula">
            <h1>GARDFIELD</h1>
            <div className="mov-imagen">
              <img src={Gar} alt="" />
            </div>
            <div className="mov-datos">
              <h2>Garfield, la nueva pelicula del gato que odia los lunes ya se encuentra disponible en nuestro cine.
                Ven y diviertete, conoce la historia de Gardfield, como conocio a Jonh y Odie.
              </h2>
            </div>
          </div>
        </section>
        <section className="mov-venta">
          <form action="">
            <div className="mov-informacionVenta">
              <h1>INFORMACION</h1>
              <h2 className="mov-textoVenta">Dias de proyeccion</h2>
              <div className="mov-dias">
                <input type="radio" className="mov-radio_click" name="dias" /><label for="">Lunes</label>
                <input type="radio" className="mov-radio_click" name="dias" /><label for="">Miercoles</label>
                <input type="radio" className="mov-radio_click" name="dias" /><label for="">Viernes</label>
              </div>

              <h2 className="mov-textoVenta">Horarios</h2>
              <div className="mov-hora">
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">8:00</label>
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">10:00</label>
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">12:00</label>
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">14:00</label>
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">16:00</label>
                <input type="radio" className="mov-radio_click" name="hora" /><label for="">18:00</label>
              </div>
            </div>
            <div className="mov-comprarBoletos">
              <Link to="/buys"><button>Comprar Tickets</button></Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}