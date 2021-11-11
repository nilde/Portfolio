import { View, StyleSheet, Animated, Image, Pressable, Text } from "react-native";
import { Component } from "react";
import LittleSeparator from '../LittleSeparator'


export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {

      startValueY: new Animated.Value(0),

    }
  }

  scaleIn() {
    Animated.timing(this.state.startValueY, {
      toValue: -10,
      duration: 200
    }).start()
  }

  scaleOut() {
    Animated.timing(this.state.startValueY, {
      toValue: 0,
      duration: 200
    }).start()
  }



 


  render() {

    return (

      <Animated.View style={{
        overflow:"visible",
        width:"100%",
        alignSelf: "center",
        transform: [
      
        {
          translateY: this.state.startValueY
        },

        ]
      }}>
     
       
        <Pressable
          onPress={()=>this.props.manageItemPress(this.props.item)}
          onLongPress={()=>this.props.manageItemPress(this.props.item)}
          onHoverIn={() => this.scaleIn()}
          onHoverOut={() => this.scaleOut()}

          style={{

            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 0 ,
            width: "100%",
           
          }}
          >
          <LittleSeparator />
          <LittleSeparator />
          <View style={{paddingLeft:"2.5%", width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ justifyContent: "flex-start", width: "80%" }}>
              <Text style={{textAlign:"left", fontFamily: "Montserrat", alignSelf: "flex-start", fontWeight:"400", fontSize: 16 }}>
                {this.props.title}
              </Text>
            </View>

            <View style={{textAlign:"right", fontFamily: "Montserrat", justifyContent: "center", alignItems: "center", width: "20%", }}>
              <Text>
                {this.props.price}
              </Text>
             
           
            </View>
            
          </View>
          <View style={{width:"100%",height:10}}/>
          <View style={{marginLeft:"2.5%", alignSelf:"flex-start", justifyContent: "center",width: "100%" }}>
              <Text numberOfLines={3} style={{paddingRight:50,textAlign:"left", fontFamily: "Montserrat", alignSelf: "flex-start", fontWeight: "400",color:"#6e6e6e", fontSize: 14 }}>
                {this.props.subtitle}
              </Text>
                </View>
                <LittleSeparator />
                <LittleSeparator />
          </Pressable>
          
          <View style={{ backgroundColor: "#ededed", width: "95%", height: 1, marginLeft: 10 }} />
      </Animated.View>


    );
  }
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
    backgroundColor: "#ffc244"

  },
  topBar: {
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
    backgroundColor: "red"
  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})

