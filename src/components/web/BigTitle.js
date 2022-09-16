import { View, StyleSheet, Text } from "react-native";


function App() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleLight}>
        Explora mi currículum
   
      </Text>
    </View>





  );
}


var styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  titleLight: {
    fontWeight: "bold",
    fontSize:40,
    fontFamily:"Montserrat"
    },
  titleBold: {
    fontWeight: "600",
    fontSize: 32

  }
})


export default App;
