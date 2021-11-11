import { View, StyleSheet, Image, Text, Pressable, Animated } from "react-native";

import Sticky from 'react-stickynode';
import { Component } from "react";
import TopBarTop from './TopBarAppDetailsTop';
import TopBarSticky from './TopBarAppDetailsSticky'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      animatedHeight:new Animated.Value(150)
    }
  }

  handleStateChange = (status) => {
    
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ sticky: true },()=>Animated.timing(this.state.animatedHeight, {
        toValue: 70,
        duration: 150
      }).start())
    }
    else {
      this.setState({ sticky: false },
        ()=> Animated.timing(this.state.animatedHeight, {
          toValue: 150,
          duration: 150
        }).start())
    }
  };

  


  render() {
    return (
            <Sticky onStateChange={this.handleStateChange} enabled={true} top={0} bottomBoundary={0}>
      <Animated.View
      
      
      style={[{height:this.state.animatedHeight},{ backgroundColor: "#fcc244",boxShadow:this.state.sticky?"0px 3px 2px rgba(0,0,0,0.05)":""}]}>
      
      {
        this.state.sticky?
        <TopBarSticky {...this.props}/> :
        <TopBarTop  {...this.props}/>
      }

      </Animated.View>
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


