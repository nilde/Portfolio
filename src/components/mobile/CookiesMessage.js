import { View, StyleSheet,Text,Pressable } from "react-native";
import MediumSeparator from './MediumSeparator'

function App() {
  return (
    <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.4)", alignSelf: "center", zIndex: 99, position: "fixed", bottom: "2.5%",left:"2.5%", width: "95%", alignSelf: "center", backgroundColor: "#fff", borderRadius: 10}}>
           <View style={{width:"100%",height:20}}/>
            <Text style={{fontFamily:"Montserrat", fontWeight: "700", fontSize: 16, alignSelf: "flex-start", marginLeft: "2.5%",textAlign:"left" }}>
             🍪 He decidido hacer algo diferente
            </Text>
            <View style={{width:"100%",height:10}}/>
            <Text style={{fontFamily:"Montserrat", fontWeight: "400", fontSize: 12, alignSelf: "flex-start", marginLeft: "2.5%",textAlign:"left",color:"gray",paddingRight:10 }}>
             Me encantaría tener la posibilidad de trabajar en una empresa tan puntera y competitiva como es Glovo. Estoy seguro que recibís numerosas ofertas para trabajar con vosotros. Así que he decidido crear esta pequeña app y grabar el proceso para poder demostrar mis habilidades. Soy licenciado en Ingeniería informática, actualmente estoy cursando un máster en UX y he desarrollado más de 15 aplicaciones y numerosos prototipos usando React y React Native.
            </Text>
<MediumSeparator/>
            <Pressable style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Gracias por su tiempo
              </Text>
            </Pressable>
            <View style={{width:"100%",height:20}}/>
            <Text style={{fontFamily:"Montserrat", color: "#00a082", fontWeight: "700", fontSize: 12,paddingHorizontal:20 }}>
                Me gustaría poder trabajar con vostros en cualquier posición orientada al Front End
              </Text>
              <View style={{width:"100%",height:20}}/>
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
