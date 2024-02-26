import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  largeHeading: {
    fontSize: "6rem",
  },
  italicFont: {
    fontStyle: "italic",
  },
  listContainer: {
    flexGrow: 0,
    flexShrink: 0,
  },
  headingColor: {
    ...Platform.select({
      android: {
        color: "blue",
      },
      ios: {
        color: "yellow",
      },
      default: {
        color: "red",
      },
    }),
  },
});
export default styles;
