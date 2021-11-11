import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import BigSeparator from '../BigSeparator';
import MediumSeparator from '../MediumSeparator';
import MotoIcon from '../../../images/moto-icon.svg'
import HeadsetIcon from '../../../images/icon-headset.svg'
import MapIcon from '../../../images/icon-map.svg'
import GloverMoto from '../../../images/glover-moto.svg'
import {Redirect} from "react-router-dom";
import {useState} from 'react'

function App() {
  
  const [redirectToAppDetails,setRedirectToAppDetails]=useState(false)

  return (
    <View style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <BigSeparator />
      <Text style={{ fontWeight: "700", textAlign: "center", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 22 }}>
        Esta app es un poco antigua
      </Text>
      <BigSeparator />
      <Image
        source={GloverMoto}
        style={{ width: "100%", height: 160, resizeMode: "contain" }}
      />
      <BigSeparator />
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ alignSelf: "center", width: "15%", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Image
            source={MotoIcon}
            style={{ width: "100%", height: 30, resizeMode: "contain" }}
          />
        </View>
        <View style={{ width: "80%", height: "100%" }}>
          <Text style={{ lineHeight: 22, fontWeight: "400", textAlign: "left", width: "100%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16 }}>
            Esta app fue creada hace cierto tiempo y las capacidades pueden ser algo limitadas. Es mejor consultar las apps recientes como las que están disponibles en la AppStore.
          </Text>
        </View>
      </View>
      <MediumSeparator />
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ alignSelf: "center", width: "15%", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Image
            source={MapIcon}
            style={{ width: "100%", height: 30, resizeMode: "contain" }}
          />
        </View>
        <View style={{ width: "80%", height: "100%" }}>
          <Text style={{ lineHeight: 22, fontWeight: "400", textAlign: "left", width: "100%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16 }}>
            Esta app puede no encontrarse disponible en la App Store y en Google Play.
          </Text>
        </View>
      </View>
      <MediumSeparator />
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ alignSelf: "center", width: "15%", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Image
            source={HeadsetIcon}
            style={{ width: "100%", height: 30, resizeMode: "contain" }}
          />
        </View>
        <View style={{ width: "80%", height: "100%" }}>
          <Text style={{ lineHeight: 22, fontWeight: "400", textAlign: "left", width: "100%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 16 }}>
            Para cualquier cuestión relacionada con esta app, no dudes en contactar conmigo.
          </Text>
        </View>
      </View>
      <MediumSeparator />
      <Pressable
      onPress={()=>setRedirectToAppDetails(true)}
      onLongPress={()=>setRedirectToAppDetails(true)}
       style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: "90%", justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100 }}>
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
          Entendido
        </Text>
      </Pressable>


      {
        redirectToAppDetails &&
        <Redirect push push to={"/app/" + 12} />
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
