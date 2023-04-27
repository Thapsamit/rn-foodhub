import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./categoriescard.style";
const CategoryCard = ({ picUrl, categoryName }) => {
  return (
    <TouchableOpacity style={styles.cards}>
      <View style={styles.overlay}></View>
      <Image source={{ uri: picUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.cardText}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
