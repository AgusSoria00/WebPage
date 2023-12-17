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
      <header>
        <h1>Psicología con [Nombre de la Psicóloga]</h1>
      </header>
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
          <p>Como especialista en acompañamiento y gestión emocional,
          mi enfoque va más allá de ofrecer ayuda; se trata de forjar un espacio donde la escucha compasiva 
          y la gestión efectiva de emociones se fusionan para iluminar tu camino hacia el bienestar.</p>
          <h3>¿Qué Puedo Ofrecerte?</h3>
          <p>Acompañamiento Profesional: Estoy aquí para caminar contigo en cada paso de tu viaje emocional, 
brindándote el apoyo necesario para superar las situaciones difíciles.
Gestión Emocional: Juntos exploraremos estrategias prácticas para gestionar tus emociones, proporcionándote
las herramientas que necesitas para enfrentar los desafíos con fortaleza y resiliencia.
Espacio de Conversación: Tu bienestar es mi prioridad. Crearemos un espacio seguro donde la conversación fluya, 
permitiéndote explorar tus pensamientos y sentimientos de manera auténtica.</p>
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
        <p>Elige la hora y el día que mejor se adapte a sus horarios</p>
        <p>Puede realizar su consulta de forma presencial o virtual, 
          mediante una videollamada de alta calidad y confidencialidad.</p>
        <p>Solo queda comenzar la terapia y empieza a cambiar tu vida. 
          Se abono durante el mismo dia de consulta.</p>
      </div>
        </section>
  <section id="workWith">
          <WorkWith />
        </section>
  <section id="appointments">
          <AppointmentForm />
      <a href="URL_DE_TU_CITA" class="cita-button">Programa tu cita ahora</a>
        </section>
  <section id="videos">
          <EducationalVideos />
        </section>
  <section id="emergency">
          <EmergencySection />
        </section>
  <section id="articles">
          <PsychologyArticles />
        </section>
  <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
