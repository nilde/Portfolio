import { View, StyleSheet,Animated, Image,Pressable, Text } from "react-native";
import { Component } from "react";
import Made from '../../../images/made.png'
import Skills from '../../../images/skills.png'
import Magic from '../../../images/magic.png'
import Knowledges from '../../../images/knowledges.png'
import More from "../../../images/more.png"
import NextJob from "../../../images/nextJob.png"
import Apps from "../../../images/apps.png"
import Share from "../../../images/share.png"

const TOTAL_WIDTH=window.innerWidth;
const TOTAL_HEIGHT=window.innerHeight
const CIRCULAR=1000
const BUBBLE_SIZE=114

const relations={
  "UX":Skills,
  "Estudios":Knowledges,
  "Cómo se hizo?":Made,
  "Lo que sea":Magic,
  "Buyness":More,
  "Estoy buscando":NextJob,
  "Apps":Apps,
  "Comparte":Share,
}


export default class Bubble extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false,
      startValue:new Animated.Value(1)
    }
  }
 
  scaleIn(){
    Animated.timing(this.state.startValue,{
      toValue:1.1,
      duration:300
    }).start()
  }

  scaleOut(){
    Animated.timing(this.state.startValue,{
      toValue:1,
      duration:300
    }).start()
  }


  manageAppear(){
    Animated.sequence([
    Animated.timing(this.state.startValue,{
      toValue:1.1,
      duration:200
    }),
    Animated.timing(this.state.startValue,{
      toValue:1,
      duration:200
    })]).start()

  }

  componentDidMount(){

    //window.open("localhost:3000", "_blank", `width=${200}, height=${100}`).resizeTo(300, 300);;
    setTimeout(()=>
    this.setState({
      visible:true
    },()=>
    this.manageAppear()
    ),this.props.index*100)
    
  }

  render(){
  return (

<Animated.View style={{
  transform:[{
scale:this.state.startValue
  }]
}}>
{this.state.visible?
    <Pressable 
    
    onHoverIn={()=>this.scaleIn()}
    onHoverOut={()=>this.scaleOut()}

    style={{
      marginHorizontal:10,
      alignSelf:"center",
      justifyContent:"center",
      alignItems:"center",
      boxShadow:"0px 0px 15px rgba(0,0,0,0.2)",
      borderRadius:CIRCULAR,
      width:BUBBLE_SIZE,
    height:BUBBLE_SIZE, 
    backgroundColor:"#fff"}}>
    <View style={{justifyContent:"center",alignItems:"center",width:"50%",height:50}}>
    <Image
              style={{ flex: 1, width: 50, height: 50, resizeMode: "contain" }}
              source={relations[this.props.title]}
            />
    </View>
    <View style={{width:"100%",height:TOTAL_HEIGHT*0.01}}/>
<Text style={{fontFamily:"Montserrat",paddingHorizontal:20, fontWeight:"300",fontSize:TOTAL_WIDTH*0.022}}>
  {this.props.title}
</Text>
    </Pressable>:
    <View style={{  width:BUBBLE_SIZE,
    height:BUBBLE_SIZE, }}/>
    }
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

