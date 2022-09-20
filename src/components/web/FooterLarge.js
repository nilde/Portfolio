import { View, StyleSheet, Text, Image } from "react-native";
import whiteLogo from '../../images/whiteLogo.png'
import footerWave from '../../images/footer-wave.svg'
import LittleSeparator from './LittleSeparator'
import MediumSeparator from './MediumSeparator'
import BigSeparator from './BigSeparator'
import { Pressable } from "react-native-web";

function Footer(props) {
  return (
    <View>
    <BigSeparator />
      <Image
        source={footerWave}
        style={{ width: "100%", height: 100, resizeMode: "cover" }}
      />
      <View style={{ marginTop: -25, width: "100%", backgroundColor: "#1d1d1d" }}>
      <View style={{alignSelf:"flex-start",width:"100%", flexDirection: "row", justifyContent: "space-evenly" }}>
      <View style={{width:"25%",justifyContent:"center",alignItems:"center"}}>
     
        </View>
          <View style={{width:"25%"}}/>
             <View style={{width:"25%"}}/>
             <View style={{width:"25%"}}/>
     
</View>
        <MediumSeparator />
        <View style={{alignSelf:"flex-start",width:"100%", flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{width:"25%"}}>
            <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "center",maxWidth:window.innerWidth*0.20 }}>
              Desarrollado con
            </Text>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://reactjs.org", "_blank")}
              onLongPress={() => window.open("https://reactjs.org", "_blank")}
            >

              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                React
              </Text>
            </Pressable>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://necolas.github.io/react-native-web/docs/", "_blank")}
              onLongPress={() => window.open("https://necolas.github.io/react-native-web/docs/", "_blank")}
            >

              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                React Native Web
              </Text>
            </Pressable>
          </View>

          <View style={{width:"25%"}}>
            <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "center",maxWidth:window.innerWidth*0.20 }}>
              Enlaces de interés (I)
            </Text>

            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://linkedin.com/in/nil-domene-esteban-29599a106", "_blank")}
              onLongPress={() => window.open("https://linkedin.com/in/nil-domene-esteban-29599a106", "_blank")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                LinkedIn
              </Text>
            </Pressable>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://www.github.com/nilde", "_blank")}
              onLongPress={() => window.open("https://www.github.com/nilde", "_blank")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                Github
              </Text>
            </Pressable>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://github.com/nilde/Portfolio", "_blank")}
              onLongPress={() => window.open("https://github.com/nilde/Portfolio", "_blank")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                Repositorio
              </Text>
            </Pressable>
           
          </View>
          <View style={{width:"25%"}}>
            <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "center",maxWidth:window.innerWidth*0.20 }}>
              Enlaces de interés (II)
            </Text>
            <LittleSeparator />
            
            <Pressable
              onPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
              onLongPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                TFG
              </Text>
            </Pressable>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
              onLongPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                TFM
              </Text>
            </Pressable>
            <LittleSeparator />
            <Pressable
              onPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
              onLongPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
            >
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center" }}>
                Ranking apps
              </Text>
            </Pressable>
            <LittleSeparator />

          </View>
          <View style={{width:"25%"}}>
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "center",maxWidth:window.innerWidth*0.20 }}>
              ¡Gracias por tu tiempo!
            </Text>
            <LittleSeparator />
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center",maxWidth:window.innerWidth*0.22 }}>
                Made with 💛 
              </Text>
              <LittleSeparator />
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center",maxWidth:window.innerWidth*0.22 }}>
                Nil Domene Esteban
              </Text>
              <LittleSeparator />
              <Pressable
              onPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}
        onLongPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}
            >
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "center",maxWidth:window.innerWidth*0.22 }}>
                nildomene@gmail.com
              </Text>
              </Pressable>
        </View>
        </View>
       
  
      
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
