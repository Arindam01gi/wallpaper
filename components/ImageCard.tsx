import { useState } from "react";
import type { Wallpaper } from "@/hooks/useWallpaper";
import { View ,Image,StyleSheet, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export function ImageCard({wallpaper ,onPress} : {
    wallpaper: Wallpaper
    onPress :() => void
}) {
    const [isLiked,setIsLiked] = useState(false)
    return(
        <Pressable onPress={onPress}>
            <View>
            <Image  source = {{uri: wallpaper.url}} style= {styles.image}/>  
            <View style={styles.labelContainer}>
            <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
            <Pressable onPress={() => setIsLiked(!isLiked)}>
            <AntDesign 
              name={isLiked ? 'heart' : 'hearto'} 
              size={20} 
              color={isLiked ? 'red' : 'white'} 
            />
            </Pressable>
            </View>
        </View>

        </Pressable>
        
    )
}


const styles = StyleSheet.create({
   image:{
    //  flex:1,
    //  height: 300,
    width:"100%",
    aspectRatio: 1,
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