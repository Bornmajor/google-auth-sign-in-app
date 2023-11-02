
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'
import MyContext from '../context/context'

const StackNav = () => {
    const Stack = createStackNavigator();
    const {isLoggin} = useContext(MyContext)
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
        screenOptions={{
            headerStyle:{backgroundColor:'#4285F4'},
            headerTintColor:'white'
        }}>
            {isLoggin ? 
             <Stack.Screen 
             name='home'
             component={HomeScreen}
             options={{
                title:'Google sign in tutorial'
             }} />
            :
              <Stack.Screen 
             name='login'
             component={LoginScreen}
             options={{
                title:'Login'
             }}
             />
            }
           
           
            
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default StackNav