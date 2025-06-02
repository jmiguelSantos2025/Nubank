import { MaterialCommunityIcons,FontAwesome, Ionicons, MaterialIcons, Entypo} from '@expo/vector-icons';

import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#810AD0', 
        tabBarInactiveTintColor: '#F0F1F5', 
        headerShown: false, 
      }}
    >
      <Tabs.Screen
        name="Tela1/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="swap-vertical-bold" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tela2/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tela3/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
