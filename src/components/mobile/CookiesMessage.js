import { View, StyleSheet,Text,Pressable } from "react-native";
import { useState } from "react";
import MediumSeparator from './MediumSeparator'

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.4)", alignSelf: "center", zIndex: 99, position: "fixed", bottom: "2.5%",left:"2.5%", width: "95%", alignSelf: "center", backgroundColor: "#fff", borderRadius: 10}}>
          {visible &&
          <>
           <View style={{width:"100%",height:20}}/>
            <Text style={{fontFamily:"Montserrat", fontWeight: "700", fontSize: 16, alignSelf: "flex-start",paddingHorizontal:20,textAlign:"left" }}>
             🍪 He decidido hacer algo diferente
            </Text>
            <View style={{width:"100%",height:10}}/>
            <Text style={{fontFamily:"Montserrat", fontWeight: "400", fontSize: 14, alignSelf: "flex-start",paddingHorizontal:20,textAlign:"left",color:"gray" }}>
             Me encantaría tener la posibilidad de trabajar en una empresa puntera y competitiva, así que he decidido crear esta pequeña web y grabar el proceso para poder demostrar mis habilidades. Soy licenciado en Ingeniería Informática, tengo un máster centrado en UX y he desarrollado más de 15 aplicaciones (y muchos otros prototipos) usando React y React Native.
            </Text>
<MediumSeparator/>
            <Pressable
            onPress={()=>setVisible(false)}
            onLongPress={()=>setVisible(false)}
             style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Gracias por tu tiempo
              </Text>
            </Pressable>
            <View style={{width:"100%",height:20}}/>
            <Text style={{fontFamily:"Montserrat", color: "#00a082", fontWeight: "700", fontSize: 12,paddingHorizontal:20 }}>
                Estoy buscando una posición Front-End, Back-End o cualquier otra que se ajuste a mis habilidades.
              </Text>
              <View style={{width:"100%",height:20}}/>
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
