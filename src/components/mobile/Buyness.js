//Framework imports
import { Component } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

//Component imports
import BigSeparator from './BigSeparator';
import MediumSeparator from './MediumSeparator';
import LittleSeparator from './LittleSeparator';
import Close from '../../images/close.svg'
import Sc1 from '../../images/sc1.png'
import Sc2 from '../../images/sc2.png'
import Sc3 from '../../images/sc3.png'
import Sc4 from '../../images/sc4.png'
import Sc5 from '../../images/sc5.png'
import Sc6 from '../../images/sc6.png'
import Sc7 from '../../images/sc7.png'
import Sc8 from '../../images/sc8.png'
import Sc9 from '../../images/sc9.png'
import Sc10 from '../../images/sc10.png'
import Sc11 from '../../images/sc11.png'
import Sc12 from '../../images/sc12.png'
import Sc13 from '../../images/sc13.png'
import Sc14 from '../../images/sc14.png'
import Sc15 from '../../images/sc15.png'



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
      }).start(() => this.props.toggleActiveScreen("buyness"))
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
                Buyness - La revolución del comercio local
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "gray" }}>
                Aplicación web/app destinada a conectar a los negocios locales con los clientes de una manera nunca antes vista. El código de toda la plataforma fue desarrollado íntegramente por mí.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                APP:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se ha realizado la programación de las aplicaciones para iOS y Android mediante el uso de React Native para el desarrollo de ambas. Se decidió usar esta tecnología ya que reducía significativamente los tiempos y la complejidad de desarrollo. Además permitía reaprovechar ciertos fragmentos del código para la página web. La web permitía al usuario consultar los negocios digitales que se encontraban disponibles en la plataforma para realizar pedidos online y pasarlos a recoger.
              </Text>

              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                WEB:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                La landing page se realizó con React (concretamente con React Native Web) y estava destinada a mostrar de forma breve en que consistía el producto.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                WEB DE GESTIÓN:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                La página web de gestión en tiempo real también se realizó usando React Native Web y permitia a los establecimientos modificar la información acerca de su establecimiento/catálogo de productos.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                FUNCIONES EN CLOUD:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se han usado algunas funciones en Cloud para poder expandir las características de las apps, como el envio de notificaciones a los usuarios. También se estaba haciendo la transición hacia la construcción de una API basada en dichas funciones como alternativa a la solución actual. </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                BASE DE DATOS:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se ha utilizado Firebase para realizar el MVP ya que su capa gratuita aportaba la tranquilidad de poder desarrollar el producto y realizar pruebas sin la necesidad de invertir dinero.
              </Text>

              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                REGISTRO DEL DOMINIO:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se ha realizado el registro del dominio y la posterior configuración de los DNS para poder acceder a la página alojada en Heroku a través del dominio escogido.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                CREACIÓN DE UNA DIRECCIÓN DE CORREO PERONALIZADA, OTRAS CONFIGURACIONES ADICIONALES DEL DNS:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se han realizado configuraciones adicionales para contar con un correo personalizado y configuración de otros elementos como la inclusión de Analytics para fases posteriores.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                CI/CD:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Se usó Heroku para la publicación de la landing page y de la plataforma de gestión de los establecimeintos. Con la integración automática con GitHub podia publicar código automáticamente cada vez que realizaba cambios sobre la versión de la rama master.
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                OTA:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Ya que se trataba de un MVP se decició implmentar CodePush dentro de las aplicaciones para iOS y Android con el objetivo de realizar continuas mejoras sin tener que depender de los lentos sistemas de revisión de las stores (especialmente la App Store).
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                ESTADO ACTUAL:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Actualmente nos encontramos en proceso de encontrar nuestros primeros cliente, aunque contamos con un restaurante que usa nuestro servicio de carta mediante QR desde hace cerca de 8 meses.
              </Text>
              <LittleSeparator />

              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                IMÁGENES:
              </Text>
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                A continuación se pueden observar algunas imágenes del aspecto final que presenta el proyecto actualmente.
              </Text>
              <LittleSeparator />
              <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>

                <Image
                  source={Sc1}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />
                <Image
                  source={Sc2}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />
                <Image
                  source={Sc4}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />

              </View>
              <LittleSeparator />
              <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>

                <Image
                  source={Sc5}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />
                <Image
                  source={Sc6}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />
                <Image
                  source={Sc7}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />

              </View>
              <LittleSeparator />
              <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>

                <Image
                  source={Sc8}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />
                <Image
                  source={Sc9}
                  style={{ height: window.innerWidth * 0.3, width: window.innerWidth * 0.3 * 0.46, resizeMode: "contain" }}
                />


              </View>
              <LittleSeparator />
              <Image
                source={Sc11}
                style={{ width: window.innerWidth * 0.9, height: 200, resizeMode: "contain", marginLeft: 10 }}
              />
              <LittleSeparator />
              <Image
                source={Sc12}
                style={{ width: window.innerWidth * 0.9, height: 200, resizeMode: "contain", marginLeft: 10 }}
              />
              <LittleSeparator />
              <Image
                source={Sc13}
                style={{ width: window.innerWidth * 0.9, height: 200, resizeMode: "contain", marginLeft: 10 }}
              />
              <LittleSeparator />
              <Image
                source={Sc14}
                style={{ width: window.innerWidth * 0.9, height: 200, resizeMode: "contain", marginLeft: 10 }}
              />
              <LittleSeparator />
              <Image
                source={Sc15}
                style={{ width: window.innerWidth * 0.9, height: 200, resizeMode: "contain", marginLeft: 10 }}
              />
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                VISUALIZAR/DESCARGAR:
              </Text>

              <LittleSeparator />
              <Text
                onPress={() => window.open("https://www.buynessapp.com")}
                onLongPress={() => window.open("https://www.buynessapp.com")}
                style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "500", color: "#00a082" }}>
                Página web
              </Text>
              <LittleSeparator />
              <Text
                onPress={() => window.open("https://apps.apple.com/us/app/buyness/id1616714361")}
                onLongPress={() => window.open("https://apps.apple.com/us/app/buyness/id1616714361")}
                style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "500", color: "#00a082" }}>
                APP iOS
              </Text>
              <LittleSeparator />
              <Text
                onPress={() => window.open("https://play.google.com/store/apps/details?id=com.close2youapp")}
                onLongPress={() => window.open("https://play.google.com/store/apps/details?id=com.close2youapp")}
                style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "500", color: "#00a082" }}>
                APP Android
              </Text>
              <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#000" }}>
                ¿NECESITAS MÁS INFORMACIÓN?
              </Text>
              <LittleSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "300", color: "#000" }}>
                Si tienes cualquier adicional sobre el proyecto, no dudes en escribirme a mi correo electrónico (nildomene@gmail.com) o también puedes pulsar en el botón de más abajo.
              </Text>
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
            <MediumSeparator />
              <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "500", color: "#00a082" }}>
                Gracias por vuestro tiempo
              </Text>
              <MediumSeparator />
            </View>
            <MediumSeparator />
           

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
