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
        <View style={[styles.topBar, { boxShadow: this.state.sticky ? "0px 3px 2px rgba(0,0,0,0.05)" : "" }]}>
          <View style={styles.topBarLittle}>
            <Image
              style={{ flex: 1, width: TOTAL_WIDTH * 0.075, height: 50, resizeMode: "contain" }}
              source={GreenLogo}
            />

          </View>
          <View style={styles.topBarBig}>
            <View style={{ justifyContent: "center", alignItems: "center", width: "90%", backgroundColor: "#fff", borderRadius: 100, height: "50%" }}
            >
              <Text>
                Search bar
              </Text>
            </View>

          </View>
          <View style={styles.topBarLittle}>
            <Pressable style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Contactar
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
    width: "100%",
    height: window.innerHeight * 0.10
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.2,
    height: "100%",

  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


