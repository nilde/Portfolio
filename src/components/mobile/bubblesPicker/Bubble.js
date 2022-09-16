import { View, StyleSheet, Animated, Image, Pressable, Text } from "react-native";
import { Component } from "react";
import Made from '../../../images/made.png'
import Skills from '../../../images/skills.png'
import Magic from '../../../images/magic.png'
import AboutMe from '../../../images/about-me.png'
import More from "../../../images/logo_app_blanco_fondo.png"
import NextJob from "../../../images/nextJob.png"
import Prototypes from "../../../images/prototypes.png"
import Share from "../../../images/share.png"

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight
const CIRCULAR = 1000
const BUBBLE_SIZE = 90

const relations = {
  "UX": Skills,
  "Sobre mí": AboutMe,
  "Cómo se hizo?": Made,
  "Lo que sea": Magic,
  "Buyness": More,
  "Estoy buscando": NextJob,
  "Prototipos": Prototypes,

}



const relationsScreen = {
  "UX": "habilities",
  "Sobre mí": "aboutMe",
  "Cómo se hizo?": "howWasMade",
  "Buyness": "buyness",
  "Estoy buscando": "nextJob",
  "Prototipos": "prototypes",

}

const animationOffsets = {
  TOP_LEFT: {
    offsetX: -55,
    offsetY: -105,
    offsetXScale: -50,
    offsetYScale: -95

  },
  TOP_RIGHT: {
    offsetX: 55,
    offsetY: -105,
    offsetXScale: 60,
    offsetYScale: -95
  },
  LEFT: {
    offsetX: -117.5,
    offsetY: 0,
    offsetXScale: -105,
    offsetYScale: 0
  },
  RIGHT: {
    offsetX: 117.5,
    offsetY: 0,
    offsetXScale: 110,
    offsetYScale: 0
  },
  BOTTOM_LEFT: {
    offsetX: -55,
    offsetY: 105,
    offsetXScale: -50,
    offsetYScale: 100
  },
  BOTTOM_RIGHT: {
    offsetX: 55,
    offsetY: 105,
    offsetXScale: 60,
    offsetYScale: 95
  }
}


export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValueX: new Animated.Value(0),
      startValueY: new Animated.Value(0),
      startValue: new Animated.Value(1)
    }
  }

  scaleIn() {
    var offsetsScale = animationOffsets[this.props.position]
    Animated.parallel([
      Animated.timing(this.state.startValue, {
        toValue: 1.15,
        duration: 300
      }),
      Animated.timing(this.state.startValueX, {
        toValue: offsetsScale.offsetX,
        duration: 200
      }),
      Animated.timing(this.state.startValueY, {
        toValue: offsetsScale.offsetY,
        duration: 200
      })
    ]).start()
  }

  scaleOut() {
    var offsetsScale = animationOffsets[this.props.position]
    Animated.parallel([
      Animated.timing(this.state.startValue, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.state.startValueX, {
        toValue: offsetsScale.offsetX,
        duration: 200
      }),
      Animated.timing(this.state.startValueY, {
        toValue: offsetsScale.offsetY,
        duration: 200
      })
    ]).start()
  }


  animateEntrance() {
    var offsets = animationOffsets[this.props.position]
    Animated.sequence([
      //Generates a timeout using the Animated API
      Animated.delay(300),

      //Animates both X Y at the same time 
      //(using timing to prevent boucing effect)

      Animated.parallel([
        Animated.timing(this.state.startValueX, {
          toValue: offsets.offsetX,
          duration: 200
        }),
        Animated.timing(this.state.startValueY, {
          toValue: offsets.offsetY,
          duration: 200
        })
      ])
    ]).start()
  }

  componentDidMount() {
    this.animateEntrance()
  }


  render() {
    return (

      <Animated.View style={{
        position: "absolute",
        alignSelf: "center",
        transform: [
          {
            translateX: this.state.startValueX
          },
          {
            translateY: this.state.startValueY
          },

        ]
      }}>
        <Animated.View
          style={{
            transform: [{
              scale: this.state.startValue
            }]

          }}
        >
          <Pressable
            onPress={() => this.props.toggleActiveScreen(relationsScreen[this.props.title])}
            onLongPress={() => this.props.toggleActiveScreen(relationsScreen[this.props.title])}

            onHoverIn={() => this.scaleIn()}
            onHoverOut={() => this.scaleOut()}

            style={{

              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
              borderRadius: CIRCULAR,
              width: BUBBLE_SIZE,
              height: BUBBLE_SIZE,
              backgroundColor: "#fff"
            }}>
            <View style={{ justifyContent: "center", alignItems: "center", width: "50%", height: 40 }}>
              <Image
                style={{ width: 35, height: 35, resizeMode: "contain" }}
                source={relations[this.props.title]}
              />
            </View>
            <View style={{ width: "100%", height: TOTAL_HEIGHT * 0.01 }} />
            <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 10, fontWeight: "400", fontSize: 11 }}>
              {this.props.title}
            </Text>
          </Pressable>
        </Animated.View>
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

