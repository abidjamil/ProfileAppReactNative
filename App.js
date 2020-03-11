
import React from 'react';
import {Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/ProfileScreen';
import Experience from './screens/Experience';
import Skills from './screens/skills';
import Splash from './screens/Splash';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
    return (

    <Drawer.Navigator
    side = "right"
     drawerPosition= "left"
    initialRouteName="Splash"
        screenOptions={{
          gestureEnabled: true
        }}
        screenOptions={{
          headerShown: true
        }}>
        
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Experience" component={Experience} />
      <Drawer.Screen name="Skills" component={Skills} />
  
    </Drawer.Navigator>  
  );
}

function MStack() {
  return (
  <NavigationContainer>
  <Stack.Navigator
  side = "right"
   drawerPosition= "left"
  initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: true
      }}
      screenOptions={{
        headerShown: false
      }}>
      
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="MyDrawer" component={MyDrawer} />

  </Stack.Navigator>
</NavigationContainer>   
);
}

export default MStack


// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator 
//     initialRouteName="Home"
//     screenOptions={{
//       gestureEnabled: true
//     }}
//     screenOptions={{
//       headerShown: false
//     }}>
//       <Stack.Screen 
//              name ="Home" 
//              component = {Home}
//             />
//       </Stack.Navigator>
//       </NavigationContainer>
//   )
// }
// export default App;
