import { View, StyleSheet, Image, Text, Pressable, TextInput, Animated } from "react-native";
import BigSeparator from '../BigSeparator';
import BigTitle from '../BigTitle';
import GreenLogo from '../../../images/greenLogo.png';
import Sticky from 'react-stickynode';
import { Component } from "react";
import Icon from '../../../images/profile_new.svg'
import Close from '../../../images/close.svg'
import Search from '../../../images/search-new.svg'

const TOTAL_WIDTH = window.innerWidth;
const TOTAL_HEIGHT = window.innerHeight

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      query: "",
      activeSearch:false,
      offsetBar: new Animated.Value(0)
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

  openProfileMenu() {
    window.scrollTo(0,0)
    this.props.lateralMenuRef.current.openModal()
  }


  moveBarToRight(){
    this.setState({activeSearch:false},()=>
    Animated.timing(this.state.offsetBar,{
      duration:600,
      toValue:0
    }).start()
    )
  }
  moveBarToLeft(){
    this.setState({activeSearch:true},()=>
    Animated.timing(this.state.offsetBar,{
      duration:300,
      toValue:1
    }).start()
    )
  }

  updateSearch(query){
    window.scrollTo(0,0)
    this.props.updateQuery(query)
  }


  render() {
const offsetSearchIcon=-this.state.barSize/2+(this.state.barSize*0.1)

    return (
      <View style={{ alignItems: "center", width: "100%" }}>
        <View style={{ width: "100%", height: 10 }} />
        <View style={[styles.topBar]}>
          <View style={[styles.topBarLittle]}>
            <Image
              style={{ width: 40, height: 30, resizeMode: "contain" }}
              source={GreenLogo}
            />

          </View>


          <Pressable
            onPress={() => this.openProfileMenu()}
            onLongPress={() => this.openProfileMenu()}

            style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 28, paddingVertical: 12, borderRadius: 100 }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={Icon}
            />

          </Pressable>



        </View>
        <View style={{ width: "100%", height: 20 }} />
        <Pressable 
        onLayout={(e)=>this.setState({barSize:e.nativeEvent.layout.width})}
        onPress={()=>this.moveBarToLeft()}
        style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "center", width: "90%", backgroundColor: "#fff", height: 40, borderRadius: 100,overflow:"hidden" }}
        >
        <Animated.View
        style={{
              transform: [{
                translateX: this.state.offsetBar.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,offsetSearchIcon]
                }),
              }],
              position:"absolute",
              alignSelf:"center",
              justifyContent:"center",
              alignItems:"center",

              width:"100%",flexDirection:"row"
        }}
        >
          <View
            style={{flexDirection:"row", width: "10%", height: "100%", justifyContent: "center", alignItems: "center"
            }}>
            <Image
              style={{ width: 15, height: 15, resizeMode: "contain" }}
              source={Search}
            />
            {!this.state.activeSearch &&
            <Text  style={{fontWeight: "400", fontFamily: "Montserrat",color:"gray",marginLeft:10 }}
           >
              Buscar
            </Text>
            }
          </View>
         

        </Animated.View>
        {
          this.state.activeSearch &&

        <TextInput
          onFocus={()=>this.moveBarToLeft()}
          onBlur={()=>this.moveBarToRight()}
            autoFocus

            value={this.state.query}
            onChangeText={(t) => this.updateSearch(t)}
            style={{position:"absolute",marginLeft:"15%", alignSelf:"center", height: "100%", outline: "none", width: "75%", fontWeight: "400", fontFamily: "Montserrat" }}
            placeholder={this.props.query}
            placeholderTextColor={"gray"}
          />
        }
        </Pressable>


      </View>






    )
  }

}


var styles = StyleSheet.create({

  topBar: {

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
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


