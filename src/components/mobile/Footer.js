import { View, StyleSheet,Text,Image } from "react-native";
import whiteLogo from '../../images/whiteLogo.png'
import footerWave from '../../images/footer-wave.svg'
import LittleSeparator from './LittleSeparator'
import MediumSeparator from './MediumSeparator'
import BigSeparator from './BigSeparator'

function Footer() {
  return (
    <View>
      <Image
        source={footerWave}
        style={{ width: "100%", height: 100, resizeMode: "cover" }}
      />
      <View style={{ marginTop: -2, width: "100%", backgroundColor: "#1d1d1d" }}>
        <Image
          style={{ marginLeft: 30, width: 35, height: 35, resizeMode: "contain" }}
          source={whiteLogo}
        />
        <MediumSeparator />
        <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "flex-start", marginLeft: 30 }}>
          Esta web ha sido desarrollada con
        </Text>
        <LittleSeparator />
        <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
          React
        </Text>
        <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
          React Native Web
        </Text>

        <BigSeparator />
      </View>
    </View>




  );
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


export default Footer;
