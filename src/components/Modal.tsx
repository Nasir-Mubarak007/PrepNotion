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
import Data from "./categories/pages/Data";
import { Colors } from "../constants/Colors";

interface Props {
  data: any;
  renderItem: any;
  subject: any;
  currQuestion: any;
}
type Ref = BottomSheet;

const Modal = forwardRef<Ref, Props>((props, ref) => {
  const snapPoint = useMemo(() => ["62%"], []);

  /**
   * Calculates the number of questions that have been answered so far
   * by iterating through the questions data and incrementing a counter
   * for each question that has an answer.
   *
   * @param props - The component props containing the questions data
   * @returns The number of questions answered so far
   */
  const questionTouched = useMemo(() => {
    let answered = props.data.reduce(
      (sum: number, question: { answer: any }) => {
        if (question.answer) {
          return sum + 1;
        }
        console.log(sum);
        return sum;
      },
      0
    );
    return answered;
  }, [props.currQuestion.answer]);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoint}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      style={{ flexGrow: 1, borderRadius: 20 }}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.header}>
          <Text>{props.subject}</Text>

          <Text style={{ fontWeight: "400", fontSize: 20 }}>
            <Text style={{ color: Colors.Primary }}>{questionTouched}</Text> /
            {props.data.length}
          </Text>
        </View>

        {/* /** * Conditionally renders a BottomSheetFlatList component * if
        props.data is passed to this component via Question page. * Passes
        props.data and props.renderItem to BottomSheetFlatList. */}

        {props.data && (
          <BottomSheetFlatList
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={(i: any, indx: any) => indx}
            contentContainerStyle={{ gap: 12 }}
            numColumns={8}
          />
        )}
      </View>
    </BottomSheet>
  );
});

export default Modal;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
