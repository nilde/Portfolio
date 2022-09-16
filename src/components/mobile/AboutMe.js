import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import BigSeparator from './BigSeparator'
import MediumSeparator from './MediumSeparator'
import LittleSeparator from './LittleSeparator'
import Close from '../../images/close.svg'

function App(props) {
  window.scrollTo(0, 0)
  return (
    <View style={{ position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#fff", overflowY: "scroll" }}>
      <MediumSeparator />

      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
        Sobre mí
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        MI PEQUEÑA HISTORIA
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Mi nombre es Nil Domene Esteban tengo 24 años y actualmente me dedico al desarrollo frontend y a aplicaciones híbridas con React y React Native.
      </Text>

      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Descubrí la programación a los 10 años en una extraescolar que realizaba en un colegio cercano. Al principio no me apasionaba, la veía confusa y pensaba que jamás sería capaz de entenderla.(Cómo anécdota graciosa diré que la primera vez que interactué con internet tardé como 10 segundos en imprimir por error la página de inicio de Google cosa que no le hizo mucha gracia a mi profesor).
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        En la escuela teníamos una asignatura dedicada a la informática y mientras a los demás se les dejaba jugar con el ordenador o usar programas muy sencillos, a mi me dejaban rienda suelta para progrmar mis pequeñas webs cargadas de wigdets y llenas de colores estridentes en html/css puro. Aunque era muy poco, yo me sentía increíblemente feliz ya que era primera vez que podia decir que había cpnstruido algo con mis propias manos.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Después paso algo muy curioso. Todo aquello que me había apasionado durante mi etapa previa a la adolescencia dejó de interesarme y poco a poco fuí distanciandome de cualquier cosa relacionada con la programación. Acabé por olvidar todo lo que había aprendido, pero siempre recordaré con nostalgia mis pequeñas creaciones que sin duda me han guiado hasta aquí.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Así llegue al bachillerato, dónde cada vez veía más claro que me debía orientar hacía las letras. Por aquella época deboraba todos los libros que podía aunque detestaba los clásicos y sentía devoción por aquellos que eran políticamente incorrectos. Pero en lo más profundo de mí seguía sin olvidar la programación y las sensaciones que había sentido delante de una pantalla años atrás.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Así que en un giro inesperado, decidi cambiar de rumbo. Dejé la filosofía a un lado y centrandome de nuevo en la tecnología. La verdad es que esta decisión me tuvo mucho tiempo preguntandome si habia escogido lo correcto.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Inicié mis estudios en la UAB ya que era la universidad que tenía más cerca y creía que podía encajar más en su ambiente más relajado. Al empezar me encontré con algo completamente distinto a lo que pensaba que iba a ser la carrera. De golpe me encontré descubriendo las profundas relaciones entre las matemáticas y la informática que hasta ahora jamás podido ver. Quedé hechizado desde ese mismo momento disipando las dudas que había tenido hasta ahora.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        No fue hasta segundo que volví a encontrarme de nuevo con el desarrollo web. En las clases centradas en la programación web volví a conectar con las sensaciones que había tenido cúando era pequeño. Así que intenté ponerme al día de las nuevas posibilidades que habían en este campo.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Y fue así que terminé por descubrir React y me encantó. Su cambio de paradigma centrado en el diseño de componentes era una solución sencilla y  encajaba perfectamente con mi forma de estructurar el código. Así que empecé a aprenderlo de manera 100% autódidacta. Estudiaba la carrera por la mañana y aprendía por mi cuenta por las tardes. Así estuve durante hasta que terminé la carrera.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Una vez que llegué a entender React en profundidad, intenté aprender por mi cuenta a desarrollar aplicaciones para móvil. Descubrí de manera completamente casual que existía React Native y que funcionaba siguiendo el mismo paradigma que su hermano. Al principio me costó un poco adaptarme ya que aún no estaba tan maduro como ahora y tuve problemas sobretodo a la hora de configurar las dependencias.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Terminé mis estudios en Ingeniería Informática a los 21, habiendo realizado la mención de computación y gran parte de la mención en software. Aquí desarrollé la primera aplicación importante con React Native para un proyecto de clase. Insistí para que el grupo que en tenia que dirigir usara esta tecnología y en cuanto se pusieron a experimentar por ellos mismos quedarón todos gratamente sorprendidos. Realizamos tan buen trabajo que obtuvimos matrícula de honor. El resultado de este proyecto fue primera versión de una app en la que trabajaría cerca de un año (Urbis). Por mi cuenta, además ya había publicado cerca de 10 aplicaciones en las que cada una de ellas me ayudaba a darme cuenta de las posibilidades (y las limitaciones) de esta tecnología.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Urbis era una aplicación que iba a permitir conectar a la gente con sus municipios de una forma revolucionaria. Permítia mantenerse al día de todo lo que sucedía y a la vez, los propios ciudadanos podían reportar incidencias en menos de 10 segundos. Intenté lanzar la aplicación con la colaboración de algunos ayuntamientos, pero lamentablemente no supe darle el enfoque correcto. Cúando parecía que iba a empezar a arrancar, llegó la pandemía y decidí que no era el mejor momento para lanzarla.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        En este punto y después de dos años formandome y realizando pequeños proyectos por mi cuenta, decidí que era hora de estudiar un máster que me ayudara a entender mejor al usuario que al final era quién debía usar mi aplicación. Me decidí a realizarlo por la UOC debido a la gran flexibilidad que me daba y que creí que era el máster que mejor se podía ajustar a mis necesidades.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Al mismo tiempo decidí intentar lanzar una app relacionada con la comida. Si bien existen alternativas para poder pedir cosas a domicilios, un socio y yo decidimos optar por justo lo contrario. Intentar conectar todos los negocios locales sin entrega. Nuestra idea principal era que el usuario realizara un pedido en una carnicería por ejemplo, pagará con el móvil y solo pasará a buscar el pedido. Creíamos realmente en este enfoque y trabajamos duramente durante más de 8 meses. Actualmente disponemos de un MVP y algunos clientes potenciales.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
      Lamentablemente no podemos dedicarle el tiempo que necesita así que de momento hemos decidio centrarnos cada uno en nuestras respectivas carreras profesionales y tratar Buyness como un proyecto secundario.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Así que ahora mismo estoy en un punto de mi vida dónde lo que más me interesa es poder estar en un entorno corporativo que me ayude mejor a aprender como desarrollar software de la mejor calidad y sobretodo me ayude a entender todo lo posible sobre como crear un producto que la gente ame.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
Si has llegado hasta aquí, muchas gracias por haber dedicado tu tiempo a leer todo lo anterior.{"   "}:)
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        ESTUDIOS
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        - Ingeniería informática en la UAB con mención en Computación (2015-2019){"\n"}
        - Máster universitario de Diseño de Interacción y Experiencia de Usuario (UX) en la UOC (2022){"\n"}

      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        OTROS CURSOS DE INTERÉS
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        - Machine Learning Course impartido por Andrew Ng en Coursera (2019)
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        PROYECTOS PERSONALES
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        - Más de 15 apps publicadas en App Store y Google Play.{"\n"}
        - Urbis{"\n"}
        - Buyness{"\n"}
        - AR para sitios vacacionales{"\n"}
        - Actualmente trbajando en un juego de puzzles basado en asociaciones de palabras.{"\n"}

      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        RANKINGS DE LAS APPS PUBLICADAS
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        A continuación puede consultarse las mejores posiciones de la mayoría de aplicaciones publicadas en la App Store.
      </Text>
      <LittleSeparator />
      <Text
        onPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
        onLongPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
        style={{ fontWeight: "400", textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#00a082" }}>
        Pulsa para acceder a los rankings
      </Text>

      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        IDIOMAS
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Nativo:{"\n"}
        - Catalán{"\n"}
        - Castellano{"\n"}
        Medio-Alto:{"\n"}
        - Inglés{"\n"}
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        CONOCIMIENTOS
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Conocimientos elevados:{"\n"}
        - React{"\n"}
        - React Native{"\n"}
        - Publicación en iOS y Android{"\n"}
        - Git{"\n"}
        - GitHub{"\n"}
        - Javascript{"\n"}
        - CSS{"\n"}
        - HTML{"\n"}
        - Firebase{"\n"}
        - Google Cloud{"\n"}
        - Sass{"\n"}
        - XCode{"\n"}
        - Code Push{"\n"}
        - Admob{"\n"}
        - Google Analytics{"\n"}
        - Netlify{"\n"}
        {"\n"}
        Conocimientos medios:{"\n"}

        - Expo {"\n"}
        - Matter js:{"\n"}
        - Figma:{"\n"}
        - Sketch:{"\n"}
        - Heroku{"\n"}
        - Node js{"\n"}
        - C{"\n"}
        - C++{"\n"}
        - Python{"\n"}
        {"\n"}

        Algunos conocimientos:{"\n"}

        - Bit{"\n"}
        - Vue js{"\n"}
        - Three js{"\n"}
        - Jest{"\n"}
        - Enzyme{"\n"}
        {"\n"}

        Conocimientos teóricos sobre:{"\n"}

        - Patrones de diseño{"\n"}
        - Análisis de complejidad {"\n"}
        - Pub/Sub {"\n"}
        - Conceptos de Deep Learning/IA{"\n"}
        - Visión por Computador{"\n"}
        - UX{"\n"}
        - Diseño centrado en personas {"\n"}
        - Diseño de producto{"\n"}
        - Data Driven Development{"\n"}
        - Static code Analysis{"\n"}
        - AWS{"\n"}
        - Bases de datos relacionales y no relacionales{"\n"}
        - Cloud Computing{"\n"}
        - SEO {"\n"}
        - ASO {"\n"}
        - Localización {"\n"}
        - y más {"\n"}


      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        TFG
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        A continuación puedes consultar mi TFG que realizé sobre un tema relacionado con la conducción autónoma, concretamente con la generación de secuencias de vídeo que incluían elementos virtuales con el objetivo de crear conjuntos de entrenamiento que contaran con situaciones excepcionales:
      </Text>
      <LittleSeparator />
      <Text
        onPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
        onLongPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
        style={{ fontWeight: "400", textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#00a082" }}>
        Pulsa para acceder al TFG
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
        TFM
      </Text>
      <LittleSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        A continuación puedes consultar mi TFM que realizé sobre el diseño de Buyness, desde las entrevistas con clientes hasta la realización de los distintos prototipos de baja y alta fidelidad.
      </Text>
      <LittleSeparator />
      <Text
        onPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
        onLongPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
        style={{ fontWeight: "400", textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#00a082" }}>
        Pulsa para acceder al TFM
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "#000" }}>
        Gracias por tu tiempo.
      </Text>
      <MediumSeparator />
      <Pressable
        onPress={() => props.toggleActiveScreen("aboutMe")}
        onLongPress={() => props.toggleActiveScreen("aboutMe")}
        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100 }}>
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18 }}>
          Cerrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => props.toggleActiveScreen("aboutMe")}
        onLongPress={() => props.toggleActiveScreen("aboutMe")}
        style={{ justifyContent: "center", alignItems: "center", position: "absolute", top: 0, right: 0, width: 50, height: 50 }}>
        <Image
          source={Close}
          style={{ width: "100%", height: 20, resizeMode: "contain" }}
        />
      </Pressable>
      <MediumSeparator />
    </View>



  );
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


export default App;
