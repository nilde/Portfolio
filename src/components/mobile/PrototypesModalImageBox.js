import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import BigSeparator from './BigSeparator'

/*
*Use this package because i need to make some changes becuase of iframe
 doesnt work with variable sources. Cleaner code this way.
*/
import YouTube from 'react-youtube';


function App(props) {
  const rightAlignment = props.align == "RIGHT"
  const isVideo = props.video
  const ImageSource = props.source
  const videoSource = props.source
  const margin = props.margin

  const size = {
    width: props.width,
    height: props.height
  }

  return (
    <View style={{ marginHorizontal: margin, alignSelf: rightAlignment ? "flex-end" : "flex-start", top: 0, backgroundColor: "#fff" }}>
      {
        isVideo ?

          <YouTube videoId={videoSource} opts={{ height: size.height, width: size.width }} onReady={() => { }} />

          :
          <Pressable
            onPress={() => {window.open(ImageSource, '_blank'); }}
            onLongPress={() => {window.open(ImageSource, '_blank'); }}
          >
            <Image
              resizeMode={"contain"}
              style={{ width: size.width, height: size.height }}
              source={ImageSource}
            />
          </Pressable>
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
