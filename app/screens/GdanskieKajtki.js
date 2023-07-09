import React, { useState } from "react";
import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const GdanskieKajtki = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const zoomAnimatedValue = React.useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      {/* <Text>Łaziki Gdańskie</Text> */}
      <View style={styles.box}>
        <ReactNativeZoomableView
          maxZoom={30}
          initialZoom={1.5}
          // Give these to the zoomable view so it can apply the boundaries around the actual content.
          // Need to make sure the content is actually centered and the width and height are
          // measured when it's rendered naturally. Not the intrinsic sizes.
          // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
          // Therefore, we'll feed the zoomable view the 300x100 size.
          contentWidth={400}
          contentHeight={300}
          panBoundaryPadding={50}
          zoomAnimatedValue={zoomAnimatedValue}
        >
          <View style={styles.contents}>
            <Image
              style={styles.img}
              source={require("../../assets/mapaGdansk.png")}
            />
            <TouchableOpacity
              style={styles.hint(336.5, 8.8)}
              onPress={() =>
                modalVisible ? setModalVisible(false) : setModalVisible(true)
              }
            ></TouchableOpacity>
            {modalVisible ? (
              <View style={styles.hint2(346.5, 18.8)}>
                <Text style={styles.textStyle}>2137</Text>
              </View>
            ) : null}

            <TouchableOpacity
              style={styles.hint(389.8, 31.5)}
              onPress={() =>
                modalVisible2 ? setModalVisible2(false) : setModalVisible2(true)
              }
            ></TouchableOpacity>
            {modalVisible2 ? (
              <View style={styles.hint2(399.8, 41.5)}>
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
    backgroundColor: "#ead4ab",
  },
  contents: {
    flex: 1,
    alignSelf: "stretch",
  },
  box: {
    borderWidth: 1,
    flexShrink: 1,
    height: "100%",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  hint: (top, left) => {
    return {
      position: "absolute",
      top: top,
      left: left,
      backgroundColor: "#78543a",
      borderRadius: 50,
      padding: 6,
      opacity: 0.4,
    };
  },
  hint2: (top, left) => {
    return {
      position: "absolute",
      top: top,
      left: left,
      backgroundColor: "#78543a",
      borderRadius: 3,
      padding: 4,
    };
  },
  textStyle: {
    fontSize: 4,
  },
});

export default GdanskieKajtki;
