import { View, StyleSheet, Image, Text } from "react-native";
import BigSeparator from './BigSeparator';
import BigTitle from './BigTitle';
import BubblesContainer from './bubblesPicker/BubblesContainer'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight
const CIRCULAR = 1000


function App(props) {
  return (

    <View style={styles.header}>
    <BigSeparator />
      <BigSeparator />
      <BigTitle />
      <BigSeparator />
      {/**Bubbles container contains all options to pick up */}
      <BubblesContainer {...props} />
      <BigSeparator />
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
