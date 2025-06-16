import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Galleria } from 'primereact/galleria';
import './App.css';
// import { Button } from 'primereact/button';

function App() {
  const items = [
    { label: 'Inicio', command: () => scrollToSection('inicio') },
    { label: 'Aptitudes', command: () => scrollToSection('Aptitudes') },
    { label: 'Experiencia', command: () => scrollToSection('experiencia') },
    { label: 'Proyectos', command: () => scrollToSection('proyectos') },
    { label: 'Contacto', command: () => scrollToSection('contacto') }
  ];
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [visible, setVisible] = useState(false);

  const galleryItems = [
    { type: 'image', itemImageSrc: '/IMG_20250502_162813.jpg', alt: 'Presentación 1' },
    { type: 'image', itemImageSrc: '/IMG_20250508_175258.jpg', alt: 'Evento 2' },
    { type: 'image', itemImageSrc: '/IMG_20240503_151706_871.jpg', alt: 'Evento 3' },
    { type: 'image', itemImageSrc: '/IMG_20250502_162738.jpg', alt: 'Evento 3' },
    { type: 'image', itemImageSrc: '/IMG_20250412_105743.jpg', alt: 'Intrumentos' },
    { type: 'image', itemImageSrc: '/IMG_20250325_174131.jpg', alt: 'Piano' },
    { type: 'image', itemImageSrc: '/IMG_20240817_172525_490.jpg', alt: 'Ensayo' },
    { type: 'video', videoSrc: '/20231226_1507251.mp4', alt: 'Video 1' },
    { type: 'video', videoSrc: '/VID_20250415_125211.mp4', alt: 'Video 2' },
    { type: 'video', videoSrc: '/VID_20250415_195834.mp4', alt: 'Video 2' }
  ];

  const itemTemplate = (item) => {
    if (item.type === 'image') {
      return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: 'auto' }} />;
    }
    if (item.type === 'video') {
      return (
        <video controls width="100%" style={{ maxHeight: '500px' }}>
          <source src={item.videoSrc} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      );
    }
    return null;
  };

  const thumbnailTemplate = (item) => {
    if (item.type === 'image') {
      return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: 'auto' }} />;
    }
    if (item.type === 'video') {
      return (
        <div style={{ width: '100px', height: '60px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>
          ▶ Video
        </div>
      );
    }
    return null;
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* NAVBAR */}
      <Menubar model={items} className="fixed top-0 w-full z-5" start={<div className='navbar-brand'>The Class Inc</div>} />

      {/* INICIO */}
      <section id="inicio" className="p-5 text-center mt-5">
        <div style={{paddingTop: '280px'}}>
          <h1 className="mb-2" style={{color: 'white', fontSize: '60px'}}>The Class Inc</h1>
          <h1 className="mb-2" style={{color: 'white', fontSize: '40px' }}>Génesis Anaís Murguía Madrigal</h1>
          <h3 className="mb-4" style={{ fontSize: '30px' }}>Licenciada en Música - Especialidad en Canto</h3>
        </div>
        {/* <img src="./IMG_20250524_145053.jpg" alt="Génesis Murguía" style={{ width: '200px', borderRadius: '50%' }} /> */}
      </section>

      {/* Aptitudes  */}
      <section id="Aptitudes" className="p-5">
        <h2 className="text-center mb-4">Aptitudes </h2>
        <p>
          Mi formación dentro de la Universidad de Sonora me permite desempeñar actividades de desarrollo del aprendizaje para todas las edades de acuerdo a las necesidades del proyecto que se desarrolle dentro del ámbito docente, enfocado a la enseñanza del canto, solfeo, piano, coro y apreciación musical, así como también diferentes tipos de instrumentos que sean soporte para la iniciación musical, de manera que puedan aprender y disfrutar de tocar o cantar sea la edad que tengan o el grupo al que pertenezcan.
          A través de los 5 años que tengo como músico, ya sea brindando clases particulares he trabajado con diferentes grupos de personas o como cantante, he adquirido la experiencia para adaptarme a las necesidades que se presenten mostrando siempre la actitud de servicio y de aprendizaje ante cualquier obstáculo que pueda llegar a presentarse.
          Cuento con el conocimiento necesario para manejar las herramientas digitales necesarias para la oferta y demanda de la enseñanza en línea y presencial.
        </p>
        <h2 className="text-center mb-4">Formación Académica </h2>
        <p><strong>Universidad de Sonora -</strong> Egresada de Licenciatura en Música 2012-2017 Hermosillo, Sonora
          He egresado de la licenciatura en música con especialización en canto, tomé unas materias enfocadas a la enseñanza del canto y he pertenecido a muchas actividades dentro de la licenciatura que conformaban grupos corales para ensamble, óperas y diferentes producciones.
        </p>
        <p><strong>Preparatoria Profesor Pascual Pérez (llamada hoy COBACH  Nacozari) - COBACH Pueblo Yaqui, Exalumna:</strong> 2009-2011 Nacozari de García- Obregón, Sonora
          Concluí el último semestre de preparatoria en la ciudad de obregón por un cambio de trabajo de mi madre y toda mi anterior preparación escolar fue dentro de Nacozari de García, de donde soy originaria y donde estuve dentro de muchos concursos, presentaciones y la rondalla donde surgieron los cimientos de querer ser músico profesional.
        </p>
        <h2 className="text-center mb-4">Experiencia</h2>
        <p><strong>Instituto Bicultural Atwell:</strong> Profesora de Música
          Enero 2024-Actualidad, Hermosillo
          Trabajando con niños en grupos reducidos y con necesidades especiales, un trabajo que disfruto mucho llevar a cabo, con juegos y cantos, historia musical, solfeo, iniciación musical entre otros temas, de 1ro a 6to de primaria.
        </p>
        <p><strong>Academia Scherzo:</strong> Profesora de Canto y Guitarra
          2019-2022, Hermosillo
          He impartido clases en la academia de música mencionada; esta está enfocada tanto en la teoría musical que puede ser aplicada a cualquier género musical actual y música académica.
        </p>
        <p><strong>Independiente: </strong> Profesora de Canto, Guitarra, Ukelele y piano
          2016-ACTUALIDAD, Hermosillo
          He brindado clases de canto a domicilio dentro de la ciudad, a personas de todas las edades que buscan mejorar su técnica de canto y a aquellos que buscan la iniciación al canto, así como también iniciación y seguimiento en diferentes instrumentos como los antes mencionados, también he dado clases por internet en plataformas de videollamadas, usando las redes sociales y otras plataformas. Gran variedad de alumnos desde niños a partir de los 5 años, niños con discapacidades y necesidades especiales y hasta adultos mayores, cualquier persona que tenga un grado de interés por la música o quiera despertarlo es un posible alumno para mí.</p>
        <p><strong>Independiente: 	</strong> Cantante Mezzosoprano
          2011-ACTUALIDAD, Hermosillo
          <ul>
            <li>-Cantante libre en la ciudad, guitarra y voz (Agosto 2011- Actualidad)</li>
            <li>-Producción de música experimental (octubre 2017 - Actualidad) desarrollando proyecto de disco de autoría propia.</li>
            <li>-Juez de concurso de Coro infantil del Himno nacional mexicano en primarias privadas (2016)</li>
            <li>-Miembro del coro en la ópera “Carmen”, en el FAOT 2015</li>
            <li>-Coro de la Messa Grande de Mozart (2014)</li>
            <li>-Coro de la ópera “Don Pascuale” (2013)</li>
            <li>-Participante en el concurso “Enrolate”, con el 4to lugar a nivel estatal (2008)</li>
          </ul>
        </p>
        <p><strong>Aires de Son HS </strong> Hermosillo.
          - Voz principal, cuerdas y percusiones.
          ABRIL DEL 2017-ACTUALIDAD
          Entre las múltiples presentaciones destacan
          <ul>
            <li>-Presentación en Magdalena de Kino, Sonora, parte del programa a nivel estatal Vale bailar! Vale cantar! (11 Ago 2018) </li>
            <li>-Presentación de fin de curso de talleres libres de la UNISON (15 junio 2018) </li>
            <li>-Presentación de Aires de Son en el festival XEPE AN COICOÖS en Punta Chueca, Sonora (2017 a 2021)  (2023, 2024, 2025)</li>
            <li>-Grabación de Aires de Son para la televisión universitaria UNISON (primer programa) </li>
            <li>-Presentación de Aires de Son HS, escuela de la Letras de la Universidad de Sonora.</li>
            <li>-Aires de Son HS presentándose en la Semana de Industria y Cultura de la Universidad Tecnológica de Hermosillo. </li>
            <li>-Grabación-participación en el programa de radio conciertos del festival de Primavera Transversales (Octava Edición) </li>
            <li>-Presentación en la semana científico cultural de la escuela de Ciencias químico biológicas de la Universidad de Sonora , miércoles 31 de enero, al aire libre. </li>
            <li>-Concierto de Aires de Son “Los Sones como Son”, Teatro Emiliana de Zubeldía, (22 Noviembre 2017) </li>
            <li>-Participación en el programa de noticias del canal 12, Televisa Hermosillo, Junio 2017 </li>
            <li>-Semana cultural de Ciencias Sociales (27-octubre 2017) -Festival de la catrina, UNISON (1 Noviembre 2017) </li>
            <li>-Concierto “Un canto por el sur” por los damnificados del terremoto (22 septiembre 2017) </li>
            <li>-Noche bohemia de estudiantes de física de la UNISON (25 Agosto 2017). </li>
            <li>Múltiples presentaciones en:
              -Fiestas del Pitic (2019, 2021, 2022)
            </li>
            <li>-Presentaciones privadas</li>
          </ul>
        </p>

        <p><strong>The Class Inc - Proyecto Musical
          Hermosillo.
          - Voz principal, piano, guitarra.
        </strong> AGOSTO 2024 - Actualidad
          Este nuevo proyecto consiste en una banda musical formada entre su servidora y aquellos alumnos que deseen vivir la experiencia de ensambles con otros músicos en formación, haciendo uso de los instrumentos que sepan tocar y cantar sus piezas favoritas, además del uso de herramientas relacionadas a las presentaciones, como el uso de consolas, micrófonos, transmisores de sonido y otros.
        </p>

        <p><strong>Rondalla Don Silvestre Rodríguez,
          Voz principal y guitarra
          2006-2012, Nacozari de García, Sonora
        </strong>
          <ul>
            <li>-Participantes del festival “Luna de Montaña” 4 años consecutivos (2008-2012). </li>
            <li>-Participaciones en varios municipios de Sonora en la zona sierra</li>
            <li>-Presentación durante el aniversario luctuoso de “Don Silvestre Rodríguez”, portando el mismo nombre en su honor (2009-2012) </li>
          </ul>

        </p>



      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="p-5 surface-100">
        <h2 className="text-center mb-4">Logros y Expectativas  </h2>
        <ul>
          <li>Considero un logro el concluir mi carrera y poder encontrar algunas partes en donde desarrollarme profesionalmente, el vivir como músico tanto de calle como músico profesional y ser profesor a tiempo parcial de la misma materia ejercida, siento que me han proporcionado las bases necesarias para poder transmitir el conocimiento adquirido a través de los años.</li><br />
          <li>Considero que hoy en la actualidad es importante contar con las nuevas tecnologías para poder alcanzar a aquellas personas que pasan más tiempo en línea usando las redes sociales para cubrir el posible sector que desconoce de los servicios existentes y abrir nuevas posibilidades de conocimiento en diferentes aspectos sociales y económicos.</li>
        </ul>
        <p> </p> <br></br>
        <p></p>

      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="p-5">
        <h2 className="text-center mb-4">Proyectos Musicales</h2>
        <div className="grid">

          {/* <div className="col-12 md:col-6 text-center mb-3">
            <video width="50%" controls>
              <source src="/20231226_1507251.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <div className="col-12 md:col-6">
            <img src="/IMG_20250502_162813.jpg" alt="Presentación musical" className="w-full border-round" />
          </div> */}
          <Galleria
            value={galleryItems}
            numVisible={5}
            circular
            style={{ maxWidth: '800px', margin: '0 auto' }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            showThumbnails
            showItemNavigators
            showIndicators
          />

        </div>

      </section>

      {/* CONTACTO */}
      <section id="contacto" className="p-5 surface-50">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center">Puedes contactarme a través del correo: <strong>jennmurguia@gmail.com </strong></p>
        <p className="text-center">Cel: <strong>6624217646  </strong></p>
        <p className="text-center">Telefono: <strong>6622672404  </strong></p>
        {/* Aquí podrías agregar un formulario si quieres */}
      </section>

      {/* FOOTER */}
      <footer className="p-4 bg-gray-900 text-white text-center mt-5">
        <p>&copy; {new Date().getFullYear()} Génesis Murguía. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
