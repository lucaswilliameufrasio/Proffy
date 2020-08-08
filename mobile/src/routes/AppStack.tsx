import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../pages/Landing'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen component={Landing} name="Landing" />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
