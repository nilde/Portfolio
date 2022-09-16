import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { Component } from "react";
import LittleSeparator from './LittleSeparator'
import MediumSeparator from './MediumSeparator'
import BigSeparator from './BigSeparator'
import Card from './Card'
import NotFoundSearch from '../../images/not-found-search.svg'
import SearchResultsInitialScreenTopBar from './SearchResultsInitialScreenTopBar'
import { Redirect } from "react-router-dom";
import TextUnderlayedSearch from './TextUnderlayedSearch';

//Infos
import InfoARPost from '../.././appTemplates/ARPost'
import InfoBruteForce from '../.././appTemplates/BruteForce'
import InfoEasyPrior from '../.././appTemplates/EasyPrior'
import InfoFastr from '../.././appTemplates/Fastr'
import InfoFindMyCar from '../.././appTemplates/FindMyCar'
import InfoGuessmoji from '../.././appTemplates/Guessmoji'
import InfoJustBreathe from '../.././appTemplates/JustBreathe'
import InfoNextWatch from '../.././appTemplates/NextWatch'
import InfoOneMoreRep from '../.././appTemplates/OneMoreRep'
import InfoStarSudoku from '../.././appTemplates/StarSudoku'
import InfoUrbis from '../.././appTemplates/Urbis'
import InfoWhite from '../.././appTemplates/White'
import InfoWhiteCircles from '../.././appTemplates/WhiteCircles'


//images for search inside each app

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



const allInfos = [
  InfoARPost,
  InfoBruteForce,
  InfoEasyPrior,
  InfoFastr,
  InfoFindMyCar,
  InfoGuessmoji,
  InfoJustBreathe,
  InfoNextWatch,
  InfoOneMoreRep,
  InfoStarSudoku,
  InfoUrbis,
  InfoWhite,
  InfoWhiteCircles
]

const allInfoRelations = {
  "AR Post - AR Camera": InfoARPost,
  "BRUTE FORCE - Break the Code": InfoBruteForce,
  "EasyPrior - Task Manager": InfoEasyPrior,
  "Fast - Link Manager": InfoFastr,
  "FindMyCar": InfoFindMyCar,
  "Guessmoji": InfoGuessmoji,
  "Just Breathe : Relax": InfoJustBreathe,
  "Next Watch - Swipe to Discover": InfoNextWatch,
  "OneMoreRep - Best Fitness Tracker": InfoOneMoreRep,
  "Star Sudoku": InfoStarSudoku,
  "Urbis - Discover your city": InfoUrbis,
  "WHITE - Tap Game": InfoWhite,
  "WHITE CIRCLES - Memorizing Game": InfoWhiteCircles
}

const cardRealtions = {
  "AR Post - AR Camera": "ARPost",
  "BRUTE FORCE - Break the Code": "BruteForce",
  "EasyPrior - Task Manager": "EasyPrior",
  "Fast - Link Manager": "Fastr",
  "FindMyCar": "FindMyCar",
  "Guessmoji": "Guessmoji",
  "Just Breathe : Relax": "JustBreathe",
  "Next Watch - Swipe to Discover": "NextWatch",
  "OneMoreRep - Best Fitness Tracker": "OneMoreRep",
  "Star Sudoku": "StarSudoku",
  "Urbis - Discover your city": "Urbis",
  "WHITE - Tap Game": "White",
  "WHITE CIRCLES - Memorizing Game": "WhiteCircles"
}

const imageRealtions = {
  "AR Post - AR Camera": ARPost,
  "BRUTE FORCE - Break the Code": BruteForce,
  "EasyPrior - Task Manager": EasyPrior,
  "Fast - Link Manager": Fastr,
  "FindMyCar": FindMyCar,
  "Guessmoji": Guessmoji,
  "Just Breathe : Relax": JustBreathe,
  "Next Watch - Swipe to Discover": NextWatch,
  "OneMoreRep - Best Fitness Tracker": OneMoreRep,
  "Star Sudoku": StarSudoku,
  "Urbis - Discover your city": Urbis,
  "WHITE - Tap Game": White,
  "WHITE CIRCLES - Memorizing Game": WhiteCircles
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeApps: [],
      activeDetails: ["a"],
      activeType: "ALL",
      redirectToAppDetailsVisible: false,
      redirectAppID: -1,
      totalDetailsOcurrences: 0,
      totalAppsCards: 0,
      activeAppsCards: [],
      query:this.props.query
    }
  this.manageSearch=this.manageSearch.bind(this);
  }

componentDidMount(){
  this.manageSearch(this.props.query)
}
  searchInString(allText, query) {
    var lowerCasedText = allText.toLowerCase()
    var lowerCasedQuery = query.toLowerCase()

    var indexes = []
    var index = lowerCasedText.indexOf(lowerCasedQuery)

    //Generate indexes for split text corretly
    while (index >= 0) {

      indexes.push({
        init: index,
        final: index + lowerCasedQuery.length,
        //needs extra space if some character behind
        extraSpace: (index + lowerCasedQuery.length) < lowerCasedText.length - 1
      })


      index = lowerCasedText.indexOf(lowerCasedQuery, index + 1)

    }


    var textFragments = []
    for (var i = 0; i < indexes.length; i++) {
      if (i == 0) {
        if (indexes[0].init != 0)
          textFragments.push(
            {
              text: allText.substring(0, indexes[i].init),
              highlighted: false,
              extraSpace: false
            }
          )

      }
      else {

        textFragments.push(
          {
            text: allText.substring(indexes[i - 1].final, indexes[i].init),
            highlighted: false,
            extraSpace: false
          })
      }


      textFragments.push(
        {
          text: allText.substring(indexes[i].init, indexes[i].final),
          highlighted: true,
          extraSpace: indexes[i].extraSpace
        })
    }

    //Case of some space after last highlight
    if (indexes.length > 0 && indexes[indexes.length - 1].final != allText.length) {

      textFragments.push(
        {
          text: allText.substring(indexes[indexes.length - 1].final, allText.length),
          highlighted: false,
          extraSpace: false
        })

    }
    //case when no ocurrences in title or subtitle
    //its possible that ocurrences only happen in one.
    else{
      textFragments.push(
        {
          text: allText.substring(0, allText.length),
          highlighted: false,
          extraSpace: false
        })
    }

    return textFragments
  }
  generateTexts(text,fontSize,color) {

    const textToIterate=this.searchInString(text,this.state.query,)


    return (
      <Text style={{paddingHorizontal:20, textAlign: "left", fontFamily: "Montserrat", alignSelf: "flex-start", fontWeight: "400", fontSize: 16 }}>
        {!!textToIterate &&
          textToIterate.map((item, index) => (
            <TextUnderlayedSearch
              fontSize={fontSize}
              color={color}
              fontWeight={"400"}
              text={item.text}
              highlighted={item.highlighted}
              extraSpace={item.extraSpace}
            />

          ))

        }


      </Text>
    )
  }

  manageSearch(query) {

    var results = {}
    var lowerCasedQuery = query.toLowerCase()
    //Iter over all apps
    for (var i = 0; i < allInfos.length; i++) {

      //Iter over all entries in the app
      for (const [key, value] of Object.entries(allInfos[i])) {
        if (Array.isArray(value)) {

          for (var j = 0; j < value.length; j++) {
            //case that contains another array nested
            if (Array.isArray(value[j])) {


              //check if top contains country, position, date that hae relation with the query
              //position 1 contains number and needs to be converted to string
              if (
                value[j][0].toLowerCase().indexOf(lowerCasedQuery) >= 0 ||
                JSON.stringify(value[j][1]).indexOf(lowerCasedQuery) >= 0 ||
                value[j][2].toLowerCase().indexOf(lowerCasedQuery) >= 0
              ) {

                if (Object.keys(results).indexOf(allInfos[i].title) >= 0)
                  results[allInfos[i].title].push(value[j])
                else {
                  results[allInfos[i].title] = [value[j]]
                }
              }


            }

            //case that contains numbers or strings (tops)
            if (typeof value[j] == "number" || typeof value[j] == "string") {
              continue
              if (value[j].toLowerCase().indexOf(lowerCasedQuery) >= 0) {
                if (Object.keys(results).indexOf(allInfos[i].title) >= 0)
                  results[allInfos[i].title].push(value[j])
                else {
                  results[allInfos[i].title] = [value[j]]
                }
              }
            }


            //case contains nested dicts in the template (dict inside array)
            if (value[j].constructor == Object) {

              //some ocurrency in title of subtitle in article (case tecnologies for ex.)
              if (
                Object.keys(value[j])[0].toLowerCase().indexOf(lowerCasedQuery) >= 0 ||
                Object.values(value[j])[0].toLowerCase().indexOf(lowerCasedQuery) >= 0
              ) {
                if (Object.keys(results).indexOf(allInfos[i].title) >= 0)
                  results[allInfos[i].title].push(value[j])
                else {
                  results[allInfos[i].title] = [value[j]]
                }
              }
            }
          }

        }
      }
    }
    //structure the dictionary to iter over it 
    var resultsCleaned = []
    var totalDetailsOcurrences = 0
    var activeAppsCards = []
    var totalAppsCards = 0
    for (const [key, value] of Object.entries(results)) {
      resultsCleaned.push({
        id: allInfoRelations[key].id,
        title: key,
        data: value.slice(0, 5),
        dataSize: value.length
      })
      activeAppsCards.push(key)
      totalAppsCards += 1
      totalDetailsOcurrences += value.length
    }


    this.props.updateQuery(query)
    this.setState({
      query:query,
      totalAppsCards: totalAppsCards,
      activeAppsCards: activeAppsCards,
      totalDetailsOcurrences: totalDetailsOcurrences,
      activeApps: resultsCleaned
    })

  }



  redirectToAppDetails(appID) {
    this.setState({
      redirectToAppDetailsVisible: true,
      redirectAppID: appID
    })

  }



  //Function used to search inside large strings and 
  //make highlights
  searchInString(allText, query) {
    var lowerCasedText = allText.toLowerCase()
    var lowerCasedQuery = query.toLowerCase()

    var indexes = []
    var index = lowerCasedText.indexOf(lowerCasedQuery)

    //Generate indexes for split text corretly
    while (index >= 0) {

      indexes.push({
        init: index,
        final: index + lowerCasedQuery.length,
        //needs extra space if some character behind
        extraSpace: (index + lowerCasedQuery.length) < lowerCasedText.length - 1
      })


      index = lowerCasedText.indexOf(lowerCasedQuery, index + 1)

    }


    var textFragments = []
    for (var i = 0; i < indexes.length; i++) {
      if (i == 0) {
        if (indexes[0].init != 0)
          textFragments.push(
            {
              text: allText.substring(0, indexes[i].init),
              highlighted: false,
              extraSpace: false
            }
          )

      }
      else {

        textFragments.push(
          {
            text: allText.substring(indexes[i - 1].final, indexes[i].init),
            highlighted: false,
            extraSpace: false
          })
      }


      textFragments.push(
        {
          text: allText.substring(indexes[i].init, indexes[i].final),
          highlighted: true,
          extraSpace: indexes[i].extraSpace
        })
    }

    //Case of some space after last highlight
    if (indexes.length > 0 && indexes[indexes.length - 1].final != allText.length) {

      textFragments.push(
        {
          text: allText.substring(indexes[indexes.length - 1].final, allText.length),
          highlighted: false,
          extraSpace: false
        })

    }
    //case when no ocurrences in title or subtitle
    //its possible that ocurrences only happen in one.
    else {
      textFragments.push(
        {
          text: allText.substring(0, allText.length),
          highlighted: false,
          extraSpace: false
        })
    }

    return textFragments
  }




  render() {
    return (

      <View style={{ overflowY: "scroll", position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <SearchResultsInitialScreenTopBar query={this.state.query} manageSearch={this.manageSearch} />
        <LittleSeparator />
        <View style={{ width: "100%", flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <Pressable
            onPress={() => this.setState({ activeType: "ALL" })}
            onLongPress={() => this.setState({ activeType: "ALL" })}
            style={{ backgroundColor: this.state.activeType == "ALL" ? "#ffc244" : "#EDEDED", borderRadius: 100, paddingHorizontal: 20, paddingVertical: 8, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ alignSelf: "center", fontFamily: "Montserrat", fontSize: 12, fontWeight: this.state.activeType == "ALL" ? "700" : "400" }}>
              Todo
            </Text>
          </Pressable>
          <Pressable
            onPress={() => this.setState({ activeType: "APPS" })}
            onLongPress={() => this.setState({ activeType: "APPS" })}
            style={{ backgroundColor: this.state.activeType == "APPS" ? "#ffc244" : "#EDEDED", borderRadius: 100, paddingHorizontal: 20, paddingVertical: 8 }}>
            <Text style={{ alignSelf: "center", fontFamily: "Montserrat", fontSize: 12, fontWeight: this.state.activeType == "APPS" ? "700" : "400" }}>
              Aplicaciones
            </Text>
          </Pressable>
          <Pressable
            onPress={() => this.setState({ activeType: "DETAILS" })}
            onLongPress={() => this.setState({ activeType: "DETAILS" })}
            style={{ backgroundColor: this.state.activeType == "DETAILS" ? "#ffc244" : "#EDEDED", borderRadius: 100, paddingHorizontal: 20, paddingVertical: 8 }}>
            <Text style={{ alignSelf: "center", fontFamily: "Montserrat", fontSize: 12, fontWeight: this.state.activeType == "DETAILS" ? "700" : "400" }}>
              Detalles
            </Text>
          </Pressable>
        </View>
        {this.state.activeType != "DETAILS" && this.state.activeAppsCards.length>0 &&
          <>

            <MediumSeparator />
            <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 22, fontWeight: "300" }}>
              {this.state.totalAppsCards} apps coinciden con <Text style={{ fontWeight: "600" }}>
                {this.state.query}
              </Text>
            </Text>
            <LittleSeparator />


            {/**need to change for the version without all information */}
            {this.state.activeAppsCards.map((item, index) => (
              <>
                <Card
                  app={cardRealtions[item]}
                />
                <LittleSeparator />
              </>
            ))
            }
        
          </>
        }
        {this.state.activeType != "APPS" && this.state.activeApps.length>0 &&
          <>
            <MediumSeparator />
            <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 22, fontWeight: "300" }}>
              {this.state.totalDetailsOcurrences} detalles coinciden con <Text style={{ fontWeight: "600" }}>
                {this.state.query}
              </Text>
            </Text>

            {
              this.state.activeApps.length > 0 &&
              this.state.activeApps.map((item, index) => (
                <View>
                  <LittleSeparator />
                  <View style={{ alignSelf: "center", width: "90%", backgroundColor: "rgba(42,187,153,0.1)", borderRadius: 10 }}>

                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start", height: 90 }}>
                      <View style={{  justifyContent: "center", alignItems: "center", width: "15%", height: (window.innerWidth*0.9)*0.15 }}>
                        <View style={{overflow: "hidden", width: "70%", height: "70%", borderRadius: 10 }}>
                          <Image
                            source={imageRealtions[item.title]}
                            style={{ width: "100%", height: "100%", resizeMode: "cover",borderRadius:10 }}
                          />
                        </View>
                      </View>
                      <View style={{ width: "85%", height: 70 }}>
                        <Text style={{ color: "#000", fontFamily: "Montserrat", textAlign: "left" }}>
                          {item.title}
                        </Text>
                        <View style={{ height: 5 }} />

                      </View>
                    </View>

                    <View style={{ alignSelf: "center", width: "95%", backgroundColor: "#EDEDED", height: 1 }} />

                    {
                      item.data.map((item_data, index_data) => (
                        <>
                          <LittleSeparator />
                   
                          {this.generateTexts(Array.isArray(item_data) ? item_data[0] : Object.keys(item_data)[0],14,"black")}        
                  
                          
                          <View style={{ height: 10 }} />
                           {this.generateTexts(Array.isArray(item_data) ? item_data[2] : Object.values(item_data)[0],12,"gray")}        

                         
                          {Array.isArray(item_data) &&
                            <>
                              <View style={{ height: 10 }} />
                              <Text numberOfLines={2} style={{ paddingLeft: 15, paddingRight: 30, fontSize: 14, color: "#000", fontFamily: "Montserrat", textAlign: "left" }}>
                              {this.generateTexts(item_data[1])}        
                              </Text>
                            </>
                          }
                          <LittleSeparator />
                          <View style={{ alignSelf: "center", width: "95%", backgroundColor: "#EDEDED", height: 1 }} />

                        </>
                      ))
                    }

                    <Pressable
                      onPress={() => this.redirectToAppDetails(item.id)}
                      onLongPress={() => this.redirectToAppDetails(item.id)}
                      style={{ width: "100%" }}>
                      <LittleSeparator />
                      <Text style={{ fontFamily: "Montserrat", color: "#00a082", fontWeight: "700", fontSize: 14 }}>
                        Más resultados
                      </Text>

                    </Pressable>
                    <LittleSeparator />


                  </View>
                </View>
              ))

            }
           
          </>
        }
        
        <MediumSeparator />
        {/**EMpty screen */}
        {this.state.activeApps.length == 0 && !!this.state.query &&
          <View>
            <BigSeparator />
            <Text style={{ fontFamily: "Montserrat", fontSize: 22, fontWeight: "300" }}>
              0 resultados para
            </Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 22, fontWeight: "600" }}>
              {this.state.query}
            </Text>

            <BigSeparator />
            <Image
              source={NotFoundSearch}
              style={{ width: "100%", height: 180, resizeMode: "contain" }}
            />
            <BigSeparator />
            <Text style={{ fontFamily: "Montserrat", paddingHorizontal: 100, fontSize: 16, fontWeight: "300" }}>
              Asegúrate que todas las palabras estén bien escritas o prueba a buscar otra cosa.
            </Text>
          </View>
        }


        {
          this.state.redirectToAppDetailsVisible &&
          <Redirect push push to={"/app/" + this.state.redirectAppID} />
        }

      </View>




    );
  }
}


var styles = StyleSheet.create({

})



