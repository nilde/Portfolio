import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import LittleSeparator from "../LittleSeparator";
import FilterBlob from '../../../images/filter-blob.svg'
import FilterBlobSelected from '../../../images/filter-blob-selected.svg'
import { Component } from "react";
import Card from './CardAppList'
import AppTypePicker from './AppTypePicker'
import TopBar from '../TopBar/TopBarContainer'
import {
  Redirect
} from "react-router-dom";
import LifeStyle from '../../../images/health-care.png'
import Camera from '../../../images/camera.png'
import Todo from '../../../images/iaibek2rdjms81l7vykx.png'
import Utilities from '../../../images/utility-knife.png'
import DesignGraphics from '../../../images/creativity.png'
import SocialNetworks from '../../../images/user.png'
import Games from '../../../images/console.png'
import OldAppScreen from './OldAppScreen'
import React from 'react'
import ProfileLateralMenu from '../ProfileLateralMenu';

const relationsCategories = {
  OneMoreRep: {

    category1: "lifestyle",
    category2: "utilities",

  },
  ARPost: {

    category1: "photovideo",
    category2: "designgraphics",

  },
  Urbis: {

    category1: "socialnetworks",
    category2: "lifestyle",

  },
  NextWatch: {

    category1: "utilities",

  },
  Guessmoji: {

    category1: "games"

  },
  FindMyCar: {

    category1: "utilities",

  },
  Fastr: {

    category1: "utilities",

  },
  StarSudoku: {
    category1: "games"

  },
  White: {

    category1: "games"

  },
  WhiteCircles: {

    category1: "games",

  },
  JustBreathe: {

    category1: "utilities",

  },
  EasyPrior: {

    category1: "utilities",

  },
  BruteForce: {

    category1: "games",

  }
}



const imageRelations = {
  "Todo": Todo,
  "Estilo de vida": LifeStyle,
  "Utilidades": Utilities,
  "Foto y vídeo": Camera,
  "Juegos": Games,
  "Redes Sociales": SocialNetworks,
  "Diseño y gráficos": DesignGraphics,

}

const allApps = [
  "Urbis",
  "OneMoreRep",
  "NextWatch",
  "ARPost",
  "Guessmoji",
  "FindMyCar",
  "Fastr",
  "StarSudoku",
  "White",
  "WhiteCircles",
  "JustBreathe",
  "EasyPrior",
  "BruteForce"

]

const tagsRelations = {
  "Todo": "todo",
  "Estilo de vida": "lifestyle",
  "Utilidades": "utilities",
  "Foto y vídeo": "photovideo",
  "Redes Sociales": "socialnetworks",
  "Diseño y gráficos": "designgraphics",
  "Juegos": "games"
}

const inverseRelations = {
  "todo": "Todo",
  "lifestyle": "Estilo de vida",
  "utilities": "Utilidades",
  "photovideo": "Foto y vídeo",
  "socialnetworks": "Redes Sociales",
  "designgraphics": "Diseño y gráficos",
  "games": "Juegos"

}

export default class App extends Component {

  constructor(props) {
    //Binding for use this.props inside constructor
    super(props);
    this.state = {
      visibleFilterScreen: false,
      visibleOldAppScreen: false,
      redirectToAppDetails: false,
      activeFilter: "",
      activeList: allApps
    }
    window.scrollTo(0, 0)
    this.showOldAppScreen = this.showOldAppScreen.bind(this);
    this.toggleVisibleFilterScreen = this.toggleVisibleFilterScreen.bind(this);
    this.changeActiveFilter = this.changeActiveFilter.bind(this);
    this.lateralMenuRef = React.createRef()
  }


  filterActiveList() {
    //empty query resets list
    if (this.state.activeFilter === "") {
      this.setState({
        activeList: allApps
      })
    }
    else {
      var newList = []
      var allAppsToLook = Object.keys(relationsCategories)
      for (var i = 0; i < allAppsToLook.length; i++) {
        if (
          (relationsCategories[allAppsToLook[i]].category1 &&
            relationsCategories[allAppsToLook[i]].category1.indexOf(this.state.activeFilter) >= 0
          )
          ||
          (relationsCategories[allAppsToLook[i]].category2 &&
            relationsCategories[allAppsToLook[i]].category2.indexOf(this.state.activeFilter) >= 0

          )
          ||
          (relationsCategories[allAppsToLook[i]].category3 &&
            relationsCategories[allAppsToLook[i]].category3.indexOf(this.state.activeFilter) >= 0)
        )
          newList.push(allAppsToLook[i])
      }

      this.setState({
        activeList: newList
      })
    }
  }


  changeActiveFilter(filter) {

    if (filter === this.state.activeFilter) {
      this.setState({
        activeFilter: ""
      }, () => this.filterActiveList())
    }
    else
      this.setState({
        activeFilter: filter
      }, () => this.filterActiveList())

  }


  toggleVisibleFilterScreen() {
    this.setState({
      visibleFilterScreen: !this.state.visibleFilterScreen
    })
  }


  generateTopRowItem(title) {
    const isAll = title == "Todo"

    return (
      <Pressable
        onPress={() => isAll ? this.toggleVisibleFilterScreen() : this.changeActiveFilter(tagsRelations[title])}
        onLongPress={() => isAll ? this.toggleVisibleFilterScreen() : this.changeActiveFilter(tagsRelations[title])}
        style={{ alignItems: "center", }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: 60, height: 60 }}>
          {this.state.activeFilter == tagsRelations[title] ?
            <Image
              source={FilterBlobSelected}
              style={{ resizeMode: "contain", width: "100%", height: "100%" }}
            />
            :
            <Image
              source={FilterBlob}
              style={{ resizeMode: "contain", width: "100%", height: "100%" }}
            />
          }

          <Image
            source={imageRelations[title]}
            style={{ position: "absolute", width: title == "Todo" ? 35 : 25, height: title == "Todo" ? 35 : 25, resizeMode: "contain", }}
          />

        </View>
        <LittleSeparator />
        <Text style={{ fontFamily: "Montserrat" }}>
          {title}
        </Text>

      </Pressable>
    )
  }

  defaultIconBar() {
    return (
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>

        {this.generateTopRowItem("Todo")}
        {this.generateTopRowItem("Estilo de vida")}
        {this.generateTopRowItem("Utilidades")}
        {this.generateTopRowItem("Foto y vídeo")}
      </View>
    )
  }

  customIconBar() {
    return (
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "flex-start", marginLeft: "5%" }}>

        {this.generateTopRowItem("Todo")}
        <View style={{marginLeft:"5%"}}>
          {this.generateTopRowItem(inverseRelations[this.state.activeFilter])}
        </View>
      </View>
    )
  }

  generateTopRow() {
    return (
      <View style={{ zIndex: -1, backgroundColor: "#fff" }}>
        <LittleSeparator />
        {
          (this.state.activeFilter == "" ||
            this.state.activeFilter == "lifestyle" ||
            this.state.activeFilter == "utilities" ||
            this.state.activeFilter == "photovideo")
            ?
            this.defaultIconBar()
            :
            this.customIconBar()
        }
        <LittleSeparator />
      </View>
    )

  }

  showOldAppScreen() {
    this.setState(
      {
        visibleOldAppScreen: !this.state.visibleOldAppScreen
      }
    )
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <TopBar lateralMenuRef={this.lateralMenuRef} />
        {this.generateTopRow()}

        <View style={{ zIndex: -1, backgroundColor: "#fff" }}>
          {this.state.activeList.map((item) => (
            <Card
              showOldAppScreen={this.showOldAppScreen}
              app={item}
            />
          ))}
        </View>

        {
          this.state.visibleFilterScreen &&
          <AppTypePicker
            activeFilter={this.state.activeFilter}
            changeActiveFilter={this.changeActiveFilter}
            toggleModal={this.toggleVisibleFilterScreen}
          />
        }
        {
          this.state.visibleOldAppScreen &&
          <OldAppScreen />
        }


        <ProfileLateralMenu ref={this.lateralMenuRef} />
        {
          this.state.redirectToAppDetails &&
          <Redirect push push to={"/app/" + 12} />
        }

      </View>
    );
  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: window.innerHeight * 0.05
  }
})

