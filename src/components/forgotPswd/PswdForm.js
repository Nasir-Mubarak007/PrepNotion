import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import FlatButton from "../ui/FlatButton";
import OutlinedBtn from "../ui/OutlinedBtn";

const PasswordSchema = Yup.object().shape({
  Password: Yup.string().required().min(7, "Password must be at least 7"),
});

const PswrdForm = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  function showHandler() {
    visible ? setVisible(false) : setVisible(true);
  }
  return (
    <Formik
      initialValues={{ Password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={PasswordSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View>
            <View style={styles.headings}>
              <Text style={styles.title}>Welcome Hydraxx 👋</Text>
              <Text style={styles.instructions}>
                Login to continue preparations for your upcoming exams
              </Text>
            </View>

            <View style={styles.passwordContainer}>
              <View style={styles.input}>
                <View style={{ width: "100%" }}>
                  <Input
                    placeholder={"Password"}
                    onUpdateValue={handleChange("Password")}
                    onBlur={handleBlur("Password")}
                    secure={visible ? false : true}
                    contentType={"password"}
                    value={values.Password}
                  />
                </View>

                <View style={{ position: "absolute", right: 9, top: 12 }}>
                  <IconButton
                    icon={visible ? "eye" : "eye-off"}
                    color={"rgba(0, 0, 0, 0.6)"}
                    size={20}
                    onPress={showHandler}
                  />
                </View>
              </View>
              <View style={styles.thumb}>
                <IconButton icon="finger-print" color="black" size={22} />
              </View>
            </View>
            {errors.Password && (
              <Text style={{ color: "red" }}>{errors.Password}</Text>
            )}

            <FlatButton onPress={() => navigation.navigate("Forgot")}>
              Forgot Password?
            </FlatButton>

            <View style={styles.btn}>
              <Button
                shade={"#1B1C1E"}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                Login
              </Button>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  fontSize: 19,
                  fontWeight: "600",
                }}
              >
                Or
              </Text>
              <OutlinedBtn color={"yellow"} icon={"globe"} onPress={() => {}}>
                Continue with Google
              </OutlinedBtn>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text>Don't have an account? </Text>
              <FlatButton
                shade={"#009BFF"}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </FlatButton>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default PswrdForm;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 35,
    marginBottom: 30,
  },
  headings: {
    marginBottom: 30,
  },
  input: {
    flex: 1,
  },
  instructions: { fontSize: 19 },
  title: {
    fontSize: 26,
    fontWeight: "800",
  },
  passwordContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
  },
  thumb: {
    borderRadius: 5,
    backgroundColor: "#009BFFB2",
    borderColor: "#009BFF1A",
    borderWidth: 1,
    width: 39,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
