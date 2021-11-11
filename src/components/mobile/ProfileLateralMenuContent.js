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
          Account
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
        Contraseña
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "bold", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        ●●●●●●
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Repositorio
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        http://
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <LittleSeparator />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "gray" }}>
        Código promocional
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontWeight: "400", textAlign: "left", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#000" }}>
        GLOVO2021
      </Text>
      <LittleSeparator />
      <View style={{ height: 1, backgroundColor: "#EDEDED", width: "95%", alignSelf: "center" }} />
      <MediumSeparator />
      <Text style={{ fontWeight: "600", textAlign: "right", width: "95%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, color: "#00a082" }}>
        Gracias por vuestro tiempo
      </Text>
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


