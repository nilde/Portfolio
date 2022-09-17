import { View, StyleSheet, Text, Pressable, Image, Animated } from "react-native";
import BigSeparator from './BigSeparator'
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
      <Animated.View style={{ opacity: this.state.modalOpacity,zIndex: 99, position: "fixed", top: 0, width: "100%", height:window.innerHeight, backgroundColor: "#fff" }}>
        {
          this.state.activeFront &&
          <>
            <BigSeparator />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 28, alignSelf: "flex-start", paddingHorizontal:20,textAlign:"left"  }}>
              ¡Pregúntame lo que sea!
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 20, alignSelf: "flex-start", paddingHorizontal:20,textAlign:"left" }}>
              nildomene@gmail.com
            </Text>
            <View style={{ width: "100%", height: 10 }} />
            <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 14, alignSelf: "flex-start", paddingHorizontal:20,textAlign:"left",paddingRight:20  }}>
              Si te surge cualquier duda al leer mi currículum, no dudes en escribirme a mi correo electrónico y estaré encantado de intentar resolverla.
            </Text>

            <Pressable
              onPress={() => this.props.toggleActiveScreen("whatEver")}
              onLongPress={() => this.props.toggleActiveScreen("whatEver")}
              style={{position:"absolute",bottom:50, alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 50, paddingVertical: 15, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
               Volver al inicio
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

