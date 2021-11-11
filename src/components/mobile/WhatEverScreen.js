import { View, StyleSheet, Text, Pressable, Image, Animated } from "react-native";
import MediumSeparator from './MediumSeparator'
import Close from '../../images/close.svg'
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFront: true,
      modalOpacity: new Animated.Value(1)
    }
    this.closeModal=this.closeModal.bind(this);
  }


  closeModal() {
    this.setState({
      activeFront: false
    }, () =>
      Animated.timing(this.state.modalOpacity, {
        toValue: 0,
        duration: 300
      }).start(() => this.props.toggleActiveScreen("whatEver"))
    )

  }
  render() {
    return (
      <Animated.View style={{ opacity: this.state.modalOpacity, overflowY: "scroll", zIndex: 99, position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#fff" }}>
        {
          this.state.activeFront &&
          <>
            <MediumSeparator />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 22, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              Tu consulta
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: 12, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              Lo que sea
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <View style={{ alignSelf: "center", width: "95%", borderWidth: 1, borderColor: "gray", height: 50 }}>
            </View>
            <View style={{ width: "100%", height: 2.5 }} />
            <Text style={{ fontFamily: "Montserrat", width: "95%", textAlign: "right", fontWeight: "600", fontSize: 12, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              0/255
            </Text>
            <MediumSeparator />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 22, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              ¿Estais interesados en mi perfil?
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 12, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              Selecciona una opción
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <View style={{ flexDirection: "row", width: "95%", alignSelf: "center" }}>
              <Pressable style={{ justifyContent: "center", alignItems: "center", height: 70, width: 120, borderRadius: 10, backgroundColor: "#f2f2f2" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  Poco
                </Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: "700" }}>
                  Interesados
                </Text>
              </Pressable>
              <Pressable style={{ marginLeft: 10, justifyContent: "center", alignItems: "center", height: 70, width: 120, borderRadius: 10, backgroundColor: "#f2f2f2" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  Algo
                </Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: "700" }}>
                  Interesados
                </Text>
              </Pressable>
              <Pressable style={{ marginLeft: 10, justifyContent: "center", alignItems: "center", height: 70, width: 120, borderRadius: 10, backgroundColor: "#f2f2f2" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  Muy
                </Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: "700" }}>
                  Interesados
                </Text>
              </Pressable>
            </View>
            <View style={{ width: "100%", height: 10 }} />
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: "gray", width: "95%", textAlign: "left", alignSelf: "center" }}>
              Gracias por revisar mi proyecto, estoy deseando oír cualquier opinión o consejo que me pueda ayudar a mejorar.
            </Text>
            <MediumSeparator />
            <View style={{ alignSelf: "flex-start" }}>
              <View style={{ zIndex: -1, width: "100%", backgroundColor: "#ffc244", borderRadius: 100, height: 15, position: "absolute", bottom: 5, }} />

              <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 22, alignSelf: "flex-start", }}>
                ¿Dónde puedo trabajar?
              </Text>
            </View>
            <MediumSeparator />
            <View style={{ width: "95%", alignSelf: "center", flexDirection: "row" }}>
              <View style={{ justifyContent: "center", alignItems: "center", width: "10%", height: "100%" }}>
              </View>
              <View style={{ flexDirection: "row", width: "85%", backgroundColor: "#fff" }}>
                <View style={{ width: "100%" }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 16, alignSelf: "flex-start" }}>
                      Cualquier posición orientada a Front End
                    </Text>
                    <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 16, alignSelf: "flex-start" }}>
                      X</Text>
                  </View>
                  <View style={{ width: "100%", height: 10 }} />
                  <View style={{ width: "100%", height: 1, backgroundColor: "#EDEDED" }} />
                </View>
              </View>


            </View>
            <MediumSeparator />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 22, alignSelf: "flex-start", marginLeft: "2.5%" }}>
              Detalles de la ubicación
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <View style={{ alignSelf: "center", width: "95%", backgroundColor: "#EDEDED", height: 300 }}>
            </View>
            <MediumSeparator />
            <Pressable
              onPress={() => this.setState({ activeDetails: false })}
              onLongPress={() => this.setState({ activeDetails: false })}
              style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Enviar consulta
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

          </>
        }

      </Animated.View>




    );
  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})

