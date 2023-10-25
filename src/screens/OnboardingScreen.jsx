import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );
  const Dot = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

    return (
      <View
        style={{
          width: 5,
          height: 5,
          marginHorizontal: 3,
          borderRadius: 9,
          backgroundColor,
        }}
      ></View>
    );
  };
  const Skip = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 16 }} {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dot}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#D7C8C2",
          image: <Image source={require("../assets/images/exam.png")} />,
          title:
            "Get access to thousands of questions and answers across many exams",
          subtitle: "",
          subTitleStyles: { display: "none" },
        },
        {
          backgroundColor: "#CEEACA",
          image: (
            <Image source={require("../assets/images/no-connection.png")} />
          ),
          title:
            "No Internet, No Problem!! Access the app and take tests offline",
          subtitle: "",
          subTitleStyles: { display: "none" },
        },
        {
          backgroundColor: "#D6C4EE",
          image: <Image source={require("../assets/images/test.png")} />,
          title: "Real time exam experience with the Exam Mode",
          subtitle: "",
          subTitleStyles: { display: "none" },
        },
      ]}
    />
  );
};

export default OnboardingScreen;
