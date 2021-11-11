import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import GreenLogo from '../../../../images/greenLogo.png';
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
      <View style={{alignItems:"center",width:"100%"}}>
      <View  style={{width:"100%",height:10}}/>
        <View style={[styles.topBar]}>
          <View style={[styles.topBarLittle]}>
            <Image
              style={{ flex: 1, width: TOTAL_WIDTH * 0.075, height: 50, resizeMode: "contain" }}
              source={GreenLogo}
            />

          </View>
          

            <Pressable style={{position:"absolute",right:"5%", alignSelf: "flex-end", justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{fontFamily:"Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Empezar
              </Text>
            </Pressable>

          
          
        </View>
<View  style={{width:"100%",height:20}}/>
            <View style={{ justifyContent: "center", alignItems: "center", width: "90%", backgroundColor: "#fff",height:40, borderRadius: 100}}
            >
              <Text style={{fontFamily:"Montserrat",color:"gray"}}>
                Buscar
              </Text>
            </View>

    
        </View>
  





    )
  }

}


var styles = StyleSheet.create({

  topBar: {

    alignItems: "center",
    flexDirection: "row",
    
    height: 50,
    width:"100%"
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",
    position:"absolute",left:"5%",

  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


