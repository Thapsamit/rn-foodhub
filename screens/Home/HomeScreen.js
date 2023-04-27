import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaStyle } from "../../utils/SafeArea.component";
import { COLORS, images } from "../../constants/index";
import { styles } from "./home.style";

import { EvilIcons, FontAwesome } from "react-native-vector-icons";
import Search from "../../components/search/search.component";
import Categories from "../../components/categories/categories.component";

const HomeScreen = () => {
  return (
    <SafeAreaView style={SafeAreaStyle.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={images.profile} style={styles.imageHolder} />
          <View style={styles.headerTitles}>
            <Text style={styles.headerTxtMain}>Deliver Now!</Text>
            <View style={styles.locationWrap}>
              <Text style={styles.headerTxtSub}>Current Location</Text>
              <EvilIcons name="chevron-down" style={styles.icon} />
            </View>
          </View>
          <FontAwesome name="user" style={styles.userIcon} />
        </View>

        <Search />
        <ScrollView>
          <Categories />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
