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

    function renderHeader() {
        return (
            <View
              style={{
                  flexDirection: 'row',
                  marginHorizontal: SIZES.padding,
                  alignItems: 'center',
                  height: 80
              }}
            >
  
              {/* Text */}
              <View
              style={{
                  flex:1,
              }}>
                  <Text 
                     style={{
                         color: COLORS.darkGreen,
                         ...FONTS.h2
                     }}
                  >
                      Hello Customers,
                  </Text>

                  <Text
                     style={{
                         marginTop:3,
                         color: COLORS.gray,
                         ...FONTS.body3
                     }}
                  >
                      What you want to cook today?
                  </Text>
              </View>

              {/* Image */}
              <TouchableOpacity
                  onPress={() => console.log("Profile") }
              >
                  <Image
                  source={images.profile}
                  style={{
                      width:40,
                      height:40,
                      borderRadius:20
                  }}
                  />

              </TouchableOpacity>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <view
            style={{
                flexdirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: Sizes.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
                
            }}
      >
          <Image
              source={icons.search}
              style={{
                  width: 20,
                  height:20,
                  tintColor: COLORS.gray
              }}
          />

          <TextInput
             style={{
                 marginLeft: SIZES.radius,
                 ...FONTS.body3
             }}
             placeholderTextColor={COLORS.gray}
             placeholder="Search Recipes"
          />
            </view>
        )
    }

          function renderSeeRecipeCard() {
              return (
                  <View
                     style={{
                         flexDirection: 'row',
                         marginTop: SIZES.padding,
                         marginHorizontal: SIZES.padding,
                         borderRadius: 10,
                         backgroundColor: COLORS.lightGreen
                     }}
                  >
                      {/* Image */}
                      <View
                         style={{
                             width: 100,
                             alignItems: 'center',
                             justifyContent: 'center'
                         }}
                      >
                          <Image
                             source={images.recipe}
                             style={{
                                 width: 80,
                                 height: 80
                             }}
                          />
                      </View>

                      {/* Text */}
                      <View
                         style={{
                             flex: 1,
                             paddingVertical: SIZES.radius
                         }}
                      >
                          <Text
                            style={{
                                width: "70%",
                                ...FONTS.body4
                            }}
                          >  
                              You have 12 recipes that you have not tried yet
                          </Text>
                         

                         <TouchableOpacity
                          style={{
                              marginTop: 10
                          }}
                          onPress={() => console.log("See Recipes")}
                         >
                             <Text 
                             style={{
                                 color: COLORS.darkGreen,
                                 textDecorationLine: 'underline',
                                 ...FONTS.h4
                             }}> 
                                   See Recipes
                             </Text>

                         </TouchableOpacity>
                      </View>
                    </View>
              )
          }

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
                 <View>
                     {/* Header */}
                     {renderHeader()}

                     {/* Search Bar */}
                    { renderSearchBar()}

                     {/* See Recipe Card */}
                     {/* Trending Section */}
                     {/* Category Head */}
                 </View>
             }
             renderItem={({item}) => {
                 return (
                  <CategoryCard
                  containerStyle={{
                      marginHorizontal: SIZES.padding
                  }}
                      CategoryItem={item}
                      onPress={() => navigation.navigate 
                    ("Recipe", { recipe: item})}
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