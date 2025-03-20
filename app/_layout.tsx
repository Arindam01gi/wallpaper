import { Slot, Stack } from "expo-router"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"


const RootLayout = () =>{
    return(
       <GestureHandlerRootView>
          <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="accountInfo" options={{headerShown:true ,headerTitle:"Account Info"}} />
            </Stack>
       </GestureHandlerRootView>
    )
}

export default RootLayout