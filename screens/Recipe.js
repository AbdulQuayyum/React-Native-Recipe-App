import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { SIZES, FONTS, COLORS, icons } from "../constants"

const HEADER_HEIGHT = 350;

const Recipe = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)

    React.useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])

    return (
        <View
            style={{ 
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Animated.FlatList
            data={selectedRecipe?.ingredients}
            keyExtractor={item =>`${item.id}`}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View></View>
            }
            scrollEventThrottle={16}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: scrollY } } }
            ], { useNativeDriver: true } )}
            />
        </View>
    )
}

export default Recipe;