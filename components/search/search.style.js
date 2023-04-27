import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: COLORS.lightDark,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    fontSize: 30,
    color: COLORS.darkWhite,
    marginRight: 10,
  },
  input: {
    width: "100%",
    fontSize: 13,
  },
});
