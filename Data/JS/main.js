 /*$        /$$$$$$  /$$   /$$  /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$$$$$$$
| $$       /$$__  $$| $$$ | $$ /$$__  $$| $$  | $$ /$$__  $$ /$$__  $$| $$_____/
| $$      | $$  \ $$| $$$$| $$| $$  \__/| $$  | $$| $$  \ $$| $$  \__/| $$      
| $$      | $$$$$$$$| $$ $$ $$| $$ /$$$$| $$  | $$| $$$$$$$$| $$ /$$$$| $$$$$   
| $$      | $$__  $$| $$  $$$$| $$|_  $$| $$  | $$| $$__  $$| $$|_  $$| $$__/   
| $$      | $$  | $$| $$\  $$$| $$  \ $$| $$  | $$| $$  | $$| $$  \ $$| $$      
| $$$$$$$$| $$  | $$| $$ \  $$|  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$/| $$$$$$$$
|________/|__/  |__/|__/  \__/ \______/  \______/ |__/  |__/ \______/ |_______*/

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
    e: {
      b1: 'DIVE INTO THE PANCOVERSE',
      b2: 'DIVE PANCOVERSE INTO THE'
    },
    h: {
      hi: "Howdy! I'm",
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'And I love programming and designing',
      desc: "I'm a spanish studient, currently studying a videogame development degree, who has developed all sort of skills since little.",
      type1: 'I consider myself',
      type2: [
        'an android developer', 
        'an indie game developer', 
        'a web developer',
        'a 3D printing hobbyist'
      ],
      a: 'See more about me!'
    },
    a: {
      tit: 'About Me',
      desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a spanish developer who loves designing and programming indie games and apps.",
      desc2: "I'm a well-organized, independent person who loves giving things his own touch. Some of my interests are playing, programming and designing, but I also enjoy 3D printing and DIY projects.",
      s: 'Check out my skills!',
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
      desc: "I've been interested in the world of technology ever since I was little and, thanks to that, I have expanded my skills around a large variety of topics.",
      videogames: 'Videogame Development',
      android: 'Android Development',
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
      int: {
        int: 'Interested in:',
        v: 'Videogames',
        a: 'Apps'
      },
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
        b1:  "Download Otter's Odyssey"
      },
      vapor:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Personal Project',
        tit: "Vaporcade",
        con: `Vaporcade is a vaporwave themed arcade indie game in which you control a spaceship and score points by shooting. 
              <br><br>
              Vaporcade is divided by waves. In each wave you'll find new enemies and, for every odd wave, a boss will appear.`,
        b1:  "Download Vaporcade"
      },
      papa:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Team Project',
        tit: "Cooking Papa",
        con: `Cooking Papa is an indie game where you will have to prepare recipes with ingredients you don't have.
              <br><br>
              The game goes against the clock and you will have to check the cooking book to replace the ingredients that are missing.`,
        b1:  "Download Cooking Papa"
      },
      spirits:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Team Project',
        tit: "Twin Spirits",
        con: `Twin Spirits is an indie local coop game in which two spirits go on an adventure in search of a scepter capable of bringing them back to life.  
              <br><br>
              On the way you will find puzzles in which you will have to cooperate in order to continue.`,
        b1:  "Download Twin Spirits"
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
        b1:  "Download Memory Shift"
      },
      lmdshow:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Personal Project',
        tit: "Escape From LMDShow",
        con: `Thanks <a href="https://youtu.be/ovRwxIZeklo" target="_blank">IlloJuan</a> for playing!
              <br><br>
              Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and attempts to escape the house he was locked in.
              <br><br>
              To escape you will have to solve different puzzles with objects and codes that you will find exploring the rooms.`,
        b1:  "Download Escape From LMDShow"
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
        b1:  "Download Esto AÚN no es un Juego"
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
    e: {
      b1: 'ENTRAR EN EL PANCOVERSO',
      b2: 'ENTRAR PANCOVERSO EN EL'
    },
    h: {
      hi: 'Hey! Soy',
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'Y me encanta programar y diseñar',
      desc: 'Soy un estudiante español, actualmente estudiando un grado de desarrollo de videojuegos, el cual ha desarrollado todo tipo de habilidades desde pequeño.',
      type1: 'Me considero',
      type2: [
        'un desarrollador de android', 
        'un desarrollador de juegos indie', 
        'un desarrollador web',
        'un fan de la impresión 3D'
      ],
      a: '¡Ver más sobre mi!'
    },
    a: {
      tit: 'Sobre Mi',
      desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español al que le encanta diseñar y programar juegos indie y aplicaciones.",
      desc2: "Soy una persona bien organizada e independiente a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar y diseñar, pero también me gusta la impresión 3D y las manualidades.",
      s: '¡Ver mis habilidades!',
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
      desc: "He estado interesado en el mundo de la tecnología desde pequeño y, gracias a eso, he expandido mis habilidades alrededor de una gran variedad de temas.",
      videogames: 'Desarrollo de Videojuegos',
      android: 'Desarrollo de Android',
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
      int: {
        int: 'Intesado en:',
        v: 'Videojuegos',
        a: 'Apps'
      },
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
        b1:  "Descargar Otter's Odyssey"
      },
      vapor:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto Personal',
        tit: "Vaporcade",
        con: `Vaporcade es un juego de arcade indie con temática de vaporwave en el que controlas una nave y ganas puntos disparando.  
              <br><br>
              Vaporcade esta dividido por oleadas. En cada oleada encontraras nuevos enemigos y, por cada oleada impar, un jefe aparecerá.`,
        b1:  "Descargar Vaporcade"
      },
      papa:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Cooking Papa",
        con: `Cooking Papa es un juego indie en el que tendras que preparar recetas con ingredientes que no tienes.  
              <br><br>
              Las partidas van a contra reloj y tendrás que consultar el libro de recetas para remplazar los ingredientes que faltan.`,
        b1:  "Descargar Cooking Papa"
      },
      spirits:{
        inf: 'Unity · VS Code · Illustrator · Photoshop',
        tag: 'Proyecto de Equipo',
        tit: "Twin Spirits",
        con: `Twin Spirits es un juego indie cooperativo local en el que dos espíritus se aventuran en busca de un cetro capaz de hacerles revivir.  
              <br><br>
              Por el camino os encontrareis una serie de puzzles en los que tendréis que cooperar para poder continuar.`,
        b1:  "Descargar Twin Spirits"
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
        b1:  "Descargar Memory Shift"
      },
      lmdshow:{
        inf: 'Unity · Blender · VS Code · Photoshop',
        tag: 'Proyecto Personal',
        tit: "Escape From LMDShow",
        con: `¡Gracias por jugar <a href="https://youtu.be/ovRwxIZeklo" target="_blank">IlloJuan</a>!
              <br><br>
              Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y trata de escapar de la casa donde ha sido encerrado. 
              <br><br>
              Para escapar tendrás que resolver diferentes puzles con objetos y códigos que encontrarás tras explorar las habitaciones.`,
        b1:  "Descargar Escape From LMDShow"
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
        b1:  "Descargar Esto AÚN no es un Juego"
      }
    },
    bot: {
      mail: 'Email copiado al portapapeles'
    }
  }
}

//DEFAULT LANGUAGE (SPANISH)
let lan = lans.es
//CHECK FOR SAVED LANGUAGE
let lanSaved = localStorage.getItem('pancoLan')
if (lanSaved == 'en') {
  //SAVED LANGUAGE IS ENGLISH
  lan = lans.en
} else if (lanSaved == null) {
  //NO LANGUAGE -> CHECK COMPUTER LANGUAGE
  let lang = navigator.language || navigator.userLanguage
  //COMPUTER LANGUAGE IS ENGLISH
  if (lang.startsWith('en')) lan = lans.en
  //SAVE LANGUAGE
  localStorage.setItem('pancoLan', lan.tag)
}


//ABOUT IMAGE INDEX & ORDER (SHUFFLE ALL & ADD ARTYOM LAST, NEEDED HERE FOR SETLAN TO WORK)
let abIndex = 0
let abOrder = []
for (let i = 1; i < lan.a.names.length; i++) { abOrder.push(i) }
for (let i = abOrder.length - 1; i > 0; i--) {
  let randomIndex = Math.floor(Math.random() * i);
  [abOrder[i], abOrder[randomIndex]] = [abOrder[randomIndex], abOrder[i]];
}
abOrder.push(0)


//CREATED PROJECTS (NEEDED HERE FOR SETLAN TO WORK)
let projects = 0


//SET LANGUAGE
setLan()
function setLan() {
  //ACHIEVEMENTS
  document.getElementById('achTit').innerText = lan.ach.tit
  document.getElementById('achi1Tit').innerText = lan.ach.a1.tit
  document.getElementById('achi1Con').innerText = lan.ach.a1.con
  document.getElementById('achi1Lock').innerText = lan.ach.lock
  document.getElementById('achi2Tit').innerText = lan.ach.a2.tit
  document.getElementById('achi2Con').innerText = lan.ach.a2.con
  document.getElementById('achi2Lock').innerText = lan.ach.lock
  document.getElementById('achi3Tit').innerText = lan.ach.a3.tit
  document.getElementById('achi3Con').innerText = lan.ach.a3.con
  document.getElementById('achi3Lock').innerText = lan.ach.lock
  //ENTER
  //document.getElementById('enBtn1').innerText = lan.e.b1
  //document.getElementById('enBtn2').innerText = lan.e.b2
  //TOP
  document.getElementById('topH1T').innerText = lan.top.h
  document.getElementById('topH2T').innerText = lan.top.h
  document.getElementById('topA1T').innerText = lan.top.a
  document.getElementById('topA2T').innerText = lan.top.a
  document.getElementById('topS1T').innerText = lan.top.s
  document.getElementById('topS2T').innerText = lan.top.s
  document.getElementById('topP1T').innerText = lan.top.p
  document.getElementById('topP2T').innerText = lan.top.p
  document.getElementById('topThe').innerText = lan.top.t
  document.getElementById('topLan').innerText = lan.top.l
  document.getElementById('topAch').innerText = lan.top.ac
  //HOME
  document.getElementById('homeHi').innerText = lan.h.hi
  document.getElementById('homeTit1').innerText = lan.h.tit1
  document.getElementById('homeTit2').innerText = lan.h.tit2
  document.getElementById('homeDesc').innerText = lan.h.desc
  document.getElementById('homeType1').innerText = lan.h.type1
  document.getElementById('homeAbout').innerText = lan.h.a
  //ABOUT
  document.getElementById('aboutTit').innerText = lan.a.tit
  document.getElementById('aboutDesc1').innerText = lan.a.desc1
  document.getElementById('aboutDesc2').innerText = lan.a.desc2
  document.getElementById('aboutSkills').innerText = lan.a.s
  document.getElementById('aboutImgName').innerText = lan.a.names[abOrder[abIndex]]
  //SKILLS
  document.getElementById('skTit').innerText = lan.s.tit
  document.getElementById('skDesc').innerText = lan.s.desc
  document.getElementById('skVidTit').innerText = lan.s.videogames
  document.getElementById('skVidPro').innerText = lan.s.advanced
  document.getElementById('skAndTit').innerText = lan.s.android
  document.getElementById('skAndPro').innerText = lan.s.high
  document.getElementById('sk3dTit').innerText = lan.s.d3
  document.getElementById('sk3dPro').innerText = lan.s.medium
  document.getElementById('skWebTit').innerText = lan.s.web
  document.getElementById('skWebPro').innerText = lan.s.high
  document.getElementById('skUiTit').innerText = lan.s.ui
  document.getElementById('skUiPro').innerText = lan.s.medium
  document.getElementById('skArtTit').innerText = lan.s.art
  document.getElementById('skArtPro').innerText = lan.s.medium
  document.getElementById('skProj').innerText = lan.s.p
  //PROJECTS
  document.getElementById('prTit').innerText = lan.p.tit
  document.getElementById('prInterest').innerText = lan.p.int.int
  document.getElementById('prGames').innerText = lan.p.int.v
  document.getElementById('prApps').innerText = lan.p.int.a
  sortProjects(localStorage.getItem('pancoPrSort'), false)
}


//SWITCH LANGUAGE
function switchLan() {
  toggleMenu()
  if (lan == lans.en) 
    lan = lans.es
  else
    lan = lans.en
  localStorage.setItem('pancoLan', lan.tag)
  setLan()
  changeTitle()
}





 /*$      /$$  /$$$$$$  /$$$$$$ /$$   /$$
| $$$    /$$$ /$$__  $$|_  $$_/| $$$ | $$
| $$$$  /$$$$| $$  \ $$  | $$  | $$$$| $$
| $$ $$/$$ $$| $$$$$$$$  | $$  | $$ $$ $$
| $$  $$$| $$| $$__  $$  | $$  | $$  $$$$
| $$\  $ | $$| $$  | $$  | $$  | $$\  $$$
| $$ \/  | $$| $$  | $$ /$$$$$$| $$ \  $$
|__/     |__/|__/  |__/|______/|__/  \_*/

//ENTER
loadPortfolio()
function loadPortfolio() {
  setTimeout(function() {
    html.style.setProperty('--waveBot', '100vh')
    setTimeout(function() {
      document.getElementById('enter').style.opacity = '0'
      document.getElementById('enter').style.pointerEvents = 'none'
      homeType()
      setTimeout(function() { document.body.style.overflow = 'auto' }, 500)
    }, 500)
  }, 200)
}

//GOTO
function goto(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"})
  //CLOSE MENU
  toggleMenu(false)
}


//SCROLL
let scrollI = 0
const ball1 = document.getElementById('ball1')
const ball2 = document.getElementById('ball2')
const ball3 = document.getElementById('ball3')
const ball4 = document.getElementById('ball4')
window.onscroll = scrolled
setTimeout(scrolled, 100)
function scrolled() {
  scrollI--
  if (scrollI > 0) return
  scrollI = 10
  //BALLS
  if (checkVisible(document.getElementById('home'))) {
    ball1.setAttribute('checked', '')
    ball2.removeAttribute('checked')
    ball3.removeAttribute('checked')
    ball4.removeAttribute('checked')
  } else {
    ball1.removeAttribute('checked')
    if (checkVisible(document.getElementById('about'))) {
      ball2.setAttribute('checked', '')
      ball3.removeAttribute('checked')
      ball4.removeAttribute('checked')
    } else {
      ball2.removeAttribute('checked')
      if (checkVisible(document.getElementById('skills'))) {
        ball3.setAttribute('checked', '')
        ball4.removeAttribute('checked')
      } else {
        ball3.removeAttribute('checked')
        ball4.setAttribute('checked', '')
      }
    }
  }
  //SKILLS
  if (checkVisible(document.getElementById('skills'))) {
    if (checkVisible(document.getElementById('skVidTit')))
      document.body.style.setProperty('--sk6', '85%')
    if (checkVisible(document.getElementById('skAndTit')))
      document.body.style.setProperty('--sk2', '60%')
    if (checkVisible(document.getElementById('sk3dTit')))
      document.body.style.setProperty('--sk4', '40%')
    if (checkVisible(document.getElementById('skWebTit')))
      document.body.style.setProperty('--sk1', '60%')
    if (checkVisible(document.getElementById('skUiTit')))
      document.body.style.setProperty('--sk3', '40%')
    if (checkVisible(document.getElementById('skArtTit')))
      document.body.style.setProperty('--sk5', '40%')
  }
  //APPEAR ANIM
  const elems = document.querySelectorAll('.appear')
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i]
    if (checkVisible(elem)) {
      elem.classList.add('appeared')
      elem.classList.remove('appear')
    }
  }
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 175 || rect.top - viewHeight >= 175)
}


//RESIZE
resized()
window.onresize = resized
function resized() {
  let html = document.getElementById("html")
  if (window.innerHeight < window.innerWidth) {
    html.style.fontSize = '15px'
    html.style.setProperty('--menuHeight', '180px')
    html.style.setProperty('--pageW', '75vw')
    html.style.setProperty('--pageGap', '20px')
    //TOP
    document.getElementById('topBar').style.backdropFilter = ''
    document.getElementById('topBar').style.boxShadow = ''
    document.getElementById('topTint').style.display = ''
    document.getElementById('topH1').style.display = 'flex'
    document.getElementById('topA1').style.display = 'flex'
    document.getElementById('topS1').style.display = 'flex'
    document.getElementById('topP1').style.display = 'flex'
    document.getElementById('topH2').style.display = 'none'
    document.getElementById('topA2').style.display = 'none'
    document.getElementById('topS2').style.display = 'none'
    document.getElementById('topP2').style.display = 'none'
    document.getElementById('topMenu').removeAttribute('mobile')
    //HOME
    document.getElementById('homeMe').style.height = 'min(50vh, 60vw)'
    document.getElementById('homeMe').style.width = 'min(50vh, 60vw)'
    document.getElementById('homeMe').style.position = 'absolute'
    document.getElementById('homeMe').style.right = '0'
    document.getElementById('homeHi').style.fontSize = '20px'
    document.getElementById('homeTit1').style.fontSize = '45px'
    document.getElementById('homeTit2').style.fontSize = '30px'
    html.style.setProperty('--homeW', '60%')
    document.getElementById('homeD&T').style.fontSize = '16px'
    //ABOUT
    document.getElementById('about').style.flexDirection = 'row'
    document.getElementById('aboutTextBox').style.width = '0'
    document.getElementById('aboutImgBox').style.height = ''
    document.getElementById('aboutImgBox').style.width = ''
    //SKILLS
    document.getElementById('skTop').style.marginRight = 'calc(42vh + 60px)'
    //PROJECTS
    document.getElementById('prTop').style.marginRight = 'calc(42vh + 60px)'
    for (elem of document.getElementsByClassName('pr')) { 
      elem.style.flexDirection = '' 
      elem.removeAttribute('mobile') 
    }
    html.style.setProperty('--pr2W', 'calc(50% - 90px)')
    //ACHIEVEMENTS
    document.getElementById('achTit').style.fontSize = '22px'
    //SOCIALS
    document.getElementById('socialsMenu').style.display = 'flex'
    //BALLS
    document.getElementById('balls').style.display = 'flex'
    //BOTTOM
    document.getElementById('bot').style.marginTop = '30px'
    document.getElementById('bot').style.fontSize = '1vw'
    document.getElementById('botSocials').style.display = 'none'
  } else {
    html.style.fontSize = '13px'
    html.style.setProperty('--menuHeight', '340px')
    html.style.setProperty('--pageW', '90vw')
    html.style.setProperty('--pageGap', '10px')
    //TOP
    document.getElementById('topBar').style.backdropFilter = 'none'
    document.getElementById('topBar').style.boxShadow = 'none'
    document.getElementById('topTint').style.display = 'none'
    document.getElementById('topH1').style.display = 'none'
    document.getElementById('topA1').style.display = 'none'
    document.getElementById('topS1').style.display = 'none'
    document.getElementById('topP1').style.display = 'none'
    document.getElementById('topH2').style.display = 'flex'
    document.getElementById('topA2').style.display = 'flex'
    document.getElementById('topS2').style.display = 'flex'
    document.getElementById('topP2').style.display = 'flex'
    document.getElementById('topMenu').setAttribute('mobile', '')
    //HOME
    document.getElementById('homeMe').style.height = 'min(50vh, 70vw)'
    document.getElementById('homeMe').style.width = 'min(50vh, 70vw)'
    document.getElementById('homeMe').style.position = 'relative'
    document.getElementById('homeMe').style.right = 'auto'
    document.getElementById('homeHi').style.fontSize = '1.5rem'
    document.getElementById('homeTit1').style.fontSize = '2rem'
    document.getElementById('homeTit2').style.fontSize = '1.5rem'
    html.style.setProperty('--homeW', '100%')
    document.getElementById('homeD&T').style.fontSize = '1em'
    //ABOUT
    document.getElementById('about').style.flexDirection = 'column-reverse'
    document.getElementById('aboutTextBox').style.width = '100%'
    document.getElementById('aboutImgBox').style.height = 'min(50vh, 80vw)'
    document.getElementById('aboutImgBox').style.width = 'min(50vh, 80vw)'
    //SKILLS
    document.getElementById('skTop').style.marginRight = ''
    //PROJECTS
    document.getElementById('prTop').style.marginRight = ''
    for (elem of document.getElementsByClassName('pr')) { 
      elem.style.flexDirection = 'column'
      elem.setAttribute('mobile', '')
    }
    html.style.setProperty('--pr2W', '100%')
    //ACHIEVEMENTS
    document.getElementById('achTit').style.fontSize = '20px'
    //SOCIALS
    document.getElementById('socialsMenu').style.display = 'none'
    //BALLS
    document.getElementById('balls').style.display = 'none'
    //BOTTOM
    document.getElementById('bot').style.marginTop = ''
    document.getElementById('bot').style.fontSize = '3vw'
    document.getElementById('botSocials').style.display = 'flex'
  }
}


//MENU
let menuOpen = false
function toggleMenu(open) {
  //CHECK
  if (typeof open != 'boolean') open = !menuOpen
  if (open == menuOpen) return
  //HIDE BALL
  document.getElementById('topDot1').style.opacity = '0'
  //ELEMS
  const bg = document.getElementById('topMBG')
  const menu = document.getElementById('topMenu')
  //TOGGLE
  if (open) {
    //OPEN
    bg.style.pointerEvents = 'all'
    menu.setAttribute('menu', '')
    setTimeout(() => { if (menuOpen) document.getElementById('topSpace').style.marginLeft = '-60px' }, 150)
  } else {
    //CLOSE
    bg.style.pointerEvents = ''  
    document.getElementById('topSpace').style.marginLeft = '0'
    setTimeout(() => { if (!menuOpen) menu.removeAttribute('menu') }, 150)
  }
  menuOpen = open
}


//CHANGE TITLE
changeTitle()
window.onblur = changeTitle
function changeTitle() {
  let emojis = ['😎',
                '😄',
                '🦝',
                '🦎',
                '🦖',
                '🦦',
                '🍜']
  document.title = lan.name+' '+emojis[Math.floor(Math.random() * emojis.length)]
}


//SOCIALS
let sItch, sGit, sReddit, sYT, sTikTok
sItch = sGit = sReddit = sYT = sTikTok = false

function CopyMail() {
  createSnackbar(lan.bot.mail, false)
  navigator.clipboard.writeText('alex.paniagua.moreno@gmail.com')
}


//SNACKBAR & CONFETTI 🎊
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
    //DATA
    snack.innerHTML = snacks[0].text
    snack.classList.add('snackbar')
    if (snacks[0].confetti) createConfetti()
    snacks.shift()
    //WAIT TO DISAPPEAR
    setTimeout(() => {
      snack.innerHTML = ''
      snack.classList.remove('snackbar')
      //WAIT TO SHOW NEXT
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





 /*$$$$$$$ /$$   /$$ /$$$$$$$$ /$$      /$$ /$$$$$$$$
|__  $$__/| $$  | $$| $$_____/| $$$    /$$$| $$_____/
   | $$   | $$  | $$| $$      | $$$$  /$$$$| $$      
   | $$   | $$$$$$$$| $$$$$   | $$ $$/$$ $$| $$$$$   
   | $$   | $$__  $$| $$__/   | $$  $$$| $$| $$__/   
   | $$   | $$  | $$| $$      | $$\  $ | $$| $$      
   | $$   | $$  | $$| $$$$$$$$| $$ \/  | $$| $$$$$$$$
   |__/   |__/  |__/|________/|__/     |__/|_______*/

let themeI = 0
let themeDark = true
if (localStorage.getItem('pancoTheme') == 'light') themeDark = false

setTheme()
function setTheme() {
  if (themeDark) {
    localStorage.setItem('pancoTheme', 'dark')
    document.getElementById('topTheImg').src = 'Data/Images/Icons/dark.png'
    document.body.style.setProperty('--bg', '#0A192F')
    document.body.style.setProperty('--button', '#0c203d')
    document.body.style.setProperty('--text', '#f5f5f5')
    document.body.style.setProperty('--textFilter', 'brightness(0) invert(1)')
    document.body.style.setProperty('--text2', '#495670')
    document.body.style.setProperty('--text2Filter', 'brightness(0) invert(30%) sepia(20%) saturate(656%) hue-rotate(182deg) brightness(100%) contrast(91%)')
    document.body.style.setProperty('--accent', '#DC2249')
    document.body.style.setProperty('--accentT', '#dc224a31')
    document.body.style.setProperty('--accentFilter', 'brightness(0) invert(29%) sepia(74%) saturate(2123%) hue-rotate(327deg) brightness(83%) contrast(111%)')
    document.body.style.setProperty('--shadowBig', 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px')
  } else {
    localStorage.setItem('pancoTheme', 'light')
    document.getElementById('topTheImg').src = 'Data/Images/Icons/light.png'
    document.body.style.setProperty('--bg', '#ffffff')
    document.body.style.setProperty('--button', '#e4e9f2')
    document.body.style.setProperty('--text', '#000000')
    document.body.style.setProperty('--textFilter', 'brightness(0)')
    document.body.style.setProperty('--text2', '#6f7b96')
    document.body.style.setProperty('--text2Filter', 'brightness(0) invert(53%) sepia(14%) saturate(689%) hue-rotate(183deg) brightness(88%) contrast(86%)')
    document.body.style.setProperty('--accent', '#DC2249')
    document.body.style.setProperty('--accentT', '#dc224a31')
    document.body.style.setProperty('--accentFilter', 'brightness(0) invert(29%) sepia(74%) saturate(2123%) hue-rotate(327deg) brightness(83%) contrast(111%)')
    document.body.style.setProperty('--shadowBig', 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px')
  }
}

function switchTheme() {
  toggleMenu()
  themeDark = !themeDark
  setTheme()
  if (themeI > 1) return
  themeI++
  if (themeI > 1) giveAchievement('drill')
}





  /*$$$$$   /$$$$$$  /$$   /$$ /$$$$$$ /$$$$$$$$ /$$    /$$ /$$$$$$$$ /$$      /$$ /$$$$$$$$ /$$   /$$ /$$$$$$$$
 /$$__  $$ /$$__  $$| $$  | $$|_  $$_/| $$_____/| $$   | $$| $$_____/| $$$    /$$$| $$_____/| $$$ | $$|__  $$__/
| $$  \ $$| $$  \__/| $$  | $$  | $$  | $$      | $$   | $$| $$      | $$$$  /$$$$| $$      | $$$$| $$   | $$   
| $$$$$$$$| $$      | $$$$$$$$  | $$  | $$$$$   |  $$ / $$/| $$$$$   | $$ $$/$$ $$| $$$$$   | $$ $$ $$   | $$   
| $$__  $$| $$      | $$__  $$  | $$  | $$__/    \  $$ $$/ | $$__/   | $$  $$$| $$| $$__/   | $$  $$$$   | $$   
| $$  | $$| $$    $$| $$  | $$  | $$  | $$        \  $$$/  | $$      | $$\  $ | $$| $$      | $$\  $$$   | $$   
| $$  | $$|  $$$$$$/| $$  | $$ /$$$$$$| $$$$$$$$   \  $/   | $$$$$$$$| $$ \/  | $$| $$$$$$$$| $$ \  $$   | $$   
|__/  |__/ \______/ |__/  |__/|______/|________/    \_/    |________/|__/     |__/|________/|__/  \__/   |_*/   

let ach = {
  socials: false,
  artyom: false,
  drill: false
}

//LOAD ACHIEVEMENTS
if (localStorage.getItem('pancoAchSocials') == 'true') 
  addAchievement('socials')
if (localStorage.getItem('pancoAchArtyom') == 'true') 
  addAchievement('artyom')
if (localStorage.getItem('pancoAchDrill') == 'true') 
  addAchievement('drill')

//TEMP VARIABLES
let artyomI = 0

//GIVE SOCIALS ACHIEVEMENT ON FOCUS
window.onfocus = () => {
  if (sGit || sIG || sItch || sYT || sTikTok) giveAchievement('socials')
}


//GIVE & RESET & SHOW ACHIEVEMENTS
function giveAchievement(name) {
  let added = false
  switch(name) {
    case 'socials':
      if (ach.socials == true) return
      createSnackbar(`🏆 ${lan.ach.a1.tit}`, true)
      added = true
      break
    case 'artyom':
      if (ach.artyom == true) return
      createSnackbar(`🏆 ${lan.ach.a2.tit}`, true)
      added = true
      break
    case 'drill':
      if (ach.drill == true) return
      createSnackbar(`🏆 ${lan.ach.a3.tit}`, true)
      added = true
      break
  }
  if (added) {
    addAchievement(name)
    if (!menuOpen)
      document.getElementById('topDot1').style.opacity = '1'
    document.getElementById('topDot2').style.opacity = '1'
  }
}

function addAchievement(name) {
  switch(name) {
    case 'socials':
      ach.socials = true
      localStorage.setItem('pancoAchSocials', 'true')
      document.getElementById('achi1').removeAttribute('locked')
      break
    case 'artyom':
      ach.artyom = true
      localStorage.setItem('pancoAchArtyom', 'true')
      document.getElementById('achi2').removeAttribute('locked')
      break
    case 'drill':
      ach.drill = true
      localStorage.setItem('pancoAchDrill', 'true')
      document.getElementById('achi3').removeAttribute('locked')
      break
  }
}

function resetAchievements() {
  ach = {
    socials: false,
    artyom: false,
    drill: false,
  }
  localStorage.setItem('pancoAchSocials', '')
  localStorage.setItem('pancoAchArtyom', '')
  localStorage.setItem('pancoAchDrill', '')
  document.getElementById('achi1').setAttribute('locked', '')
  document.getElementById('achi2').setAttribute('locked', '')
  document.getElementById('achi3').setAttribute('locked', '')
}


//ACHI MENU
let achiOpen = false
function toggleAchi() {
  document.getElementById('topDot2').style.opacity = '0'
  const bg = document.getElementById('ach')
  const menu = document.getElementById('achMenu')
  if (!achiOpen) {
    bg.style.display = 'flex'
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
      bg.style.display = 'none' 
      achiOpen = false
    }, 200)
  }
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

//TYPE ANIMATION
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

//ABOUT IMAGE
const aboutImg = document.getElementById('aboutImg')
const aboutImgName = document.getElementById('aboutImgName')
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

aboutImg.onload = function() { 
  //UPDATE TEXT
  aboutImgName.innerText = lan.a.names[abOrder[abIndex]]
  //LOADING
  if (abLoading) {
    //STOP ANIMATION
    aboutImg.classList.remove("abLoading")
    //ARTYOM
    if (abIndex == lan.a.names.length - 1) giveAchievement('artyom')
    //FINISH
    setTimeout(function() { abLoading = false }, 400)
  }
}

let abLoading = false
function abClick() {
  //IS LOADING
  if (abLoading) return
  abLoading = true
  //GET IMAGE
  let nextIndex = abIndex + 1
  if (nextIndex >= lan.a.names.length) nextIndex = 0
  //LOAD ANIM
  aboutImg.classList.add("abLoading")
  setTimeout(function() {
    //UPDATE
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

//SORT PROJECTS
function sortProjects(sort, animate) { 
  //ANIMATE BOOL
  if (typeof animate != 'boolean') animate = true
  //SORT BY
  if (sort != 'videogames' && sort != 'apps') sort = 'videogames'
  localStorage.setItem('pancoPrSort', sort)
  //APPEAR ANIMATION
  if (animate) {
    for (let i = 1; i <= 8; i++) {
      const elem = document.getElementById('pr'+i)
      elem.classList.add('appear')
      elem.classList.remove('appeared')
    }
    scrollI = 0
    scrolled()
  }
  //CLEAR
  clearProjects()
  //SORT
  if (sort == 'videogames') {
    //INTERESTED IN VIDEOGAMES
    document.getElementById('prGames').setAttribute('active', '')
    document.getElementById('prApps').removeAttribute('active', '')
    //1) ESCAPE FROM LMDSHOW
    addProject(lan.p.lmdshow, 'Data/Images/Projects/lmdshow.jpg', ["https://botpa.itch.io/escape-from-lmdshow"])
    //2) ESTO AUN NO ES UN JUEGO
    addProject(lan.p.raccoon, 'Data/Images/Projects/raccoon.jpg', ["https://botpa.itch.io/esto-aun-no-es-un-juego"])
    //3) MEMORY SHIFT
    addProject(lan.p.memory, 'Data/Images/Projects/memory.jpg', ["https://botpa.itch.io/memory-shift"])
    //4) TWIN SPIRITS
    addProject(lan.p.spirits, 'Data/Images/Projects/spirits.jpg', ["https://botpa.itch.io/twin-spirits"])
    //5) VAPORCADE
    addProject(lan.p.vapor, 'Data/Images/Projects/vaporcade.jpg', ["https://botpa.itch.io/vaporcade"])
    //6) COOKING PAPA
    addProject(lan.p.papa, 'Data/Images/Projects/papa.jpg', ["https://botpa.itch.io/cooking-papa"])
    //7) OTTERS
    addProject(lan.p.otters, 'Data/Images/Projects/otters.jpg', ["https://botpa.itch.io/otters-odyssey"])
    //8) ASSISTANT ANDROID
    addProject(lan.p.asisAn, 'Data/Images/Projects/assAndroid.jpg', ["Data/Orion Assistant.apk"])
  } else {
    //INTERESTED IN APPS
    document.getElementById('prGames').removeAttribute('active')
    document.getElementById('prApps').setAttribute('active', '')
    //1) ASSISTANT ANDROID
    addProject(lan.p.asisAn, 'Data/Images/Projects/assAndroid.jpg', ["Data/Orion Assistant.apk"])
    //2) ASSISTANT PC
    addProject(lan.p.asisPC, 'Data/Images/Projects/assPC.jpg', ["https://github.com/BOTPanzer/Orion-Assistant", "https://github.com/BOTPanzer/USB-Launcher"])
    //3) FRAMEWORK
    addProject(lan.p.frame, 'Data/Images/Projects/frame.jpg', ["https://botpanzer.github.io/Orion-Framework"])
    //4) ESCAPE FROM LMDSHOW
    addProject(lan.p.lmdshow, 'Data/Images/Projects/lmdshow.jpg', ["https://botpa.itch.io/escape-from-lmdshow"])
    //5) ESTO AUN NO ES UN JUEGO
    addProject(lan.p.raccoon, 'Data/Images/Projects/raccoon.jpg', ["https://botpa.itch.io/esto-aun-no-es-un-juego"])
    //6) MEMORY SHIFT
    addProject(lan.p.memory, 'Data/Images/Projects/memory.jpg', ["https://botpa.itch.io/memory-shift"])
    //7) TWIN SPIRITS
    addProject(lan.p.spirits, 'Data/Images/Projects/spirits.jpg', ["https://botpa.itch.io/twin-spirits"])
    //8) VAPORCADE
    addProject(lan.p.vapor, 'Data/Images/Projects/vaporcade.jpg', ["https://botpa.itch.io/vaporcade"])
  }
}

//CLEAR & ADD PROJECTS
function clearProjects() {
  //CLEAR PROJECTS
  projects = 0
}

function addProject(key, image, buttons) {
  //NO MORE SPACE
  if (projects > 7) return
  //MAKE PROJECT & UPDATE COUNT
  if (makeProject(projects + 1, key, image, buttons)) projects++
}

function makeProject(number, key, image, buttons) {
  //CHECK VARS
  if (typeof number != 'number') return false
  if (typeof key != 'object') return false
  if (typeof image != 'string') return false
  //IMAGE
  document.getElementById(`pr${number}Img`).src = image
  //TEXT
  document.getElementById(`pr${number}Inf`).innerText = key.inf
  document.getElementById(`pr${number}Tag`).innerText = key.tag
  document.getElementById(`pr${number}Tit`).innerText = key.tit
  document.getElementById(`pr${number}Con`).innerHTML = key.con
  //BUTTONS
  let buttonHTML = ''
  if (Array.isArray(buttons) && buttons.length > 0) {
    //HAS BUTTONS
    for (let i = 0; i < buttons.length; i++) {
      buttonHTML = buttonHTML + `<a id="pr${number}B${i}" class="btn" target="_blank" href="${buttons[i]}">${key['b'+(i+1)]}</a>`
    }
    if (number > 4) document.getElementById('pr'+number+'But').style.marginTop = '' 
  } else {
    //NO BUTTONS
    if (number > 4) document.getElementById('pr'+number+'But').style.marginTop = '-20px'
  }
  document.getElementById(`pr${number}But`).innerHTML = buttonHTML
  //DONE
  return true
}





 /*$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$      /$$
| $$__  $$ /$$__  $$|__  $$__/|__  $$__//$$__  $$| $$$    /$$$
| $$  \ $$| $$  \ $$   | $$      | $$  | $$  \ $$| $$$$  /$$$$
| $$$$$$$ | $$  | $$   | $$      | $$  | $$  | $$| $$ $$/$$ $$
| $$__  $$| $$  | $$   | $$      | $$  | $$  | $$| $$  $$$| $$
| $$  \ $$| $$  | $$   | $$      | $$  | $$  | $$| $$\  $ | $$
| $$$$$$$/|  $$$$$$/   | $$      | $$  |  $$$$$$/| $$ \/  | $$
|_______/  \______/    |__/      |__/   \______/ |__/     |_*/

//BOTTOM TEXT QUOTES
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