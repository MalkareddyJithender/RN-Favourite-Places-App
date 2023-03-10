import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Preview({ children }) {
  return <View style={styles.preview}>{children}</View>;
}

export default Preview;

const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    overflow: "hidden",
  },
});
