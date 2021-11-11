//Framework imports
import { View, StyleSheet, Image, Pressable, Text, Animated } from "react-native";
import { Component } from "react";

//Component imports
import BigSeparator from '../BigSeparator'
import MediumSeparator from '../MediumSeparator'

//Images imports

import FilterBlobSelected from '../../../images/filter-blob-selected.svg'
import FilterBlob from '../../../images/filter-blob.svg'
import LifeStyle from '../../../images/health-care.png'
import Utilities from '../../../images/utility-knife.png'
import PhotoVideo from '../../../images/camera.png'
import DesignGraphics from '../../../images/creativity.png'
import SocialNetworks from '../../../images/user.png'
import Games from '../../../images/console.png'
import Close from '../../../images/close.svg'


//[title,image,state_managment]
const dataTemplate = [
  ["Estilo de vida", LifeStyle, "lifestyle"],
  ["Utilidades", Utilities, "utilities"],
  ["Foto y vídeo", PhotoVideo, "photovideo"],
  ["Diseño y gráficos", DesignGraphics, "designgraphics"],
  ["Redes sociales", SocialNetworks, "socialnetworks"],
  ["Juegos", Games, "games"]
]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      activeFront: true,
      modalOpacity: new Animated.Value(1)
    }
  }


  generateItem(item) {

    const isSelected = item[2] == this.state.activeItem

    return (
      <View style={{ width: "30%" }}>

        <Pressable
          onPress={() => this.updateActiveType(item[2])}
        >
          <View style={{ height: 10 }} />
          <View style={{ height: 50, justifyContent: "center", alignItems: "center" }}>
            {this.state.activeItem == item[2] ?
              <Image
                source={FilterBlobSelected}
                style={{ position: "absolute", width: "100%", height: 50, resizeMode: "contain" }}
              />
              :
              <Image
                source={FilterBlob}
                style={{ position: "absolute", width: "100%", height: 50, resizeMode: "contain" }}
              />
            }
            <Image
              source={item[1]}
              style={{ width: "100%", height: 30, resizeMode: "contain" }}
            />
          </View>
          <View style={{ height: 10 }} />
          <Text style={{ fontFamily: "Montserrat", fontSize: 14, fontWeight: isSelected ? "600" : "400" }}>
            {item[0]}
          </Text>
          <View style={{ height: 10 }} />
        </Pressable>
      </View>
    )
  }

  generateRow(item0, item1, item2) {
    return (
      <View style={{ alignSelf: "center", width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
        {item0 && this.generateItem(item0)}
        {item1 && this.generateItem(item1)}
        {item2 && this.generateItem(item2)}
      </View>
    )
  }

  updateActiveType(newActive) {
    if (this.state.activeItem != newActive)
      this.setState({ activeItem: newActive })
    else
      this.setState({ activeItem: "" })
  }

  componentDidMount() {
this.setState({
  activeItem:this.props.activeFilter
})
  }

  closeModal(type) {
    if(!this.state.activeItem && type=="CLOSE"){
    this.props.changeActiveFilter("")
    }
    else{
      if(!!this.state.activeItem && type=="SAVE")
      this.props.changeActiveFilter(this.state.activeItem)
    }
    window.scrollTo(0, 0)
    this.setState({
      activeFront: false
    }, () =>
      Animated.timing(this.state.modalOpacity, {
        toValue: 0,
        duration: 300
      }).start(() => 
      this.props.toggleModal())
    )

  }

  render() {

    //using length will raise an error inside render function
    const anyOptionSelected = !!this.state.activeItem

    return (
      <Animated.View
        style={{ opacity: this.state.modalOpacity, position: "fixed", top: 0, width: "100%", height: window.innerHeight, backgroundColor: "#ffc244" }}>
        {this.state.activeFront &&
          <View style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff", height: "100%" }}>
            <BigSeparator />

            <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
              Tipos de apps
            </Text>
            <MediumSeparator />
            {this.generateRow(
              dataTemplate[0],
              dataTemplate[1],
              dataTemplate[2]
            )}
            <MediumSeparator />
            {this.generateRow(
              dataTemplate[3],
              dataTemplate[4],
              dataTemplate[5]
            )}

            {!!this.state.activeItem &&
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", bottom: "5%", width: "100%" }}>
                <Pressable
                onPress={()=>this.updateActiveType("")}
                onPress={()=>this.updateActiveType("")}
                 style={{ alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#fff", borderWidth: 1, borderColor: "#00a082", borderRadius: 100 }}>
                  <Text style={{ fontFamily: "Montserrat", color: "#00a082", fontWeight: "700", fontSize: 18 }}>
                    Borrar
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => this.closeModal("SAVE")}
                  onLongPress={() => this.closeModal("SAVE")}
                  style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100 }}>
                  <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18 }}>
                    Guardar
                  </Text>
                </Pressable>
              </View>
            }

            <Pressable
              onPress={() => this.closeModal("CLOSE")}
              onLongPress={() => this.closeModal("CLOSE")}
              style={{ justifyContent: "center", alignItems: "center", position: "absolute", top: 0, right: 0, width: 50, height: 50 }}>
              <Image
                source={Close}
                style={{ width: "100%", height: 20, resizeMode: "contain" }}
              />
            </Pressable>
          </View>
        }
      </Animated.View>


    )
  }
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


export default App;
