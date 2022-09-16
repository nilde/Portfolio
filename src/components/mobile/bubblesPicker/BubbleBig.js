import { View, StyleSheet,Animated, Image,Pressable, Text } from "react-native";
import { Component } from "react";
import Made from '../../../images/made.png'
import Skills from '../../../images/skills.png'
import Magic from '../../../images/magic.png'
import Knowledges from '../../../images/knowledges.png'

const TOTAL_WIDTH=window.innerWidth;
const TOTAL_HEIGHT=window.innerHeight
const CIRCULAR=1000
const BUBBLE_SIZE=120

const relations={
  "UX":Skills,
  "Estudios":Knowledges,
  "Cómo se hizo?":Made,
  "Lo que sea":Magic
}


export default class Bubble extends Component {
  constructor(props){
    super(props);
    this.state={
      startValue:new Animated.Value(1)
    }
  }
 
  scaleIn(){
    Animated.timing(this.state.startValue,{
      toValue:1.15,
      duration:300
    }).start()
  }

  scaleOut(){
    Animated.timing(this.state.startValue,{
      toValue:1,
      duration:300
    }).start()
  }


  render(){
  return (

<Animated.View style={{
  position: "absolute",
        alignSelf: "center",
  transform:[{
scale:this.state.startValue
  }]
}}>
    <Pressable 
    onPress={(e)=>{
      this.props.toggleActiveScreen("whatEver");
      window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();}}
    onLongPress={(e)=>{
      this.props.toggleActiveScreen("whatEver")
      window.location.href = "mailto:nildomene@gmail.com";
                e.preventDefault();}}
    
    onHoverIn={()=>this.scaleIn()}
    onHoverOut={()=>this.scaleOut()}

    style={{

      justifyContent:"center",
      alignItems:"center",
      boxShadow:"0px 0px 15px rgba(0,0,0,0.2)",
      borderRadius:CIRCULAR,
      width:BUBBLE_SIZE,
    height:BUBBLE_SIZE, 
    backgroundColor:"#fff"}}>
    <View style={{justifyContent:"center",alignItems:"center",width:"50%",height:60}}>
    <Image
              style={{ flex: 1, width: 60, height: 60, resizeMode: "contain" }}
              source={relations[this.props.title]}
            />
    </View>
    <View style={{width:"100%",height:TOTAL_HEIGHT*0.01}}/>
<Text style={{fontFamily:"Montserrat",fontWeight:"400",fontSize:14}}>
  {this.props.title}
</Text>
<View style={{width:"100%",height:20}}/>
    </Pressable>
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

