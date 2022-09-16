import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Header from './Header'
import MediumSeparator from './MediumSeparator';
import magic from "../../images/magic.png"
import curveMobile from '../../images/curve--mobile.svg';
import wave from '../../images/wave--withus.svg'
import together from '../../images/together.svg'

import LittleSeparator from './LittleSeparator'
import footerWave from '../../images/footer-wave.svg'
import BigSeparator from './BigSeparator'
import TopBar from './TopBar/TopBarContainer'
import whiteLogo from '../../images/whiteLogo.png'
import WorkWithUsContainer from './WorkWithUsContainer'
import Highlights from '../../images/highlights.svg'
import Card from './Card'
import Footer from './Footer'
import TextUnderlayed from './TextUnderlayed'


import ProfileLateralMenu from './ProfileLateralMenu'
import HowWasMade from './HowWasMade'
import WhatEverScreen from './WhatEverScreen'
import PrototypesModal from './PrototypesModal'
import AboutMe from './AboutMe'
import NextJob from './NextJob'
import Buyness from './Buyness'
import Habilities from './Habilities'
import SearchResultsInitialScreen from './SearchResultsInitialScreen'

import {
  Redirect
} from "react-router-dom";
import React, { Component } from "react";


const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight


const screenRealtions = {
  whatEver: "activeWhatEver",
  habilities: "activeHabilities",
  aboutMe: "activeAboutMe",
  prototypes: "activePrototypes",
  nextJob: "activeNextJob",
  buyness: "activeBuyness",
  howWasMade: "activeHowWasMade"
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //used to manage modals status
      activeWhatEver: false,
      activeHabilities: false,
      activeAboutMe: false,
      activePrototypes: false,
      activeNextJob: false,
      activeBuyness:false,
      activeHowWasMade: false,

      //used to manage redirections
      redirectToAppDetails: false,
      query:""
    }

    this.lateralMenuRef = React.createRef()
    this.toggleActiveScreen = this.toggleActiveScreen.bind(this)
    this.updateQuery=this.updateQuery.bind(this);
    
    window.scrollTo(0, 0)
  }

  toggleActiveScreen(newScreen) {
   
    var toggleScreen = screenRealtions[newScreen]

    this.setState({
      [toggleScreen]: !this.state[toggleScreen]
    })
  }

updateQuery(query){
  this.setState({
    query:query
  })

}

  render() {
    return (
      <div className="App">

        <View style={styles.allPage}>
          <Header toggleActiveScreen={this.toggleActiveScreen} />

          <Image
            source={curveMobile}
            style={{ marginTop: -2, width: "100%", height: 100, resizeMode: "cover" }}
          />


          <View style={{ flexDirection: "row", alignSelf: "center", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: "Montserrat", alignSelf: "center", textAlign: "center", fontWeight: "600", fontSize: 22 }}>
              <TextUnderlayed
                fontSize={22}
                fontWeight={600}
                text="Apps" />
              desarolladas con React
            </Text>
            <Image
              source={Highlights}
              style={{ marginTop: -20, width: 13, height: 13, resizeMode: "contain" }}
            />
          </View>
          <MediumSeparator />
          <Card
            app={"ARPost"}
          />
          <LittleSeparator />
          <Card
            app={"OneMoreRep"}
          />
          <LittleSeparator />
          <Card
            app={"Urbis"}
          />
          <LittleSeparator />
          <Card
            app={"NextWatch"}
          />
          <LittleSeparator />
          <Pressable
            onPress={() => this.setState({ redirectToAppDetails: true })}

            style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 100, alignSelf: "center", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(227,246,241)" }}>
            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", color: "#00a082" }}>
              Ver más apps
            </Text>
          </Pressable>
          <MediumSeparator />


          <View style={{ justifyContent: "center", alignItems: "center", overflow: "visible" }}>


            <Image
              source={wave}
              style={{ width: "100%", height: 120, resizeMode: "cover" }}
            />
            <View style={{ position: "absolute", top: 25 }}>
              <Image
                source={together}
                style={{ width: 121, height: 82, resizeMode: "contain" }}
              />
              <BigSeparator />

            </View>
          </View>
          <View style={{ width: "100%", backgroundColor: "rgb(227,246,241)" }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 32, fontWeight: "700" }}>
              ¿Qué estoy buscando actualmente?
            </Text>
            <MediumSeparator />
            <WorkWithUsContainer type="LEFT" title="Quiero aprender" subtitle="Quiero mejorar mis habilidades y formar parte de una empresa que me ayude a conseguirlo." />
            <BigSeparator />
            <WorkWithUsContainer type="CENTER" title="Sentirme realizado" subtitle="Quiero un trabaje que me motive a despertarme cada día y sentir que aquello que estoy haciendo está ayudando a mejorar la vida de la gente." />
            <BigSeparator />
            <WorkWithUsContainer type="RIGHT" title="Sector dinámico y competitivo" subtitle="Me gustan los retos y quiero sentir la presión y la sensación velocidad de aquellos productos que cambian la vida de la gente." />


            <BigSeparator />
            <BigSeparator />
            <BigSeparator />

            <Footer />

          </View>

        </View>
        <TopBar query={this.state.query} updateQuery={this.updateQuery} lateralMenuRef={this.lateralMenuRef} />
        {/**Start modal */}
       


        {/**Modal contact details */}


        {this.state.activeHowWasMade &&
          <HowWasMade toggleActiveScreen={this.toggleActiveScreen} />
        }
        {
          this.state.activeWhatEver &&
          <WhatEverScreen toggleActiveScreen={this.toggleActiveScreen} />
        }

        {
          this.state.activeNextJob &&
          <NextJob toggleActiveScreen={this.toggleActiveScreen}/>
        }

 {//CHECK
  this.state.activeBuyness &&
          <Buyness toggleActiveScreen={this.toggleActiveScreen}/>
        }

        {//CHECK
          this.state.activeAboutMe &&
          <AboutMe toggleActiveScreen={this.toggleActiveScreen}/>
        }

        {
          this.state.activePrototypes &&
        <PrototypesModal toggleActiveScreen={this.toggleActiveScreen}/>
        }

        {
          this.state.activeHabilities &&
          <Habilities toggleActiveScreen={this.toggleActiveScreen}/>
        }

        {
          !!this.state.query &&
         // !!this.state.query &&
          <SearchResultsInitialScreen query={this.state.query} updateQuery={this.updateQuery} />
        }


     




        {
          this.state.redirectToAppDetails &&
          <Redirect push to="/app-list" />
        }

        <ProfileLateralMenu ref={this.lateralMenuRef} />
      </div>
    )
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
    height: window.innerHeight * 0.4,
    backgroundColor: "#ffc244"

  }
})



