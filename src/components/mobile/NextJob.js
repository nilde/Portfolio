//Framework imports
import { Component } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

//Component imports
import BigSeparator from './BigSeparator';
import MediumSeparator from './MediumSeparator';
import LittleSeparator from './LittleSeparator';
import Close from '../../images/close.svg'



//[title,image,state_managment]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: "",
      activeFront: true,
      modalOpacity: new Animated.Value(1)
    }
  }



  updateActiveType(newActive) {
    if (this.state.activeType != newActive)
      this.setState({ activeType: newActive })
    else
      this.setState({ activeType: "" })
  }

  componentDidMount() {

  }

  closeModal() {
    this.setState({
      activeFront: false
    }, () =>
      Animated.timing(this.state.modalOpacity, {
        toValue: 0,
        duration: 300
      }).start(() => this.props.toggleActiveScreen("nextJob"))
    )

  }

  render() {

    //using length will raise an error inside render function

    return (
      <Animated.View
        style={{ overflowY: "scroll", opacity: this.state.modalOpacity, position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#ffc244" }}>
        {this.state.activeFront &&
          <View style={{ width: "100%", backgroundColor: "#f2f2f2" }}>


            <BigSeparator />
            <View style={{ width: "95%", backgroundColor: "#fff", alignSelf: "center" }}>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
                Me gustaría trabajar en cualquier posición de Front End que se ajuste a mi perfil.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "gray" }}>
                En Barcelona, España
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                SOBRE MÍ:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Puedes encontrar un poco más de mi historia en el apartados "Sobre mí" de la página inicial.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                QUIERO TRABAJAR EN GLOVO:
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                ESTOY DESEANDO PODER:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Explorar la creatividad que hay en Glovo y experimentar por mi mismo que se siente trabajando en una startup que está revolucionando el mundo.
                Mejorar mis conocimientos y trabajar con algunos de los mejores profesionales.
                Aprender como funciona internamente una empresa con un crecimiento tan exponencial.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                Tengo:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Conocimientos elevados en:
                - React
                - React Native
                - Publicación en iOS y Android
                - Git
                - Javascript
                - CSS
                - HTML
                - Firebase
                - Sass

                Conocimientos medios:

                - Code Push:
                - Matter js:
                - Figma:
                - Sketch:
                - Google Cloud Functions
                - Heroku
                - Node js

                Algunos conocimientos:

                - Bit
                - Vue js: He visto que pediaís tanto Vue como React para la mayoría de posiciones frontend

                Estoy aprendiendo:

                Si deseas consultar una lista más completa de cada uno de las habilidades, consulta el apartado de "Habilidades" donde lo explico todo con más detalle.

              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                ME ENCANTARÍA TENER:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Aprender todo lo que pueda en todos los ámbitos que me sean posibles. He visto todas vuestras charlas técnicas de Youtube y me han parecido realmente interesantes. Estoy deseando poder aprender de los excelentes profesionales que trabajan en Glovo.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                CREO QUE ENCAJO CON VUESTROS VALORES:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                He leído vuestros valores principales y vuestro Yellow Boom y me siento identificado en muchos de los puntos que se mencionan.
              </Text>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Gracias por vuestro tiempo
              </Text>
              <MediumSeparator />
            </View>
            <MediumSeparator />
            <Pressable style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100, width: "90%" }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
                Contactar
              </Text>
            </Pressable>

            <Pressable
              onPress={() => this.closeModal()}
              onLongPress={() => this.closeModal()}
              style={{ justifyContent: "center", alignItems: "center", position: "absolute", top: 0, right: 0, width: 50, height: 50 }}>
              <Image
                source={Close}
                style={{ width: "100%", height: 20, resizeMode: "contain" }}
              />
            </Pressable>
            <MediumSeparator />
          </View>
        }


      </Animated.View>


    )
  }
}




export default App;
