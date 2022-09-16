import { View, StyleSheet, Image, Text } from "react-native";
import Bubble from './Bubble'
import BubbleBig from './BubbleBig'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight
const CIRCULAR = 1000
const BUBBLE_SIZE = 114


function App(props) {

  return (

    <View style={{ width: "100%", height: 320, alignItems: "center", alignSelf: "center", justifyContent: "center", alignItems: "center" }}>


      <Bubble position={"TOP_LEFT"} title={"UX"} {...props} />
      <Bubble position={"TOP_RIGHT"} title={"Sobre mí"} {...props} />
      <Bubble position={"LEFT"} title={"Buyness"} {...props} />

      <Bubble position={"RIGHT"} title={"Prototipos"} {...props} />
      <Bubble position={"BOTTOM_LEFT"} title={"Estoy buscando"} {...props} />
      <Bubble position={"BOTTOM_RIGHT"} title={"¿Cómo se ha hecho?"} {...props} />
      <BubbleBig title={"Lo que sea"} {...props} />


    </View>


  );
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


export default App;
