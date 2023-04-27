import { StatusBar, Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants";
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const SafeAreaStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: COLORS.lightDark,
  },
});
