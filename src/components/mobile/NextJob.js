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
               Actualmente estoy buscando empleo
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                UBICACIÓN:
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "gray" }}>
                - En Barcelona, España. (preferiblemente semi-remoto){"\n"}
                - Completamente remoto
              </Text>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
               POSICIONES QUE BUSCO:
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                - Desarrollador Front-End{"\n"}
                - Desarrollador Back-End{"\n"}
                - Roles relacionados con el desarrollo de producto{"\n"}
                - Roles relacionados con el UX{"\n"}
                - Cualquier otra posición que resulte interesante :){"\n"}
              </Text>
          
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                BUSCO UNA EMPRESA QUE:
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
               - Me ayude a mejorar mis conocimientos.{"\n"}
               - Tenga una visión clara con objetivos bien definidos.{"\n"}
               - Cuente con un ambiente dinámico y competitivo.{"\n"}
               - Presente expectativas de progresión dentro de la empresa. {"\n"}
               - Cuente con equipos multidisciplinares que me ayuden a salir de mi zona de confort. {"\n"}

              </Text>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                DISPONIBILIDAD:
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Inmediata
              </Text>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Gracias por vuestro tiempo
              </Text>
              <MediumSeparator />
            </View>
            <MediumSeparator />
            <Pressable
            onPress={(e) => {
                window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();
              }}
              onLongPress={(e) => {
                window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();
              }}

             style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100, width: "90%" }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
                Contacta conmigo
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
