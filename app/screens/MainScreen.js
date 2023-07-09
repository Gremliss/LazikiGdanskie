import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("GdanskieKajtki")}
      >
        <Text style={styles.lightHeader}>Gdańskie Kajtki</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: "#2f3237",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 30,
    zIndex: 1,
  },
  containerBottom: {
    paddingBottom: 40,
    paddingTop: 40,
    backgroundColor: "#2f3237",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 30,
    zIndex: 1,
  },
  mainCurrencyContainer: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 10,
    color: "#E7F6F2",
  },
  checkIcon: {
    justiftyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 20,
  },
  lightHeader: {
    fontSize: 25,
    textAlign: "center",
    color: "#E7F6F2",
  },
  boldHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E7F6F2",
  },
  debtorContainer: {
    backgroundColor: "#557174",
    flexDirection: "row",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
    margin: 4,
    elevation: 2,
  },
  boldText: {
    fontSize: 20,
    color: "#E7F6F2",
    paddingLeft: 5,
    flex: 1,
  },
  addBtn: {
    position: "absolute",
    right: 25,
    bottom: 20,
    zIndex: 1,
    backgroundColor: "#9DAD7F",
  },
  deleteBtn: {
    position: "absolute",
    left: 25,
    bottom: 20,
    zIndex: 1,
    backgroundColor: "#BB6464",
  },
  closeBtn: {
    position: "absolute",
    right: 25,
    bottom: 20,
    zIndex: 1,
    backgroundColor: "#9D9D9D",
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: "#2f3237",
  },
});

export default MainScreen;
