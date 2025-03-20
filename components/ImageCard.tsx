import type { Wallpaper } from "@/hooks/useWallpaper";
import { View ,Image,StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export function ImageCard({wallpaper} : {
    wallpaper: Wallpaper
}) {
    return(
        <View>
            <Image  source = {{uri: wallpaper.url}} style= {styles.image}/>  
            <View style={styles.labelContainer}>
            <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
            <AntDesign name="hearto" size={20} color="white" />
            {/* <Entypo name="heart" size={24} color="red" /> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   image:{
     flex:1,
     height: 300,
     padding:10,
     borderRadius:5
   },
   labelContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    position :'absolute',
    width:"100%",
    bottom: 0,
    paddingHorizontal : 10,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:5
   },
   label:{
    color:'white',
   }
})