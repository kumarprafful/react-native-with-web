import React from 'react';
import { Text, View } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainNavigator from './src/redux/navigators';
import reducers from './src/redux/reducers';

function App() {

    const store = createStore(reducers);

    return (
        <Provider
            store={store}
        >
            <MainNavigator />
        </Provider>
    )
}

export default App;
