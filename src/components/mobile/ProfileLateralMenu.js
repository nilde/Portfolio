import { View, StyleSheet, Text, Animated,Pressable } from "react-native";
import LittleSeparator from './LittleSeparator'
import MediumSeparator from './MediumSeparator'
import { Component } from "react";
import { useSwipeable } from "react-swipeable";
import ProfileMenuContent from "./ProfileLateralMenuContent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lateralOffset: new Animated.Value(-1200)
    }
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }

  openModal(){
    //change to interpolation
    Animated.timing(this.state.lateralOffset, {
      toValue: window.innerWidth,
      duration: 300
    }).start()
  }

  closeModal(){
    //change to interpolation
    Animated.timing(this.state.lateralOffset, {
      toValue: 0,
      duration: 300
    }).start()
  }

  componentDidMount() {
   //this.openModal()
  }

  render() {


    return (
      <Animated.View
        style={[
          {
            transform: [{
              translateX: this.state.lateralOffset
            }]
          },
          {zIndex:99,top:0, position: "fixed", left: "-100%", width: "100%", height: window.innerHeight, backgroundColor: "#fff" }]}>
         <ProfileMenuContent closeModal={this.closeModal}/>
      </Animated.View>



    );
  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


