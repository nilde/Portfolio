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
      <Image
        source={footerWave}
        style={{ width: "100%", height: 100, resizeMode: "cover" }}
      />
      <View style={{ marginTop: -20, width: "100%", backgroundColor: "#1d1d1d" }}>
      <Image
          style={{ marginLeft: 30, width: 50, height: 35, resizeMode: "contain" }}
          source={whiteLogo}
        />
        <BigSeparator />
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "flex-start", marginLeft: 30 }}>
          Esta web ha sido desarrollada con
        </Text>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://reactjs.org", "_blank")}
          onLongPress={() => window.open("https://reactjs.org", "_blank")}
        >

          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            React
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://necolas.github.io/react-native-web/docs/", "_blank")}
          onLongPress={() => window.open("https://necolas.github.io/react-native-web/docs/", "_blank")}
        >

          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            React Native Web
          </Text>
        </Pressable>
        <BigSeparator />
         <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "flex-start", marginLeft: 30 }}>
          Otros enlaces de interés
        </Text>

        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://linkedin.com/in/nil-domene-esteban-29599a106", "_blank")}
          onLongPress={() => window.open("https://linkedin.com/in/nil-domene-esteban-29599a106", "_blank")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            LinkedIn
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://www.github.com/nilde", "_blank")}
          onLongPress={() => window.open("https://www.github.com/nilde", "_blank")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            Github
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://github.com/nilde/Portfolio", "_blank")}
          onLongPress={() => window.open("https://github.com/nilde/Portfolio", "_blank")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            Repositorio
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
          onLongPress={() => window.open("https://ddd.uab.cat/pub/tfg/2019/tfg_182220/TFG_1425988_FINAL.pdf")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            TFG
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
          onLongPress={() => window.open("https://docs.google.com/document/d/1_HjUYc5-YPO2OFb5Mu9bWWgvhw5EMC6Y/edit?usp=sharing&ouid=117864946382339414129&rtpof=true&sd=true")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            TFM
          </Text>
        </Pressable>
        <LittleSeparator />
        <Pressable
          onPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
          onLongPress={() => window.open("https://drive.google.com/file/d/1iwna_7YdR7m57ux022DPWSSpFnCluSsy/view?usp=sharing")}
        >
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 14, alignSelf: "flex-start", marginLeft: 30 }}>
            Ranking apps
          </Text>
        </Pressable>
        <LittleSeparator />
        <BigSeparator />
        <View style={{}}>
          <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18, alignSelf: "flex-start",marginLeft:30 }}>
              ¡Gracias por tu tiempo!
            </Text>
            <LittleSeparator />
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "flex-start",marginLeft:30 }}>
                Made with 💛 
              </Text>
              <LittleSeparator />
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "flex-start",marginLeft:30 }}>
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
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "400", fontSize: 14, alignSelf: "flex-start",marginLeft:30 }}>
                nildomene@gmail.com
              </Text>
              </Pressable>
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
