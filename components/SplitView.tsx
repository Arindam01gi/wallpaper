import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useWallpaper, Wallpaper } from '@/hooks/useWallpaper';
import { ImageCard } from './ImageCard';
import DownloadPicture from './DownloadPicture';

interface SplitViewProps {
  onWallpaperSelect: (wallpaper: Wallpaper) => void;
}

const SplitView = ({ onWallpaperSelect }: SplitViewProps) => {
  const { wallpapers, loading, error } = useWallpaper();
  return (
    <>
    <View style={{margin:-16}}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Explore Page</Text>
      
      <View style={styles.imageContainer}>
        {wallpapers.map((w: Wallpaper, index) => (
          <View style={styles.imageWrapper} key={index}>
            <ImageCard wallpaper={w} onPress={() =>{
              console.log('pressed',w.name)
              // setSelectedWallpaper(w);
              onWallpaperSelect(w)
            }}/>
          </View>
        ))}
      </View>
      
    </View>
    

    </>
  )
}

export default SplitView

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: '48%', 
    marginBottom: 10,
    
  }
})