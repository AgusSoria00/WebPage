import React from 'react';
import Blog from './components/Blog';
import AppointmentForm from './components/AppointmentForm';
import PsychologyArticles from './components/PsychologyArticles';
import EducationalVideos from './components/EducationalVideos';
import EmergencySection from './components/EmergencySection';
import Contact from './components/Contact';
import WorkWith from './components/WorkWith';
import HowItWork from './components/HowItWork';
import '../src/App.css'

const App = () => {
  return ( 
    <div>
      <nav>
        <ul>
          <li><a href="#blog">Blog Personal</a></li>
          <li><a href="#appointments">Pedir Citas</a></li>
          <li><a href="#videos">Videos Informativos</a></li>
          <li><a href="#emergency">Urgencia</a></li>
          <li><a href="#articles">Artículos de Psicología</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
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
        <img src='/fotoPerfil.png' alt="Foto de perfil"/>
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
        <h3>Agenda tu cita online</h3>
        <h3>Seleccione la modalidad que prefiera</h3>
        <h3>Realiza la sesion</h3>
        <p>Elige la hora y el día que mejor se adapte a sus tiempos</p>
        <p>Puede realizar su consulta de forma presencial o virtual, 
          mediante una videollamada de alta calidad y confidencialidad.</p>
        <p>Solo queda comenzar la sesion y empieza a cambiar tu vida. 
          Se abono durante el mismo dia de consulta.</p>
      </div>
        </section>
  <section id="workWith">
          <WorkWith />
        <div id="parteArriba">
  <div class="subseccion">
    <img src="/llamadas.png" alt="Icono de llamada"/>
    <h2>Llamada o videollamada</h2>
    <p>Se atiende por llamada o videollamada una vez agendada la cita. La videollamada puede ser por Skype, Meet o WhatsApp</p>
  </div>
  <div class="subseccion">
    <img src="/presencial.png" alt="Icono de presencial"/>
    <h2>Forma presencial</h2>
    <p>Se realiza la sesión de manera presencial a la direccion... en la ciudad de...</p>
  </div>
  <div class="subseccion">
    <img src='/domicilio1.png' alt='ilustracion domicilio'/>
    <h2>A domicilio</h2>
    <p>Existe tambien la opcion de atencion en su propio hogar, esto incluye un costo extra por traslado dependiendo la ubcacion </p>
  </div>
  <div class="subseccion">
    <img src="/chateando.png" alt="Icono de whatsapp"/>
    <h2>Chat en línea</h2>
    <p>Esta modalidad permite un chat en vivo como sesion, a traves de WhatsApp ya sea por mensajes o audios</p>
  </div>
</div>
        </section>
  <section id="appointments">
          <AppointmentForm />
      <a href="URL_DE_TU_CITA" class="cita-button">Programa tu cita ahora</a>
        </section>
  <section id="videos">
          <EducationalVideos />
        </section>
  <section id="emergency">
<div className='primerColor'>
          <EmergencySection />
        <p>Si se encuentra atravesando por un contexto difícil que requiere atención inmediata, 
        le invitamos a que comparta los detalles de su situacion, así como sus datos de contacto, 
        y le responderemos a la mayor brevedad posible. Su solicitud será evaluada y priorizada según su nivel de urgencia.</p>
    <div class="casillero">
    <label for="comentarios">Nombre y apellido</label>
        <textarea id="comentarios" name="comentarios" rows="2"></textarea>
    <label for="comentarios2">Telefono</label>
        <textarea id="comentarios2" name="comentarios2" rows="2"></textarea>
    <label for="comentarios3">E-mail</label>
        <textarea id="comentarios3" name="comentarios3" rows="2"></textarea>
    </div>
          <div className='primeraImagen'>
            <img src='/ilustracionUrgencia.jpg' alt='urgencia'/>
          </div>  
</div>
    <div className='segundoColor'>
    <div class='casillero2'>
    <label for="comentarios4">Consulta</label>
        <textarea id="comentarios4" name="comentarios4" rows="8"></textarea>
    </div>
    <a href="URL ENVIAR MENSAJE" class="enviar-button">Enviar</a>        
          </div>
        </section>
  <section id="articles">
          <PsychologyArticles />
          <h2>Conoce nuestras últimas publicaciones</h2>
<article class="articulo">
  <img src="" alt="Trastornos de salud mental y estigmatización"></img>
  <h3>Trastornos de salud mental y estigmatización</h3>
  <p>La salud mental, un componente fundamental de nuestro bienestar general, a menudo se ve obstaculizada por el estigma social. En este artículo, analizamos cómo el estigma puede afectar a las personas con trastornos de salud mental y cómo podemos trabajar para reducirlo.</p>
  <a href="#">Leer más</a>
</article>

<article class="articulo">
  <img src="" alt="Terapia cognitivo conductual con parejas"></img>
  <h3>Terapia cognitivo conductual con parejas</h3>
  <p>La Terapia Cognitivo-Conductual (TCC) con parejas es una modalidad de intervención psicológica que ha demostrado ser eficaz para el tratamiento de una amplia gama de problemas de relación. En este artículo, analizamos cómo funciona la TCC con parejas y cómo puede ayudarte a mejorar tu relación.</p>
  <a href="#">Leer más</a>
</article>

<article class="articulo">
  <img src="" alt="Crisis de la mediana edad y psicoterapia"></img>
  <h3>Crisis de la mediana edad y psicoterapia</h3>
  <p>La crisis vital de la mediana edad ha sido objeto de estudio y discusión en los últimos años. En este artículo, analizamos las causas y los síntomas de la crisis de la mediana edad, y cómo la psicoterapia puede ayudarte a superarla.</p>
  <a href="#">Leer más</a>
</article>    
  </section>
      </main>
      <section id="contacts">
          <Contact />
      <h3>Informacion de contacto</h3>
      <footer className='columnas'>
      <p>Direccion: 1st Industria, calle A N° 1234</p>
      <p>Facebook</p>
      <p>Telefono: +34 680 39 26 97</p>
      <p>Instragram</p>
      <p>Email: support@corporate.cc</p>
      <p>Youtube</p>
      <p>Horarios de atención: Lunes a Sábados de 09:00 a 21:00. Domingos solo urgencias.</p>
      </footer> 
        </section>
    </div>
  );
};

export default App;
