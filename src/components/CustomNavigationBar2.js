import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

const CustomNavigationBar = ({
  navigation,
  route,
  options,
  back,
  style,
}) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={[styles.Header, style]}>
      {back ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          style={{ borderRadius: 5, borderWidth: 1, width: 30, height: 30 }}
        />
      ) : null}
      <Appbar.Content title={title} />

    </Appbar.Header>
  );
};

export default CustomNavigationBar;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#D9D9D9",
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    height: 100,
  },
});
