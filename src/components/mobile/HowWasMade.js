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
  }).start(()=>this.props.toggleActiveScreen("howWasMade"))
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
        ¿Cómo se ha hecho?
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
       Hola a todxs,
       </Text>

      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
        En este vídeo se puede observar todo el proceso que se ha llevado a cabo para desarrollar esta web. Se ha usado React Native Web para poder mostrar el dominio de los conceptos del desarrollo de interfaces basados en el concepto de componentes y además el conocimiento en la generación de interfaces para dispositivos móviles.
      </Text>
      <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
      Se han usado algunos de los recursos de la web original para intentar mantener un aspecto similar, y además se han diseñado todas las animaciones de la web usando la API de Animated de React Native.
       </Text>
       <MediumSeparator />
       <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
     Deseo que les guste ver todo el proceso tanto como yo he disfrutado realizando esta web.
     </Text>
       <MediumSeparator />
       <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"gray" }}>
    Atentamente,{"\n"}Nil
     </Text>
       <MediumSeparator />
       <Pressable
       onPress={(e) => {
          window.open("https://mega.nz/folder/Cd9RlaxL#9Cbmuue3OH8GYtV7ioPAew")
          e.preventDefault();
        }}
        onLongPress={(e) => {
          window.open("https://mega.nz/folder/Cd9RlaxL#9Cbmuue3OH8GYtV7ioPAew")
          e.preventDefault();
        }}
        style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Ver los vídeos
              </Text>
            </Pressable>
            
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
