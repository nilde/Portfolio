import { Animated, View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Component } from "react";
import {
  Redirect
} from "react-router-dom";

import Delivery from '../../images/store-delivery-light.svg'
import Calendar from '../../images/calendar-dark.svg'


import OneMoreRep from '../../images/apps/OneMoreRep/card.jpeg'
import ARPost from '../../images/apps/AR Post - AR Camera/card.jpeg'
import Urbis from '../../images/apps/Urbis - Discover your city/card.jpeg'
import NextWatch from '../../images/apps/NextWatch - Swipe to Discover/card.jpeg'
import Guessmoji from '../../images/apps/Guessmoji/card.jpeg'
import FindMyCar from '../../images/apps/FindMyCar/card.jpeg'
import Fastr from '../../images/apps/Fastr - Link manager/card.jpeg'
import StarSudoku from '../../images/apps/Star Sudoku/card.jpeg'
import White from '../../images/apps/WHITE - Tap game/card.jpeg'
import WhiteCircles from '../../images/apps/WHITE CIRCLES-Memorizing Game/card.jpeg'
import JustBreathe from '../../images/apps/Just Breathe : Relax/card.jpeg'
import EasyPrior from '../../images/apps/EasyPrior - Task manager/card.jpeg'
import BruteForce from '../../images/apps/BRUTE FORCE - Break the code/card.jpeg'



const relations = {
  OneMoreRep: {
    price: "Gratis",
    title: "One More Rep - Best Fitness Tracker",
    image: OneMoreRep,
    category1: "Estilo de vida",
    category2: "Utilidades",
    haveAndroid: false,
    releaseYear: 2021,
    avaliable: true
  },
  ARPost: {
    price: "Gratis",
    title: "AR Post - AR Camera",
    image: ARPost,
    category1: "Foto y vídeo",
    category2: "Diseño y gráficos",
    haveAndroid: false,
    releaseYear: 2021,
    avaliable: true
  },
  Urbis: {
    price: "Gratis",
    title: "Urbis - Discover your city",
    image: Urbis,
    category1: "Redes sociales",
    category2: "Estilo de vida",
    haveAndroid: false,
    releaseYear: 2021,
    avaliable: true
  },
  NextWatch: {
    price: "Gratis",
    title: "NextWatch - Swipe to Discover",
    image: NextWatch,
    category1: "Utilidades",
    haveAndroid: false,
    releaseYear: 2021,
    avaliable: true
  },
  Guessmoji: {
    price: "Gratis",
    title: "Guessmoji",
    image: Guessmoji,
    category1: "Juegos (Casual)",
    category2: "Juegos (Trivia)",
    category2: "Juegos (Palabras)",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  FindMyCar: {
    price: "Gratis",
    title: "FindMyCar",
    image: FindMyCar,
    category1: "Utilidades",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  Fastr: {
    price: "Gratis",
    title: "Fastr - Link manager",
    image: Fastr,
    category1: "Utilidades",

    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  StarSudoku: {
    price: "Gratis",
    title: "Star Sudoku",
    image: StarSudoku,
    category1: "Juegos (Mesa)",
    category2: "Juegos (Puzzle)",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  White: {
    price: "Gratis",
    title: "WHITE - Tap Game",
    image: White,
    category1: "Juegos (Acción)",
    category2: "Juegos (Casual)",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  WhiteCircles: {
    price: "Gratis",
    title: "WHITE CIRCLES - Memorizing game",
    image: WhiteCircles,
    category1: "Juegos (Casual)",
    category2: "Juegos (Puzzle)",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  JustBreathe: {
    price: "Gratis",
    title: "Just Breate : Relax",
    image: JustBreathe,
    category1: "Utilidades",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  EasyPrior: {
    price: "Gratis",
    title: "Easy Prior Task Manager",
    image: EasyPrior,
    category1: "Utilidades",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  },
  BruteForce: {
    price: "Gratis",
    title: "BRUTE FORCE - Break the code",
    image: BruteForce,
    category1: "Juegos",
    category2: "Casual",
    category3: "Puzzle",
    haveAndroid: false,
    releaseYear: 2019,
    avaliable: false
  }
}

const appIDRelations=["ARPost","BruteForce","EasyPrior","Fastr","FindMyCar","Guessmoji","JustBreathe","NextWatch","OneMoreRep","StarSudoku","Urbis","White","WhiteCircles"]

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageScale: "100%",
      redirectToAppDetails: false,
    
    }
  }

  scaleIn() {
    this.setState({
      imageScale: "200%"
    })
  }
  scaleOut() {
    this.setState({
      imageScale: "100%"
    })

  }

  


  render() {
    return (
      <Pressable
        onPress={() => this.setState({ redirectToAppDetails: true })}
        onHoverIn={() => this.scaleIn()}
        onHoverOut={() => this.scaleOut()}


        style={{
          alignSelf: "center",
          borderRadius: 10,
          width: "95%", backgroundColor: "#EDEDED"
        }}>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,

          width: "100%",
          height: 200,
          backgroundColor: "#EDEDED",
          overflow:"hidden"
         
        }}>
          <Animated.Image
            source={relations[this.props.app].image}
            style={
              {
                zIndex: 0, position: "absolute", borderRadius: 10, width: this.state.imageScale, height: 200, resizeMode: "cover"
              }
            }
          />

            <View style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 10 }} />
          

          <View style={{ position: "absolute" }}>
            <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 24, paddingHorizontal: 20 }}>
              {relations[this.props.app].title}
            </Text>
            <View style={{ width: "100%", height: TOTAL_HEIGHT * 0.01 }} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View style={{ marginHorizontal: TOTAL_WIDTH * 0.01, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 5, paddingVertical: 5, paddingHorizontal: 5 }}>
                <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 12 }}>
                  {relations[this.props.app].category1}
                </Text>
              </View>
              {!!relations[this.props.app].category2 &&
                <View style={{ marginHorizontal: TOTAL_WIDTH * 0.01, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 5, paddingVertical: 5, paddingHorizontal: 5 }}>
                  <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "500", fontSize: 12 }}>
                    {relations[this.props.app].category2}
                  </Text>
                </View>
              }
            </View>
          </View>
          {relations[this.props.app].avaliable &&
          <View style={{ justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, position: "absolute", top: -5, right: 20, paddingHorizontal: 10, height: 30, backgroundColor: "#ffc244" }}>
            <Text style={{ fontFamily: "Montserrat", color: "#000", fontWeight: "600", fontSize: 12 }}>
              {relations[this.props.app].price}
            </Text>
          </View>
          }
        </View>
        <View style={{
          alignItems: "flex-start",
          justifyContent: "center",

          width: "100%",

          backgroundColor: "#fff"
        }}>
          <View style={{ height: 10 }} />

          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <View style={{ flexDirection: "row", paddingLeft: "2.5%" }}>
              <Image
                source={Calendar}
                style={{ width: 14, height: 14, resizeMode: "contain" }}
              />

              <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 10, color: "#000", fontWeight: "400", fontSize: 12 }}>
                Publicado en {relations[this.props.app].releaseYear}

              </Text>
            </View>


            <View style={{ flexDirection: "row", paddingRight: 0 }}>
              <Image
                source={Delivery}
                style={{ width: 17, height: 17, resizeMode: "contain" }}
              />

              <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 10, color: "#000", fontWeight: "400", fontSize: 12 }}>
                iOS
                {relations[this.props.app].haveAndroid &&
                  <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 10, color: "#000", fontWeight: "400", fontSize: 12 }}>
                    y Android
                  </Text>
                }
              </Text>
            </View>
          </View>
          <View style={{ height: 10 }} />
        </View>

        {
          this.state.redirectToAppDetails &&
          <Redirect push push to={"/app/" + appIDRelations.indexOf(this.props.app)} />
        }

      </Pressable>







    )
  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: window.innerHeight * 0.05
  }
})



