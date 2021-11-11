import { View, StyleSheet, Image, Text, Pressable, TextInput, Animated } from "react-native";
import GreenLogoAlone from '../../images/greenLogoAlone.png';
import Sticky from 'react-stickynode';
import { Component } from "react";
import Close from '../../images/close.svg'
import IconSearch from '../../images/search-new.svg'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      query: this.props.query,
      animatedEntrace: new Animated.Value(-10)
    }
  }

  handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ sticky: true })
    }
    else {
      this.setState({ sticky: false })
    }
  };

  manageNewQuery(query) {
    this.props.manageSearch(query)
    this.setState({
      query: query
    })
  }

  animationAppear() {
    Animated.timing(this.state.animatedEntrace, {
      duration: 300,
      toValue: 10
    }).start()
  }

  componentDidMount() {
    this.animationAppear()
  }




  render() {
    return (
      <View style={{ zIndex: 99, alignItems: "center", width: "100%", backgroundColor: "#ffc244", height: 70, overflow: "hidden" }}>
        <View style={{ width: "100%", height: 10 }} />
        <Animated.View style={[
          {
            position: "absolute",
            bottom: this.state.animatedEntrace,
          },

          styles.topBar]}>

          <Pressable
            onPress={() => {
              window.scrollTo(0, 0)
              this.manageNewQuery("")
            }}
            onLongPress={() => {
              window.scrollTo(0, 0)
              this.manageNewQuery("")
            }}

            style={[styles.topBarLogo]}>
            <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={GreenLogoAlone}
            />

          </Pressable>
          <View style={{
            flexDirection: "row", width: "85%", justifyContent: "flex-start", alignItems: "center",
          }}>
            <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 100, width: "100%", alignSelf: "center", height: 40 }}>

              <View style={{ width: "10%", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image style={{ width: 15, height: 15, resizeMode: "contain" }}
                  source={IconSearch}
                />

              </View>
              <TextInput
                onChangeText={(t) => this.manageNewQuery(t)}
                autoFocus
                selectionColor={"gray"}
                value={this.state.query}
                // onChangeText={(t) => this.props.updateSearch(t)}
                style={{ outline: "none", width: "100%", fontWeight: "400", fontFamily: "Montserrat" }}
                placeholder={"Buscar"}
                placeholderTextColor={"gray"}
              />
            </View>
          </View>


        </Animated.View>
        <View style={{ width: "100%", height: 10 }} />


      </View>






    )
  }

}


var styles = StyleSheet.create({

  topBar: {

    alignItems: "center",
    flexDirection: "row",

    height: 50,
    width: "100%"
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",


  },
  topBarLogo: {
    marginLeft: "2.5%",
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    height: "100%",


  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


