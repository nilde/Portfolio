import { View, StyleSheet, Animated, Image, Pressable, Text } from "react-native";
import { Component } from "react";
import LittleSeparator from '../LittleSeparator'
import BigSeparator from '../BigSeparator'
import AppDetailsScreenItemSearch from './AppDetailScreenItemSearch'
import NotFoundSearch from '../../../images/not-found-search.svg'
import TopBarAppDetailsSearch from './TopBarAppDetails/TopBarAppDetailsSearch'

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
      startValueY: new Animated.Value(0),

    }
  }

  scaleIn() {
    Animated.timing(this.state.startValueY, {
      toValue: -10,
      duration: 200
    }).start()
  }

  scaleOut() {
    Animated.timing(this.state.startValueY, {
      toValue: 0,
      duration: 200
    }).start()
  }



 


  render() {

    return (

      <View style={{ position: "fixed", top: 0, backgroundColor: "#fff", height: "100%" }}>
      <TopBarAppDetailsSearch {...this.props}/>
            <LittleSeparator />
      
            <Text style={{ textAlign: "left", marginLeft: "5%", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
              0  <Text style={{ color: "gray", fontFamily: "Montserrat", fontSize: 16, fontWeight: "400" }}>
                resultados que coinciden con {this.props.query}
              </Text>
            </Text>
            <BigSeparator />
            <Text style={{ fontFamily: "Montserrat", fontSize: 22, fontWeight: "300" }}>
              0 resultados para
            </Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 22, fontWeight: "600" }}>
              {this.props.query}
            </Text>

            <BigSeparator />
            <Image
              source={NotFoundSearch}
              style={{ width: "100%", height: 180, resizeMode: "contain" }}
            />
            <BigSeparator />

            <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 100, fontSize: 16, fontWeight: "300" }}>
              Asegúrate que todas las palabras estén bien escritas o prueba a buscar otra cosa.
            </Text>
            <BigSeparator />

            <Pressable
            onPress={()=>this.props.updateSearch("")}
            onPress={()=>this.props.updateSearch("")}
             style={{ width: "30%", alignSelf: "center", }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 14, fontWeight: "700", color: "#00a082" }}>
                Mostrar todos los productos
              </Text>
            </Pressable>
          </View>

    );
  }
}


var styles = StyleSheet.create({
  allPage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff"
  },
  header: {
    width: "100%",
    backgroundColor: "#ffc244"

  },
  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: window.innerHeight * 0.10
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.2,
    height: "100%",
    backgroundColor: "red"
  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})

