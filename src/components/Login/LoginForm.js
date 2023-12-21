import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Google from "expo-auth-session/providers/google";


import Input from "../Input";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import FlatButton from "../ui/FlatButton";
import OutlinedBtn from "../ui/OutlinedBtn";
import { ActivityIndicator } from "react-native-paper";
// import { async } from "@firebase/util";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required()
    .trim("Cannot be empty")
    .min(7, "Password must be atleast 7 characters"),
});

const LoginForm = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "424965898810-5cclorm2m955enc51951816b1ftaqspg.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  function showHandler() {
    visible ? setVisible(false) : setVisible(true);
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        const { email, password } = values;
        setLoading(true);
        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          // console.log(response);
          Alert.alert("Logged In successfully");
        } catch (error) {
          Alert.alert(`something went wrong`, error.message);
        } finally {
          setLoading(false);
        }
      }}
      validationSchema={loginSchema}
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
            <Text style={styles.title}>Welcome Back 👋</Text>
            <Text style={styles.instructions}>
              Login to continue preparations for your upcoming exams
            </Text>
          </View>

          <Input
            placeholder={"Email or Username"}
            onUpdateValue={handleChange("email")}
            contentType={"emailAddress"}
            value={values.email}
          />
          {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}

          <View style={styles.passwordContainer}>
            <View style={styles.input}>
              <View style={{ width: "100%" }}>
                <Input
                  placeholder={"Password"}
                  onBlur={handleBlur("password")}
                  onUpdateValue={handleChange("password")}
                  secure={visible ? false : true}
                  contentType={"password"}
                  value={values.password}
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
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}

          <FlatButton
            shade={"black"}
            onPress={() => navigation.navigate("Forgot")}
          >
            Forgot Password?
          </FlatButton>

          {loading ? (
            <ActivityIndicator size={"large"} color="black" />
          ) : (
            <View style={styles.btnz}>
              <Button shade={"#1B1C1E"} onPress={handleSubmit}>
                Login
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
                onPress={() => promptAsync()}
              >
                Signin with Google
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
            <Text>Don't have an account? </Text>
            <FlatButton
              shade={"#009BFF"}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </FlatButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  btnz: {
    marginVertical: 35,
  },
  headings: {
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    flexDirection: "row",
  },
  instructions: { fontSize: 19 },
  title: {
    fontSize: 26,
    fontWeight: "800",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "97%",
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
