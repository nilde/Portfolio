import { View, StyleSheet, Text, SectionList, Pressable, Image, TextInput, ScrollView } from "react-native";
import LittleSeparator from '../LittleSeparator'
import MediumSeparator from '../MediumSeparator'
import BigSeparator from '../BigSeparator'
import Footer from '../Footer'
import Test from '../../../images/apps/Guessmoji/1.jpeg'
import YellowLogo from '../../../images/logo_yellow_small.svg'
import Close from '../../../images/close.svg'
import { Gradient } from 'react-gradient';
import { Component } from 'react'
import { render } from "@testing-library/react";
import AppDetailScreenItem from './AppDetailScreenItem'
import AppDetailScreenItemRanking from './AppDetailScreenItemRanking'

//Infos
import InfoARPost from '../.././../appTemplates/ARPost'
import InfoBruteForce from '../.././../appTemplates/BruteForce'
import InfoEasyPrior from '../.././../appTemplates/EasyPrior'
import InfoFastr from '../.././../appTemplates/Fastr'
import InfoFindMyCar from '../.././../appTemplates/FindMyCar'
import InfoGuessmoji from '../.././../appTemplates/Guessmoji'
import InfoJustBreathe from '../.././../appTemplates/JustBreathe'
import InfoNextWatch from '../.././../appTemplates/NextWatch'
import InfoOneMoreRep from '../.././../appTemplates/OneMoreRep'
import InfoStarSudoku from '../.././../appTemplates/StarSudoku'
import InfoUrbis from '../.././../appTemplates/Urbis'
import InfoWhite from '../.././../appTemplates/White'
import InfoWhiteCircles from '../.././../appTemplates/WhiteCircles'


//import panel images
import Clock from '../../../images/time-input.svg'
import Ranking from '../../../images/rating_excellent.png'
import Moto from '../../../images/moto-icon.svg'


//import other images
import IconSearch from '../../../images/search-new.svg'

//
import TextUnderlayedSection from './TextUnderlayedSection';
import AppDetailsScreenItemSearch from './AppDetailScreenItemSearch'
import AppDetailScreenEmptySearch from './AppDetailScreenEmptySearch'
import AppDetailsScreenResults from './AppDetailsScreenResults'

import {
  Redirect,
  useParams
} from "react-router-dom";


//Image Headers
import OneMoreRep from '../../../images/apps/OneMoreRep/card.jpeg'
import ARPost from '../../../images/apps/AR Post - AR Camera/card.jpeg'
import Urbis from '../../../images/apps/Urbis - Discover your city/card.jpeg'
import NextWatch from '../../../images/apps/NextWatch - Swipe to Discover/card.jpeg'
import Guessmoji from '../../../images/apps/Guessmoji/card.jpeg'
import FindMyCar from '../../../images/apps/FindMyCar/card.jpeg'
import Fastr from '../../../images/apps/Fastr - Link manager/card.jpeg'
import StarSudoku from '../../../images/apps/Star Sudoku/card.jpeg'
import White from '../../../images/apps/WHITE - Tap game/card.jpeg'
import WhiteCircles from '../../../images/apps/WHITE CIRCLES-Memorizing Game/card.jpeg'
import JustBreathe from '../../../images/apps/Just Breathe : Relax/card.jpeg'
import EasyPrior from '../../../images/apps/EasyPrior - Task manager/card.jpeg'
import BruteForce from '../../../images/apps/BRUTE FORCE - Break the code/card.jpeg'

//import screenshots
import OneMoreRep1 from '../../../images/apps/OneMoreRep/1.jpeg'
import OneMoreRep2 from '../../../images/apps/OneMoreRep/2.jpeg'
import OneMoreRep3 from '../../../images/apps/OneMoreRep/3.jpeg'
import OneMoreRep4 from '../../../images/apps/OneMoreRep/4.jpeg'

import ARPost1 from '../../../images/apps/AR Post - AR Camera/1.jpeg'
import ARPost2 from '../../../images/apps/AR Post - AR Camera/2.jpeg'
import ARPost3 from '../../../images/apps/AR Post - AR Camera/3.jpeg'
import ARPost4 from '../../../images/apps/AR Post - AR Camera/4.jpeg'

import Urbis1 from '../../../images/apps/Urbis - Discover your city/1.jpeg'
import Urbis2 from '../../../images/apps/Urbis - Discover your city/2.jpeg'
import Urbis3 from '../../../images/apps/Urbis - Discover your city/3.jpeg'
import Urbis4 from '../../../images/apps/Urbis - Discover your city/4.jpeg'

import NextWatch1 from '../../../images/apps/NextWatch - Swipe to Discover/1.jpeg'
import NextWatch2 from '../../../images/apps/NextWatch - Swipe to Discover/2.jpeg'
import NextWatch3 from '../../../images/apps/NextWatch - Swipe to Discover/3.jpeg'
import NextWatch4 from '../../../images/apps/NextWatch - Swipe to Discover/4.jpeg'

import Guessmoji1 from '../../../images/apps/Guessmoji/1.jpeg'
import Guessmoji2 from '../../../images/apps/Guessmoji/2.jpeg'
import Guessmoji3 from '../../../images/apps/Guessmoji/3.jpeg'
import Guessmoji4 from '../../../images/apps/Guessmoji/4.jpeg'

import FindMyCar1 from '../../../images/apps/FindMyCar/1.jpeg'
import FindMyCar2 from '../../../images/apps/FindMyCar/2.jpeg'
import FindMyCar3 from '../../../images/apps/FindMyCar/3.jpeg'



import Fastr1 from '../../../images/apps/Fastr - Link manager/1.jpeg'
import Fastr2 from '../../../images/apps/Fastr - Link manager/2.jpeg'
import Fastr3 from '../../../images/apps/Fastr - Link manager/3.jpeg'


import StarSudoku1 from '../../../images/apps/Star Sudoku/1.jpeg'
import StarSudoku2 from '../../../images/apps/Star Sudoku/2.jpeg'
import StarSudoku3 from '../../../images/apps/Star Sudoku/3.jpeg'
import StarSudoku4 from '../../../images/apps/Star Sudoku/4.jpeg'

import White1 from '../../../images/apps/WHITE - Tap game/1.jpeg'
import White2 from '../../../images/apps/WHITE - Tap game/2.jpeg'
import White3 from '../../../images/apps/WHITE - Tap game/3.jpeg'
import White4 from '../../../images/apps/WHITE - Tap game/4.jpeg'

import WhiteCircles1 from '../../../images/apps/WHITE CIRCLES-Memorizing Game/1.jpeg'
import WhiteCircles2 from '../../../images/apps/WHITE CIRCLES-Memorizing Game/2.jpeg'
import WhiteCircles3 from '../../../images/apps/WHITE CIRCLES-Memorizing Game/3.jpeg'
import WhiteCircles4 from '../../../images/apps/WHITE CIRCLES-Memorizing Game/4.jpeg'

import EasyPrior1 from '../../../images/apps/EasyPrior - Task manager/1.jpeg'
import EasyPrior2 from '../../../images/apps/EasyPrior - Task manager/2.jpeg'


import JustBreathe1 from '../../../images/apps/Just Breathe : Relax/1.jpeg'
import JustBreathe2 from '../../../images/apps/Just Breathe : Relax/2.jpeg'
import JustBreathe3 from '../../../images/apps/Just Breathe : Relax/3.jpeg'
import JustBreathe4 from '../../../images/apps/Just Breathe : Relax/4.jpeg'

import BruteForce1 from '../../../images/apps/BRUTE FORCE - Break the code/1.jpeg'
import BruteForce2 from '../../../images/apps/BRUTE FORCE - Break the code/2.jpeg'
import BruteForce3 from '../../../images/apps/BRUTE FORCE - Break the code/3.jpeg'
import BruteForce4 from '../../../images/apps/BRUTE FORCE - Break the code/4.jpeg'


const screenshots = [
  [ARPost1, ARPost2, ARPost3, ARPost4],
  [BruteForce1, BruteForce2, BruteForce3, BruteForce4],
  [EasyPrior1, EasyPrior2],
  [Fastr1, Fastr2, Fastr3],
  [FindMyCar1, FindMyCar2, FindMyCar3],
  [Guessmoji1, Guessmoji2, Guessmoji3, Guessmoji4],
  [JustBreathe1, JustBreathe2, JustBreathe3, JustBreathe4],
  [NextWatch1, NextWatch2, NextWatch3, NextWatch4],
  [OneMoreRep1, OneMoreRep2, OneMoreRep3, OneMoreRep4],
  [StarSudoku1, StarSudoku2, StarSudoku3, StarSudoku4],
  [Urbis1, Urbis2, Urbis3, Urbis4],
  [White1, White2, White3, White4],
  [WhiteCircles1, WhiteCircles2, WhiteCircles3, WhiteCircles4],



]

const Infos = [InfoARPost, InfoBruteForce, InfoEasyPrior, InfoFastr, InfoFindMyCar, InfoGuessmoji, InfoJustBreathe, InfoNextWatch, InfoOneMoreRep, InfoStarSudoku, InfoUrbis, InfoWhite, InfoWhiteCircles]
const ImagesHeader = [ARPost, BruteForce, EasyPrior, Fastr, FindMyCar, Guessmoji, JustBreathe, NextWatch, OneMoreRep, StarSudoku, Urbis, White, WhiteCircles]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionOrder: [],
      offsets: [],
      activeDetails: false,
      activeReturnToHome: false,
      scrollY: 0,
      activeItem: {},
      searchResults: [],
      activeInfo: [],
      query: "",
      titlesOffsets: [],
      queryResults: [],
      appId: window.location.pathname.split("/").pop(),
      activeSection: "",
      pageOffset: 0
    }
    window.scrollTo(0, 0)

    this.DATA = this.generatePageInfo()
    this.manageItemPress = this.manageItemPress.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }



  generatePageInfo() {
    //const {appId} = useParams()

    const info = Infos[this.state.appId]

    var rankings = info.tops
    var rankingsInfo = []
    for (var i = 0; i < rankings.length; i++) {
      rankingsInfo.push({
        title: rankings[i],
        data: info[rankings[i]],
        ranking: true
      })
    }

    const allInfo = [

      {
        title: "INFORMACIÓN",
        data: info.info,
        ranking: false
      },
      {
        title: "CAPTURAS",
        data: ["X"],
        ranking: false
      },
      {
        title: "REALIZADA CON",
        data: info.made_with,
        ranking: false
      },
      {
        title: "PUNTOS FUERTES",
        data: info.key_points,
        ranking: false
      },

      ...rankingsInfo



    ]

    return allInfo
  }


  updateActiveSection(scrollOffset) {

    var activeSection = ""
    for (var i = 0; i < this.state.offsets.length; i++) {
      console.error("Offset-" + i + "-" + this.state.offsets[i])
      console.error("Scroll" + scrollOffset)
      if (this.state.offsets[i] > scrollOffset) {
        if (i == 0)
          break
        if (i > 0) {
          activeSection = this.state.sectionOrder[i - 1]
          break
        }
      }
    }
    console.error(activeSection)
    this.setState({
      pageOffset: scrollOffset,
      activeSection: activeSection
    })
  }

  updateSearch(query) {
    if (query.length == 0) {

      this.setState({
        query: "",
        queryResults: []
      }, () => setTimeout(() => window.scrollTo(0, 0)), 100)
    }
    else {
      var queryResults = []
      for (var i = 0; i < this.DATA.length; i++) {

        for (var j = 0; j < this.DATA[i].data.length; j++) {
          if (this.DATA[i].title.indexOf("Mejores") >= 0) {

            if (
              this.DATA[i].data[j][0].toLowerCase().indexOf(query) >= 0 ||
              JSON.stringify(this.DATA[i].data[j][1]).toLowerCase().indexOf(query) >= 0 ||
              this.DATA[i].data[j][2].toLowerCase().indexOf(query) >= 0)

              queryResults.push(this.DATA[i].data[j])

          }
          else {
            if (Object.keys(this.DATA[i].data[j])[0].toLowerCase().indexOf(query) >= 0 || Object.values(this.DATA[i].data[j])[0].indexOf(query) >= 0)

              queryResults.push(this.DATA[i].data[j])
          }
        }
      }

      this.setState({
        query: query,
        queryResults: queryResults
      })
    }
  }


  renderSectionSepator() {
    return (
      <View>

      </View>
    )
  }

  renderSectionHeader(item) {

    //onLayout doesnt work because gets the distance with relation of the nearest container 
    return (
      <div style={{ width: "100%", textAlign: "left", justifyContent: "flex-start", alignItems: "flex-start" }} id={item.section.title}>

        <MediumSeparator />
        <Text style={{ textAlign: "left", fontFamily: "Montserrat", marginLeft: 10, fontWeight: "600", fontSize: 22, width: "100%" }}>
          {item.section.title}
        </Text>
        <LittleSeparator />
      </div>
    )

  }


  updateTitlesLayouts(title, offset) {
    var titlesOffsets = this.state.titlesOffsets;
    titlesOffsets.push({
      title: title,
      offset: offset
    })


    this.setState({
      titlesOffsets: titlesOffsets
    })

  }



  renderListHeader() {

    return (
      <View style={{ overflow: "visible", width: "100%", height: 230, }}>

        <View style={{ width: "100%", height: 200, backgroundColor: "#EDEDED" }}>
          {/**change that for accurate image */}
          <Image style={{ position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
            source={ImagesHeader[this.state.appId]}
          />
          <div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent", background: "linear-gradient(rgba(0,0,0,0.5),transparent)" }}>

          </div>

          <Pressable
            onPress={() => this.setState({ activeReturnToHome: true })}
            onLongPress={() => this.setState({ activeReturnToHome: true })}
            style={{ marginTop: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, }}>
            <Image style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={YellowLogo}
            />
          </Pressable>

          <View style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)", bottom: -5, borderRadius: 10, width: "90%", alignSelf: "center", backgroundColor: "#fff" }}>
            <LittleSeparator />
            <Text style={{ fontFamily: "Montserrat", fontSize: 16, fontWeight: 700 }}>
              {Infos[this.state.appId].title}
            </Text>
            <LittleSeparator />
            <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-between", width: "60%" }}>
              <View style={{ width: "20%", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image style={{ width: 25, height: 25, resizeMode: "contain" }}
                  source={Clock}
                />

                <Text style={{ fontFamily: "Montserrat", fontSize: 14, fontWeight: "400" }}>
                  {Infos[this.state.appId].year}2021
                </Text>
              </View>
              <View style={{ width: "20%", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image style={{ width: 25, height: 25, resizeMode: "contain" }}
                  source={Ranking}
                />
                <Text style={{ fontFamily: "Montserrat", fontSize: 14, fontWeight: "400" }}>
                  100%
                </Text>
                <View style={{ height: 2 }}></View>
                <View style={{ borderRadius: 3, paddingHorizontal: 5, paddingVertical: 1, backgroundColor: "#00a082" }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 10, fontWeight: "700", color: "#fff" }}>
                    Excelente
                  </Text>
                </View>
              </View>
              <View style={{ width: "20%", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image style={{ width: 25, height: 25, resizeMode: "contain" }}
                  source={Moto}
                />
                <Text style={{ fontFamily: "Montserrat", fontSize: 14, fontWeight: "400" }}>
                  iOS
                </Text>
              </View>
            </View>

            <LittleSeparator />
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: "400" }}>
              Si tienes cualquier otra pregunta,{" "}
              <Text style={{ fontWeight: "600" }}>
                no dudes{" "}
              </Text>
              <Text style={{ fontWeight: "400" }}>
                en contactar conmigo
              </Text>
            </Text>
            <LittleSeparator />
          </View>

        </View>
{false &&
        <View style={{ flexDirection: "row", position: "absolute", bottom: 0, background: "#F2f2f2", borderRadius: 100, position: "absolute", width: "95%", alignSelf: "center", height: 30 }}>
          <View style={{ width: "10%", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Image style={{ width: 15, height: 15, resizeMode: "contain" }}
              source={IconSearch}
            />

          </View>
          <TextInput
            value={this.state.query}
            onChangeText={(t) => this.updateSearch(t)}
            style={{ outline: "none", width: "85%", fontWeight: "400", fontFamily: "Montserrat" }}
            placeholder={"Buscar"}
            placeholderTextColor={"gray"}
          />
        </View>
}
      </View>
    )

  }
  renderListFooter() {

    return (
      <>
        <BigSeparator />
        <Footer />
      </>
    )

  }

  generateOffsets() {
    var offsets = []
    var sectionOrder = []
    for (var i = 0; i < this.DATA.length; i++) {

      if (document.getElementById(this.DATA[i].title)) {
        sectionOrder.push(this.DATA[i].title)
        offsets.push(
          document.getElementById(this.DATA[i].title).getBoundingClientRect().bottom
        )
      }

    }

    this.setState({
      sectionOrder: sectionOrder,
      offsets: offsets
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {

      e.stopPropagation();
      this.updateActiveSection(window.scrollY)

    })
    this.generateOffsets()

  }






  manageItemPress(item) {

    this.setState({ scrollY: window.scrollY, activeDetails: true, activeItem: item })

  }

  renderItem(item) {

    var isRankingItem = item.section.ranking
    var isScreenshotItem = item.section.title == "CAPTURAS"

    return (
      <>
        {!isRankingItem ?
          isScreenshotItem ?
            //Item with carrousel for screenshots
            <View style={{ width: "100%" }}>
            <LittleSeparator/>
              <ScrollView horizontal style={{ width: "100%", height: "100%" }}>
                { screenshots[this.state.appId][0] &&
                <Pressable 
                onPress={()=>this.manageItemPress({
                    title:"Captura 1",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][0]
                  })}
                  onLongPress={()=>this.manageItemPress({
                    title:"Captura 1",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][0]
                  })}
                style={{ width: 100, height: 150, backgroundColor: "#f2f2f2", marginLeft: 20,overflow:"hidden", borderRadius: 10 }}>
                <Image style={{ width: 100, height: 150,borderRadius:10, resizeMode: "cover" }}
                source={ screenshots[this.state.appId][0]}
              />
                </Pressable>
                }
                { screenshots[this.state.appId][1] &&
                  <Pressable
                  onPress={()=>this.manageItemPress({
                    title:"Captura 2",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][1]
                  })}
                  onLongPress={()=>this.manageItemPress({
                    title:"Captura 2",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][1]
                  })}
                   style={{ width: 100, height: 150, backgroundColor: "#f2f2f2", marginLeft: 20,overflow:"hidden", borderRadius: 10 }}>
                <Image style={{ width: 100, height: 150,borderRadius:10, resizeMode: "cover" }}
                source={ screenshots[this.state.appId][1]}
              />
                </Pressable>
                }
                { screenshots[this.state.appId][2] &&
                  <Pressable
                  onPress={()=>this.manageItemPress({
                    title:"Captura 3",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][2]
                  })}
                  onLongPress={()=>this.manageItemPress({
                    title:"Captura 3",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][2]
                  })}
                   style={{ width: 100, height: 150, backgroundColor: "#f2f2f2", marginLeft: 20,overflow:"hidden", borderRadius: 10 }}>
                <Image style={{ width: 100, height: 150,borderRadius:10, resizeMode: "cover" }}
                source={ screenshots[this.state.appId][2]}
              />
                </Pressable>
                }
                { screenshots[this.state.appId][3] &&
                  <Pressable
                  onPress={()=>this.manageItemPress({
                    title:"Captura 4",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][3]
                  })}
                  onLongPress={()=>this.manageItemPress({
                    title:"Captura 4",
                    subtitle:"La imagen corresponde a la captura de pantalla de la App Store",
                    image:screenshots[this.state.appId][3]
                  })}
                   style={{ width: 100, height: 150, backgroundColor: "#f2f2f2", marginLeft: 20,overflow:"hidden", borderRadius: 10 }}>
                <Image style={{ width: 100, height: 150,borderRadius:10, resizeMode: "cover" }}
                source={ screenshots[this.state.appId][3]}
              />
                </Pressable>
                }
              </ScrollView>
              <LittleSeparator/>
            </View>
            :
            //Item with title and subtitle
            <AppDetailScreenItem item={{ ...item.item, ranking: false }} title={Object.keys(item.item)} subtitle={Object.values(item.item)} manageItemPress={this.manageItemPress} />
          :
          //Item with title, subtitle adn ranking number
          <AppDetailScreenItemRanking item={{ ...item.item, ranking: true }} ranking={item.item[1]} country={item.item[0]} day={item.item[2]} manageItemPress={this.manageItemPress} />

        }
      </>
    )

  }


  manageDetailsClose() {

    this.setState({ activeDetails: false }, () => setTimeout(() => window.scrollTo(0, this.state.scrollY), 100))

  }




  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>

        {!this.state.activeDetails && true &&
          <SectionList
            onViewableItemsChanged={() => this.generateOffsets()}
            sections={this.DATA}
            SectionSeparatorComponent={() => this.renderSectionSepator()}
            ListHeaderComponent={() => this.renderListHeader()}
            ListFooterComponent={() => this.renderListFooter()}
            renderSectionHeader={(item) => this.renderSectionHeader(item)}
            renderItem={(item) => this.renderItem(item)}
          />
        }



        {
          !!this.state.query &&
          this.state.queryResults.length == 0 &&
          <AppDetailScreenEmptySearch
            query={this.state.query}
            queryResults={this.state.queryResults}
            updateSearch={this.updateSearch} />
        }
        {
          !!this.state.query &&
          this.state.queryResults.length > 0 &&
          <AppDetailsScreenResults
            query={this.state.query}
            queryResults={this.state.queryResults}
            updateSearch={this.updateSearch} />
        }



        {
          this.state.activeReturnToHome &&
          <Redirect push to="/" />
        }
        {
          this.state.pageOffset > 0 &&

          <View style={{ width: "100%", maxWidth: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center", boxShadow: "0px 3px 2px rgba(0,0,0,0.05)", position: "fixed", top: 0, width: "100%", height: 60, backgroundColor: "#fff" }}>
            <View style={{ width: "80%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Pressable
                onPress={() => this.setState({ activeReturnToHome: true })}
                onLongPress={() => this.setState({ activeReturnToHome: true })}
                style={{ marginTop: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, }}>
                <Image style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={YellowLogo}
                />
              </Pressable>
              <View style={{ overflow: "hidden", height: "100%", width: "80%", alignItems: "center", justifyContent: "center" }}>
                <TextUnderlayedSection
                  fontSize={20}
                  type={"TITLE"}
                  fontWeight={700}
                  text={this.state.activeSection}
                />
              </View>
            </View>

            <Pressable
             // onPress={() => this.setState({ activeReturnToHome: true })}
             // onLongPress={() => this.setState({ activeReturnToHome: true })}
              style={{ marginTop: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, }}>
              {false &&
              <Image style={{ width: 20, height: 20, resizeMode: "contain",tintColor:"#00a082" }}
                source={IconSearch}
              />
              }
            </Pressable>

          </View>
        }
        {
          this.state.activeDetails &&
          <View style={{ position: "absolute", top: 0, width: "100%", height: window.innerHeight, backgroundColor: "#fff" }}>
            <BigSeparator />
            {
              !!this.state.activeItem.image &&
              <>
              <Image style={{alignSelf:"center", width: 400, height: 400,borderRadius:10, resizeMode: "contain" }}
                source={this.state.activeItem.image}
              />
              <View style={{height:30}}/>
              </>
            }

            <Text style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: 24, paddingHorizontal: 20, textAlign: "center" }}>
              {this.state.activeItem.ranking ? this.state.activeItem[0] : this.state.activeItem.title? this.state.activeItem.title:Object.keys(this.state.activeItem)[0]}
            </Text>
            <LittleSeparator />
            {this.state.activeItem.ranking &&
              <>
                <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 20, paddingHorizontal: 20, color: "#000", textAlign: "center" }}>
                  {this.state.activeItem[1]}
                </Text>
                <LittleSeparator />
              </>
            }
            <Text style={{ fontFamily: "Montserrat", fontWeight: "400", fontSize: 16, paddingHorizontal: 20, color: "gray", textAlign: "center" }}>
              {this.state.activeItem.ranking ? this.state.activeItem[2] : this.state.activeItem.subtitle? this.state.activeItem.subtitle:Object.values(this.state.activeItem)[0]}
            </Text>


            <Pressable
            onPress={(e) => {
                window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();
              }}
              onLongPress={(e) => {
                window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();
              }}
              style={{ alignSelf: "center", position: "absolute", bottom: 50, justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, backgroundColor: "#00a082", borderRadius: 100 }}>
              <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 14 }}>
                Tengo una duda
              </Text>
            </Pressable>

            <Pressable
              onPress={() => this.manageDetailsClose()}
              onLongPress={() => this.manageDetailsClose()}

              style={{ justifyContent: "center", alignItems: "center", position: "absolute", top: 0, right: 0, width: 50, height: 50 }}>
              <Image style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={Close}
              />
            </Pressable>

          </View>
        }
      </View>




    )

  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: window.innerHeight * 0.05
  }
})


