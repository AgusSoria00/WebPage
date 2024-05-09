import React, {useState, useEffect} from 'react';
import Blog from './components/Blog';
import AppoinmentForm from './components/AppoinmentForm';
import EducationalVideos from './components/EducationalVideos';
import { redirectToSocialMedia } from './components/Contact';
import WorkWith from './components/WorkWith';
import HowItWork from './components/HowItWork';
import Modal from './components/modal';
import CustomModal from './components/modalEmergency';
import LoginForm from './components/loginForm';
import '../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faComments, faFaceFrownOpen, faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons';
import AdminPage from './components/AdminPages';
import './css/fontello.css';
import DatingMessages from './components/datingMessages';
import Calendar from './components/Calendar';
import ModalChat from './components/modalChat';
import Modal2Chat from './components/modal2Chat';
import ParentComponent from './components/ParentComponent';


const App = () => {
  const redirectToSocialMedia = (platform) => {
    let url = '';
    switch (platform) {
      case 'youtube':
        url = 'https://www.youtube.com/@llegalamuerte-mariabonfigl5968';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/tucuenta/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/tucuenta/';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  const handleAttentionClick = () => {
    // Para enviar los datos de la consulta al servidor
    fetch('/api/emergencia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Mostrar respuesta del servidor
    })
    .catch(error => console.error('Error:', error));
  };
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [showAdminFeatures, setShowAdminFeatures] = useState(false);

  const handleClick = () => {
    setModalVisible(true);
  };

  const [loginButtonText, setLoginButtonText] = useState("Inicio");
  const handleCloseClick = () => {
      setShowLoginForm(false);
      setLoginButtonText("Inicio");
  };
  const handleClose = () => {
    setModalVisible(false);
  };
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar si el usuario es administrador

  const handleInicioClick = () => {
    if (loginButtonText === 'Inicio') {
      setLoginButtonText('Ingresar');
      setShowLoginForm(true);
    } else if (loginButtonText === 'Ingresar') {
      setLoginButtonText('Inicio');
      setShowLoginForm(false);
      setShowAdminFeatures(true);
    }
  };

  const handleCloseLoginForm = () => {
    setIsAdmin(true); 
    setShowLoginForm(false);
    setLoginButtonText("Inicio"); 
    setShowAdminFeatures(true);
  };

  // Función para verificar si el usuario es administrador
  const checkAdminStatus = () => {
    setIsAdmin(true);
  };

  useEffect(() => {
    // Verificar el estado de administrador al cargar la página
    checkAdminStatus();
  }, []);

  const [data, setData] = useState([]);
  const [modalComponent, setModalComponent] = useState(null);
  const handleSetModalVisible = (state, data) => {
    setModalVisible(state);
    setData(data);
    setModalComponent(state ? <Modal2Chat onClose={() => handleSetModalVisible(false, [])} data={data} /> : null);
  };
  return (
    <div>
      <nav className="miClaseNav">
        <ul>
          <li>
          <a href="#blog" onClick={handleInicioClick}>{loginButtonText}</a></li>
          <li><a href="#appointments">Pedir Citas</a></li>
          <li><a href="#videos">Videos Informativos</a></li>
          <li><a href="#emergency">Urgencia</a></li>
          <li><a href="#articles">Artículos de Psicología</a></li>
          <li><a href="#contacts">Contacto</a></li>
        </ul>
        </nav>
        {showLoginForm && <LoginForm onClose={handleCloseLoginForm} onCloseClick={handleCloseClick} />}
        {showAdminFeatures && (
        <div className="container">
          <input type="checkbox" id="btn-mas" />
          <div className="redes">
            <button className="icon-attention" onClick={() => setModal2Visible(true)}></button>
            <button className="icon-chat-empty" onClick={() => setModalVisible(true)}></button>
            {modalVisible && <ModalChat onClose={() => setModalVisible(false)} data={data} />}
            {modal2Visible && <Modal2Chat onClose={() => setModal2Visible(false)} data={data} />}
          </div>
          <div className="btn-mas">
            <label htmlFor="btn-mas" className="icon-plus-1"></label>
          </div>
        </div>
)}
      <main>
  <section id="blogFondo">
          <Blog />
      <div className='texto1'>
          <p>Como especialista en acompañamiento y gestión emocional,
          mi enfoque va más allá de ofrecer ayuda; se trata de forjar un espacio donde la escucha compasiva 
          y la gestión efectiva de emociones se fusionan para orientar tu camino hacia el bienestar.</p>
          <h3 style={{textDecoration: 'underline'}}>¿Qué Puedo Ofrecerte?</h3>
          <p>Estoy a disposicion para acompañarte de manera profesional en cada fase de tu trayectoria emocional,
 proporcionándote el respaldo necesario para afrontar y superar las circunstancias dificiles.
Me encuentro disponible para brindarle estrategias prácticas para gestionar sus emociones, proporcionándote
las herramientas que necesitas para enfrentar los desafíos con fortaleza y resiliencia.
Tu bienestar es mi prioridad. Crearemos un espacio seguro donde la conversación fluya, 
permitiéndote explorar tus pensamientos y sentimientos de manera auténtica.</p>
      </div>
        <div className="perfil">
        <img src="/fotoPerfil.png" alt="Foto de perfil"/>
        </div>
        </section>
  <section id="howItWork">
          <HowItWork />
  <div className='agenda'>        
        <img src='/ilustracion1.jpg' alt='Ilustracion agenda'/>
        <img src='/ilustracion2.jpg' alt='Ilustracion modalidad'/>
        <img src='/ilustracion3.jpg' alt='ilustracion sesion'/>
        </div>
      <div className='subtitulos'>
        <h3 className='a1'>Agenda tu cita online</h3>
        <h3 className='a2'>Seleccione la modalidad que prefiera</h3>
        <h3 className='a3'>Realiza la sesion</h3>
        <p className='b1'>Elige la hora y el día que mejor se adapte a sus tiempos</p>
        <p className='b2'>Puede realizar su consulta de forma presencial o virtual, 
          mediante una videollamada de alta calidad y confidencialidad.</p>
        <p className='b3'>Solo queda comenzar la sesion y empieza a cambiar tu vida. 
        Se abona previamente la sesión  50€ el tiempo de la misma será  mínimo una hora  o lo necesario en cada caso.</p>
      </div>
        </section>
  <section id="workWith">
          <WorkWith />
          <div className='textStyle'>
          <p>Existen distintas modalidades para realizar una consulta online, 
    que podrás realizar a través de tu computadora o smartphone</p>
    </div>
        <div id="parteArriba">
  <div className="subseccion">
    <img src="/llamadas.png" alt="Icono de llamada"/>
    <h2>Llamada o videollamada</h2>
    <p>Se atiende por llamada o videollamada una vez agendada la cita. La videollamada puede ser por Skype, Meet o WhatsApp</p>
  </div>
  <div className="subseccion">
    <img src="/presencial.png" alt="Icono de presencial"/>
    <h2>Forma presencial</h2>
    <p>Se realiza la sesión de manera presencial a la direccion calle Titanes local 4 en la ciudad de Cádiz</p>
  </div>
  <div className="subseccion">
    <img src='/domicilio1.png' alt='ilustracion domicilio'/>
    <h2>A domicilio</h2>
    <p>Existe tambien la opcion de atencion en su propio hogar, esto incluye un costo extra por traslado dependiendo la ubcacion </p>
  </div>
  <div className="subseccion">
    <img src="/chateando.png" alt="Icono de whatsapp"/>
    <h2>Chat en línea</h2>
    <p>Esta modalidad permite un chat en vivo como sesion, a traves de WhatsApp ya sea por mensajes o audios</p>
  </div>
</div>
</section>
<section id="appointments">
  <AppoinmentForm />
  <Modal />
</section>
  <section id="videos">
          <EducationalVideos />
        </section>
  <section id="emergency">
<div className='primerColor'>
        <h2 className='emergency-titulo'>¿Estás en una situación de urgencia?</h2>
        <p className='texto'>Si se encuentra atravesando por un contexto difícil que requiere atención inmediata, 
        le invitamos a que comparta los detalles de su situacion, así como sus datos de contacto, 
        y le responderemos a la mayor brevedad posible. Su solicitud será evaluada y priorizada según su nivel de urgencia.</p>
    <div className="casillero">
    <label htmlFor="comentarios">Nombre y apellido</label>
        <textarea id="comentarios" name="comentarios" rows="2"></textarea>
    <label htmlFor="comentarios2">Telefono</label>
        <textarea id="comentarios2" name="comentarios2" rows="2"></textarea>
    <label htmlFor="comentarios3">E-mail</label>
        <textarea id="comentarios3" name="comentarios3" rows="2"></textarea>
    </div>         
</div>
    <div className='segundoColor'>
    <div className="primeraImagen">
        <img src="/ilustracionUrgencia.jpg" alt="urgencia" />
      </div>
    <div className='casillero2'>
    <label htmlFor="comentarios4">Consulta</label>
        <textarea id="comentarios4" name="comentarios4" rows="8"></textarea>
    </div>       
      <CustomModal />
    </div>
        </section>
        <section id="articles">
    <h2>Articulos de investigacion</h2>
  <div className="articles-container">
    <div className="articles">
      <article className="articulo">
        <h3>Trastornos de salud mental y estigmatización</h3>
        <p>La salud mental, un componente fundamental de nuestro bienestar general, a menudo se ve obstaculizada por el estigma social. En este artículo, analizamos cómo el estigma puede afectar a las personas con trastornos de salud mental y cómo podemos trabajar para reducirlo.</p>
        <a href="https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S0211-57352008000100004" target="_blank" rel="noopener noreferrer">Leer más</a>
      </article>

      <article className="articulo">
        <div>
          <h3>Terapia cognitivo conductual con parejas</h3>
          <p>
            La Terapia Cognitivo-Conductual (TCC) con parejas es una modalidad de intervención psicológica que ha demostrado ser eficaz para el tratamiento de una amplia gama de problemas de relación. En este artículo, analizamos cómo funciona la TCC con parejas y cómo puede ayudarte a mejorar tu relación.
          </p>
          <a href="https://psicoterapeutas.com/terapia-de-pareja/pareja/" target="_blank" rel="noopener noreferrer">Leer más</a>
        </div>
      </article>

      <article className="articulo">
        <div>
          <h3>Crisis de la mediana edad y psicoterapia</h3>
          <p>
            La crisis vital de la mediana edad ha sido objeto de estudio y discusión en los últimos años. En este artículo, analizamos las causas y los síntomas de la crisis de la mediana edad, y cómo la psicoterapia puede ayudarte a superarla.
          </p>
          <a href="https://www.psicologia-online.com/crisis-de-la-mediana-edad-sintomas-causas-y-soluciones-4993.html" target="_blank" rel="noopener noreferrer">Leer más</a>
        </div>
      </article>
      
      <article className="articulo">
        <h3>Estrés laboral y salud mental</h3>
        <p>El estrés laboral es un problema común en el mundo moderno que puede tener graves consecuencias para la salud mental. En este artículo, exploramos cómo el estrés en el trabajo puede afectar nuestra salud mental y qué estrategias podemos utilizar para gestionarlo de manera efectiva.</p>
        <a href="https://www.apa.org/topics/healthy-workplaces/estres-trabajo" target="_blank" rel="noopener noreferrer">Leer más</a>
      </article>

      <article className="articulo">
        <h3>Autoestima y bienestar emocional</h3>
        <p>La autoestima juega un papel fundamental en nuestro bienestar emocional y nuestra capacidad para enfrentar los desafíos de la vida. En este artículo, examinamos la importancia de la autoestima y ofrecemos consejos prácticos para mejorarla.</p>
        <a href="https://enterapiapsicologia.es/autoestima-y-bienestar-emocional/" target="_blank" rel="noopener noreferrer">Leer más</a>
      </article>

      <article className="articulo">
        <h3>Depresión en la adolescencia: signos y tratamiento</h3>
        <p>La depresión es un trastorno mental grave que puede afectar a personas de todas las edades, incluidos los adolescentes. En este artículo, analizamos los signos y síntomas de la depresión en la adolescencia y exploramos diferentes opciones de tratamiento disponibles.</p>
        <a href="https://www.mayoclinic.org/es/diseases-conditions/teen-depression/symptoms-causes/syc-20350985" target="_blank" rel="noopener noreferrer">Leer más</a>
      </article>

      <article className="articulo">
        <h3>Nuevas tendencias en la investigación de la Inteligencia Emocional</h3>
        <p>Las nuevas tendencias en la investigación de la inteligencia emocional y su desarrollo desde diversas disciplinas, como neurociencias, psicología y educación. Incluyendo revisiones sistemáticas y estudios empíricos que exploran la importancia de la inteligencia emocional en contextos clínicos, laborales, educativos y su impacto en la vida personal y profesional.</p>
        <a href="https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1989-38092022000200005" target="_blank" rel="noopener noreferrer">Leer más</a>
      </article>
    </div>
  </div>
</section>

      </main>
      <section id="contacts">
      <h3>Informacion de contacto</h3>

      <footer id='contacts'>
  <div className='columnas'>
    <div>
      <p>Dirección: Calle Titanes local 4. Codigo Postal: 11009 Cádiz.</p>
      <p>Teléfono: +34 680 39 26 97</p>
      <p>Email: support@corporate.cc</p>
      <p>Horarios de atención: Lunes a Sábados de 09:00 a 21:00. Domingos solo urgencias.</p>
    </div>
    <div className='iconos'>
    <FontAwesomeIcon icon={faYoutube} onClick={() => redirectToSocialMedia('youtube')} />
      <FontAwesomeIcon icon={faInstagram} onClick={() => redirectToSocialMedia('instagram')} />
      <FontAwesomeIcon icon={faFacebook} onClick={() => redirectToSocialMedia('facebook')} />
    </div>
    <div className='iconos'>
      <p onClick={() => redirectToSocialMedia('youtube')}>Youtube</p>
      <p onClick={() => redirectToSocialMedia('instagram')}>Instagram</p>
      <p onClick={() => redirectToSocialMedia('facebook')}>Facebook</p>
    </div>
  </div>
</footer>

        </section>
    </div>
);
};

export default App;

