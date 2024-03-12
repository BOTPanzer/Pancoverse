
 /*$      /$$  /$$$$$$  /$$$$$$ /$$   /$$
| $$$    /$$$ /$$__  $$|_  $$_/| $$$ | $$
| $$$$  /$$$$| $$  \ $$  | $$  | $$$$| $$
| $$ $$/$$ $$| $$$$$$$$  | $$  | $$ $$ $$
| $$  $$$| $$| $$__  $$  | $$  | $$  $$$$
| $$\  $ | $$| $$  | $$  | $$  | $$\  $$$
| $$ \/  | $$| $$  | $$ /$$$$$$| $$ \  $$
|__/     |__/|__/  |__/|______/|__/  \_*/

//Load portfolio
window.onload = () => {
  setLan()
  resized()
  scrolled()
  html.style.setProperty('--waveBot', '100vh')
  setTimeout(() => {
    homeType()
    document.getElementById('waves').style.opacity = '0'
    document.getElementById('waves').style.pointerEvents = 'none'
    setTimeout(() => { 
      document.body.style.overflow = 'auto' 
    }, 500)
  }, 500)
}



//Socials achievement & title change
window.onfocus = () => {
  if (socialsOpen) giveAchievement('socials')
  changeTitle()
}



//Get html element
const html = document.querySelector('html')



//Language (spanish as default)
const lans = {
  en: {
    tag: 'en', 
    name: "Alex's Portfolio", 
    ach: {
      tit: 'ACHIEVEMENTS',
      lock: 'LOCKED',
      a1: {
        tit: 'Interested Fellow',
        con: 'Given after opening one of my social links'
      },
      a2: {
        tit: 'Best Friends',
        con: 'Given after finding Artyom (my first gecko)'
      },
      a3: {
        tit: 'Go with the Flow',
        con: 'Given after changing the theme twice'
      }
    },
    top: {
      h: 'Home',
      a: 'About',
      s: 'Skills',
      p: 'Projects',
      t: 'Theme',
      l: 'English',
      ac: 'Achievements'
    },
    h: {
      hi: "Howdy! I'm",
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'And I love programming and designing',
      desc: `I'm a spanish studient, currently studying videogame development in <a href="https://www.urjc.es/" target="_blank">URJC</a>, who has been interested in videogames since little.<br>`,
      type1: 'I consider myself',
      type2: [
        'an indie game developer', 
        'an app developer', 
        'a web developer',
        'a 3D printing hobbyist',
        'a videogame enthusiast'
      ],
      a: 'See more about me!'
    },
    a: {
      tit: 'About Me',
      desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a spanish developer spends time designing and programming indie games and apps.",
      desc2: "I'm a well-organized, independent person who loves giving things his own touch. Some of my interests are playing, programming and designing, but I also enjoy 3D printing and DIY projects.",
      s: 'Check out my skills!',
      next: 'Click me!',
      names: ['Artyom',
              'Canary Islands',
              'Sleeping Cat',
              'Finisterre',
              'Mallorca',
              'Otivar',
              'River Flower',
              'Lennon Wall']
    },
    s: {
      tit: 'My Skills',
      desc: "I've been interested in the world of technology ever since ever. Thanks to that, I've learnt and manage a large number of skills related to different topics.",
      videogames: 'Videogame Development',
      apps: 'Apps Development',
      web: 'Web Development',
      ui: 'UI/UX Design',
      d3: '3D Modeling/Printing &  CAD',
      art: 'Art & Media',
      basic: 'Basic',
      medium: 'Medium',
      high: 'High',
      advanced: 'Advanced',
      expert: 'Expert',
      p: 'Check out my projects!'
    },
    p: {
      tit: 'My Projects',
      more: 'Show more projects!',
      asisAn: {
        inf: 'Java · Android Studio · UI/UX Design',
        tag: 'Personal Project',
        tit: 'Oriøn Assistant (Android)',
        con: `Oriøn Assistant for Android is an app filled with useful smaller apps such as a music player or a QR scanner.
              <br><br>
              At first, the idea started as a simple web browser that detected commands and helped with gaming tasks.
              After forgetting it for some time, I decided to rename it and give it a modern design with Android Studio. 
              At the moment it has music and video players, a photo vault, notes, a browser, a QR scanner and an app to send data to the Windows version of the app.`,
        b1: 'Download v1.9.0'
      },
      asisPC: {
        inf: 'CMD · HTML · CSS · JS · NodeJS · ElectronJS · VS Code · UI/UX Design',
        tag: 'Personal Project',
        tit: 'Oriøn Assistant (Windows)',
        con: `Oriøn Assistant for Windows is an app launcher with support for custom themes and HTML apps called modules.
              <br><br>
              I like to carry my apps on a USB but plugging drives in different computers changes their letter and shortcuts break, so I had to come up with a solution.
              The first iteration of the assistant was a command line app that replaced path letters with "?:\\", which would use the drive it was installed on.
              <br><br>
              After that I wanted to go further with a UI, so I started a new version called Oriøn Launcher using Electron.js. 
              Some updates later I renamed it to Oriøn Assistant to match the Android app and added compatibility between them.`,
        b1: 'Oriøn Assistant',
        b2: 'Batch Launcher'
      },
      frame: {
        inf: 'HTML · CSS · JS · VS Code · UI/UX Design',
        tag: 'Personal Project',
        tit: 'Oriøn Framework',
        con: `Oriøn Framework is an HTML, CSS & JS based framework made with personalization in mind. 
              This project got separated from the PC version of Oriøn Assistant in an attempt to make it available for everyone.
              <br><br>
              Here you can find new simple and easy to use HTML elements like buttons, inputs, switches, checkboxes, radio buttons and various loading animations and effects.`,
        b1: 'See documentation'
      },
      hoodie: {
        inf: 'Illustrator · Photoshop · Sketching',
        tag: 'Personal Project',
        tit: 'Futuristic Hoodie',
        con: `One day I came across a streetwear hoodie, a new style of clothing I had never seen, and I got inspired to create my own.
              It isn't exactly streetwear but it's indeed a futuristic hoodie design.
              I started by sketching some designs in my notebook which were then digitalized using Adobe Illustrator.
              Then I made a preview in Photoshop of how the hoodie would look like if it was real.`
      },
      mod:{
        inf: '3D Modeling · 3D Printing · Illustrator · Sketching · DIY',
        tag: 'Personal Project',
        tit: 'PC Modding',
        con: `Ever since I got into the PC world I started to get interested in modding, so I decided to make my own modded PC.
              <br><br>
              I began by extracting 3D models from some of my favorite games since I couldn't find them online.
              I printed a deathclaw figure and made a large rock model to place inside the case.
              Then I continued sketching the exterior pieces, which are Cyberpunk 2077 inspired, to later 3D model and print them.
              <br><br>
              After printing them, I painted and placed them on my PC.`
      },
      usb:{
        inf: '3D Modeling · 3D Printing · Electronics · DIY',
        tag: 'Personal Project',
        tit: 'GTX USB',
        con: `Carrying apps and games on a USB isn't a bad idea, but the memory's speed can cause problems.
              To fix this I had the idea of adding a cooler, so I started designing a case which ended up having the shape of an Nvidia GTX graphics card.
              <br><br>
              After adding the holes for the ventilation, I printed the case and placed a small fan that gets powered from a little connector on the side.
              Finally, I put a thermal pad and an aluminium plate, which was later painted, to dissipate heat from the memory.`
      },
      dis:{
        inf: 'JS · VS Code · Discord API',
        tag: 'Personal Project',
        tit: 'Discord Bots',
        con: `I've created two discord bots. The first one, Syrup, is a simple bot capable of moderating a server and providing simple games for people to enjoy.
              <br><br>
              After Syrup came Coscu, a more advanced bot capable of the same and more. This new version could jump into a call with people and play custom sounds and music.`,
        b1: 'Syrup Repository'
      },
      t45:{
        inf: '3D Printing · DIY',
        tag: 'Personal Project',
        tit: 'T45 Helmet',
        con: `Fallout is one of my favorite videogame series and, in its universe, people use technologically advanced full-body suits called power armors.
              <br><br>
              As I found a helmet 3D model I decided to print it in small pieces to make my own. 
              After gluing all the parts, I painted it and added a vacuum cleaner tube in order to make it look a bit more realistic.`
      },
      otters:{
        inf: 'Unity · VS Code · 3ds Max · Substance Painter · Photoshop',
        tag: 'Team Project',
        tit: "Otter's Odyssey",
        con: `Otter's Odyssey was presented to the 2022 URJC GameJam with a medieval theme and received an honorific mention to the best 3D esthetic.
              <br><br>
              It is an isometric role playing game in which you control an otter that goes into an adventure to save its brother.`,
        b1:  "Download&nbsp<i>Otter's Odyssey</i>"
      },
      vapor:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Personal Project',
        tit: "Vaporcade",
        con: `Vaporcade is a vaporwave themed arcade indie game in which you control a spaceship and score points by shooting. 
              <br><br>
              Vaporcade is divided by waves. In each wave you'll find new enemies and, for every odd wave, a boss will appear.`,
        b1:  "Download&nbsp<i>Vaporcade</i>"
      },
      papa:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Team Project',
        tit: "Cooking Papa",
        con: `Cooking Papa is an indie game where you will have to prepare recipes with ingredients you don't have.
              <br><br>
              The game goes against the clock and you will have to check the cooking book to replace the ingredients that are missing.`,
        b1:  "Download&nbsp<i>Cooking Papa</i>"
      },
      spirits:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Team Project',
        tit: "Twin Spirits",
        con: `Twin Spirits is an indie local coop game in which two spirits go on an adventure in search of a scepter capable of bringing them back to life.  
              <br><br>
              On the way you will find puzzles in which you will have to cooperate in order to continue.`,
        b1:  "Download&nbsp<i>Twin Spirits</i>",
        vid: 'Watch Trailer'
      },
      memory:{
        inf: 'Unity · VS Code · Photoshop · Illustrator',
        tag: 'Personal Project',
        tit: "Memory Shift",
        con: `Memory Shift is a 2D action-platformer featuring fast-paced gameplay and a hacking system.
              <br><br>
              Inspired by Katana ZERO and Cyberpunk 2077, run, kill, hack, slide and discover what happened to you before losing your memories.
              <br><br>
              Enjoy a story driven adventure with handcrafted levels and mechanics such as throwing items or exploding enemies from afar.`,
        b1:  "Download&nbsp<i>Memory Shift</i>"
      },
      lmdshow:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Personal Project',
        tit: "Escape From LMDShow",
        con: `Thank you <a href="https://www.twitch.tv/illojuan" target="_blank">Juan</a> for playing!
              <br><br>
              Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and attempts to escape the house he was locked in.
              <br><br>
              To escape you will have to solve different puzzles with objects and codes that you will find exploring the rooms.`,
        b1:  "Download&nbsp<i>Escape From LMDShow</i>",
        vid: 'Watch IlloJuan play'
      },
      raccoon:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Team Project',
        tit: "Esto AÚN no es un Juego",
        con: `Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
              <br><br>
              In Esto AÚN no es un juego you will help a programer raccoon finish his game before his gamejam ends.
              <br><br>
              Due to the little time he has left, to achieve this you will have to go inside the game and fix bugs from there.
              <br><br>
              Your mission will be to change how things work, so that you are able to get to each level's ending and continue to the next.`,
        b1:  "Download&nbsp<i>Esto AÚN no es un Juego</i>",
        vid: 'Watch Gameplay'
      }
    },
    bot: {
      mail: 'Email copied to clipboard'
    }
  },
  es:{
    tag: 'es', 
    name: 'Portfolio de Alex', 
    ach: {
      tit: 'LOGROS',
      lock: 'BLOQUEADO',
      a1: {
        tit: 'Chavalin Interesado',
        con: 'Dado por abrir uno de los links de mis redes'
      },
      a2: {
        tit: 'Mejores Amigos',
        con: 'Dado por encontrar a Artyom (mi primer gecko)'
      },
      a3: {
        tit: 'Ves con el Flow',
        con: 'Dado por cambiar el tema 2 veces'
      }
    },
    top: {
      h: 'Inicio',
      a: 'Sobre Mi',
      s: 'Habilidades',
      p: 'Proyectos',
      t: 'Tema',
      l: 'Español',
      ac: 'Logros'
    },
    h: {
      hi: '¡Hey! Soy',
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'Y me encanta programar y diseñar',
      desc: 'Soy un estudiante español, actualmente estudiando desarrollo de videojuegos en la <a href="https://www.urjc.es/" target="_blank">URJC</a>, al cual le han interesado los videojuegos desde pequeño.<br>',
      type1: 'Me considero',
      type2: [
        'un desarrollador de juegos indie', 
        'un desarrollador de aplicaciones', 
        'un desarrollador web',
        'un fan de la impresión 3D',
        'un entusiasta de los videojuegos'
      ],
      a: '¡Ver más sobre mi!'
    },
    a: {
      tit: 'Sobre Mi',
      desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español que se dedica a diseñar y programar juegos indie y aplicaciones.",
      desc2: "Soy una persona bien organizada e independiente a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar y diseñar, pero también me gusta la impresión 3D y las manualidades.",
      s: '¡Ver mis habilidades!',
      next: '¡Hazme click!',
      names: ['Artyom',
              'Islas Canarias',
              'Gato Durmiendo',
              'Finisterre',
              'Mallorca',
              'Otivar',
              'Flor en Rio',
              'Muro Lennon']
    },
    s: {
      tit: 'Mis Habilidades',
      desc: "He estado interesado en el mundo de la tecnología desde siempre. Debido a eso, he aprendido y manejo una gran cantidad de habilidades relacionadas con diferentes temas.",
      videogames: 'Desarrollo de Videojuegos',
      apps: 'Desarrollo de Aplicaciones',
      web: 'Desarrollo Web',
      ui: 'Diseño de UI/UX',
      d3: 'Modelado/Impresión 3D & CAD',
      art: 'Arte & Media',
      basic: 'Basico',
      medium: 'Medio',
      high: 'Alto',
      advanced: 'Advanzado',
      expert: 'Experto',
      p: '¡Ver mis proyectos!'
    },
    p: {
      tit: 'Mis Proyectos',
      more: '¡Ver más proyectos!',
      asisAn: {
        inf: 'Java · Android Studio · Diseño UI/UX',
        tag: 'Proyecto Personal',
        tit: 'Oriøn Assistant (Android)',
        con: `Oriøn Assistant para Android es una app llena de apps más pequeñas como un reproductor de música o un lector de QR.
              <br><br>
              Al principio, la idea comenzó como un buscador web simple que detectába comandos y ayudaba con tareas de juegos.
              Tras olvidarla por un tiempo, decidí renombrarla y darle un diseño moderno con Android Studio.
              Actualmente la app tiene reproductores de música y video, un bunquer de fotos, notas, un buscador, un lector de QR y una app para pasar datos a la versión de Windows de la app.`,
        b1: 'Descargar v1.9.0'
      },
      asisPC: {
        inf: 'CMD · HTML · CSS · JS · NodeJS · ElectronJS · VS Code · Diseño UI/UX',
        tag: 'Proyecto Personal',
        tit: 'Oriøn Assistant (Windows)',
        con: `Oriøn Assistant para Windows es un launcher de apps con soporte para temas y apps HTML custom llamadas módulos.
              <br><br>
              Suelo llevar mis apps en un USB pero al conectarlo a diferentes ordenadores la letra cambia y los accesos directos se rompen, por lo que tuve que llegar a una solución.
              La primera iteración del asistente era una app de comandos que reemplaza la letra de las rutas con "?:\\", lo que usaría el disco donde estaba instalado.
              <br><br>
              Tras esto quise ir más allá con una UI, por lo que comencé una nueva versión llamada Oriøn Launcher con Electron.js.
              Algunas actualizaciones después lo renombré a Oriøn Assistant para que coincidiera con la app de Android y añadí compatibilidad entre ellas.`,
        b1: 'Asistente Oriøn',
        b2: 'Launcher Batch'
      },
      frame: {
        inf: 'HTML · CSS · JS · VS Code · Diseño UI/UX',
        tag: 'Proyecto Personal',
        tit: 'Framework Oriøn',
        con: `El framework Oriøn es un framework basado en HTML, CSS & JS hecho con personalización en mente.
              Este proyecto fue separado de la versión de PC del Asistente Oriøn en un intento de hacerlo disponible para todos.
              <br><br>
              Aquí puedes encontrar nuevos elementos HTML simples y fáciles de usar como botones, inputs, interruptores, casillas de verificación, botones de radio y varias animaciones y efectos de carga.`,
        b1: 'Ver documentación'
      },
      hoodie: {
        inf: 'Illustrator · Photoshop · Dibujo',
        tag: 'Proyecto Personal',
        tit: 'Sudadera Futurística',
        con: `Un día me encontré con una sudadera streetwear, un estilo que no había visto antes, y me inspiró para crear la mía.
              No es exactamente streetwear, pero sí es una sudadera futuristica.
              Comencé dibujando unos diseños en mi cuaderno que fueron digitalizados más tarde usando Adobe Illustrator.
              Tras eso, hice una simulación en Photoshop de como se vería la sudadera si fuese real.`
      },        
      mod:{
        inf: 'Modelado 3D · Impresión 3D · Illustrator · Dibujo · Manualidades',
        tag: 'Proyecto Personal',
        tit: 'PC Modding',
        con: `Desde que entré en el mundo del PC comencé a interesarme por el modding, así que decidí hacer mi propio PC modificado.
              <br><br>
              Empecé extrayendo modelos 3D de algunos de mis juegos favoritos ya que no los podía encontrar online.
              Imprimí una figura de deathclaw e hice un modelo de roca larga para colocar dentro del PC.
              Después continúe diseñando las piezas exteriores, basadas en Cyberpunk 2077, para más tarde modelarlas e imprimirlas.
              <br><br>
              Tras imprimirlas las pinté y coloqué en el PC.`
      },
      usb:{
        inf: 'Modelado 3D · Impresión 3D · Electrónica · Manualidades',
        tag: 'Proyecto Personal',
        tit: 'USB GTX ',
        con: `Llevar apps y juegos en un USB no es una mala idea, pero la velocidad de la memoria puede causar problemas.
              Para arreglar esto tuve la idea de añadirle un disipador, así que empecé a diseñar una carcasa que acabó teniendo forma de una tarjeta gráfica Nvidia GTX.
              <br><br>
              Después de hacer agujeros para la ventilación, imprimí la carcasa y coloqué un ventilador pequeño alimentado por un conector en el lado.
              Finalmente, le añadí una almohadilla térmica y una placa de aluminio, la cual pinté más tarde, para disipar el calor de la memoria.`
      },
      dis:{
        inf: 'JS · VS Code · API de Discord',
        tag: 'Proyecto Personal',
        tit: 'Bots de Discord',
        con: `He creado dos bots de discord. El primero, Syrup, es un bot simple capaz de moderar un servidor y proveer juegos simples para que la gente se divierta.
              <br><br>
              Después de Syrup llegó Coscu, un bot más avanzado capaz de lo mismo y más. Esta nueva versión podría entrar en llamadas con gente y reproducir sonidos personalizados y música.`,
        b1: 'Repositorio de Syrup'
      },
      t45:{
        inf: 'Impresión 3D · Manualidades',
        tag: 'Proyecto Personal',
        tit: 'Casco T45',
        con: `Fallout es una de mis series de videojuegos favoritas y, en su universo, se usan trajes tecnológicamente avanzados de cuerpo entero llamados armaduras de poder.
              <br><br>
              Cómo encontré el modelo 3D de un casco decidí imprimirlo en pequeñas partes para hacerme uno propio. 
              Tras pegar todas las partes, lo pinté y le añadí un tubo de aspiradora para hacerlo parecer un poco más realista.`
      },
      otters:{
        inf: 'Unity · VS Code · 3ds Max · Substance Painter · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Otter's Odyssey",
        con: `Otter's Odyssey fue presentado como juego para la GameJam de 2022 de la URJC con temática medieval y recibió una mención honorífica a la mejor estética 3D. 
              <br><br>
              Es un juego isométrico de rol en el que controlas a una nutria que se adentra en una aventura para rescatar a su hermano.`,
        b1:  "Descargar&nbsp<i>Otter's Odyssey</i>"
      },
      vapor:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto Personal',
        tit: "Vaporcade",
        con: `Vaporcade es un juego de arcade indie con temática de vaporwave en el que controlas una nave y ganas puntos disparando.  
              <br><br>
              Vaporcade esta dividido por oleadas. En cada oleada encontraras nuevos enemigos y, por cada oleada impar, un jefe aparecerá.`,
        b1:  "Descargar&nbsp<i>Vaporcade</i>"
      },
      papa:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Cooking Papa",
        con: `Cooking Papa es un juego indie en el que tendras que preparar recetas con ingredientes que no tienes.  
              <br><br>
              Las partidas van a contra reloj y tendrás que consultar el libro de recetas para remplazar los ingredientes que faltan.`,
        b1:  "Descargar&nbsp<i>Cooking Papa</i>"
      },
      spirits:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Twin Spirits",
        con: `Twin Spirits es un juego indie cooperativo local en el que dos espíritus se aventuran en busca de un cetro capaz de hacerles revivir.  
              <br><br>
              Por el camino os encontrareis una serie de puzzles en los que tendréis que cooperar para poder continuar.`,
        b1:  "Descargar&nbsp<i>Twin Spirits</i>",
        vid: 'Ver Trailer'
      },
      memory:{
        inf: 'Unity · VS Code · Photoshop · Illustrator',
        tag: 'Proyecto Personal',
        tit: "Memory Shift",
        con: `Memory Shift es un plataformas de acción 2D con un gameplay rápido y un sistema de hackeo.
              <br><br>
              Inspirado por Katana ZERO y Cyberpunk 2077, corre, mata, hackea, deslízate y descubre qué te ocurrió antes de perder tus recuerdos.
              <br><br>
              Disfruta de una aventura con historia, niveles hechos a mano y mecánicas como lanzar objetos o explotar enemigos desde la lejanía.`,
        b1:  "Descargar&nbsp<i>Memory Shift</i>"
      },
      lmdshow:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Proyecto Personal',
        tit: "Escape From LMDShow",
        con: `¡Gracias por jugar <a href="https://www.twitch.tv/illojuan" target="_blank">Juan</a>!
              <br><br>
              Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y trata de escapar de la casa donde ha sido encerrado. 
              <br><br>
              Para escapar tendrás que resolver diferentes puzles con objetos y códigos que encontrarás tras explorar las habitaciones.`,
        b1:  "Descargar&nbsp<i>Escape From LMDShow</i>",
        vid: 'Ver a IlloJuan jugar'
      },
      raccoon:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Esto AÚN no es un Juego",
        con: `Ganador de la 3º edicion de la <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">gamejam de GameScholars</a>.
              <br><br>
              En Esto AÚN no es un juego ayudarás a un mapache programador a terminar su juego antes de que acabe su gamejam.
              <br><br>
              Debido al poco tiempo que le queda, para conseguirlo tendrás que meterte dentro de este y arreglar los bugs desde su interior.
              <br><br>
              Desde allí tu misión será cambiar cómo funcionan las cosas, de manera que se pueda llegar hasta el final de cada nivel y así continuar hasta el siguiente.`,
        b1:  "Descargar&nbsp<i>Esto AÚN no es un Juego</i>",
        vid: 'Ver Gameplay'
      }
    },
    bot: {
      mail: 'Email copiado al portapapeles'
    }
  }
}

let lan = lans.es



//Created projects
const projs = [
  {
    key: 'lmdshow',
    img: 'Data/Images/Projects/lmdshow.jpg',
    btn: ["https://botpa.itch.io/escape-from-lmdshow"],
    vid: 'z0Qv5HZyZgU',
  },
  {
    key: 'raccoon',
    img: 'Data/Images/Projects/raccoon.jpg',
    btn: ["https://botpa.itch.io/esto-aun-no-es-un-juego"],
    vid: 'UGH5wQYlAt4',
  },
  {
    key: 'memory',
    img: 'Data/Images/Projects/memory.jpg',
    btn: ["https://botpa.itch.io/memory-shift"]
  },
  {
    key: 'spirits',
    img: 'Data/Images/Projects/spirits.jpg',
    btn: ["https://botpa.itch.io/twin-spirits"],
    vid: 'SdIGAw2ABeU',
  },
  {
    key: 'vapor',
    img: 'Data/Images/Projects/vaporcade.jpg',
    btn: ["https://botpa.itch.io/vaporcade"]
  },
  {
    key: 'papa',
    img: 'Data/Images/Projects/papa.jpg',
    btn: ["https://botpa.itch.io/cooking-papa"]
  },
  {
    key: 'otters',
    img: 'Data/Images/Projects/otters.jpg',
    btn: ["https://botpa.itch.io/vaporcade"]
  },
  /*{
    key: 'asisAn',
    img: 'Data/Images/Projects/assAndroid.jpg',
    btn: ["Data/Orion Assistant.apk"]
  },
  {
    key: 'asisPC',
    img: 'Data/Images/Projects/assPC.jpg',
    btn: ["https://github.com/BOTPanzer/Orion-Assistant", "https://github.com/BOTPanzer/USB-Launcher"]
  },
  {
    key: 'frame',
    img: 'Data/Images/Projects/frame.jpg',
    btn: ["https://botpanzer.github.io/Orion-Framework"]
  }*/
]

let projsLength = 0



//About image index & order (shuffle all & add artyom last)
let abIndex = 0
let abOrder = []
for (let i = 1; i < lan.a.names.length; i++) { abOrder.push(i) }
for (let i = abOrder.length - 1; i > 0; i--) {
  let randomIndex = Math.floor(Math.random() * i);
  [abOrder[i], abOrder[randomIndex]] = [abOrder[randomIndex], abOrder[i]];
}
abOrder.push(0)



//Goto & Visibility
function goto(id) {
  //Scroll to element
  document.getElementById(id).scrollIntoView({behavior: "smooth"})
  //Close menu
  toggleMenu(false)
}

function isVisible(elm) {
  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 175 || rect.top - viewHeight >= 175)
}



//Scrolling
const ball1 = document.getElementById('ball1')
const ball2 = document.getElementById('ball2')
const ball3 = document.getElementById('ball3')
const ball4 = document.getElementById('ball4')

let scrollCount = 0

window.onscroll = scrolled

function scrolled() {
  scrollCount--
  if (scrollCount > 0) return
  scrollCount = 5

  //Balls
  if (isVisible(document.getElementById('home'))) {
    ball1.setAttribute('checked', '')
    ball2.removeAttribute('checked')
    ball3.removeAttribute('checked')
    ball4.removeAttribute('checked')
  } else {
    ball1.removeAttribute('checked')
    if (isVisible(document.getElementById('about'))) {
      ball2.setAttribute('checked', '')
      ball3.removeAttribute('checked')
      ball4.removeAttribute('checked')
    } else {
      ball2.removeAttribute('checked')
      if (isVisible(document.getElementById('skills'))) {
        ball3.setAttribute('checked', '')
        ball4.removeAttribute('checked')
      } else {
        ball3.removeAttribute('checked')
        ball4.setAttribute('checked', '')
      }
    }
  }

  //Skills
  if (isVisible(document.getElementById('skills'))) {
    if (isVisible(document.getElementById('skVidTit')))
      html.style.setProperty('--sk1', '90%')
    if (isVisible(document.getElementById('skAppTit')))
      html.style.setProperty('--sk2', '60%')
    if (isVisible(document.getElementById('skWebTit')))
      html.style.setProperty('--sk3', '55%')
    if (isVisible(document.getElementById('sk3dTit')))
      html.style.setProperty('--sk4', '35%')
    if (isVisible(document.getElementById('skUiTit')))
      html.style.setProperty('--sk5', '35%')
    if (isVisible(document.getElementById('skArtTit')))
      html.style.setProperty('--sk6', '35%')
  }

  //Appear anim
  const elems = document.querySelectorAll('.appear')
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i]
    if (isVisible(elem)) {
      elem.classList.add('appeared')
      elem.classList.remove('appear')
    }
  }
}



//Resize
resized()

window.onresize = resized

function resized() {
  if (window.innerHeight < window.innerWidth)
    html.removeAttribute('mobile')
  else
    html.setAttribute('mobile', '')
}



//Menu
let menuOpen = false

function toggleMenu(open) {
  //Check
  if (typeof open != 'boolean') open = !menuOpen
  if (open == menuOpen) return

  //Hide ball
  document.getElementById('navMenuDot1').style.opacity = '0'

  //Elems
  const exit = document.getElementById('navMenuExit')
  const menu = document.getElementById('navMenu')

  //Toggle
  if (open) {
    //Open
    exit.style.pointerEvents = 'all'
    menu.setAttribute('menu', '')
    setTimeout(() => { if (menuOpen) document.getElementById('navSpace').style.marginLeft = '-60px' }, 150)
  } else {
    //Close
    exit.style.pointerEvents = ''  
    document.getElementById('navSpace').style.marginLeft = '0'
    setTimeout(() => { if (!menuOpen) menu.removeAttribute('menu') }, 150)
  }
  menuOpen = open
}



//Change title
function changeTitle() {
  let emojis = ['😎', '😄', '🦝', '🦎', '🦖', '🦦', '🍜']
  document.title = lan.name + ' ' + emojis[Math.floor(Math.random() * emojis.length)]
}



//Socials
let socialsOpen = false

function copyMail() {
  createSnackbar(lan.bot.mail, false)
  navigator.clipboard.writeText('alex.paniagua.moreno@gmail.com')
}



//Snackbar & Confetti 🎊
let snacks = []

function createSnackbar(text, confetti) {
  if (typeof text !== 'string') return
  if (confetti == undefined) confetti = false
  snacks.push({
    text: text,
    confetti: confetti
  })
  snackbarController()
}

function snackbarController() {
  const snack = document.getElementById('snackbar')
  if (!snack.classList.contains('snackbar') && snacks.length > 0) {
    //Data
    snack.innerHTML = snacks[0].text
    snack.classList.add('snackbar')
    if (snacks[0].confetti) createConfetti()
    snacks.shift()
    //Wait to disappear
    setTimeout(() => {
      snack.innerHTML = ''
      snack.classList.remove('snackbar')
      //Wait to show text
      setTimeout(() => { snackbarController() }, 50)
    }, 3000)
  }
}

function createConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 1 }
  })
}





 /*$        /$$$$$$  /$$   /$$  /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$$$$$$$
| $$       /$$__  $$| $$$ | $$ /$$__  $$| $$  | $$ /$$__  $$ /$$__  $$| $$_____/
| $$      | $$  \ $$| $$$$| $$| $$  \__/| $$  | $$| $$  \ $$| $$  \__/| $$      
| $$      | $$$$$$$$| $$ $$ $$| $$ /$$$$| $$  | $$| $$$$$$$$| $$ /$$$$| $$$$$   
| $$      | $$__  $$| $$  $$$$| $$|_  $$| $$  | $$| $$__  $$| $$|_  $$| $$__/   
| $$      | $$  | $$| $$\  $$$| $$  \ $$| $$  | $$| $$  | $$| $$  \ $$| $$      
| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$/| $$$$$$$$
|________/|__/  |__/|__/  \__/ \______/  \______/ |__/  |__/ \______/ |_______*/

//Recover saved language
switch (localStorage.getItem('language')) {
  //Nothing saved
  case null:
    //Check device
    let lang = navigator.language || navigator.userLanguage
    //Device is in english
    if (lang.startsWith('en')) lan = lans.en
    //Save language
    localStorage.setItem('language', lan.tag)
    break;

  //English saved
  case 'en':
    lan = lans.en
    break;
}

changeTitle()



//Set language
function setLan() {
  //Navbar
  document.getElementById('navH').innerText = lan.top.h
  document.getElementById('navA').innerText = lan.top.a
  document.getElementById('navS').innerText = lan.top.s
  document.getElementById('navP').innerText = lan.top.p

  //Navbar menu
  document.getElementById('navMenuH').innerText = lan.top.h
  document.getElementById('navMenuA').innerText = lan.top.a
  document.getElementById('navMenuS').innerText = lan.top.s
  document.getElementById('navMenuP').innerText = lan.top.p
  document.getElementById('navMenuThe').innerText = lan.top.t
  document.getElementById('navMenuLan').innerText = lan.top.l
  document.getElementById('navMenuAch').innerText = lan.top.ac

  //Achievements
  document.getElementById('achMenuTit').innerText = lan.ach.tit
  document.getElementById('achi1Tit').innerText = lan.ach.a1.tit
  document.getElementById('achi1Con').innerText = lan.ach.a1.con
  document.getElementById('achi1Lock').innerText = lan.ach.lock
  document.getElementById('achi2Tit').innerText = lan.ach.a2.tit
  document.getElementById('achi2Con').innerText = lan.ach.a2.con
  document.getElementById('achi2Lock').innerText = lan.ach.lock
  document.getElementById('achi3Tit').innerText = lan.ach.a3.tit
  document.getElementById('achi3Con').innerText = lan.ach.a3.con
  document.getElementById('achi3Lock').innerText = lan.ach.lock

  //Home
  document.getElementById('homeHi').innerText = lan.h.hi
  document.getElementById('homeTit1').innerText = lan.h.tit1
  document.getElementById('homeTit2').innerText = lan.h.tit2
  document.getElementById('homeDesc').innerHTML = lan.h.desc
  document.getElementById('homeType1').innerText = lan.h.type1
  document.getElementById('homeAbout').innerText = lan.h.a

  //About
  document.getElementById('aboutTit').innerText = lan.a.tit
  document.getElementById('aboutDesc1').innerText = lan.a.desc1
  document.getElementById('aboutDesc2').innerText = lan.a.desc2
  document.getElementById('aboutSkills').innerText = lan.a.s
  document.getElementById('aboutImgName').innerText = lan.a.names[abOrder[abIndex]]
  document.getElementById('aboutImgNext').innerText = lan.a.next

  //Skills
  document.getElementById('skTit').innerText = lan.s.tit
  document.getElementById('skDesc').innerText = lan.s.desc
  document.getElementById('skVidTit').innerText = lan.s.videogames
  document.getElementById('skVidPro').innerText = lan.s.advanced
  document.getElementById('skAppTit').innerText = lan.s.apps
  document.getElementById('skAppPro').innerText = lan.s.high
  document.getElementById('skWebTit').innerText = lan.s.web
  document.getElementById('skWebPro').innerText = lan.s.high
  document.getElementById('sk3dTit').innerText = lan.s.d3
  document.getElementById('sk3dPro').innerText = lan.s.medium
  document.getElementById('skUiTit').innerText = lan.s.ui
  document.getElementById('skUiPro').innerText = lan.s.medium
  document.getElementById('skArtTit').innerText = lan.s.art
  document.getElementById('skArtPro').innerText = lan.s.medium
  document.getElementById('skProj').innerText = lan.s.p

  //Projects
  document.getElementById('prTit').innerText = lan.p.tit
  document.getElementById('prMore').innerText = lan.p.more
  addProjects()
}



//Switch language
function switchLan() {
  toggleMenu()
  if (lan == lans.en) 
    lan = lans.es
  else
    lan = lans.en
  localStorage.setItem('language', lan.tag)
  changeTitle()
  setLan()
}





 /*$$$$$$$ /$$   /$$ /$$$$$$$$ /$$      /$$ /$$$$$$$$
|__  $$__/| $$  | $$| $$_____/| $$$    /$$$| $$_____/
   | $$   | $$  | $$| $$      | $$$$  /$$$$| $$      
   | $$   | $$$$$$$$| $$$$$   | $$ $$/$$ $$| $$$$$   
   | $$   | $$__  $$| $$__/   | $$  $$$| $$| $$__/   
   | $$   | $$  | $$| $$      | $$\  $ | $$| $$      
   | $$   | $$  | $$| $$$$$$$$| $$ \/  | $$| $$$$$$$$
   |__/   |__/  |__/|________/|__/     |__/|_______*/

let themeChanged = false
let themeDark = !(localStorage.getItem('theme') == 'light')

setTheme()

function setTheme() {
  if (themeDark) {
    localStorage.setItem('theme', 'dark')
    document.getElementById('topTheImg').src = 'Data/Images/Icons/dark.png'
    html.removeAttribute('light')
  } else {
    localStorage.setItem('theme', 'light')
    document.getElementById('topTheImg').src = 'Data/Images/Icons/light.png'
    html.setAttribute('light', '')
  }
}

function switchTheme() {
  //Switch theme
  toggleMenu()
  themeDark = !themeDark
  setTheme()

  //Achievement
  if (themeChanged) giveAchievement('drill')
  themeChanged = true
}





  /*$$$$$   /$$$$$$  /$$   /$$ /$$$$$$ /$$$$$$$$ /$$    /$$ /$$$$$$$$ /$$      /$$ /$$$$$$$$ /$$   /$$ /$$$$$$$$
 /$$__  $$ /$$__  $$| $$  | $$|_  $$_/| $$_____/| $$   | $$| $$_____/| $$$    /$$$| $$_____/| $$$ | $$|__  $$__/
| $$  \ $$| $$  \__/| $$  | $$  | $$  | $$      | $$   | $$| $$      | $$$$  /$$$$| $$      | $$$$| $$   | $$   
| $$$$$$$$| $$      | $$$$$$$$  | $$  | $$$$$   |  $$ / $$/| $$$$$   | $$ $$/$$ $$| $$$$$   | $$ $$ $$   | $$   
| $$__  $$| $$      | $$__  $$  | $$  | $$__/    \  $$ $$/ | $$__/   | $$  $$$| $$| $$__/   | $$  $$$$   | $$   
| $$  | $$| $$    $$| $$  | $$  | $$  | $$        \  $$$/  | $$      | $$\  $ | $$| $$      | $$\  $$$   | $$   
| $$  | $$|  $$$$$$/| $$  | $$ /$$$$$$| $$$$$$$$   \  $/   | $$$$$$$$| $$ \/  | $$| $$$$$$$$| $$ \  $$   | $$   
|__/  |__/ \______/ |__/  |__/|______/|________/    \_/    |________/|__/     |__/|________/|__/  \__/   |_*/   

//Given achievements
let ach = {
  socials: false,
  artyom: false,
  drill: false
}



//Load achievements
if (localStorage.getItem('achSocials') == 'true') 
  addAchievement('socials')
if (localStorage.getItem('achArtyom') == 'true') 
  addAchievement('artyom')
if (localStorage.getItem('achDrill') == 'true') 
  addAchievement('drill')



//Give, reset & show achievements
function giveAchievement(name) {
  //Try to give achievement
  let given = false
  switch(name) {
    case 'socials':
      if (ach.socials == true) return
      createSnackbar(`🏆 ${lan.ach.a1.tit}`, true)
      given = true
      break
    case 'artyom':
      if (ach.artyom == true) return
      createSnackbar(`🏆 ${lan.ach.a2.tit}`, true)
      given = true
      break
    case 'drill':
      if (ach.drill == true) return
      createSnackbar(`🏆 ${lan.ach.a3.tit}`, true)
      given = true
      break
  }

  //Succesfully given
  if (given) {
    addAchievement(name)
    if (!menuOpen)
      document.getElementById('navMenuDot1').style.opacity = '1'
    document.getElementById('navMenuDot2').style.opacity = '1'
  }
}

function addAchievement(name) {
  switch(name) {
    case 'socials':
      ach.socials = true
      localStorage.setItem('achSocials', 'true')
      document.getElementById('achi1').removeAttribute('locked')
      break
    case 'artyom':
      ach.artyom = true
      localStorage.setItem('achArtyom', 'true')
      document.getElementById('achi2').removeAttribute('locked')
      break
    case 'drill':
      ach.drill = true
      localStorage.setItem('achDrill', 'true')
      document.getElementById('achi3').removeAttribute('locked')
      break
  }
}

function resetAchievements() {
  //Reset added
  ach = {
    socials: false,
    artyom: false,
    drill: false,
  }

  //Reset stored vlues
  localStorage.setItem('achSocials', '')
  localStorage.setItem('achArtyom', '')
  localStorage.setItem('achDrill', '')

  //Reset UI
  document.getElementById('achi1').setAttribute('locked', '')
  document.getElementById('achi2').setAttribute('locked', '')
  document.getElementById('achi3').setAttribute('locked', '')
}



//Achievements menu
let achiOpen = false

function toggleAchi() {
  //Hide menu dot
  document.getElementById('navMenuDot2').style.opacity = '0'

  //Get elements
  const exit = document.getElementById('achMenuExit')
  const menu = document.getElementById('achMenu')

  //Toggle achievement menu
  if (!achiOpen) {
    exit.style.display = 'flex'
    setTimeout(()=> { 
      menu.style.opacity = '1'
      menu.style.pointerEvents = 'all'
      document.body.style.overflow = 'hidden'
      achiOpen = true
    }, 50)
  } else {
    menu.style.opacity = '0'
    menu.style.pointerEvents = 'none'
    document.body.style.overflow = 'auto'
    setTimeout(()=> { 
      exit.style.display = 'none' 
      achiOpen = false
    }, 200)
  }

  //Close navbar menu
  if (menuOpen) toggleMenu()
}





 /*$   /$$  /$$$$$$  /$$      /$$ /$$$$$$$$
| $$  | $$ /$$__  $$| $$$    /$$$| $$_____/
| $$  | $$| $$  \ $$| $$$$  /$$$$| $$      
| $$$$$$$$| $$  | $$| $$ $$/$$ $$| $$$$$   
| $$__  $$| $$  | $$| $$  $$$| $$| $$__/   
| $$  | $$| $$  | $$| $$\  $ | $$| $$      
| $$  | $$|  $$$$$$/| $$ \/  | $$| $$$$$$$$
|__/  |__/ \______/ |__/     |__/|_______*/

//Type animation
function homeType() {
  const elem = document.getElementById('homeType2')
  let jobs = lan.h.type2
  let i = 0
  let length
  let letters
  let time
  let time2
  elem.innerText = ''
  setTimeout(prepare, 1000)

  function prepare() {
    length = jobs[i].length
    letters = length
    time = 1100/length
    time2 = 600/length
    writeLetter()
  }

  function writeLetter() {      
    elem.innerText = jobs[i].substring(0, length - letters)
    letters--
    if (letters >= 0)
      tim(writeLetter, time)
    else
      tim(removeLetter, 1500)
  }

  function removeLetter() {
    elem.innerText = jobs[i].substring(0, length - letters)
    letters++ 
    if (letters > length) {
      tim(function() {
        i++
        if (jobs[i] == undefined) i = 0
        prepare()
      }, 800)
    } else
      tim(removeLetter, time2)
  }

  function tim(lol, time) {
    if (jobs != lan.h.type2) {
      jobs = lan.h.type2
      prepare()
    } else
      setTimeout(lol, time)
  }
}





  /*$$$$$  /$$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$$$
 /$$__  $$| $$__  $$ /$$__  $$| $$  | $$|__  $$__/
| $$  \ $$| $$  \ $$| $$  \ $$| $$  | $$   | $$   
| $$$$$$$$| $$$$$$$ | $$  | $$| $$  | $$   | $$   
| $$__  $$| $$__  $$| $$  | $$| $$  | $$   | $$   
| $$  | $$| $$  \ $$| $$  | $$| $$  | $$   | $$   
| $$  | $$| $$$$$$$/|  $$$$$$/|  $$$$$$/   | $$   
|__/  |__/|_______/  \______/  \______/    |_*/

//About elements
const aboutImg = document.getElementById('aboutImg')
const aboutImgName = document.getElementById('aboutImgName')

//Update about image
abUpdate()

function abUpdate() {
  let imgs = ['Data/Images/About/artyom.jpg',
              'Data/Images/About/canary.jpg',
              'Data/Images/About/cat.jpg',
              'Data/Images/About/finisterre.jpg',
              'Data/Images/About/mallorca.jpg',
              'Data/Images/About/otivar.jpg',
              'Data/Images/About/flower.jpg',
              'Data/Images/About/lennon.jpg']
  aboutImg.src = imgs[abOrder[abIndex]]
}

//About image loading
let abLoading = false

aboutImg.onload = () => { 
  //Update text
  aboutImgName.innerText = lan.a.names[abOrder[abIndex]]
  //Loading
  if (abLoading) {
    //Stop animation
    aboutImg.removeAttribute("loading")
    //Artyom
    if (abIndex == lan.a.names.length - 1) giveAchievement('artyom')
    //Finish
    setTimeout(function() { abLoading = false }, 400)
  }
}

function abClick() {
  //Is loading
  if (abLoading) return
  abLoading = true
  //Get image
  let nextIndex = abIndex + 1
  if (nextIndex >= lan.a.names.length) nextIndex = 0
  //Load animation
  aboutImg.setAttribute("clicked", "")
  aboutImg.setAttribute("loading", "")
  setTimeout(function() {
    //Update
    abIndex = nextIndex
    abUpdate()
  }, 400)
}





 /*$$$$$$  /$$$$$$$   /$$$$$$     /$$$$$ /$$$$$$$$  /$$$$$$  /$$$$$$$$ /$$$$$$ 
| $$__  $$| $$__  $$ /$$__  $$   |__  $$| $$_____/ /$$__  $$|__  $$__//$$__  $$
| $$  \ $$| $$  \ $$| $$  \ $$      | $$| $$      | $$  \__/   | $$  | $$  \__/
| $$$$$$$/| $$$$$$$/| $$  | $$      | $$| $$$$$   | $$         | $$  |  $$$$$$ 
| $$____/ | $$__  $$| $$  | $$ /$$  | $$| $$__/   | $$         | $$   \____  $$
| $$      | $$  \ $$| $$  | $$| $$  | $$| $$      | $$    $$   | $$   /$$  \ $$
| $$      | $$  | $$|  $$$$$$/|  $$$$$$/| $$$$$$$$|  $$$$$$/   | $$  |  $$$$$$/
|__/      |__/  |__/ \______/  \______/ |________/ \______/    |__/   \_____*/ 

function addProjects() {
  //Get animate & projects length (minimum of 4)
  let animate = projsLength == 0
  let pLength = Math.max(projsLength, 4)

  //Clear
  clearProjects()

  //Add projects
  for (let i = 0; i < pLength; i++) addProject(animate)
}

function clearProjects() {
  //Clear projects
  projsLength = 0
  document.getElementById('prProjects').innerHTML = ''
}

function addProject(animate) {
  //Fix animate bool
  if (typeof animate != 'boolean') animate = true

  //No more space
  if (projsLength >= projs.length) return

  //Get info
  let p = projs[projsLength]
  let key = lan.p[p.key]
  let img = p.img
  let btn = p.btn
  let vid = p.vid

  //Buttons
  let buttonHTML = ''
  if (Array.isArray(btn) && btn.length > 0) {
    //Has buttons -> Add them
    for (let i = 0; i < btn.length; i++) {
      buttonHTML += `<a id="pr${projsLength}B${i}" class="prBtn" target="_blank" href="${btn[i]}">${key['b'+(i+1)]}</a>`
    }
  }

  //Add HTML
  const element = document.createElement('div')
  element.id = `pr${projsLength}`
  element.classList.add('pr')
  if (animate) element.classList.add('pr', projsLength < 4 ? 'appear' : 'appeared')
  if (projsLength % 2 != 0) element.setAttribute('reverse', '')
  element.innerHTML = `
    <div id="pr${projsLength}Media">
      <span id="pr${projsLength}Tag">${key.tag}</span>
      <div ${vid ? '' : 'style="display: none;"'}>
        <span onclick="toggleVideo(${projsLength}, 'https://www.youtube.com/embed/${vid}')">
          <img src="Data/Images/Icons/play.png">${key.vid}
        </span>
      </div>
      <div>
        <img id="pr${projsLength}Img" src="${img}">
        <iframe id="pr${projsLength}Vid" allow="fullscreen;"></iframe>
      </div>
    </div>
    <div>
      <span id="pr${projsLength}Inf">${key.inf}</span>
      <div>
        <span id="pr${projsLength}Tit">${key.tit}</span>
        <span id="pr${projsLength}Con">${key.con}</span>
      </div>
      <div id="pr${projsLength}Btn" class="hc" style="gap: 20px;">${buttonHTML}</div>
    </div>`
  document.getElementById('prProjects').appendChild(element)

  //Done
  projsLength++

  //Hide load more button
  if (projsLength == projs.length) document.getElementById('prMoreBox').style.display = 'none'
}

function toggleVideo(number, url) {
  const media = document.getElementById(`pr${number}Media`)
  const video = document.getElementById(`pr${number}Vid`)
  if (media.getAttribute('video') != null) {
    media.removeAttribute('video')
    //video.style.display = 'none'
    video.src = ''
  } else {
    media.setAttribute('video', '')
    //video.style.display = 'flex'
    video.src = url
  }
}





 /*$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$      /$$
| $$__  $$ /$$__  $$|__  $$__/|__  $$__//$$__  $$| $$$    /$$$
| $$  \ $$| $$  \ $$   | $$      | $$  | $$  \ $$| $$$$  /$$$$
| $$$$$$$ | $$  | $$   | $$      | $$  | $$  | $$| $$ $$/$$ $$
| $$__  $$| $$  | $$   | $$      | $$  | $$  | $$| $$  $$$| $$
| $$  \ $$| $$  | $$   | $$      | $$  | $$  | $$| $$\  $ | $$
| $$$$$$$/|  $$$$$$/   | $$      | $$  |  $$$$$$/| $$ \/  | $$
|_______/  \______/    |__/      |__/   \______/ |__/     |_*/

//Bottom text quotes
(function() {
  const quote  = ['War never changes', 
                  'Truth is, the game was rigged grom the start', 
                  'OPA! Artyom!', 
                  "See you in the major leagues, Jack", 
                  "There's a monster inside all of us", 
                  "Keep it cool, that's how you survive",
                  'Oh my stars she is just so handsome', 
                  "Oh, it's you. It's been a looong time", 
                  'Your brother needs you', 
                  "I can't believe we did that!",
                  "It's only been a week, but it feels like a year",
                  'No matter what, you keep finding something to fight for',
                  'The body is naught but a vessel for the soul',
                  "I'm always succeeding, even when I'm not",
                  "Link, this is a huge discovery!",
                  "Any adventure you can fly away from"]
  const game = ['Fallout', 
                'Fallout NV', 
                'Metro Exodus', 
                'Cyberpunk 2077', 
                'Arcane',
                'Valorant',
                'The Outer Worlds',
                'Portal 2',
                'Ruiner',
                'Celeste',
                'Katana Zero',
                'The Last of Us',
                'Ghostwire: Tokyo',
                'Deathloop',
                'Zelda: Tears of the Kingdom',
                'Starfield']
  let q = Math.floor(Math.random() * quote.length)
  document.getElementById('botQuote').innerHTML = quote[q]
  document.getElementById('botFrom').innerHTML = game[q]
})();