import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerWrapper: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  imageHolder: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  headerTitles: {
    paddingLeft: 10,
    flexGrow: 1,
  },
  headerTxtMain: {
    fontSize: SIZES.xSmall,
    fontWeight: "bold",
    color: COLORS.darkWhite,
  },
  locationWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTxtSub: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  icon: {
    fontSize: 20,
    color: COLORS.primary,
    marginLeft: 5,
  },
  userIcon: {
    color: COLORS.white,
    fontSize: 20,
    backgroundColor: COLORS.xLightDark,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
  },
});
