import { View, StyleSheet,Text } from "react-native";


function App(props) {
  return (
      <View style={{overflow:"hidden",alignSelf:"flex-start"}}>
         {!!props.text &&
         <>
         
         <View style={{zIndex:-1,width:"100%", backgroundColor:"#ffc244",borderRadius:100,height:props.fontSize/2.5,position:"absolute",bottom:5,alignSelf:"center"}}/>
         
          <Text numberOfLines={props.type=="TITLE"?1:99} style={{ textAlign:"center",marginHorizontal:5,fontFamily:"Montserrat",fontWeight: props.fontWeight, fontSize: props.fontSize, alignSelf: "flex-start", }}>
            {props.text}
            </Text>
            </>
         }
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
