import { View, StyleSheet, Image, Text, Pressable,Animated,TextInput } from "react-native";
import BigSeparator from '../BigSeparator';
import BigTitle from '../BigTitle';
import GreenLogoAlone from '../../../images/greenLogoAlone.png';
import Sticky from 'react-stickynode';
import { Component } from "react";
import Icon from '../../../images/profile_new.svg';
import Search from '../../../images/search-new.svg'



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
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
  openProfileMenu() {
    window.scrollTo(0,0)
    this.props.lateralMenuRef.current.openModal()
  }
  updateSearch(query){
    window.scrollTo(0,0)
    this.props.updateQuery(query)
  }


  render() {
    const offsetSearchIcon=-this.state.barSize/2+(this.state.barSize*0.1)
    return (
      <View style={{ alignItems: "center", width: "100%"}}>
        <View style={{ width: "100%", height: 10 }} />
        <View style={[styles.topBar]}>
       
          <View style={[styles.topBarLogo]}>
            <Image
              style={{width: 35, height: 35, resizeMode: "contain" }}
              source={GreenLogoAlone}
            />

          </View>
        <View style={{flexDirection:"row",width:"70%",marginHorizontal:"5%",alignItems:"center"}}>
        <Pressable 
        onLayout={(e)=>this.setState({barSize:e.nativeEvent.layout.width})}
        onPress={()=>this.moveBarToLeft()}
        style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: "#fff", height: 40, borderRadius: 100,overflow:"hidden" }}
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
            placeholder={""}
            placeholderTextColor={"gray"}
          />
        }
        </Pressable>

          
          </View>
          <Pressable
            onPress={() => this.openProfileMenu()}
            onLongPress={() => this.openProfileMenu()}

            style={{ justifyContent: "center", alignItems: "center", width:"5%", paddingVertical: 12, borderRadius: 100 }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={Icon}
            />

          </Pressable>

        </View>
        <View style={{ width: "100%", height: 10 }} />


      </View>







    )
  }

}


var styles = StyleSheet.create({

  topBar: {
    backgroundColor: "#ffc244",
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"flex-start",
    height: 50,
    width: "100%"
  },
  topBarLittle: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: "100%"


  },
  topBarLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: "5%",
    height: "100%",
    marginLeft:"5%"
  


  },
  topBarBig: {
    justifyContent: "center",
    alignItems: "center",
    width: window.innerWidth * 0.4,
    height: "100%",

  }
})


