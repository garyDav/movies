import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../store/slices/auth/'
import '../assets/css/principal.css'

import Logo from '/logo/Cine_SAS.png'
import AmigosImg from '/img/amigos.jpg'
import Bob from '/img/bob.jpg'
import Garfield from '/img/garfield.jpg'
import Kungfu from '/img/kungfu.jpg'
import Oppen from '/img/oppen.jpg'
import AmigosCartelera from '/cartelera/amigos.jpg'
import Bad from '/cartelera/bad.jpg'
import Hai from '/cartelera/hai.jpg'
import Dead from '/cartelera/dead.jpg'
import Gar from '/cartelera/gar.jpg'
import Simios from '/cartelera/simios.jpg'
import CandybarImg from '/candybar/images.jpg'

export default function Dashboard() {
  const dispatch = useDispatch()
  const { username } = useSelector(state => state.authState)

  return (
    <div className="principal">
      <header className="p-header">
        <nav>
          <ul>
            <li className="nav-li"><Link to="/" id="inicio-button">INICIO</Link></li>
          </ul>
        </nav>
        <div className="logo">
          <img src={Logo} alt="CineSAS" />
        </div>
        <div className="p-registro">
          {!username ? (<>
            <li><Link to="/signin">INICIAR SESION</Link></li>
            <li><Link to="/signup">REGISTRARSE</Link></li>
          </>) : (<><li>{username}</li><li onClick={() => dispatch(logout())}>salir</li></>)}
        </div>
      </header>

      <section className="inicio">
        <section className="carrusel">
          <input type="radio" name="boton" id="boton1" checked />
          <input type="radio" name="boton" id="boton2" />
          <input type="radio" name="boton" id="boton3" />
          <input type="radio" name="boton" id="boton4" />
          <input type="radio" name="boton" id="boton5" />

          <div className="botones">
            <div className="boton">
              <Link to="/movies">
                <img src={AmigosImg} alt="" />
              </Link>
            </div>
            <div className="boton">
              <Link to="/movies">
                <img src={Bob} alt="" />
              </Link>
            </div>
            <div className="boton">
              <Link to="/movies">
                <img src={Garfield} alt="" />
              </Link>
            </div>
            <div className="boton">
              <Link to="/movies">
                <img src={Kungfu} alt="" />
              </Link>
            </div>
            <div className="boton">
              <Link to="/movies">
                <img src={Oppen} alt="" />
              </Link>
            </div>
          </div>
          <div className="controles">
            <label for="boton1"></label>
            <label for="boton2"></label>
            <label for="boton3"></label>
            <label for="boton4"></label>
            <label for="boton5"></label>
          </div>
        </section>
        <section className="cartelera">
          <div className="text">
            <h1>CARTELERA</h1>
          </div>
          <div className="carruselImg">
            <div className="carrusel-slide">
              <Link to="/movies">
                <img src={AmigosCartelera} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Bad} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Dead} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Gar} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Hai} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Simios} alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section className="nuevaCartelera">
          <div className="text">
            <h1>PROXIMOS ESTRENOS</h1>
          </div>
          <div className="carruselImg">
            <div className="carrusel-slide">
              <Link to="/movies">
                <img src={AmigosCartelera} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Bad} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Dead} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Gar} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Hai} alt="" />
              </Link>
              <Link to="/movies">
                <img src={Simios} alt="" />
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="Candybar hidden">
        <div className="contenedorCandy">
          <h1>CANDYBAR</h1>
          <div className="imagen">
            <img src={CandybarImg} alt="" />
          </div>
        </div>
        <div className="productos">
          <div className="palomitas">
            <div className="imgProductos">
              <img src={CandybarImg} alt="" />
            </div>
            <div className="mostrarmas">
              <button>Ver Palomitas</button>
            </div>
          </div>
          <div className="gaseosas">
            <div className="imgProductos">
              <img src={CandybarImg} alt="" />
            </div>
            <div className="mostrarmas">
              <button>Ver Gaseosas</button>
            </div>
          </div>
          <div className="combos">
            <div className="imgProductos">
              <img src={CandybarImg} alt="" />
            </div>
            <div className="mostrarmas">
              <button>Ver Combos</button>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <footer>
        <div className="foot">
          <div className="informacion">
            <div className="div_foot">
              <p className="p1">Informacion</p>
              <p className="p2"><a href="">Sobre el sitio</a></p>
              <p className="p2"><a href="">Politicas de privacidad</a></p>
              <p className="p2"><a href="">Condiciones de uso</a></p>
              <p className="p2"><a href="">Sobre nosotros</a></p>
            </div>
          </div>
          <div className="contacto">
            <div className="div_foot">
              <p className="p1">Contacto</p>
              <p className="p2">Celular: +519 74521810</p>
              <p className="p2">Celular: +519 73541090</p>
              <p className="p2">Correo: CineSAS@gmail.com</p>
            </div>
          </div>
          <div className="redes-sociales">
            <p className="p1">Redes Sociales</p>
            <a href="#" className="icono-facebook"><span className="fa fa-facebook"></span> Facebook</a>
            <a href="#" className="icono"><span className="fa fa-twitter"></span> Twitter</a>
            <a href="#" className="icono"><span className="fa fa-instagram"></span> Instagram</a>
            <a href="#" className="icono"><span className="fa fa-whatsapp">Whastapp</span></a>
          </div>

        </div>
      </footer>
      <hr />
    </div>
  )
}