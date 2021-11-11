import { View, StyleSheet, Image, Text, Pressable,TextInput} from "react-native";
import GreenLogoAlone from '../../../../images/greenLogoAlone.png';
import Sticky from 'react-stickynode';
import { Component } from "react";
import Close from '../../../../images/close.svg'
import IconSearch from '../../../../images/search-new.svg'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
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


  render() {
    return (
      <View style={{ zIndex: 99, alignItems: "center", width: "100%", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
        <View style={{ width: "100%", height: 10 }} />
        <View style={[styles.topBar]}>

          <View style={[styles.topBarLogo]}>
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain", tintColor: "#ffc244" }}
              source={GreenLogoAlone}
            />

          </View>
          <View style={{ flexDirection: "row", marginRight: "2.5%", width: "70%", justifyContent: "flex-end", alignItems: "center" }}>
          <View style={{ flexDirection: "row",backgroundColor:"#F2F2F2",borderRadius:100, width: "95%", alignSelf: "center", height: 30 }}>
        
          <View style={{ width: "10%", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Image style={{ width: 15, height: 15, resizeMode: "contain" }}
              source={IconSearch}
            />

          </View>
          <TextInput
          autoFocus
            value={this.props.query}
            onChangeText={(t) => this.props.updateSearch(t)}
            style={{ outline: "none", width: "85%", fontWeight: "400", fontFamily: "Montserrat" }}
            placeholder={"Buscar"}
            placeholderTextColor={"gray"}
          />
</View>
            <Pressable
              onPress={() => this.props.updateSearch("")}
              onLongPress={() => this.props.updateSearch("")}

              style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, borderRadius: 100 }}>
              <Image
                style={{ width: 18, height: 18, resizeMode: "contain", tintColor: "#000" }}
                source={Close}
              />

            </Pressable>
          </View>


        </View>
        <View style={{ width: "100%", height: 10 }} />


      </View>






    )
  }

}


var styles = StyleSheet.create({

  topBar: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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


