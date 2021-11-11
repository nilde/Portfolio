import { View, StyleSheet, Animated, Image, Pressable, Text } from "react-native";
import { Component } from "react";
import LittleSeparator from '../LittleSeparator'
import BigSeparator from '../BigSeparator'
import AppDetailsScreenItemSearch from './AppDetailScreenItemSearch'
import NotFoundSearch from '../../../images/not-found-search.svg'
import TopBarAppDetailsSearch from "./TopBarAppDetails/TopBarAppDetailsSearch"

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResults:this.cleanQueryResults(),
      startValueY: new Animated.Value(0),

    }
  }

  scaleIn() {
    Animated.timing(this.state.startValueY, {
      toValue: -10,
      duration: 200
    }).start()
  }

  scaleOut() {
    Animated.timing(this.state.startValueY, {
      toValue: 0,
      duration: 200
    }).start()
  }



 cleanQueryResults(){
  var queryResults=[]
  for (var i=0;i<this.props.queryResults.length;i++){
    if(this.props.queryResults[i] instanceof Array){
      queryResults.push(
        {
          title:this.props.queryResults[i][0],
          subtitle:this.props.queryResults[i][2],
          price:JSON.stringify(this.props.queryResults[i][1])
        }
      )
    }
    else{
      queryResults.push({
        title:Object.keys(this.props.queryResults[i])[0],
        subtitle:Object.values(this.props.queryResults[i])[0],
        price:"-1"
      })
    }
  }
  return queryResults

 }


  render() {

    return (

      <View style={{ position: "absolute", top: 0, backgroundColor: "#fff", height: "100%",width:"100%" }}>
            
            <TopBarAppDetailsSearch {...this.props}/>
            <LittleSeparator />
            <Text style={{ textAlign: "left", marginLeft: "5%", fontFamily: "Montserrat", fontSize: 16, fontWeight: "700" }}>
              {this.props.queryResults.length}  <Text style={{ color: "gray", fontFamily: "Montserrat", fontSize: 16, fontWeight: "400" }}>
                resultados que coinciden con {this.props.query}
              </Text>
            </Text>

          {this.state.queryResults.map((item,index)=>(
            <AppDetailsScreenItemSearch
              item={{}}
              query={this.props.query}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              manageItemPress={this.manageItemPress}


            />
          ))
            
          }

          </View>

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

