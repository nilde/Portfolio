import { View, StyleSheet, Image, Text } from "react-native";
import Bubble from './Bubble'
import MediumSeparator from '../MediumSeparator'

const TOTAL_WIDTH=window.innerWidth;
const TOTAL_HEIGHT=window.innerHeight
const CIRCULAR=1000
const BUBBLE_SIZE=114


function App(props) {


  //this will render different cases based on the number
  // of props that are avaliable at this moment
  function manageRendering(){
    const avaliableOptions=props.avaliableOptions

return(
  <Bubble title={"Lo que sea"}/>
)
  }


  return (
<View>
<View style={{flexWrap:"wrap",alignItems:"center", alignSelf:"center",flexDirection:"row",height:BUBBLE_SIZE,justifyContent:"space-between"}}>
<Bubble index={0}  title={"UX"}/>
<Bubble index={1}  title={"Estudios"}/>
<Bubble index={2}  title={"Cómo se hizo?"}/>
<Bubble index={3}  title={"Lo que sea"}/>

</View>
<MediumSeparator />
<View style={{flexWrap:"wrap",alignItems:"center", alignSelf:"center",flexDirection:"row",height:BUBBLE_SIZE,justifyContent:"space-between"}}>
<Bubble index={4}  title={"Buyness"}/>
<Bubble index={5}  title={"Apps"}/>
<Bubble index={6}  title={"Estoy buscando"}/>


</View>
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
