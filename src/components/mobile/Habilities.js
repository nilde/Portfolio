//Framework imports
import { Component } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

//Component imports
import BigSeparator from './BigSeparator';
import MediumSeparator from './MediumSeparator';
import Close from '../../images/close.svg' 



//[title,image,state_managment]


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeType:"",
      activeFront:true,
      modalOpacity:new Animated.Value(1)
    }
    window.scrollTo(0,0)
  }



  updateActiveType(newActive){
    if(this.state.activeType!=newActive)
    this.setState({activeType:newActive})
    else
    this.setState({activeType:""})
  }

componentDidMount(){
 
}

closeModal(){
  this.setState({
    activeFront:false
  },()=>
   Animated.timing(this.state.modalOpacity,{
    toValue:0,
    duration:300
  }).start(()=>this.props.toggleActiveScreen("habilities"))
  )
 
}

render(){

  //using length will raise an error inside render function

  return (
    <Animated.View
     style={{overflowY:"scroll", opacity:this.state.modalOpacity, position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#ffc244" }}>
     {this.state.activeFront &&
     <View style={{position:"absolute",top:0,width:"100%",backgroundColor:"#fff"}}>
      <BigSeparator />

      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24,  fontWeight: "700" }}>
        Habilidades
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
       Durante más de 2 años he estado intentando mejorar mis habilidades. He aprendido distintos lenguajes de programación y explorado en profundidad como funcionan algunas de las tecnologías.
       </Text>

      <MediumSeparator />

      <BigSeparator />
      <Pressable
      onPress={()=>this.closeModal()}
      onLongPress={()=>this.closeModal()}
       style={{justifyContent:"center",alignItems:"center", position: "absolute", top: 0, right: 0, width: 50, height: 50 }}>
      <Image
      source={Close}
      style={{ width: "100%", height: 20, resizeMode: "contain" }}
    />
      </Pressable>
</View>
     }

  
    </Animated.View>


  )
}
}




export default App;
