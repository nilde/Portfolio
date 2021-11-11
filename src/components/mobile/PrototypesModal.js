import { View, SectionList, StyleSheet, Text, Pressable } from "react-native";
import BigSeparator from './BigSeparator'
import MediumSeparator from './MediumSeparator'
import PrototypesModalImageBox from './PrototypesModalImageBox'

import info from '../../PrototypesVideos/PrototypesVideo'

const DATA = [

  {
    title: "Urbis",
    data: info[0].data
  },
  {
    title: "TakeAway",
    data: info[1].data
  },
  {
    title: "Otros proyectos",
    data: info[2].data,
  },
]

var sections=["Urbis","TakeAway","Otros proyectos"]

function App(props) {

  function renderSectionSeparator() {
    return (
      <View >
      </View>
    )
  }
  function renderListHeader() {
    return (
      <View >
      </View>
    )
  }
  function renderListFooter() {
    return (
      <View >
      </View>
    )
  }
  function renderSectionHeader(item) {

    return (
      <View >
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 20, fontWeight: "700" }}>
        {item.section.title}
      </Text>
      <MediumSeparator />
      </View>
    )
  }
  function renderItem(item) {
  
    return (
      <View style={{overflow:"hidden"}}>
        {
          item.index == 0 ?

          <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 14,  fontWeight: "400",color:"#000" }}>

            {info[sections.indexOf(item.section.title)].short_description}
            </Text>
            :
            <View>
            <PrototypesModalImageBox
            align={item.index%2==0?"RIGHT":"LEFT"}
            width={item.item.width}
            height={item.item.height}
            margin={item.item.margin}
            video={!item.item.content.includes("https")}
            source={item.item.content}
            
            />
            <BigSeparator/>
            </View>
        }
      </View>
    )
  }


  return (
    <View style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff",height:"100%" }}>
    
    <MediumSeparator />
      <Text style={{ textAlign: "left", width: "90%", alignSelf: "center", fontFamily: "Montserrat", fontSize: 24, fontWeight: "700" }}>
        Prototipos
      </Text>
      <MediumSeparator />

      <SectionList
        sections={DATA}
          style={{flex:1}}
        SectionSeparatorComponent={() => renderSectionSeparator()}
        ListHeaderComponent={() => renderListHeader()}
        ListFooterComponent={() => renderListFooter()}
        renderSectionHeader={(item) => renderSectionHeader(item)}
        renderItem={(item) => renderItem(item)}
      />

      <Pressable
        onPress={() => props.toggleActiveScreen("prototypes")}
        onLongPress={() => props.toggleActiveScreen("prototypes")}
        style={{ boxShadow: "0px 2px 5px rgba(0,0,0,0.1)", alignSelf: "center", minWidth: 120, justifyContent: "center", alignItems: "center", paddingHorizontal: 60, paddingVertical: 20, backgroundColor: "#00a082", borderRadius: 100 }}>
        <Text style={{ fontFamily: "Montserrat", color: "#fff", fontWeight: "700", fontSize: 18 }}>
          Cerrar
        </Text>
      </Pressable>
      <MediumSeparator />
    </View>



  );
}


var styles = StyleSheet.create({
  mediumSeparator: {
    width: "100%",
    height: 15
  }
})


export default App;
