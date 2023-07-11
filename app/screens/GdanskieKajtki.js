import React, { useState } from "react";
import {
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import colors from "../misc/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GdanskieKajtki = (props) => {
  const [hintVisible, setHintVisible] = useState(false);
  const [hintVisible2, setHintVisible2] = useState(false);
  const zoomAnimatedValue = React.useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ReactNativeZoomableView
          maxZoom={30}
          initialZoom={1.0}
          contentWidth={400}
          contentHeight={300}
          panBoundaryPadding={50}
          zoomAnimatedValue={zoomAnimatedValue}
        >
          <View style={styles.contents}>
            <Image
              style={styles.img}
              source={require("../../assets/Gdańskie_Kajtki_mapa.png")}
            />
            <TouchableOpacity
              style={styles.hintButton(
                windowHeight * 0.436,
                windowWidth * 0.022
              )}
              onPress={() =>
                hintVisible ? setHintVisible(false) : setHintVisible(true)
              }
            ></TouchableOpacity>
            {hintVisible ? (
              <View
                style={styles.hint(windowHeight * 0.446, windowWidth * 0.052)}
              >
                <Text style={styles.textStyle}>2137</Text>
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.hintButton(
                windowHeight * 0.5045,
                windowWidth * 0.0815
              )}
              onPress={() =>
                hintVisible2 ? setHintVisible2(false) : setHintVisible2(true)
              }
            ></TouchableOpacity>
            {hintVisible2 ? (
              <View
                style={styles.hint(windowHeight * 0.5145, windowWidth * 0.1115)}
              >
                <Text style={styles.textStyle}>Gremlifokkinsobotopod</Text>
              </View>
            ) : null}
          </View>
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.LIGHT,
  },
  contents: {
    flex: 1,
    alignSelf: "stretch",
  },
  box: {
    // borderWidth: 1,
    flexShrink: 1,
    height: "100%",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  hintButton: (top, left) => {
    return {
      position: "absolute",
      top: top,
      left: left,
      backgroundColor: colors.BROWN,
      borderRadius: 50,
      padding: 6,
      opacity: 0.4,
    };
  },
  hint: (top, left) => {
    return {
      position: "absolute",
      top: top,
      left: left,
      backgroundColor: colors.LIGHT,
      borderRadius: 3,
      padding: 4,
      borderWidth: 0.5,
      borderColor: colors.BROWN,
    };
  },
  textStyle: {
    fontSize: 4,
    color: colors.DARK,
  },
});

export default GdanskieKajtki;
