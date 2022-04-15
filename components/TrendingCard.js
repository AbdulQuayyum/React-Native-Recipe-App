import React from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from 'react-native'

import { SIZES,COLORS, icons } from '../constants'

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
    return (
        <TouchableOpacity>
           <Text>
               {recipeItem.name}
           </Text>   
        </TouchableOpacity>
    )
}