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

import { CategoryCard } from '../components';

const Home = ({ navigation }) => {
    return (
      <SafeAreaView
         style={{
             flex:1,
             backgroundColor:COLORS.white
         }}
      >
          <FlatList
             data={dummyData.categories}
             keyExtractor={item => `${item.id}`}
             keyboardDismissMode="on-drag"
             showsVerticalScrollIndicator={false}
             ListHeaderComponent={
                 <View></View>
             }
             renderItem={({item}) => {
                 return (
                  <CategoryCard
                      CategoryItem={item}
                  />
                     
                 )
             }}
             ListFooterComponent={
                 <View
                     style={{
                         marginBottom: 100
                     }}
                 >
                 </View>
             }
          />

      </SafeAreaView>
    )
}

export default Home;