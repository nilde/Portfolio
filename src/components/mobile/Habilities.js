//Framework imports
import { Component } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";

//Component imports
import BigSeparator from './BigSeparator';
import MediumSeparator from './MediumSeparator';
import Close from '../../images/close.svg'
import FigmaEmbed from 'react-figma-embed';
import Cap1 from '../../images/cap1.png'
import Cap2 from '../../images/cap2.png'
import Cap3 from '../../images/cap3.png'
import Cap4 from '../../images/cap4.png'
import Cap5 from '../../images/cap5.png'
import Cap6 from '../../images/cap6.png'
import Cap7 from '../../images/cap7.png'

//[title,image,state_managment]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: "",
      activeFront: true,
      modalOpacity: new Animated.Value(1),
      activeMore: false
    }
    window.scrollTo(0, 0)
  }



  updateActiveType(newActive) {
    if (this.state.activeType != newActive)
      this.setState({ activeType: newActive })
    else
      this.setState({ activeType: "" })
  }

  componentDidMount() {

  }

  closeModal() {
    this.setState({
      activeFront: false
    }, () =>
      Animated.timing(this.state.modalOpacity, {
        toValue: 0,
        duration: 300
      }).start(() => this.props.toggleActiveScreen("habilities"))
    )

  }

  render() {

    //using length will raise an error inside render function

    return (
      <Animated.View
        style={{ overflowY: "scroll", opacity: this.state.modalOpacity, position: "fixed", top: 0, width: "100%", height: "100%", backgroundColor: "#ffc244" }}>
        {this.state.activeFront &&
          <View style={{ position: "absolute", top: 0, width: "100%", backgroundColor: "#fff" }}>
            <BigSeparator />

            <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
              Prototipos UX
            </Text>
            <MediumSeparator />
            <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14, fontWeight: "400", color: "gray" }}>
              A continuación pueden verse algunos de los prototipos que he realizado durante el máster. Pulsa en alguna de las imágenes para ver los prototipos en la propia página de Figma.
            </Text>

            <MediumSeparator />

            <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
              <Image
                source={Cap1}
                style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
              />
              <Pressable
                onPress={() => { window.open("https://www.figma.com/file/N9P5QcLYM7jb2iO3EUTdjU/23", '_blank'); }}
                onLongPress={() => { window.open("https://www.figma.com/file/N9P5QcLYM7jb2iO3EUTdjU/23", '_blank'); }}
                style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

              </Pressable>
            </View>
            <MediumSeparator />
            <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
              <Image
                source={Cap2}
                style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
              />
              <Pressable
                onPress={() => { window.open("https://www.figma.com/file/vNQ5NRn1YgCvS3hVtBsYzM/Untitled-2", '_blank'); }}
                onLongPress={() => { window.open("https://www.figma.com/file/vNQ5NRn1YgCvS3hVtBsYzM/Untitled-2", '_blank'); }}
                style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

              </Pressable>
            </View>
            <MediumSeparator />
            <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
              <Image
                source={Cap4}
                style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
              />
              <Pressable
                onPress={() => { window.open("https://www.figma.com/file/t9iq7ET2hbCBOMzeLSDx2v/PEC2", '_blank'); }}
                onLongPress={() => { window.open("https://www.figma.com/file/t9iq7ET2hbCBOMzeLSDx2v/PEC2", '_blank'); }}
                style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

              </Pressable>
            </View>
            <MediumSeparator />
            {!this.state.activeMore &&

              <>
                <MediumSeparator />
                <Pressable
                  onPress={() => this.setState({ activeMore: true })}
                  onLongPress={() => this.setState({ activeMore: true })}
                  style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100, width: "90%" }}>
                  <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 16 }}>
                    Ver más
                  </Text>
                </Pressable>
              </>
            }
            {this.state.activeMore &&
              <>
                <MediumSeparator />
                <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
                  <Image
                    source={Cap3}
                    style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                  <Pressable
                    onPress={() => { window.open("https://www.figma.com/file/M1F3pI6MyuFtNMZxVFqgtQ/Untitled", '_blank'); }}
                    onLongPress={() => { window.open("https://www.figma.com/file/M1F3pI6MyuFtNMZxVFqgtQ/Untitled", '_blank'); }}
                    style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

                  </Pressable>
                </View>
                <MediumSeparator />
                <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
                  <Image
                    source={Cap5}
                    style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                  <Pressable
                    onPress={() => { window.open("https://www.figma.com/file/AVPxWE0BBedhQViSu0mKYy/Untitled", '_blank'); }}
                    onLongPress={() => { window.open("https://www.figma.com/file/AVPxWE0BBedhQViSu0mKYy/Untitled", '_blank'); }}
                    style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

                  </Pressable>
                </View>
                <MediumSeparator />
                <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
                  <Image
                    source={Cap6}
                    style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                  <Pressable
                    onPress={() => { window.open("https://www.figma.com/file/pi6J8uduXhapfdRr3zvllo/Interfaces-3", '_blank'); }}
                    onLongPress={() => { window.open("https://www.figma.com/file/pi6J8uduXhapfdRr3zvllo/Interfaces-3", '_blank'); }}
                    style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

                  </Pressable>
                </View>
                <MediumSeparator />
                <View style={{ width: "90%", alignSelf: "center", height: 300, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
                  <Image
                    source={Cap7}
                    style={{ borderRadius: 10, position: "absolute", width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                  <Pressable
                    onPress={() => { window.open("https://www.figma.com/file/OjnGg7t7wzwIEWvca6geJg/TFM", '_blank'); }}
                    onLongPress={() => { window.open("https://www.figma.com/file/OjnGg7t7wzwIEWvca6geJg/TFM", '_blank'); }}
                    style={{ width: "100%", height: "100%", backgroundColor: "transparent", borderRadius: 10 }}>

                  </Pressable>
                </View>
                <MediumSeparator />
              </>
            }

            <BigSeparator />
            <Pressable
              onPress={() => this.closeModal()}
              onLongPress={() => this.closeModal()}
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




export default App;
