import { View, StyleSheet, Text } from "react-native";


function App() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleLight}>
        Explora{" "}
        <Text style={styles.titleBold}>
          mi currículum
        </Text>
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
    fontWeight: "400",
    fontSize:24
    },
  titleBold: {
    fontWeight: "600",
    fontSize: 24

  }
})


export default App;
