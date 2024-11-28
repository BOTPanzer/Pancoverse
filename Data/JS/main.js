
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
      title: 'ACHIEVEMENTS',
      lock: 'LOCKED',
      ach1: {
        title: 'Interested Fellow',
        desc: 'Given after opening one of my social links'
      },
      ach2: {
        title: 'Best Friends',
        desc: 'Given after finding Artyom (my first gecko)'
      },
      ach3: {
        title: 'Go with the Flow',
        desc: 'Given after changing the theme twice'
      }
    },
    top: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      theme: 'Theme',
      language: 'English',
      achievements: 'Achievements',
      contact: 'Contact'
    },
    h: {
      hi: "Howdy! I'm",
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'And I love programming and designing',
      desc: `I'm a spanish studient, currently studying videogame development, who has been interested in games since little.`,
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
      title: 'About Me',
      desc1: "Howdy! My name is Alejandro, but you call me Alex. I'm a spanish developer spends time designing and programming indie games and apps.",
      desc2: "I'm a well-organized, independent person who loves giving things his own touch. Some of my interests are playing, programming and designing, but I also enjoy 3D printing and DIY projects.",
      s: 'Check out my skills!',
      next: 'Click me!',
      names: [
        'Artyom',
        'Canary Islands',
        'Sleeping Cat',
        'Finisterre',
        'Mallorca',
        'Otivar',
        'River Flower',
        'Lennon Wall'
      ]
    },
    s: {
      title: 'My Skills',
      desc: "I've been interested in the world of technology ever since ever. Thanks to that, I've learnt and manage a large number of skills related to different topics.",
      videogames: 'Videogame Development',
      apps: 'App Development',
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
      title: 'My Projects',
      more: 'Show more projects!',
      filter1: 'Filtering projects containing:',
      filter2: '(click to remove)',
      tags: {
        solo: '🦝 Solo Project',
        team: '🍻 Team Project',
        personal: '💖 Personal Project',
        jam: '💫 Jam Game',
      },
      skills: {
        uiux: 'UI/UX Design',
        discordapi: 'Discord API',
        '3dmodel': '3D Modeling',
        '3dprint': '3D Printing',
        sketching: 'Sketching',
        diy: 'DIY',
        electronics: 'Electronics',
      },
      spyw4re: {
        tit: "Spyw4re",
        con: `Second place out of 25 in the 5º edition of the <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">GameScholars gamejam</a>.
              <br><br>
              In Spyw4re, you are a CCTV operator in an asylum. The building is falling down and a pacient is still inside, so you'll need to help him get out.
              <br><br>
              In order to leave, you'll need need to solve some puzzles and defeat some enemies, but don't think it will be that easy, someone doesn't want you to help him...`,
        b1:  "Download&nbsp<i>Spyw4re</i>",
        vid: 'Gameplay Video'
      },
      hackoon: {
        tit: "Hackoon",
        con: `Hackoon is an in development puzzle game about a game developer raccoon that needs to fix his game before release.
              <br><br>
              In order to achieve this, he will go inside of his own game. There, with the help of a little robot, you will be able to modify the code that controls the objects of each level to complete ingenious puzzles.`,
        b1:  "Follow the development!"
      },
      hightime: {
        tit: "High on Time",
        con: `Submitted to the 4º edition of the <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">GameScholars gamejam</a>.
              <br><br>
              High on Time is a frenetic shooter in which, thanks to a drug, you are capable of controling time at the cost of your life.
              <br><br>
              You will have to survive 3 waves of enemies with different weapons to complete the game, sliding and slowing time at your will in a building in construction.
              <br><br>
              Optionaly, an endless mode with infinite waves is also available.`,
        b1:  "Download&nbsp<i>High on Time</i>",
        vid: 'Gameplay Video'
      },
      fresquita: {
        tit: "The lost Fresquita",
        con: `Finalist of the <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, a gamejam organized for <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
              <br><br>
              In The lost Fresquita you will play the role of Juan in a day at night. 
              The day before you celebrated a party in the forest and forgot some beers there but, since that's irresponsible, you came back for them. 
              <br><br>
              Your mission will be to find the 3 forgotten beers and take them back home safe and sound. 
              What do I mean by safe? 
              Lets say some of your friends wont make it easy...`,
        b1:  "Download&nbsp<i>The lost Fresquita</i>",
        vid: 'IlloJuan Playing on Stream'
      },
      raccoon: {
        tit: "Esto AÚN no es un Juego",
        con: `Winner of the 3º edition of the <a href="https://itch.io/jam/gamescholars-3rd-edition" target="_blank">GameScholars gamejam</a>.
              <br><br>
              In Esto AÚN no es un juego you will help a programer raccoon finish his game before his gamejam ends.
              <br><br>
              Due to the little time he has left, to achieve this you will have to go inside the game and fix bugs from there.
              <br><br>
              Your mission will be to change how things work, so that you are able to get to each level's ending and continue to the next.`,
        b1:  "Download&nbsp<i>Esto AÚN no es un Juego</i>",
        vid: 'Gameplay Video'
      },
      lmdshow: {
        tit: "Escape From LMDShow",
        con: `Thank you <a href="https://www.twitch.tv/illojuan" target="_blank">Juan</a> for playing!
              <br><br>
              Escape from LMDShow is a escape room like game in which Juan Alberto, a really cool guy, is kidnapped by LMDShow and attempts to escape the house he was locked in.
              <br><br>
              To escape you will have to solve different puzzles with objects and codes that you will find exploring the rooms.`,
        b1:  "Download&nbsp<i>Escape From LMDShow</i>",
        vid: 'IlloJuan Playing on Stream'
      },
      memory: {
        tit: "Memory Shift",
        con: `Memory Shift is a 2D action-platformer featuring fast-paced gameplay and a hacking system.
              <br><br>
              Inspired by Katana ZERO and Cyberpunk 2077, run, kill, hack, slide and discover what happened to you before losing your memories.
              <br><br>
              Enjoy a story driven adventure with handcrafted levels and mechanics such as throwing items or exploding enemies from afar.`,
        b1:  "Download&nbsp<i>Memory Shift</i>"
      },
      spirits: {
        tit: "Twin Spirits",
        con: `Finalist in the 2º edition of the <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">GameScholars gamejam</a>.
              <br><br>
              Twin Spirits is an indie local coop game in which two spirits go on an adventure in search of a scepter capable of bringing them back to life.  
              <br><br>
              On the way you will find puzzles in which you will have to cooperate in order to continue.`,
        b1:  "Download&nbsp<i>Twin Spirits</i>",
        vid: 'Trailer Video'
      },
      papa: {
        tit: "Cooking Papa",
        con: `Cooking Papa is an indie game where you will have to prepare recipes with ingredients you don't have.
              <br><br>
              The game goes against the clock and you will have to check the cooking book to replace the ingredients that are missing.`,
        b1:  "Download&nbsp<i>Cooking Papa</i>"
      },
      vaporcade: {
        tit: "Vaporcade",
        con: `Vaporcade is a vaporwave themed arcade indie game in which you control a spaceship and score points by shooting. 
              <br><br>
              Vaporcade is divided by waves. In each wave you'll find new enemies and, for every odd wave, a boss will appear.`,
        b1:  "Download&nbsp<i>Vaporcade</i>"
      },
      otters: {
        tit: "Otter's Odyssey",
        con: `Otter's Odyssey was presented to the 2022 URJC GameJam with a medieval theme and received an honorific mention to the best 3D esthetic.
              <br><br>
              It is an isometric role playing game in which you control an otter that goes into an adventure to save its brother.`,
        b1:  "Download&nbsp<i>Otter's Odyssey</i>"
      },
      assAn: {
        tit: 'Oriøn Assistant (Android)',
        con: `Oriøn Assistant for Android is an app full of useful smaller apps such as a music player or a QR scanner.
              <br><br>
              At first, the idea started as a simple web browser that detected commands and helped with gaming tasks.
              After forgetting it for some time, I decided to rename it and give it a modern design with Android Studio. 
              At the moment it has music and video players, a photo vault, notes, a QR scanner and an app to send data to the Windows version of the app.`,
        b1: 'Download APK'
      },
      assPC: {
        tit: 'Oriøn Assistant (Windows)',
        con: `Oriøn Assistant for Windows is an app launcher with support for custom themes and HTML/JS apps called modules.
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
        tit: 'Oriøn Framework',
        con: `Oriøn Framework is an HTML, CSS & JS based framework made with personalization in mind. 
              This project got separated from the PC version of Oriøn Assistant in an attempt to make it available for everyone.
              <br><br>
              Here you can find new simple and easy to use HTML elements like buttons, inputs, switches, checkboxes, radio buttons and various loading animations and effects.`,
        b1: 'See documentation'
      },
      disbots: {
        tit: 'Discord Bots',
        con: `I've created two discord bots. The first one, Syrup, is a simple bot capable of moderating a server and providing simple games for people to enjoy.
              <br><br>
              After Syrup came Coscu, a more advanced bot capable of the same and more. This new version could jump into a call with people and play custom sounds and music.`,
        b1: 'Syrup Repository'
      },
      mod: {
        tit: 'PC Modding',
        con: `Ever since I got into the PC world I started to get interested in modding, so I decided to make my own modded PC.
              <br><br>
              I began by extracting 3D models from some of my favorite games since I couldn't find them online.
              I printed a deathclaw figure and made a large rock model to place inside the case.
              Then I continued sketching the exterior pieces, which are Cyberpunk 2077 inspired, to later 3D model and print them.
              <br><br>
              After printing them, I painted and placed them on my PC.`
      },
      t45: {
        tit: 'T45 Helmet',
        con: `Fallout is one of my favorite videogame series and, in its universe, people use technologically advanced full-body suits called power armors.
              <br><br>
              As I found a helmet 3D model I decided to print it in small pieces to make my own. 
              After gluing all the parts, I painted it and added a vacuum cleaner tube in order to make it look a bit more realistic.`
      },
      usb: {
        tit: 'GTX USB',
        con: `Carrying apps and games on a USB isn't a bad idea, but the memory's speed can cause problems.
              To fix this I had the idea of adding a cooler, so I started designing a case which ended up having the shape of an Nvidia GTX graphics card.
              <br><br>
              After adding the holes for the ventilation, I printed the case and placed a small fan that gets powered from a little connector on the side.
              Finally, I put a thermal pad and an aluminium plate, which was later painted, to dissipate heat from the memory.`
      },
      hoodie: {
        tit: 'Futuristic Hoodie',
        con: `One day I came across a streetwear hoodie, a new style of clothing I had never seen, and I got inspired to create my own.
              It isn't exactly streetwear but it's indeed a futuristic hoodie design.
              I started by sketching some designs in my notebook which were then digitalized using Adobe Illustrator.
              Then I made a preview in Photoshop of how the hoodie would look like if it was real.`
      },
    },
    bot: {
      mail: 'Email copied to clipboard'
    }
  },
  es:{
    tag: 'es', 
    name: 'Portfolio de Alex', 
    ach: {
      title: 'LOGROS',
      lock: 'BLOQUEADO',
      ach1: {
        title: 'Chavalin Interesado',
        desc: 'Dado por abrir uno de los links de mis redes'
      },
      ach2: {
        title: 'Mejores Amigos',
        desc: 'Dado por encontrar a Artyom (mi primer gecko)'
      },
      ach3: {
        title: 'Ves con el Flow',
        desc: 'Dado por cambiar el tema 2 veces'
      }
    },
    top: {
      home: 'Inicio',
      about: 'Sobre Mi',
      skills: 'Habilidades',
      projects: 'Proyectos',
      theme: 'Tema',
      language: 'Español',
      achievements: 'Logros',
      contact: 'Contacto'
    },
    h: {
      hi: '¡Hey! Soy',
      tit1: 'ALEJANDRO PANIAGUA',
      tit2: 'Y me encanta programar y diseñar',
      desc: 'Soy un estudiante español, actualmente estudiando desarrollo de videojuegos, al cual le han interesado los juegos desde pequeño.',
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
      title: 'Sobre Mi',
      desc1: "¡Hey! Me llamo Alejandro, pero me puedes llamar Alex. Soy un desarrollador español que se dedica a diseñar y programar juegos indie y aplicaciones.",
      desc2: "Soy una persona bien organizada e independiente a la que le encanta dar su propio toque. Algunos de mis intereses son jugar, programar y diseñar, pero también me gusta la impresión 3D y las manualidades.",
      s: '¡Ver mis habilidades!',
      next: '¡Hazme click!',
      names: [
        'Artyom',
        'Islas Canarias',
        'Gato Durmiendo',
        'Finisterre',
        'Mallorca',
        'Otivar',
        'Flor en Rio',
        'Muro Lennon'
      ]
    },
    s: {
      title: 'Mis Habilidades',
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
      advanced: 'Avanzado',
      expert: 'Experto',
      p: '¡Ver mis proyectos!'
    },
    p: {
      title: 'Mis Proyectos',
      more: '¡Ver más proyectos!',
      filter1: 'Filtrando proyectos que contengan:',
      filter2: '(click para quitar)',
      tags: {
        solo: '🦝 Proyecto Solitario',
        team: '🍻 Proyecto de Equipo',
        personal: '💖 Proyecto Personal',
        jam: '💫 Juego de Jam',
      },
      skills: {
        uiux: 'Diseño UI/UX',
        discordapi: 'API de Discord',
        '3dmodel': 'Modelado 3D',
        '3dprint': 'Impresión 3D',
        sketching: 'Dibujo',
        diy: 'Manualidades',
        electronics: 'Electrónica',
      },
      spyw4re: {
        tit: "Spyw4re",
        con: `Segundo puesto de 25 en la 5º edicion de la <a href="https://itch.io/jam/5-edicin-game-jam-game-scholars" target="_blank">gamejam de GameScholars</a>.
              <br><br>
              En Spyw4re, eres un operador de CCTV en un asilo. El edificio se está derrumbando y un paciente todavía está dentro, por lo que tendrás que ayudarlo a salir.
              <br><br>
              Para lograrlo, tendrás que resolver algunos acertijos y derrotar a algunos enemigos, pero no creas que será tan fácil, alguien no quiere que lo ayudes...`,
        b1:  "Descarga&nbsp<i>Spyw4re</i>",
        vid: 'Ver Gameplay'
      },
      hackoon:{
        tit: "Hackoon",
        con: `Hackoon es un juego de puzles en desarrollo sobre un mapache desarrollador de videojuegos que necesita arreglar su juego antes de publicarlo.
              <br><br>
              Para conseguirlo, tendrá que meterse dentro de su propio juego. Ahí, con la ayuda de un pequeño robot, podrás modificar el codigo que controla los objetos de cada nivel para completar ingeniosos puzles.`,
        b1:  "¡Sigue el desarrollo!"
      },
      hightime: {
        tit: "High on Time",
        con: `Presentado para la 4º edicion de la <a href="https://itch.io/jam/gamescholars-4-edition" target="_blank">gamejam de GameScholars</a>.
              <br><br>
              High on Time es un shooter frenetico en el que, debido a una droga, eres capaz de controlar el tiempo a costo de tu vida.
              <br><br>
              Tendras que sobrevivir a 3 oleadas de enemigos con armas diferentes para completar el juego, deslizandote y realentizando el tiempo a tu antojo en un edificio en construcción.
              <br><br>
              Opcionalmente, un modo endless con oleadas infinitas tambien está disponible.`,
        b1:  "Descargar&nbsp<i>High on Time</i>",
        vid: 'Ver Gameplay'
      },
      fresquita: {
        tit: "The lost Fresquita",
        con: `Finalista de la <a href="https://itch.io/jam/la-illojam" target="_blank">IlloJam</a>, una gamejam organizada para <a href="https://www.twitch.tv/illojuan" target="_blank">IlloJuan</a>.
              <br><br>
              En The lost Fresquita encarnaras el rol de Juan en un día por la noche. 
              El día de antes celebrasteis una fiesta en el bosque y se te olvidó recoger unas cervezas pero, como eso es irresponsable, has vuelto a por ellas. 
              <br><br>
              Tu misión será encontrar las 3 cervezas olvidadas y volver a casa a salvo. 
              ¿Que a qué me refiero con a salvo? 
              Digamos que algunos de tus amigos no te harán la vida facil...`,
        b1:  "Descargar&nbsp<i>The lost Fresquita</i>",
        vid: 'IlloJuan jugando en Stream'
      },
      raccoon: {
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
      },
      lmdshow: {
        tit: "Escape From LMDShow",
        con: `¡Gracias por jugar <a href="https://www.twitch.tv/illojuan" target="_blank">Juan</a>!
              <br><br>
              Escape from LMDShow es un juego tipo escape room en el que Juan Alberto, un malagueño mu salao, es secuestrado por LMDShow y trata de escapar de la casa donde ha sido encerrado. 
              <br><br>
              Para escapar tendrás que resolver diferentes puzles con objetos y códigos que encontrarás tras explorar las habitaciones.`,
        b1:  "Descargar&nbsp<i>Escape From LMDShow</i>",
        vid: 'IlloJuan Jugando en Stream'
      },
      memory: {
        tit: "Memory Shift",
        con: `Memory Shift es un plataformas de acción 2D con un gameplay rápido y un sistema de hackeo.
              <br><br>
              Inspirado por Katana ZERO y Cyberpunk 2077, corre, mata, hackea, deslízate y descubre qué te ocurrió antes de perder tus recuerdos.
              <br><br>
              Disfruta de una aventura con historia, niveles hechos a mano y mecánicas como lanzar objetos o explotar enemigos desde la lejanía.`,
        b1:  "Descargar&nbsp<i>Memory Shift</i>"
      },
      spirits: {
        tit: "Twin Spirits",
        con: `Finalista en la 2º edicion de la <a href="https://itch.io/jam/gamescholars-2nd-edition" target="_blank">gamejam de GameScholars</a>.
              <br><br>
              Twin Spirits es un juego indie cooperativo local en el que dos espíritus se aventuran en busca de un cetro capaz de hacerles revivir.  
              <br><br>
              Por el camino os encontrareis una serie de puzzles en los que tendréis que cooperar para poder continuar.`,
        b1:  "Descargar&nbsp<i>Twin Spirits</i>",
        vid: 'Ver Trailer'
      },
      papa: {
        tit: "Cooking Papa",
        con: `Cooking Papa es un juego indie en el que tendras que preparar recetas con ingredientes que no tienes.  
              <br><br>
              Las partidas van a contra reloj y tendrás que consultar el libro de recetas para remplazar los ingredientes que faltan.`,
        b1:  "Descargar&nbsp<i>Cooking Papa</i>"
      },
      vaporcade: {
        tit: "Vaporcade",
        con: `Vaporcade es un juego de arcade indie con temática de vaporwave en el que controlas una nave y ganas puntos disparando.  
              <br><br>
              Vaporcade esta dividido por oleadas. En cada oleada encontraras nuevos enemigos y, por cada oleada impar, un jefe aparecerá.`,
        b1:  "Descargar&nbsp<i>Vaporcade</i>"
      },
      otters: {
        tit: "Otter's Odyssey",
        con: `Otter's Odyssey fue presentado como juego para la GameJam de 2022 de la URJC con temática medieval y recibió una mención honorífica a la mejor estética 3D. 
              <br><br>
              Es un juego isométrico de rol en el que controlas a una nutria que se adentra en una aventura para rescatar a su hermano.`,
        b1:  "Descargar&nbsp<i>Otter's Odyssey</i>"
      },
      assAn: {
        tit: 'Oriøn Assistant (Android)',
        con: `Oriøn Assistant para Android es una app llena de apps más pequeñas como un reproductor de música o un lector de QR.
              <br><br>
              Al principio, la idea comenzó como un buscador web simple que detectába comandos y ayudaba con tareas de juegos.
              Tras olvidarla por un tiempo, decidí renombrarla y darle un diseño moderno con Android Studio.
              Actualmente la app tiene reproductores de música y video, un bunquer de fotos, notas, un lector de QR y una app para pasar datos a la versión de Windows de la app.`,
        b1: 'Descargar APK'
      },
      assPC: {
        tit: 'Oriøn Assistant (Windows)',
        con: `Oriøn Assistant para Windows es un launcher de apps con soporte para temas y apps HTML/JS custom llamadas módulos.
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
        tit: 'Framework Oriøn',
        con: `El framework Oriøn es un framework basado en HTML, CSS & JS hecho con personalización en mente.
              Este proyecto fue separado de la versión de PC del Asistente Oriøn en un intento de hacerlo disponible para todos.
              <br><br>
              Aquí puedes encontrar nuevos elementos HTML simples y fáciles de usar como botones, inputs, interruptores, casillas de verificación, botones de radio y varias animaciones y efectos de carga.`,
        b1: 'Ver documentación'
      },
      disbots: {
        tit: 'Bots de Discord',
        con: `He creado dos bots de discord. El primero, Syrup, es un bot simple capaz de moderar un servidor y proveer juegos simples para que la gente se divierta.
              <br><br>
              Después de Syrup llegó Coscu, un bot más avanzado capaz de lo mismo y más. Esta nueva versión podría entrar en llamadas con gente y reproducir sonidos personalizados y música.`,
        b1: 'Repositorio de Syrup'
      },       
      mod: {
        tit: 'PC Modding',
        con: `Desde que entré en el mundo del PC comencé a interesarme por el modding, así que decidí hacer mi propio PC modificado.
              <br><br>
              Empecé extrayendo modelos 3D de algunos de mis juegos favoritos ya que no los podía encontrar online.
              Imprimí una figura de deathclaw e hice un modelo de roca larga para colocar dentro del PC.
              Después continúe diseñando las piezas exteriores, basadas en Cyberpunk 2077, para más tarde modelarlas e imprimirlas.
              <br><br>
              Tras imprimirlas las pinté y coloqué en el PC.`
      },
      t45: {
        tit: 'Casco T45',
        con: `Fallout es una de mis series de videojuegos favoritas y, en su universo, se usan trajes tecnológicamente avanzados de cuerpo entero llamados armaduras de poder.
              <br><br>
              Cómo encontré el modelo 3D de un casco decidí imprimirlo en pequeñas partes para hacerme uno propio. 
              Tras pegar todas las partes, lo pinté y le añadí un tubo de aspiradora para hacerlo parecer un poco más realista.`
      },
      usb: {
        tit: 'USB GTX ',
        con: `Llevar apps y juegos en un USB no es una mala idea, pero la velocidad de la memoria puede causar problemas.
              Para arreglar esto tuve la idea de añadirle un disipador, así que empecé a diseñar una carcasa que acabó teniendo forma de una tarjeta gráfica Nvidia GTX.
              <br><br>
              Después de hacer agujeros para la ventilación, imprimí la carcasa y coloqué un ventilador pequeño alimentado por un conector en el lado.
              Finalmente, le añadí una almohadilla térmica y una placa de aluminio, la cual pinté más tarde, para disipar el calor de la memoria.`
      },
      hoodie: {
        tit: 'Sudadera Futurística',
        con: `Un día me encontré con una sudadera streetwear, un estilo que no había visto antes, y me inspiró para crear la mía.
              No es exactamente streetwear, pero sí es una sudadera futuristica.
              Comencé dibujando unos diseños en mi cuaderno que fueron digitalizados más tarde usando Adobe Illustrator.
              Tras eso, hice una simulación en Photoshop de como se vería la sudadera si fuese real.`
      }, 
    },
    bot: {
      mail: 'Email copiado al portapapeles'
    }
  }
}

let lan = lans.es



//Projects info
const Skills = Object.freeze({
  //Languages
  cs: 'C#',
  java: 'JAVA',
  cpp: 'C++',
  html: 'HTML',
  css: 'css',
  js: 'JS',
  nodejs: 'NodeJS',
  electronjs: 'ElectronJS',
  cmd: 'CMD',
  //Apps
  unity:  'Unity',
  vscode: 'VS Code',
  blender: 'Blender',
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  max3ds: '3ds Max',
  substance: 'Substance Painter',
  android: 'Android Studio',
  //Other
  discordapi: 'discordapi',
  uiux: 'uiux',
  print3d: '3dprint',
  model3d: '3dmodel',
  sketching: 'sketching',
  electronics: 'electronics',
  diy: 'diy',
});

const projs = {
  //Created projects
  created: 0,
  //Filtered list
  filter: '',
  filteredList: [],
  //Unfiltered list
  list: [
    {
      key: 'spyw4re',
      year: 2024,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.blender, Skills.photoshop],
      button: ['https://botpa.itch.io/spyw4re'],
      vid: 'Qc3aWfPAxg0',
    },
    {
      key: 'hackoon',
      tags: ['solo', 'personal'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.blender, Skills.photoshop],
      button: ['https://www.tiktok.com/@botpanzer'],
    },
    {
      key: 'hightime',
      year: 2024,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.photoshop],
      button: ['https://botpa.itch.io/high-on-time'],
      vid: 'UGMQDJxov1M',
    },
    {
      key: 'fresquita',
      year: 2024,
      tags: ['solo', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.blender, Skills.photoshop],
      button: ['https://botpa.itch.io/the-lost-fresquita'],
      vid: 'SC_3TWWP46k',
    },
    {
      key: 'raccoon',
      year: 2023,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.blender, Skills.photoshop],
      button: ['https://botpa.itch.io/esto-aun-no-es-un-juego'],
      vid: 'UGH5wQYlAt4',
    },
    {
      key: 'lmdshow',
      year: 2023,
      tags: ['solo', 'personal'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.blender, Skills.photoshop],
      button: ['https://botpa.itch.io/escape-from-lmdshow'],
      vid: 'z0Qv5HZyZgU',
    },
    {
      key: 'memory',
      year: 2023,
      tags: ['solo', 'personal'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.photoshop, Skills.illustrator],
      button: ['https://botpa.itch.io/memory-shift'],
    },
    {
      key: 'spirits',
      year: 2023,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.illustrator, Skills.photoshop],
      button: ['https://botpa.itch.io/twin-spirits'],
      vid: 'SdIGAw2ABeU',
    },
    {
      key: 'vaporcade',
      year: 2022,
      tags: ['solo', 'personal'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.illustrator, Skills.photoshop],
      button: ['https://botpa.itch.io/vaporcade']
    },
    {
      key: 'papa',
      year: 2023,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.illustrator, Skills.photoshop],
      button: ['https://botpa.itch.io/cooking-papa']
    },
    {
      key: 'otters',
      year: 2022,
      tags: ['team', 'jam'],
      skills: [Skills.cs, Skills.unity, Skills.vscode, Skills.max3ds, Skills.substance, Skills.illustrator, Skills.photoshop],
      button: ['https://botpa.itch.io/vaporcade']
    },
    {
      key: 'assAn',
      tags: ['solo', 'personal'],
      skills: [Skills.java, Skills.android, Skills.uiux],
      button: ['Data/Orion Assistant 1.10.0.apk']
    },
    {
      key: 'assPC',
      tags: ['solo', 'personal'],
      skills: [Skills.html, Skills.css, Skills.js, Skills.nodejs, Skills.electronjs, Skills.vscode, Skills.uiux],
      button: ['https://github.com/BOTPanzer/Orion-Assistant', 'https://github.com/BOTPanzer/USB-Launcher']
    },
    {
      key: 'frame',
      tags: ['solo', 'personal'],
      skills: [Skills.html, Skills.css, Skills.js, Skills.vscode, Skills.uiux],
      button: ['https://botpanzer.github.io/Orion-Framework']
    },
    /*{
      key: 'disbots',
      year: 2019,
      tags: ['solo', 'personal'],
      skills: [Skills.js, Skills.vscode, Skills.discordapi],
      button: ["https://github.com/BOTPanzer/Syrup"]
    },
    {
      key: 'mod',
      year: 2021,
      tags: ['solo', 'personal'],
      skills: [Skills.model3d, Skills.print3d, Skills.illustrator, Skills.sketching, Skills.diy],
    },
    {
      key: 't45',
      year: 2018,
      tags: ['solo', 'personal'],
      skills: [Skills.print3d, Skills.diy],
    },
    {
      key: 'usb',
      year: 2018,
      tags: ['solo', 'personal'],
      skills: [Skills.model3d, Skills.print3d, Skills.electronics, Skills.diy],
    },
    {
      key: 'hoodie',
      year: 2021,
      tags: ['solo', 'personal'],
      skills: [Skills.illustrator, Skills.photoshop, Skills.sketching],
    },*/
  ],
}



//About image index & order (shuffle all & add artyom last)
const about = {
  order: [],
  index: 0
}

for (let i = 1; i < lan.a.names.length; i++) about.order.push(i)
for (let i = about.order.length - 1; i > 0; i--) {
  const randomIndex = Math.floor(Math.random() * i);
  [about.order[i], about.order[randomIndex]] = [about.order[randomIndex], about.order[i]];
}
about.order.push(0)



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
const ballHome = document.getElementById('ballHome')
const ballAbout = document.getElementById('ballAbout')
const ballSkills = document.getElementById('ballSkills')
const ballProjects = document.getElementById('ballProjects')

let scrollCount = 0

window.onscroll = scrolled

function scrolled() {
  //Run code every 5 counts
  scrollCount--
  if (scrollCount > 0) return
  scrollCount = 5

  //Balls
  if (isVisible(document.getElementById('home'))) {
    ballHome.setAttribute('checked', '')
    ballAbout.removeAttribute('checked')
    ballSkills.removeAttribute('checked')
    ballProjects.removeAttribute('checked')
  } else {
    ballHome.removeAttribute('checked')
    if (isVisible(document.getElementById('about'))) {
      ballAbout.setAttribute('checked', '')
      ballSkills.removeAttribute('checked')
      ballProjects.removeAttribute('checked')
    } else {
      ballAbout.removeAttribute('checked')
      if (isVisible(document.getElementById('skills'))) {
        ballSkills.setAttribute('checked', '')
        ballProjects.removeAttribute('checked')
      } else {
        ballSkills.removeAttribute('checked')
        ballProjects.setAttribute('checked', '')
      }
    }
  }

  //Skills
  if (isVisible(document.getElementById('skills'))) {
    if (isVisible(document.getElementById('skillsVidTitle')))
      html.style.setProperty('--skills1', '95%')
    if (isVisible(document.getElementById('skillsUiTitle')))
      html.style.setProperty('--skills5', '62%')
    if (isVisible(document.getElementById('skillsWebTitle')))
      html.style.setProperty('--skills3', '65%')
    if (isVisible(document.getElementById('skillsAppTitle')))
      html.style.setProperty('--skills2', '58%')
    if (isVisible(document.getElementById('skills3dTitle')))
      html.style.setProperty('--skills4', '35%')
    if (isVisible(document.getElementById('skillsArtTitle')))
      html.style.setProperty('--skills6', '38%')
  }

  //Appear anim
  const elems = document.querySelectorAll('.appear')
  elems.forEach(elem => {
    if (!isVisible(elem)) return
    elem.classList.add('appeared')
    elem.classList.remove('appear')
  })
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
  const space = document.getElementById('navSpace')

  //Toggle
  if (open) {
    //Open
    exit.style.pointerEvents = 'all'
    menu.setAttribute('menu', '')
    setTimeout(() => { 
      if (menuOpen) space.setAttribute('open', '')
    }, 150)
  } else {
    //Close
    exit.style.pointerEvents = ''
    space.removeAttribute('open', '')
    setTimeout(() => { 
      if (!menuOpen) menu.removeAttribute('menu') 
    }, 150)
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
const snacks = []

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
  //Get snackbar
  const snack = document.getElementById('snackbar')

  //Show snackbar
  if (!snack.classList.contains('snackbar') && snacks.length > 0) {
    //Data
    snack.innerHTML = snacks[0].text
    snack.classList.add('snackbar')
    if (snacks[0].confetti) createConfetti()
    snacks.shift()

    //Wait to disappear
    setTimeout(() => {
      //Disappear
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
    break

  //English saved
  case 'en':
    lan = lans.en
    break
}

changeTitle()



//Set language
function setLan() {
  //Navbar
  document.getElementById('navHome').innerText = lan.top.home
  document.getElementById('navAbout').innerText = lan.top.about
  document.getElementById('navSkills').innerText = lan.top.skills
  document.getElementById('navProjects').innerText = lan.top.projects

  //Navbar menu
  document.getElementById('navMenuHome').innerText = lan.top.home
  document.getElementById('navMenuAbout').innerText = lan.top.about
  document.getElementById('navMenuSkills').innerText = lan.top.skills
  document.getElementById('navMenuProjects').innerText = lan.top.projects
  document.getElementById('navMenuTheme').innerText = lan.top.theme
  document.getElementById('navMenuLanguage').innerText = lan.top.language
  document.getElementById('navMenuAchievements').innerText = lan.top.achievements
  document.getElementById('navMenuContact').innerText = lan.top.contact

  //Achievements
  document.getElementById('achMenuTitle').innerText = lan.ach.title
  document.getElementById('ach1Title').innerText = lan.ach.ach1.title
  document.getElementById('ach1Description').innerText = lan.ach.ach1.desc
  document.getElementById('ach1Lock').innerText = lan.ach.lock
  document.getElementById('ach2Title').innerText = lan.ach.ach2.title
  document.getElementById('ach2Description').innerText = lan.ach.ach2.desc
  document.getElementById('ach2Lock').innerText = lan.ach.lock
  document.getElementById('ach3Title').innerText = lan.ach.ach3.title
  document.getElementById('ach3Description').innerText = lan.ach.ach3.desc
  document.getElementById('ach3Lock').innerText = lan.ach.lock

  //Home
  document.getElementById('homeHi').innerText = lan.h.hi
  document.getElementById('homeTitle1').innerText = lan.h.tit1
  document.getElementById('homeTitle2').innerText = lan.h.tit2
  document.getElementById('homeDescription').innerText = lan.h.desc
  document.getElementById('homeType1').innerText = lan.h.type1
  document.getElementById('homeAbout').innerText = lan.h.a

  //About
  document.getElementById('aboutTitle').innerText = lan.a.title
  document.getElementById('aboutDescription1').innerText = lan.a.desc1
  document.getElementById('aboutDescription2').innerText = lan.a.desc2
  document.getElementById('aboutSkills').innerText = lan.a.s
  document.getElementById('aboutImgName').innerText = lan.a.names[about.order[about.index]]
  document.getElementById('aboutImgNext').innerText = lan.a.next

  //Skills
  document.getElementById('skillsTitle').innerText = lan.s.title
  document.getElementById('skillsDescription').innerText = lan.s.desc
  document.getElementById('skillsWebTitle').innerText = lan.s.web
  document.getElementById('skillsWebPro').innerText = lan.s.high
  document.getElementById('skillsUiTitle').innerText = lan.s.ui
  document.getElementById('skillsUiPro').innerText = lan.s.high
  document.getElementById('skillsVidTitle').innerText = lan.s.videogames
  document.getElementById('skillsVidPro').innerText = lan.s.advanced
  document.getElementById('skillsAppTitle').innerText = lan.s.apps
  document.getElementById('skillsAppPro').innerText = lan.s.high
  document.getElementById('skills3dTitle').innerText = lan.s.d3
  document.getElementById('skills3dPro').innerText = lan.s.medium
  document.getElementById('skillsArtTitle').innerText = lan.s.art
  document.getElementById('skillsArtPro').innerText = lan.s.medium
  document.getElementById('skillsProjects').innerText = lan.s.p

  //Projects
  document.getElementById('projectsTitle').innerText = lan.p.title
  document.getElementById('projectsMore').innerText = lan.p.more
  document.getElementById('projectsFilterStart').innerText = lan.p.filter1
  document.getElementById('projectsFilterEnd').innerText = lan.p.filter2
  addProjects(projs.filter)
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

const theme = {
  changed: false,
  dark: !(localStorage.getItem('theme') == 'light')
}

setTheme()

function setTheme() {
  if (theme.dark) {
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
  theme.dark = !theme.dark
  setTheme()

  //Achievement
  if (theme.changed) giveAchievement('drill')
  theme.changed = true
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
const ach = {
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
      createSnackbar(`🏆 ${lan.ach.ach1.tit}`, true)
      given = true
      break
    case 'artyom':
      if (ach.artyom == true) return
      createSnackbar(`🏆 ${lan.ach.ach2.tit}`, true)
      given = true
      break
    case 'drill':
      if (ach.drill == true) return
      createSnackbar(`🏆 ${lan.ach.ach3.tit}`, true)
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
      document.getElementById('ach1').removeAttribute('locked')
      break
    case 'artyom':
      ach.artyom = true
      localStorage.setItem('achArtyom', 'true')
      document.getElementById('ach2').removeAttribute('locked')
      break
    case 'drill':
      ach.drill = true
      localStorage.setItem('achDrill', 'true')
      document.getElementById('ach3').removeAttribute('locked')
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

function toggleAchievements() {
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
aboutUpdate()

function aboutUpdate() {
  const imgs = [
    'Data/Images/About/artyom.jpg',
    'Data/Images/About/canary.jpg',
    'Data/Images/About/cat.jpg',
    'Data/Images/About/finisterre.jpg',
    'Data/Images/About/mallorca.jpg',
    'Data/Images/About/otivar.jpg',
    'Data/Images/About/flower.jpg',
    'Data/Images/About/lennon.jpg'
  ]
  aboutImg.src = imgs[about.order[about.index]]
}

//About image loading
let aboutImgLoading = false

aboutImg.onload = () => { 
  //Update text
  aboutImgName.innerText = lan.a.names[about.order[about.index]]

  //Loading
  if (aboutImgLoading) {
    //Stop animation
    aboutImg.removeAttribute("loading")

    //Artyom
    if (about.index == lan.a.names.length - 1) giveAchievement('artyom')

    //Finish
    setTimeout(() => { aboutImgLoading = false }, 400)
  }
}

function aboutClick() {
  //Is loading
  if (aboutImgLoading) return
  aboutImgLoading = true

  //Get next image index
  let nextIndex = about.index + 1
  if (nextIndex >= lan.a.names.length) nextIndex = 0

  //Load animation
  aboutImg.setAttribute("clicked", "")
  aboutImg.setAttribute("loading", "")
  setTimeout(() => {
    //Update
    about.index = nextIndex
    aboutUpdate()
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

function addProjects(filter) {
  //Check filter
  if (typeof filter !== 'string' && typeof filter !== 'number') filter = ''
  const isRefresh = projs.filter == filter
  projs.filter = filter

  //Get animate & projects length (minimum of 4)
  const animate = projs.created == 0
  const length = isRefresh ? Math.max(projs.created, 4) : 4

  //Create filtered list
  if (filter == '') {
    //No filter -> Add all projects
    projs.filteredList = projs.list

    //Hide filter info box
    document.getElementById('projectsFilterBox').setAttribute('hide', '')
  } else {
    //Has filter -> Filter projects
    projs.filteredList = []
    projs.list.forEach(project => {
      if (!Array.isArray(project.skills)) return
      if (typeof filter === 'string') {
        //String filter -> Look in skills
        if (project.skills.includes(filter)) projs.filteredList.push(project)
      } else {
        //Number filter -> Look in year
        if (project.year == filter) projs.filteredList.push(project)
      }
    })
    if (!isRefresh) goto('projects')

    //Show filter info box & update filter
    document.getElementById('projectsFilterBox').removeAttribute('hide')
    document.getElementById('projectsFilterSkill').innerText = filter
  }

  //Clear
  clearProjects()

  //Add projects
  for (let i = 0; i < length; i++) addProject(animate, filter)
}

function clearProjects() {
  //Clear projects
  projs.created = 0
  document.getElementById('projectsList').innerHTML = ''
  document.getElementById('projectsMoreBox').style.display = projs.created >= projs.filteredList.length ? 'none' : 'flex'
}

function addProject(animate) {
  //Fix animate bool
  if (typeof animate != 'boolean') animate = true

  //No more space
  if (projs.created >= projs.filteredList.length) return

  //Get basic info
  const id = `project${projs.created}`
  const project = projs.filteredList[projs.created]
  const locales = lan.p[project.key]

  //Get tags
  let tags = ''
  if (Array.isArray(project.tags)) {
    for (let i = 0; i < project.tags.length; i++) {
      const element = project.tags[i]
      //tags += (i != 0 ? '<br>' : '') + '&gt;&nbsp&nbsp' + lan.p.tags[element]
      tags += (i != 0 ? '<br>' : '') + lan.p.tags[element]
    }
  }

  //Get skills
  let skills = ''
  if (project.year) skills += `<span class="projectSkill" year onclick="addProjects(${project.year})">` + project.year + '</span>'
  if (Array.isArray(project.skills)) {
    project.skills.forEach(skill => {
      const skillName = lan.p.skills[skill]
      skills += `<span class="projectSkill" onclick="addProjects('${skill}')">` + (skillName ? skillName : skill) + '</span>'
    })
  }

  //Get buttons
  let buttons = ''
  const button = project.button
  if (Array.isArray(button)) {
    for (let i = 0; i < button.length; i++) {
      const buttonText = locales['b' + (i + 1)]
      buttons += `<a id="${id}B${i}" class="projectButton" target="_blank" href="${button[i]}">${buttonText ? buttonText : locales.tit}</a>`
    }
  }

  //Video button (youtube link key)
  const vid = project.vid

  //Create project HTML base
  const element = document.createElement('div')
  element.id = id
  element.classList.add('project')

  //Animation & reverse
  if (animate) element.classList.add(projs.created < 4 ? 'appear' : 'appeared')
  if (projs.created % 2 != 0) element.setAttribute('reverse', '')
  
  //Add project HTML content
  element.innerHTML = `
    <!-- Media (image, video & tags) -->
    <div id="${id}-media" class="projectMedia">
      <!-- Tags -->
      <span class="projectTags" ${tags == '' ? '' : 'hidden'}>${tags}</span>
      <!-- Video button -->
      <div class="projectVideoButton" ${typeof vid === 'string' ? '' : 'hidden'}>
        <span onclick="toggleVideo(${projs.created}, 'https://www.youtube.com/embed/${vid}')">
          <img src="Data/Images/Icons/play.png">
          <span>${locales.vid}</span>
        </span>
      </div>
      <!-- Dummy -->
      <div class="projectMediaDummy"></div>
      <!-- Image & video -->
      <div class="projectMediaContent">
        <!-- Image -->
        <img src="Data/Images/Projects/${project.key}.jpg">
        <!-- Video -->
        <iframe id="${id}-video" allow="fullscreen"></iframe>
      </div>
    </div>
    <!-- Info (skills, title, description & buttons) -->
    <div class="projectInfo">
      <!-- Skills -->
      <div class="projectSkills">${skills}</div>
      <!-- Title & description -->
      <div class="projectInfoContent">
        <span>${locales.tit}</span>
        <span>${locales.con}</span>
      </div>
      <!-- Buttons -->
      <div class="projectButtons">${buttons}</div>
    </div>`
  document.getElementById('projectsList').appendChild(element)

  //Done
  projs.created++

  //Update load more button
  document.getElementById('projectsMoreBox').style.display = projs.created >= projs.filteredList.length ? 'none' : 'flex'
}

function toggleVideo(number, url) {
  const media = document.getElementById(`project${number}-media`)
  const video = document.getElementById(`project${number}-video`)
  if (media.getAttribute('video') != null) {
    media.removeAttribute('video')
    video.src = ''
  } else {
    media.setAttribute('video', '')
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
(() => {
  const quote  = [
    'War never changes', 
    'Truth is, the game was rigged grom the start', 
    'OPA! Artyom!', 
    'See you in the major leagues, Jack', 
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
    'Link, this is a huge discovery!',
    'Any adventure you can fly away from'
  ]
  const from = [
    'Fallout', 
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
    'Starfield'
  ]
  const q = Math.floor(Math.random() * quote.length)
  document.getElementById('botQuote').innerHTML = quote[q]
  document.getElementById('botFrom').innerHTML = from[q]
})()