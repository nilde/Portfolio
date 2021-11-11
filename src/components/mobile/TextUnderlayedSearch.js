import { View, StyleSheet,Text } from "react-native";


function App(props) {
  return (
      <View style={{alignSelf:"flex-start"}}>
         {
           props.highlighted &&
         <View style={{zIndex:-1,width:"100%", backgroundColor:"#ffc244",borderRadius:100,height:props.fontSize-5,position:"absolute",bottom:3,}}/>
         }
          <Text style={{textAlign:"left", fontFamily:"Montserrat",fontWeight: props.fontWeight, fontSize: props.fontSize, alignSelf: "flex-start",color:props.color }}>
            {`${props.text}${props.extraSpace?"  ":""}`}
            </Text>
          </View>



  );
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


export default App;
