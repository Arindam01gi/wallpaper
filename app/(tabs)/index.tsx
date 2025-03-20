// https://ideogram.ai/assets/image/lossless/response/Yx_5cuNqT2u6hcfUnoqCCA
//https://ideogram.ai/assets/progressive-image/balanced/response/UgGrTdZUSkeAUvGYdSBcIw

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useWallpaper, Wallpaper } from '@/hooks/useWallpaper'
import { ImageCard } from '@/components/ImageCard'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window');

const Explore = () => {
  const { wallpapers, loading, error } = useWallpaper();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1}}>
        <ParallaxScrollView
          headerBackgroundColor={{ dark: '#1D3D47', light: '#D0D0D0' }}
          headerImage={
            <Image
              style={{ width, height: width }}
              source={{ uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/UgGrTdZUSkeAUvGYdSBcIw' }}
              resizeMode="cover"
            />
          }
        >
          <View>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Explore Page</Text>
            
            <View style={styles.imageContainer}>
              {wallpapers.map((w: Wallpaper, index) => (
                <View style={styles.imageWrapper} key={index}>
                  <ImageCard wallpaper={w} />
                </View>
              ))}
            </View>
          </View>
        </ParallaxScrollView>
      </View>

      {/* <Link href={"/accountInfo"}>
        <Text> Go to account info</Text>
      </Link> */}


    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between"
  },
  imageWrapper: {
    width: '48%', 
    marginBottom: 10,
    gap : 10
  }
})