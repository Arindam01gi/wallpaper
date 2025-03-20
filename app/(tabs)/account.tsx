import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DownloadPicture from '@/components/DownloadPicture'
import { SafeAreaView } from 'react-native-safe-area-context'

const Account = () => {
  const [openPicture,setOpenPicture] = useState(false)
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flex:1}}>
      <Text>account</Text>
       <Button title='Open Bottom Sheet' onPress={() =>(
        setOpenPicture(true)
       )}>

       </Button>
      {
        openPicture && <DownloadPicture onClose={() => setOpenPicture(false)}/>
      }
    </View>
    </SafeAreaView>
  )
}

export default Account