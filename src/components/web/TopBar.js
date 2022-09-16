import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import BigSeparator from './BigSeparator';
import BigTitle from './BigTitle';
import GreenLogo from '../../images/greenLogo.png';
import Sticky from 'react-stickynode';
import { Component } from "react";

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }
  }

  handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ sticky: true })
    }
    else {
      this.setState({ sticky: false })
    }
  };


  render() {
    return (
      <Sticky onStateChange={this.handleStateChange} enabled={true} top={0} bottomBoundary={0}>
        <View style={[styles.topBar, {width:"100%",justifyContent:"space-between",paddingVertical:40, boxShadow: this.state.sticky ? "0px 3px 2px rgba(0,0,0,0.05)" : "" }]}>
        <View style={[styles.topBarLittle,{justifyContent:"center",alignItems:"flex-start",marginLeft:50}]}>
            <Image
              style={{width: 150, height: 40, resizeMode: "contain" }}
              source={GreenLogo}
            />

          </View>
          <View style={[styles.topBarLittle,{justifyContent:"center",alignItems:"flex-end",marginRight:50}]}>
          <Pressable
        onPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}
        onLongPress={(e) => {
          window.location.href = "mailto:nildomene@gmail.com";
          e.preventDefault();
        }}

        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",marginRight:40, minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 30, paddingVertical: 15, backgroundColor: "#00a082", borderRadius: 100 }}>
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18 }}>
        Contacta conmigo
        </Text>
      </Pressable>

          </View>
        </View>
      </Sticky>





    )
  }

}


var styles = StyleSheet.create({

  topBar: {
    backgroundColor: "#ffc244",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: window.innerHeight * 0.10
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.3,
    height: "100%",
    

  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


