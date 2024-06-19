import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { logout } from "../../store/slices/auth"
import '../../assets/css/compra.css'

import Logo from '/logo/Cine_SAS.png'

export default function Buy() {
  const dispatch = useDispatch()
  const { username } = useSelector(state => state.authState)

  return (
    <div className="buy">
      <header className="buy-header">
        <nav>
          <ul>
            <li className="buy-nav-li"><Link to="/">INICIO</Link></li>
            <li className="buy-nav-li" id="candybar-button"><a href="#" id="candybar-button">CANDYBAR</a></li>
          </ul>
        </nav>
        <div className="buy-logo">
          <Link to="/"><img src={Logo} alt="CineSAS" /></Link>
        </div>
        <div className="buy-registro">
          {!username ? (<>
            <li><Link to="/signin">INICIAR SESION</Link></li>
            <li><Link to="/signup">REGISTRARSE</Link></li>
          </>) : (<><li>{username}</li><li onClick={() => dispatch(logout())}>salir</li></>)}
        </div>
      </header>
      <h1>ASIENTOS</h1>
      <div className="buy-contenedor">
        <table>
          <tr>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle comprado" data-status="comprado"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle comprado" data-status="comprado"></div></td>
            <td><div className="buy-circle comprado" data-status="comprado"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
          </tr>
          <tr>
            <td><div className="buy-circle comprado" data-status="comprado"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle reservado" data-status="reservado"></div></td>
            <td><div className="buy-circle reservado" data-status="reservado"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle comprado" data-status="comprado"></div></td>
          </tr>
          <tr>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle reservado" data-status="reservado"></div></td>
            <td><div className="buy-circle reservado" data-status="reservado"></div></td>
            <td><div className="buy-circle reservado" data-status="reservado"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
            <td><div className="buy-circle disponible" data-status="disponible"></div></td>
          </tr>
        </table>
      </div>
      <div id="idModal" className="buy-modal">
        <div className="buy-modal-contenedor">
          <span className="buy-close">&times;</span>
          <h2>Informacion de reserva/compra</h2>
          <p>Asiento: <span id="circleId"></span></p>
          <p>Estado: <span id="circleStatus"></span></p>
          <button id="btnReservar">Reservar</button>
          <button id="btnComprar">Comprar</button>
        </div>
      </div>
    </div>
  )
}