import { View, StyleSheet, Animated, Image, Pressable, Text } from "react-native";
import { Component } from "react";
import LittleSeparator from '../LittleSeparator'
import TextUnderlayedSearch from '../TextUnderlayedSearch';


export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textsTitle: this.searchInString(this.props.title, this.props.query),
      textsContent: this.searchInString(this.props.subtitle, this.props.query),
      startValueY: new Animated.Value(0),

    }
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

  //Moves content up when user hovers in
  moveUp() {
    Animated.timing(this.state.startValueY, {
      toValue: -10,
      duration: 200
    }).start()
  }

  //Moves content up when user hovers out
  moveDown() {
    Animated.timing(this.state.startValueY, {
      toValue: 0,
      duration: 200
    }).start()
  }

  generateTitleTexts() {
    return (
      <Text style={{ textAlign: "left", fontFamily: "Montserrat", alignSelf: "flex-start", fontWeight: "400", fontSize: 16 }}>
        {this.state.textsTitle.length > 0 &&
          this.state.textsTitle.map((item, index) => (
            <TextUnderlayedSearch
              fontSize={14}
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

  generateDescriptionTexts() {
    return (

      <Text numberOfLines={3} style={{ paddingRight: 50, textAlign: "left", fontFamily: "Montserrat", alignSelf: "flex-start", fontWeight: "400", color: "#6e6e6e", fontSize: 14 }}>
        {this.state.textsContent.length > 0 &&
          this.state.textsContent.map((item, index) => (
            <TextUnderlayedSearch
              fontSize={14}
              fontWeight={"400"}
              text={item.text}
              highlighted={item.highlighted}
              extraSpace={item.extraSpace} />

          ))

        }

      </Text>
    )
  }




  render() {

    return (

      <Animated.View style={{
        overflow: "visible",
        width: "100%",
        alignSelf: "center",
        transform: [

          {
            translateY: this.state.startValueY
          },

        ]
      }}>


        <Pressable
          onPress={() => this.props.manageItemPress(this.props.item)}
          onLongPress={() => this.props.manageItemPress(this.props.item)}
          onHoverIn={() => this.moveUp()}
          onHoverOut={() => this.moveDown()}

          style={{

            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 0,
            width: "100%",

          }}
        >
          <LittleSeparator />
          <LittleSeparator />
          <View style={{ paddingLeft: "2.5%", width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ justifyContent: "flex-start", width: "80%" }}>

              {this.generateTitleTexts(this.props.title, this.props.query)}

            </View>

            <View style={{ justifyContent: "center", alignItems: "center", width: "20%", }}>
              {this.props.price >= 0 &&
                <Text style={{fontFamily:"Montserrat",fontWeight:"400"}}>
                 {this.props.price}
                </Text>
              }


            </View>

          </View>
          <View style={{ width: "100%", height: 10 }} />
          <View style={{ marginLeft: "2.5%", alignSelf: "flex-start", justifyContent: "center", width: "100%" }}>
            {this.generateDescriptionTexts(this.props.subtitle, this.props.query)}

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

