import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { forwardRef, useMemo, useState } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import * as Speech from "expo-speech";

import IconButton from "./ui/IconButton";

interface Props {
  passage: string;
  data: any;
  renderItem: any;
  close: any;
}
type Ref = BottomSheet;

const Modal = forwardRef<Ref, Props>((props, ref) => {
  const snapPoint = useMemo(() => ["62%"], []);

  const [ispreping, setIspreping] = useState(false);

  const handleRead = () => {
    setIspreping(true);
    const option = {
      language: "en",
      pitch: 1,
      rate: 0.6,
      // volume: 1,
    };

    const selection = `${props.passage} `;

    Speech.speak(selection, option);

    setIspreping(false);
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoint}
      // enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      style={{ flexGrow: 1 }}
    >
      <View style={{ flex: 1 }}>
        {/* <Image source={''} style={()=>{}}/> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 9,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 30,
            }}
            onPress={() => props.close()}
          >
            <Text>X</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: "400", fontSize: 20 }}>Passage</Text>

          <TouchableOpacity
            style={{
              width: 30,
            }}
            activeOpacity={0.4}
            onPress={() => {
              handleRead(), console.warn("tapped");
            }}
          >
            {ispreping ? (
              <ActivityIndicator size={"small"} />
            ) : (
              <IconButton
                icon={"volume-high-sharp"}
                size={24}
                color={"black"}
                onPress={() => {
                  handleRead(), console.warn("tapped");
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        <BottomSheetScrollView>
          {props.passage && <Text>{props.passage}</Text>}
          {props.data && (
            <BottomSheetFlatList
              data={props.data}
              renderItem={props.renderItem}
              keyExtractor={(i: any) => i}
            />
          )}
        </BottomSheetScrollView>
      </View>
    </BottomSheet>
  );
});

export default Modal;

const styles = StyleSheet.create({});
