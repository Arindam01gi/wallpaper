import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpaper';

const DownloadPicture = ({onClose ,wallpaper}: {
  onClose: () => void,
  wallpaper : Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { width } = Dimensions.get('window');

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  console.log(wallpaper.url)

  // renders
  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['95%']}
        enablePanDownToClose={true}
        onClose={onClose}
        handleIndicatorStyle={styles.headerIndicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          
          <View style={{margin:-16}}>
          <Image
              // style={{width:350,height: 300 }}
              style = {styles.image}
              source={{ uri: wallpaper.url }}
              resizeMode="cover"
            />

          <Text>Awesome 🎉</Text>

          </View>
            
        </BottomSheetView>
      </BottomSheet>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    borderWidth:2,
    borderColor:"red"
  },
  headerIndicator:{
    height:0
  },
  image:{
    // flex : 1,
   height:300,
   width:350
  }
});

export default DownloadPicture;