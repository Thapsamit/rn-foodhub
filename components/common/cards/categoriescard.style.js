import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  cards: {
    marginTop: 20,
    position: "relative",
    marginRight: 10,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  cardText: {
    position: "absolute",
    color: COLORS.white,
    bottom: 0,
    textTransform: "uppercase",
    paddingHorizontal: 10,
    zIndex: 10,
    fontSize: 10,
  },
});
