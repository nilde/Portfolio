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
import YouTube from 'react-youtube';

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
        <Text style={{ fontFamily: "Montserrat", fontSize: 32, fontWeight: "700" }}>
        ¿Cómo hacer pequeña la ventana?
      </Text>
      <LittleSeparator />
      <Text style={{ fontFamily: "Montserrat", fontSize: 24, fontWeight: "400" }}>
        Mira el siguiente vídeo y descubre cómo explorar mí curriculum.
      </Text>
      <MediumSeparator />
      <View style={{alignSelf:"center",width:window.innerWidth*0.6,height:400,borderRadius:20,backgroundColor:"red",overflow:"hidden"}}>
      <YouTube videoId={"acDQBLPDQoc"} opts={{ height:400 , width: window.innerWidth*0.6,borderRadius:20 }} onReady={() => { }} />
      </View>
      <MediumSeparator />
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
