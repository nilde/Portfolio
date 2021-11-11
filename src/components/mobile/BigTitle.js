import { View, StyleSheet, Text } from "react-native";


function App() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleLight}>
        Explora{" "}
      
      </Text>
      <Text style={styles.titleBold}>
          mi currículum
        </Text>
    </View>





  );
}


var styles = StyleSheet.create({
  titleContainer: {
  
    alignSelf: "center"
  },
  titleLight: {
    fontWeight: "400",
    fontSize:16
    },
  titleBold: {
    fontWeight: "600",
    fontSize: 24

  }
})


export default App;
