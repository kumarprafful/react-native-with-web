import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../../screens/IndexScreen';
import DoctorScreen from '../../screens/DoctorScreen';


function MainNavigator() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="index"
                    component={IndexScreen}
                />
                <Stack.Screen
                    name="doctor"
                    component={DoctorScreen}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainNavigator;