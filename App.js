import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { UnitContext, WorkoutsContext } from './context/Contexts'
import { Icon, PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { useFonts } from "expo-font"
import Workout from "./components/Workout"
import History from "./components/History"
import Settings from "./components/Settings"
import styles from "./style/Style"

export default function App() {
  const [units, setUnits] = useState("kilometers")
  const [workouts, setWorkouts] = useState([])

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text style={styles.loading}><Text>Loading...</Text></Text>
  }

  console.log(workouts)

  return (
    <UnitContext.Provider value={{ units, setUnits }}>
      <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </WorkoutsContext.Provider>
    </UnitContext.Provider>
  )
}

const Tab = createMaterialTopTabNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarPosition='bottom'
        sceneContainerStyle={{ backgroundColor: "#232426" }}
        screenOptions={{
          tabBarActiveTintColor: '#ffffff', 
          tabBarStyle: { backgroundColor: '#232426' }
        }}
      >
        <Tab.Screen
          name='workout'
          options={{ title: 'Workout', tabBarIcon: ({color}) => <Icon color={color} source='plus-box' size={24} /> }}
          component={Workout}
        />
        <Tab.Screen
          name='history'
          options={{ title: 'History', tabBarIcon: ({color}) => <Icon color={color} source='history' size={24} /> }}
          component={History}
        />
        <Tab.Screen
          name='settings'
          options={{ title: 'Settings', tabBarIcon: ({color}) => <Icon color={color} source='cog' size={24} /> }}
          component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
