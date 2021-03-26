import React from 'react';
import { Button, Text, View } from "react-native";

function DoctorScreen({
    navigation,
    ...props
}) {
    return (
        <View>
            <Text>
                Doctor Screen
            </Text>

            <Text>
                Hello World
            </Text>
            <Button 
                onPress={() => navigation.navigate('index')}
                title="Index"
            />
        </View>
    )
}

export default DoctorScreen;