import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import LittleSeparator from './LittleSeparator'
import outerMaskLeft from '../../images/outer-mask-left.svg';
import outerMaskCenter from '../../images/outer-mask-center.svg';
import outerMaskRight from '../../images/outer-mask-right.svg';
import innerMaskLeft from '../../images/img2.webp';
import innerMaskCenter from '../../images/img3.webp';
import innerMaskRight from '../../images/img1.webp';

const images = {
  LEFT: {
    inner: innerMaskLeft,
    outer: outerMaskLeft,
    sizeContainer: 280,
    sizeGreen: 260,
    sizeBlack: 210,
    marginInner: 20
  },
  CENTER: {
    inner: innerMaskCenter,
    outer: outerMaskCenter,
    sizeContainer: 280,
    sizeGreen: 260,
    sizeBlack: 210,
    marginInner: 0
  },
  RIGHT: {
    inner: innerMaskRight,
    outer: outerMaskRight,
    sizeContainer: 280,
    sizeGreen: 260,
    sizeBlack: 210,
    marginInner: 10
  }
}

function App(props) {
  const { sizeContainer, sizeGreen, sizeBlack, marginInner } = images[props.type]

  return (
    <View style={{ width: "100%" }}>
      <View style={{ height: sizeContainer, alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={images[props.type].outer}
            style={{ position: "absolute", width: sizeGreen, height: sizeGreen, resizeMode: "contain" }}
          />
         
          <Image
            source={images[props.type].inner}
            style={{ marginTop: marginInner, position: "absolute", width: sizeBlack, height: sizeBlack, resizeMode: "contain" }}
          />
        </View>
      </View>

      <Text style={{ fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
        {props.title}
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontFamily: "Montserrat", textAlign: "center", fontSize: 14, paddingHorizontal: 50, fontWeight: "400" }}>
        {props.subtitle}
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

        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100 }}>
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
          Contacta conmigo
        </Text>
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


export default App;
