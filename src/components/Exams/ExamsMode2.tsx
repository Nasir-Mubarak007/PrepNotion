import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useMemo, useRef, useCallback } from "react";
import ExamModeHeader from "../ExamModeHeader";
// import { FlatList } from "react-native";
import { Button, Chip, Dialog, List, Portal } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheets from "../BottomSheets";

// type navigation= any;

const Confirmation = ({
  visible,
  onCancel,
  onStart,
  navigation,
  hour,
  min,
  year,
  data,
}: {
  visible: any;
  onCancel: any;
  onStart: any;
  navigation: any;
  hour: any;
  min: any;
  year: any;
  data: any;
}) => {
  const time = `${hour}H : ${min}Mins`;
  console.log(time);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title style={{ textAlign: "center" }}>
          Exam Summary
        </Dialog.Title>
        <Dialog.Content>
          <View style={{ gap: 20 }}>
            <View style={{ gap: 7 }}>
              <Text style={styles.coloredTitle}>Subjects</Text>
              <Text>{data.join(" | ")}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 123 }}>
              <View style={{ gap: 7 }}>
                <Text style={styles.coloredTitle}>Year:</Text>
                <Text>{year}</Text>
              </View>
              <View style={{ gap: 7 }}>
                <Text style={styles.coloredTitle}>Time:</Text>
                <Text>{time}</Text>
              </View>
            </View>
          </View>
        </Dialog.Content>
        <Dialog.Actions style={{ justifyContent: "center" }}>
          <Button
            onPress={onCancel}
            style={{
              height: 38,
              width: 82,
            }}
          >
            Cancel
          </Button>

          <Button
            mode="contained"
            onPress={onStart}
            style={{
              height: 38,
              width: 82,
              borderRadius: 5,
              backgroundColor: "orange",
            }}
          >
            Start
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const ExamsMode2 = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  function handleSave() {
    setVisible(true);
  }
  function handleCancel() {
    setVisible(false);
  }

  const snapPoint = useMemo(() => ["40%", "49%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRef2 = useRef<BottomSheet>(null);
  const bottomSheetRef3 = useRef<BottomSheet>(null);

  const closeSheet = () => {
    bottomSheetRef.current?.close();
    bottomSheetRef2.current?.close();
    bottomSheetRef3.current?.close();
  };
  const openSheet = () => {
    bottomSheetRef.current?.expand();
  };
  const openSheet2 = () => {
    bottomSheetRef2.current?.expand();
  };
  const openSheet3 = () => {
    bottomSheetRef3.current?.expand();
  };
  const data = useMemo(
    () =>
      Array(6)
        .fill(11)
        .map((_, i) => i + 1),
    []
  );

  const Minutes = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  const Years = [
    "2003/2004",
    "2004/2005",
    "2005/2006",
    "2007/2008",
    "2008/2009",
    "2009/2010",
    "2010/2011",
    "2011/2012",
    "2012/2013",
    "2013/2014",
    "2014/2015",
    "2015/2016",
    "2016/2017",
    "2017/2018",
    "2019/2020",
    "2020/2021",
    "2021/2022",
  ];

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <List.Item
          title={item}
          onPress={() => {
            closeSheet();
            setHour(item);
          }}
        />
      </View>
    ),
    []
  );

  const renderYear = useCallback(
    ({ item }) => (
      <View>
        <List.Item
          title={item}
          onPress={() => {
            closeSheet();
            setYear(item);
          }}
        />
      </View>
    ),
    []
  );

  const selected = route.params.selected;
  const title = route.params.title;
  return (
    <View style={{ gap: 20, flex: 1 }}>
      <ExamModeHeader navigation={navigation} route={route} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ gap: 20, marginHorizontal: 16, flex: 1 }}>
          <View style={styles.subjects}>
            <Text style={styles.title}>Selected Subjects</Text>
            {/* <FlatList
          data={selected}
          renderItem={({ item }) => (
            <Chip
              style={styles.chip}
              mode="outlined"
              onPress={() => alert("Howdy")}
            >
              {item}
              </Chip>
              )}
          horizontal
          contentContainerStyle={{ gap: 10, paddingEnd: 59 }}
          showsHorizontalScrollIndicator={false}
        /> */}

            <ScrollView
              showsVerticalScrollIndicator={false}
              // style={{ marginBottom: 9 }}
              contentContainerStyle={{ paddingBottom: 50 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 9,
                }}
              >
                {selected.map((item: any, index: any) => {
                  const [value, setValue] = useState(false);

                  return (
                    <Chip
                      key={index}
                      style={styles.chip}
                      mode="outlined"
                      selected={value ? true : false}
                      onPress={() => setValue(!value)}
                    >
                      {item}
                    </Chip>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          <View style={{ gap: 11 }}>
            <Text style={styles.title}>Duration</Text>

            <View style={{ flexDirection: "row", gap: 32 }}>
              <List.Accordion
                title={hour ? hour : "H"}
                onPress={openSheet}
                style={styles.drop}
              >
                {/* <ScrollView
                style={{ height: 40, backgroundColor: "white" }}
                // showsVerticalScrollIndicator={false}
              >
                <List.Item title="1" onPress={() => setHour("1")} />
                <List.Item title="2" onPress={() => setHour("2")} />
                <List.Item title="3" onPress={() => setHour("3")} />
                <List.Item title="4" onPress={() => setHour("4")} />
                <List.Item title="5" onPress={() => setHour("5")} />
                <List.Item title="6" onPress={() => setHour("6")} />
                <List.Item title="7" onPress={() => setHour("7")} />
                <List.Item title="8" onPress={() => setHour("8")} />
                <List.Item title="9" onPress={() => setHour("9")} />
                <List.Item title="10" onPress={() => setHour("10")} />
                <List.Item title="11" onPress={() => setHour("11")} />
                <List.Item title="12" onPress={() => setHour("12")} />
              </ScrollView> */}
              </List.Accordion>

              <List.Accordion
                title={min ? min : "M"}
                style={styles.drop}
                onPress={openSheet2}
              >
                {/* <ScrollView
                  style={{ height: 40, backgroundColor: "white" }}
                  // showsVerticalScrollIndicator={false}
                >
                  <List.Item title="00" onPress={() => setMin("00")} />
                  <List.Item title="05" onPress={() => setMin("05")} />
                  <List.Item title="10" onPress={() => setMin("10")} />
                  <List.Item title="15" onPress={() => setMin("15")} />
                  <List.Item title="20" onPress={() => setMin("20")} />
                  <List.Item title="25" onPress={() => setMin("25")} />
                  <List.Item title="30" onPress={() => setMin("30")} />
                  <List.Item title="35" onPress={() => setMin("35")} />
                  <List.Item title="40" onPress={() => setMin("40")} />
                  <List.Item title="45" onPress={() => setMin("45")} />
                  <List.Item title="50" onPress={() => setMin("50")} />
                  <List.Item title="55" onPress={() => setMin("55")} />
                </ScrollView> */}
              </List.Accordion>
            </View>
          </View>

          <View style={{ marginTop: 20, marginBottom: 37, gap: 11 }}>
            <Text style={styles.title}>Select Year</Text>

            <List.Accordion
              title={year ? year : "2002/2003"}
              onPress={openSheet3}
              style={{ borderWidth: 1, borderRadius: 5 }}
            >
              {/* <ScrollView style={{ height: 40, backgroundColor: "white" }}>
                <List.Item
                  title="2003/2004"
                  onPress={() => setYear("2003/2004")}
                />
                <List.Item
                  title="2002/2003"
                  onPress={() => setYear("2002/2003")}
                />
                <List.Item
                  title="2005/2006"
                  onPress={() => setYear("2005/2006")}
                />
                <List.Item
                  title="2007/2008"
                  onPress={() => setYear("2007/2008")}
                />
                <List.Item
                  title="2009/2010"
                  onPress={() => setYear("2009/2010")}
                />
              </ScrollView> */}
            </List.Accordion>
          </View>

          <View>
            <Button
              mode="contained"
              onPress={handleSave}
              style={{ backgroundColor: "black", borderRadius: 6 }}
            >
              Proceed
            </Button>
          </View>
        </View>
        <Confirmation
          onStart={() =>
            navigation.navigate("", {
              hour: hour,
              min: min,
              year: year,
              data: selected,
              title: title + " " + year,
            })
          }
          onCancel={handleCancel}
          visible={visible}
          hour={hour}
          min={min}
          year={year}
          data={selected}
        />
      </ScrollView>

      <BottomSheets
        ref={bottomSheetRef2}
        data={Minutes}
        renderItem={({ item }) => (
          <List.Item
            title={item}
            onPress={() => {
              closeSheet();
              setMin(item);
            }}
          />
        )}
      />
      <BottomSheets ref={bottomSheetRef} data={data} renderItem={renderItem} />
      <BottomSheets
        ref={bottomSheetRef3}
        data={Years}
        renderItem={renderYear}
      />
    </View>
  );
};

export default ExamsMode2;

const styles = StyleSheet.create({
  chip: {
    minWidth: 38,
    height: 40,

    justifyContent: "center",
  },
  subjects: {
    height: 130,
    width: "100%",
    gap: 11,
  },
  drop: {
    height: 60,
    width: 99,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  coloredTitle: {
    color: "#DE6637",
    fontSize: 16,
    fontWeight: "500",
  },
});
