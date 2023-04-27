import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../common/cards/categorycard.component";
import { categoriesImages } from "../../constants";
const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categoriesImages.map((category) => (
        <CategoryCard
          key={category.id}
          picUrl={category.picUrl}
          categoryName={category.categoryName}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
