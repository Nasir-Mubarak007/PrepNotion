import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useMemo } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

interface Props {
  data: any;
  renderItem: any;
}
type Ref = BottomSheet;

const BottomSheets = forwardRef<Ref, Props>((props, ref) => {
  const snapPoint = useMemo(() => ["49%"], []);

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
        <BottomSheetFlatList
          data={props.data}
          renderItem={props.renderItem}
          keyExtractor={(i: any) => i}
        />
      </View>
    </BottomSheet>
  );
});

export default BottomSheets;

const styles = StyleSheet.create({});
