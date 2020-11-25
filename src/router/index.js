import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, LoginRegister, Splash } from '../screen'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}> 
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginRegister" component={LoginRegister} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}



export default Router