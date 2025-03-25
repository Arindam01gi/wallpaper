import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpaper';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const DownloadPicture = ({onClose ,wallpaper}: {
  onClose: () => void,
  wallpaper : Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  // Hide bottom tab bar when BottomSheet opens
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });

    // Show bottom tab bar when BottomSheet closes
    return () => {
      navigation.setOptions({
        tabBarStyle: { display: 'flex' }
      });
    };
  }, [navigation]);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

 const handleDownload =async () =>{
  try{
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please grant permission to save images');
      return;
    }
     // Download the file
     const fileUri = FileSystem.documentDirectory + `${wallpaper.name}.jpg`;
     const { uri } = await FileSystem.downloadAsync(
       wallpaper.url,
       fileUri
     );

     // Save to gallery
     const asset = await MediaLibrary.createAssetAsync(uri);
     await MediaLibrary.createAlbumAsync('Downloads', asset, false);

     Alert.alert('Success', 'Wallpaper saved to your gallery');
    
  }catch(err){
    console.error("Download Failed",err);
    Alert.alert("Download Failed");
  }
 }
  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['98%']}
        enablePanDownToClose={true}
        onClose={onClose}
        handleComponent={null}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: 'white' }]} />
        )}
      >
        <BottomSheetView style={styles.contentContainer}>
        <Entypo name="circle-with-cross" size={30} color="black" style={styles.iconStyle} onPress={onClose}/>
          <Image
            style={styles.image}
            source={{ uri: wallpaper.url }}
            resizeMode="cover"
          />
          <Text style={styles.text}> {wallpaper.name.charAt(0).toUpperCase() + wallpaper.name.slice(1)} </Text>
          <View style={ styles.buttonContainer }>
             <TouchableOpacity
               style={styles.customButton}
               onPress={handleDownload}
             >
               <Ionicons name="image-outline" size={24} color="white" />
               <Text style={styles.buttonText}>Get Wallpaper</Text>
             </TouchableOpacity>
          </View>

          <View style={styles.userContainer}>
            <Image
              style={styles.userImage}
              source={{ uri: wallpaper?.userImage }}
              resizeMode="cover"
            />
            <Text style={styles.userName}>{wallpaper.user.charAt(0).toUpperCase() + wallpaper.name.slice(1)}</Text>
          </View>
          <View style={styles.metricsContainer}>
          {/* <AntDesign name="clouddownload" size={30} color="black" /> */}
            <Text style={styles.userName} >Downloads : {wallpaper.downloads}</Text>
          </View>
          <View style={styles.metricsContainer}>
          {/* <AntDesign name="clouddownload" size={30} color="black" /> */}
          <Text style={styles.userName} >Likes : {wallpaper.likes}</Text>
          </View>
          <View style={styles.metricsContainer}>
          {/* <AntDesign name="clouddownload" size={30} color="black" /> */}
          <Text style={styles.userName} >Resolution : {wallpaper.imageWidth} x {wallpaper.imageHeight}</Text>
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
    padding: 0,
    margin: 0,
  },
  image: {
    width: '100%',
    height: 400,
    aspectRatio: 1/1,
    // borderRadius:10,
    borderTopEndRadius:10
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
    fontSize:24,
    fontFamily: "Inter_bold",
    fontWeight: '800'
  },
  iconStyle:{
    position:'absolute',
    zIndex: 10,
    paddingHorizontal : 10,
    paddingVertical:10,
    color:'white'
  },
  buttonContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: '#333', 
    borderRadius: 5,
    overflow: 'hidden',
    paddingVertical: 10,
  },
  customButton: {
    marginHorizontal: 30,
    // marginVertical: 20,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'none',
    marginLeft:10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    gap: 20,
    fontSize:16
  },
});

export default DownloadPicture;