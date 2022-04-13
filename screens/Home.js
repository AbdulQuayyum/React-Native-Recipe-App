import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Recipe")}
            >
                <Text>Navigate to Recipe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;