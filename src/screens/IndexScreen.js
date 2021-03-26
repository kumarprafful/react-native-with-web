import React from 'react';
import { Button, Platform, Text, View } from "react-native";

function IndexScreen({
    navigation,
    ...props
}) {
    // const navigator = useNavigation()
    console.log('navigator', props,  Platform.OS )

    // use this link to configure navigtion in browsers https://reactnavigation.org/docs/configuring-links/

    return (
        <View
            style={{
                width: '60%'
            }}
        >
            <Text>
                Hello World
            </Text>
            {
                Platform.OS === 'web'
                    ?
                    <a
                        href="doctor"
                    >
                        Doctor
                    </a>
                    :
                    <Button
                        onPress={() => navigation.navigate('doctor')}
                        title="Doctor"
                    />
            }
        </View>
    )
}

export default IndexScreen;