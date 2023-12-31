import { useState } from "react";
import {ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import FlatButton from "../ui/FlatButton";
import OutlinedBtn from "../ui/OutlinedBtn";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { db, FIREBASE_AUTH, FIREBASE_AUTH2 } from "../../firebase";
import {  doc, setDoc } from "firebase/firestore";

const auth = FIREBASE_AUTH;
const user = auth.currentUser;

const SigupSchema = Yup.object({
  username: Yup.string()
    .trim("cannot be empty")
    .required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("pasword is required")
    .trim("Cannot be empty")
    .min(7, "Password must be atleast 7 characters"),
  confirmPassword: Yup.string()
    .required("this field is required")
    .min(7, "Password must be atleast 7 characters"),
});

const SignUpForm = () => {
  const Auth = FIREBASE_AUTH2;

  const googleProvider = new GoogleAuthProvider();

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function showHandler() {
    visible ? setVisible(false) : setVisible(true);
  }

  const signUpWithGoogle = () => {
    signInWithPopup(Auth, googleProvider)
      .then((response) => {
        alert("SignUp Successful");
        console.log(response.user);
      })
      .catch((error) => {
        // alert(error.message);
        console.log(error.message);
      });
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        const { email, password } = values;
        const userData = {
          email: values.email,
          password: values.password,
          displayName: values.username,
          points: 200,
          userType:'user'
        };
        setLoading(true);
        try {
          const response = createUserWithEmailAndPassword(
            auth,
            email,
            password
          ).then((response) => {
            const docRef = doc(db, "users", auth.currentUser.uid);
            setDoc(docRef, { ...userData, id: auth.currentUser.uid });
            console.log(response.user, response.user.uid);
          });

          // console.log(response.user, response.uid);
          alert("your account is created sucessfully.");
        } catch (error) {
          console.log("something went wrong", error.message);
        } finally {
          setLoading(false);
        }
      }}
      validationSchema={SigupSchema}
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
        <View>
          <View style={styles.headings}>
            <Text style={styles.title}>Create a New Account 🙂</Text>
            <Text style={styles.instructions}>
              Create an account to start preparing for your upcoming exams
            </Text>
          </View>

          <KeyboardAvoidingView behavior="padding">
            <Input
              placeholder={"Username"}
              onUpdateValue={handleChange("username")}
              contentType={"username"}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {errors.username && (
              <Text style={{ color: "red" }}>{errors.username}</Text>
            )}

            <Input
              placeholder={"Email"}
              onUpdateValue={handleChange("email")}
              contentType={"emailAddress"}
              value={values.email}
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}

            <View style={styles.passwordContainer}>
              <View style={styles.input}>
                <View style={{ width: "100%" }}>
                  <Input
                    placeholder={"Password"}
                    onUpdateValue={handleChange("password")}
                    secure={visible ? false : true}
                    contentType={"password"}
                    value={values.password}
                  />
                </View>

                <View style={{ position: "absolute", right: 9, top: 12 }}>
                  <IconButton
                    icon={visible ? "eye-outline" : "eye-off-outline"}
                    color={"rgba(0, 0, 0, 0.6)"}
                    size={20}
                    onPress={showHandler}
                  />
                </View>
              </View>
            </View>
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}

            <View style={styles.passwordContainer}>
              <View style={styles.input}>
                <View style={{ width: "100%" }}>
                  <Input
                    placeholder={"Confirm Password"}
                    onUpdateValue={handleChange("confirmPassword")}
                    secure={visible ? false : true}
                    contentType={"password"}
                    value={values.confirmPassword}
                  />
                </View>

                <View style={{ position: "absolute", right: 9, top: 12 }}>
                  <IconButton
                    icon={visible ? "eye-outline" : "eye-off-outline"}
                    color={"rgba(0, 0, 0, 0.6)"}
                    size={20}
                    onPress={showHandler}
                  />
                </View>
              </View>
            </View>
            {errors.confirmPassword && (
              <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
            )}
          </KeyboardAvoidingView>

          {loading ? (
            <ActivityIndicator size={"large"} color="black" />
          ) : (
            <View style={styles.btn}>
              <Button
                shade={"#1B1C1E"}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                Create Account
              </Button>
              <View style={{ marginVertical: 9 }}>
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Or
                </Text>
              </View>
              <OutlinedBtn
                color={"yellow"}
                icon={"globe-sharp"}
                size={22}
                onPress={signUpWithGoogle}
              >
                Continue with Google
              </OutlinedBtn>
            </View>
          )}

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text>Already had an account? </Text>
            <FlatButton
              shade={"#009BFF"}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </FlatButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
  },
  headings: {
    marginBottom: 23,
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
    alignItems: "center",
    maxWidth: "100%",
  },
  thumb: {
    borderRadius: 5,
    backgroundColor: "lime",
    borderColor: "orange",
    borderWidth: 0.5,
    width: 35,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
