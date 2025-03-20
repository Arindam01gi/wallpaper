import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown: false }}>
      <Tabs.Screen
        name="foryou"
        options={{
          title: 'For you',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'explore',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="folder-open" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="account" 
        options={{
            title:"account",
            tabBarIcon:({color})=> <FontAwesome size={28} name="cog" color={color}/>
        }}/>
    </Tabs>
  );
}
