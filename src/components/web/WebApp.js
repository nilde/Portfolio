import { View, StyleSheet, Image, Text,Pressable } from "react-native";
import Header from './Header'
import MediumSeparator from './MediumSeparator';
import magic from "../../images/magic.png"
import curveSmall from '../../images/curve--small.svg';
import wave from '../../images/wave--withus.svg'
import together from '../../images/together.svg'
import outerMaskLeft from '../../images/outer-mask-left.svg';
import outerMaskCenter from '../../images/outer-mask-center.svg';
import outerMaskRight from '../../images/outer-mask-right.svg';
import innerMaskLeft from '../../images/inner-mask-left.svg';
import innerMaskCenter from '../../images/inner-mask-center.svg';
import innerMaskRight from '../../images/inner-mask-right.svg';
import LittleSeparator from './LittleSeparator'
import footerWave from '../../images/footer-wave.svg'
import BigSeparator from './BigSeparator'
import TopBar from './TopBar'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight


function App() {
  return (
    <div className="App">
      <View style={styles.allPage}>
        <Header />
        <Image
          source={curveSmall}
          style={{ width: "100%", height: 60, resizeMode: "cover" }}
        />
        <MediumSeparator />

        <Text style={{fontFamily:"Montserrat", marginLeft: TOTAL_WIDTH * 0.1, alignSelf: "flex-start", fontWeight: "500", fontSize: TOTAL_WIDTH * 0.045 }}>
          Apps cerca de tí
        </Text>
        <MediumSeparator />
        <View style={{ flexDirection: "row", justifyContent: "center", width: "80%", alignSelf: "center", height: TOTAL_HEIGHT * 0.3 }}>
          <View style={{
            boxShadow: "0px 10px 15px rgba(0,0,0,0.2)",
            borderRadius: 10,
            marginRight: TOTAL_WIDTH * 0.03, width: "30%", backgroundColor: "#f2f2f2"
          }}>
            <View style={{
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              width: "100%",
              height: "80%",
              backgroundColor: "red"
            }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "500", fontSize: TOTAL_WIDTH * 0.03, paddingHorizontal: TOTAL_WIDTH * 0.02 }}>
                App Ejemplo
              </Text>
              <View style={{ width: "100%", height: TOTAL_HEIGHT * 0.01 }} />
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={{ marginHorizontal: TOTAL_WIDTH * 0.01, backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 2, paddingVertical: 5, paddingHorizontal: 5 }}>
                  <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "500", fontSize: TOTAL_WIDTH * 0.015 }}>
                    Categoría
                  </Text>
                </View>
                <View style={{ marginHorizontal: TOTAL_WIDTH * 0.01, backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 2, paddingVertical: 5, paddingHorizontal: 5 }}>
                  <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "500", fontSize: TOTAL_WIDTH * 0.015 }}>
                    Categoría
                  </Text>
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, position: "absolute", top: -5, right: 20, paddingHorizontal: 10, height: 30, backgroundColor: "#ffc244" }}>
                <Text style={{fontFamily:"Montserrat", color: "#000", fontWeight: "500", fontSize: TOTAL_WIDTH * 0.015 }}>
                  Gratis
                </Text>
              </View>
            </View>
            <View style={{
              alignItems: "flex-start",
              justifyContent: "center",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              width: "100%",
              height: "20%",
              backgroundColor: "#fff"
            }}>
              <Text style={{fontFamily:"Montserrat", paddingHorizontal: 10, color: "#000", fontWeight: "400", fontSize: TOTAL_WIDTH * 0.0125 }}>
                Disponible para iOS
              </Text>
            </View>
          </View>
          <View style={{
            boxShadow: "0px 10px 15px rgba(0,0,0,0.2)",
            borderRadius: 10,
            marginHorizontal: TOTAL_WIDTH * 0.03, width: "30%", backgroundColor: "#f2f2f2"
          }}>

          </View>
          <View style={{
            boxShadow: "0px 10px 15px rgba(0,0,0,0.2)",
            borderRadius: 10,
            marginLeft: TOTAL_WIDTH * 0.03, width: "30%", backgroundColor: "#f2f2f2"
          }}>

          </View>
        </View>

        <MediumSeparator />
        <View style={{ justifyContent: "center", alignItems: "center" }}>


          <Image
            source={wave}
            style={{ width: "100%", height: 100, resizeMode: "cover" }}
          />
          <View style={{ position: "absolute" }}>
            <Image
              source={together}
              style={{ width: 121, height: 82, resizeMode: "contain" }}
            />
            <MediumSeparator />

          </View>
        </View>
        <View style={{ width: "100%", backgroundColor: "rgb(227,246,241)" }}>
          <Text style={{fontFamily:"Montserrat", fontSize: 40, fontWeight: "700" }}>
            Colabora con Glovo
          </Text>
          <MediumSeparator />
          <View style={{ width: 300,alignSelf:"center",justifyContent:"center",alignItems:"center" }}>
           <View style={{height:320, justifyContent:"center",alignItems:"center"}}>
            <Image
              source={outerMaskLeft}
              style={{position:"absolute", width: 300, height: 300, resizeMode: "contain" }}
            />
            <Image
              source={innerMaskLeft}
              style={{marginTop:20, position:"absolute", width: 250, height: 250, resizeMode: "contain" }}
            />
            </View>
          </View>
          <LittleSeparator />
          <Text style={{fontFamily:"Montserrat", fontSize: 24, fontWeight: "700" }}>
            Título grande
          </Text>
          <LittleSeparator />
          <Text style={{fontFamily:"Montserrat",textAlign:"center", fontSize: 16, fontWeight: "325" }}>
           Subtitulo largo que tiene que ir centrado
          </Text>
          <LittleSeparator />
          <Pressable style={{alignSelf:"center",minWidth:120, justifyContent:"center",alignItems:"center", paddingHorizontal:60,paddingVertical:20 ,backgroundColor:"#00a082",borderRadius:100}}>
              <Text style={{fontFamily:"Montserrat",color:"#fff",fontWeight:"700",fontSize:18}}>
                Contactar
              </Text>
              </Pressable>

          <BigSeparator />
          <Image
            source={footerWave}
            style={{ width: "100%", height: 100, resizeMode: "cover" }}
          />
        </View>
       
      </View>
<TopBar />


    </div>
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
    height: window.innerHeight * 0.4,
    backgroundColor: "#ffc244"

  }
})


export default App;
