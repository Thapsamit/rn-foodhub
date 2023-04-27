import { View, Text, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "react-native-vector-icons";
import { styles } from "./search.style";
import { COLORS } from "../../constants";
const Search = () => {
  return (
    <View>
      <View style={styles.searchBox}>
        <EvilIcons name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Dish"
          placeholderTextColor={COLORS.darkWhite}
        />
      </View>
    </View>
  );
};

export default Search;
