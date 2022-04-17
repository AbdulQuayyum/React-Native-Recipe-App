import React from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from 'react-native'
import { BlurView } from '@react-native-community/blur'

import { SIZES,COLORS, icons, FONTS } from '../constants'

const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View
           style={{
               flex:1
           }}
        >

            {/* Name & Bookmark */}


            <View>
                
            </View>


            {/* Duration & Serving */}

        </View>
    )
}

const RecipeCardInfo = ({ recipeItem }) => {
  if (Platform.OS === 'ios') {
      return (
        <BlurView
        blurType="dark"
        style={styles.RecipeCardContainer}
        >
            <recipeCardDetails
            recipeItem={recipeItem}
            />  
        </BlurView>
      )
  } else {
      return (
          <View 
            style={{
                ...styles.RecipeCardContainer,
                backgroundColor: COLORS.transparentDarkGray
            }}
          >
              <RecipeCardDetails
                  recipeItem={recipeItem}
              />

          </View>
      )
  }
}

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
    return (
        <TouchableOpacity
        style={{
            height: 350,
            width: 250,
            marginTop: SIZES.radius,
            marginRight: 20,
            borderRadius: SIZES.radius,
            ...containerStyle
        }}
        onPress={onPress}
        >
           {/* Background Images    */}
           <Image
              source={recipeItem.image}
              resizeMode='cover'
              style={{
                  width: 250,
                  height: 350,
                  borderRadius: SIZES.radius
              }}
           />

            {/* Category */}
            <View
               style= {{
                   position: 'absolute',
                   top: 20,
                   left: 15,
                   paddingHorizontal: SIZES.radius,
                   paddingVertical: 5,
                   backgroundColor: COLORS.transparentGray,
                   borderRadius: SIZES.radius
               }}
            >
               <Text
                  style={{
                      color: COLORS.white,
                      ...FONTS.h4
                  }}
               >
                    {recipeItem.category}
               </Text>
            </View>

             {/* Card Info */}
             <RecipeCardInfo
                 recipeItem={recipeItem}
             />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    RecipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})

export default TrendingCard