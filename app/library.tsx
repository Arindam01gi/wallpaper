import DownloadPicture from "@/components/DownloadPicture";
import SplitView from "@/components/SplitView";
import { Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { View,Text, SafeAreaView } from "react-native";

 
const Library = () => {
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SplitView 
          onWallpaperSelect={setSelectedWallpaper}
        />
      </SafeAreaView>
    );
  };

  export default Library