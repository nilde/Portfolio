import { View, StyleSheet, Text, Animated, Pressable } from "react-native";
import LittleSeparator from './LittleSeparator'
import MediumSeparator from './MediumSeparator'
import { Component } from "react";
import { useSwipeable } from "react-swipeable";

export default function App(props) {


  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => props.closeModal(),
    //...config,
  });

  function checkCloseMovement(movement) {
    if (touchX > movement - 50 && Math.abs(touchX - movement) > 20)
      props.closeModal()
  }

  var touchX = 0
  return (
    <View
    style={{overflowY:"scroll", width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#fff"}}
      onStartShouldSetResponder={e => touchX = e.nativeEvent.locationX}
      onClick={e => checkCloseMovement(e.nativeEvent.clientX)}>

      <View style={{width:"100%"}}>
        <LittleSeparator />
        <Text style={{ color: "#ffc244", textAlign: "center", fontWeight: "600", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16 }}>
          Información básica
        </Text>
        <LittleSeparator />
        <View style={{ alignSelf: "center", height: 5, backgroundColor: "#ffc244", width: "70%" }} />

        <View style={{ height: 2, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />


      </View>
      <MediumSeparator />
      <Text style={{ fontWeight: "700", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 22 }}>
        ¡Hola a todxs!
      </Text>
      <MediumSeparator />
      <View style={{ height: 2, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Nombre
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        Nil Domene Esteban
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        E-mail
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        nildomene@gmail.com
      </Text>
      <LittleSeparator />
      <View style={{ height: 2, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Teléfono
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        +34 627761879
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Trabajando en Buyness como side-project
      </Text>
      <View style={{ height: 10 }} />
      <Text
      onPress={()=>window.open("https://www.buynessapp.com","_blank")}
      onLongPress={()=>window.open("https://www.buynessapp.com","_blank")} 
       style={{ textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
      https://www.buynessapp.com
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Github
      </Text>
      <View style={{ height: 10 }} />
      <Text
      onPress={()=>window.open("https://www.github.com/nilde","_blank")}
      onLongPress={()=>window.open("https://www.github.com/nilde","_blank")} 
       style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
      https://www.github.com/nilde
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Estudios
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        Licenciado en Ingenieria Informática en la UAB (2015-2019) y Máster universitario de Diseño de Interacción y Experiencia de Usuario (UX) (2022)
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <MediumSeparator />
      <Text style={{marginLeft:20, fontWeight: "600", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#00a082" }}>
        Gracias por vuestro tiempo
      </Text>
      <MediumSeparator />
      <Pressable
      onPress={()=>props.closeModal()}
      onLongPress={()=>props.closeModal()}
       style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100, width: "90%" }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
                Volver al inicio
              </Text>
            </Pressable>
            <MediumSeparator />
      <Pressable
        onPress={props.closeModal}
        onLongPress={props.closeModal}
        style={{ position: "absolute", top: 0, right: 0, width: 10, height: "100%", backgroundColor: "#EDEDED", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 6, height: 6,marginTop:2, backgroundColor: "#fff", borderRadius: 100 }} />
        <View style={{ width: 6, height: 6,marginTop:2, backgroundColor: "#fff", borderRadius: 100 }} />
        <View style={{ width: 6, height: 6,marginTop:2, backgroundColor: "#fff", borderRadius: 100 }} />

      </Pressable>
    </View>




  );

}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


