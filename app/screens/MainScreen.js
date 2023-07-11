import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../misc/colors";

const MainScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GdanskieKajtki")}
        >
          <Text style={styles.buttonText}>Gdańskie Kajtki</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.LIGHT,
  },
  button: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.DARK,
    borderStyle: "dashed",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.DARK,
  },
});

export default MainScreen;
