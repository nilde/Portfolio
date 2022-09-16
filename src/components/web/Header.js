import { View, StyleSheet, Image, Text,Pressable } from "react-native";
import BigSeparator from './BigSeparator';
import MediumSeparator from './MediumSeparator';
import BigTitle from './BigTitle';
import TopBar from './TopBar'
import BubblesContainer from './bubblesPicker/BubblesContainer'
import LittleSeparator from './LittleSeparator'
import outerMaskLeft from '../../images/outer-mask-left.svg';
import outerMaskCenter from '../../images/outer-mask-center.svg';
import outerMaskRight from '../../images/outer-mask-right.svg';
import check from '../../images/download-app-logo.svg';
import location from '../../images/location.svg';
import innerMaskLeft from '../../images/inner-mask-left.png';
import innerMaskCenter from '../../images/inner-mask-center.png';
import innerMaskRight from '../../images/inner-mask-right.png';
import mail from '../../images/mail.png';
const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight
const CIRCULAR = 1000
const images = {
  
  RIGHT: {
    inner: innerMaskRight,
    outer: outerMaskRight,
    sizeContainer: 330,
    sizeGreen: 280,
    sizeBlack: 180,
    marginInner: 0
  }
}

function App(props) {
  const { sizeContainer, sizeGreen, sizeBlack, marginInner } = images["RIGHT"]
  return (

    <View style={styles.header}>
    <BigSeparator />
    <View style={{ width: "100%" }}>
      <View style={{ height: sizeContainer, alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={images["RIGHT"].outer}
            style={{ position: "absolute", width: sizeGreen, height: sizeGreen, resizeMode: "contain",tintColor:"#fff" }}
          />
          <Image
            source={check}
            style={{ marginTop: marginInner, position: "absolute", width: sizeBlack, height: sizeBlack, resizeMode: "contain" }}
          />
        </View>
      </View>

      <Text style={{ fontFamily: "Montserrat", fontSize: 48, fontWeight: "700" }}>
        Explora mi currículum
      </Text>
      <LittleSeparator />
      <Text style={{ fontFamily: "Montserrat", fontSize: 24, fontWeight: "400",paddingHorizontal:200 }}>
       ¡Accede desde un teléfono móvil o haz pequeña la ventana para explorar mí curriculum!
      </Text>
  
      
      <MediumSeparator />
      <MediumSeparator />
      <Pressable
        onPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}
        onLongPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}

        style={{ flexDirection:"row", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingRight: 30, backgroundColor: "#fff", borderRadius: 10 }}>
       <View style={{justifyContent:"center",alignItems:"center", height:50,paddingHorizontal:20, borderBottomLeftRadius:10,backgroundColor:"#00a082",borderTopLeftRadius:10}}>
       <Image
            source={mail}
            style={{ width: 30, height: 30, resizeMode: "contain",tintColor:"#fff" }}
          />
       </View>
        <Text style={{marginLeft:10, fontFamily: "Montserrat", color: "#000", fontWeight: "500", fontSize: 16 }}>
          Pulsa para contactar conmigo
        </Text>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <Image
            source={location}
            style={{marginHorizontal:20, width: 30, height: 30, resizeMode: "contain" }}
          />
        <Text style={{ fontFamily: "Montserrat", color: "#00a082", fontWeight: "500", fontSize: 16 }}>
          o escríbeme a nildomene@gmail.com
        </Text>
        </View>
      </Pressable>

    </View>
    <BigSeparator />
    <BigSeparator />
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
